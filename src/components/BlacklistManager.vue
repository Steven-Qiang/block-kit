<template>
  <div class="content">
    <div class="form-group">
      <button class="btn-start" title="开始清理黑名单中的所有用户" :disabled="isRunning" @click="startCleanup">
        清理黑名单
      </button>
    </div>
    <div class="form-group">
      <button class="btn-start" title="导出黑名单为 CSV 文件" :disabled="isRunning" @click="exportBlacklist">
        导出黑名单
      </button>
    </div>
    <div class="form-group">
      <button class="btn-stop" title="停止清理任务" :disabled="!isRunning" @click="stopCleanup">
        停止清理
      </button>
    </div>
    <log-viewer ref="logViewer" filename="黑名单管理日志" log-key="manager-bilibili" />
    <div class="counter">
      已移除：
      <span class="count">{{ removedCount }}</span>
      个用户
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BilibiliPlatform } from '../platforms';
import { ref, useTemplateRef } from 'vue';
import { getCurrentPlatform } from '../platforms';
import { sleep } from '../utils';
import LogViewer from './LogViewer.vue';

const isRunning = ref(false);
const isStopped = ref(false);
const removedCount = ref(0);
const logViewerRef = useTemplateRef('logViewer');
const platform = getCurrentPlatform() as BilibiliPlatform;

function addLog(msg: string, color = '#333') {
  logViewerRef.value?.addLog(msg, color);
}

async function startCleanup() {
  isRunning.value = true;
  isStopped.value = false;
  removedCount.value = 0;
  logViewerRef.value?.clearLogs();

  addLog('开始清理黑名单...', '#3498db');

  let page = 1;
  let totalRemoved = 0;

  while (!isStopped.value) {
    const res = await fetch(
      `https://api.bilibili.com/x/relation/blacks?re_version=0&pn=${page}&ps=50&jsonp=jsonp&web_location=333.33`,
      {
        credentials: 'include',
      }
    );
    const data = await res.json();
    const list = data.data?.list || [];

    if (list.length === 0) {
      addLog('黑名单已清空', '#27ae60');
      break;
    }

    addLog(`处理第 ${page} 页，共 ${list.length} 个用户`, '#3498db');

    for (const item of list) {
      if (isStopped.value) break;

      if (await platform.removeFromBlacklist(item.mid)) {
        totalRemoved++;
        removedCount.value = totalRemoved;
        addLog(`✓ 移除成功：${item.uname}`, '#27ae60');
      } else {
        addLog(`✗ 移除失败：${item.uname}`, '#e74c3c');
      }
      await sleep(500);
    }

    page++;
    await sleep(1000);
  }

  addLog(`清理完成！共移除 ${totalRemoved} 个用户`, '#3498db');
  isRunning.value = false;
}

async function exportBlacklist() {
  addLog('开始导出黑名单...', '#3498db');

  const blacklist = await platform.fetchBlacklist();

  if (blacklist.length === 0) {
    addLog('黑名单为空', '#f39c12');
    return;
  }

  const csv = ['UID,用户名', ...blacklist.map((u: any) => `${u.uid},${u.name}`)].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', `bilibili_blacklist_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  addLog(`导出完成！共 ${blacklist.length} 个用户`, '#27ae60');
}

function stopCleanup() {
  isStopped.value = true;
  addLog('清理已停止', '#e74c3c');
}
</script>

<style scoped>
@import '../styles/common.css';

.btn-start {
  background: var(--color-primary);
}

.btn-start:hover:not(:disabled) {
  background: var(--color-primary-hover);
}

.count {
  color: var(--color-primary);
}
</style>
