<template>
  <div class="log-container">
    <div class="log-header">
      <span>执行日志</span>
      <div class="log-controls">
        <button
          class="log-control-btn"
          :title="autoScroll ? '关闭自动滚动' : '开启自动滚动'"
          @click="autoScroll = !autoScroll"
        >
          <img :src="autoScroll ? lockSvg : unlockSvg" :alt="autoScroll ? '锁定' : '解锁'">
        </button>
        <button
          class="log-control-btn"
          :title="logExpanded ? '收起日志' : '展开日志'"
          @click="logExpanded = !logExpanded"
        >
          <img :src="logExpanded ? shrinkSvg : expandSvg" :alt="logExpanded ? '收起' : '展开'">
        </button>
        <button class="log-control-btn" title="清除日志" @click="clearLogs">
          <img :src="trashSvg" alt="删除">
        </button>
      </div>
    </div>
    <div ref="logArea" class="log-area" :class="{ expanded: logExpanded }">
      <div v-if="logs.length === 0" class="log-empty">
        等待开始...
      </div>
      <div v-for="(log, i) in logs" :key="i" class="log-item" :style="{ color: log.color }">
        [{{ log.time }}] {{ log.msg }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, useTemplateRef } from 'vue';
import trashSvg from '../assets/ashbin.svg';
import expandSvg from '../assets/fullscreen-expand.svg';
import shrinkSvg from '../assets/fullscreen-shrink.svg';
import lockSvg from '../assets/lock.svg';
import unlockSvg from '../assets/unlock.svg';

interface LogEntry {
  msg: string;
  color: string;
  time: string;
}

interface Props {
  filename?: string;
  logKey?: string;
}

const props = withDefaults(defineProps<Props>(), {
  filename: '日志',
  logKey: 'default',
});

const logs = ref<LogEntry[]>([]);
const logExpanded = ref(false);
const autoScroll = ref(true);
const logAreaRef = useTemplateRef('logArea');

function getLogsKey() {
  return `block-kit-logs-${props.logKey}`;
}

function saveLogs() {
  GM_setValue(getLogsKey(), JSON.stringify(logs.value));
}

function loadLogs() {
  try {
    const saved = GM_getValue(getLogsKey(), null);
    if (saved) {
      logs.value = JSON.parse(saved);
    }
  } catch (error) {
    console.error('Failed to load logs:', error);
  }
}

function addLog(msg: string, color = '#333') {
  const time = new Date().toLocaleTimeString();
  logs.value.push({ msg, color, time });
  saveLogs();

  if (autoScroll.value) {
    nextTick(() => {
      logAreaRef.value?.scrollTo(0, logAreaRef.value.scrollHeight);
    });
  }
}

function clearLogs() {
  logs.value = [];
  saveLogs();
}

defineExpose({
  addLog,
  clearLogs,
  loadLogs,
  logs: logs.value,
});
</script>

<style scoped>
.log-container {
  margin-bottom: 12px;
}

.log-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: #ecf0f1;
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid #bdc3c7;
  font-size: 13px;
  font-weight: 600;
  color: #2c3e50;
}

.log-controls {
  display: flex;
  gap: 4px;
}

.log-control-btn {
  width: auto;
  padding: 4px 6px;
  font-size: 12px;
  background: none;
  border: 1px solid #bdc3c7;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.log-control-btn img {
  width: 16px;
  height: 16px;
  filter: invert(0.4);
}

.log-control-btn:hover {
  background: #d5dbdb;
}

.log-area {
  padding: 10px;
  background: #f5f5f5;
  border-radius: 0 0 4px 4px;
  font-size: 12px;
  color: #666;
  min-height: 60px;
  max-height: 150px;
  overflow-y: auto;
}

.log-area.expanded {
  max-height: 300px;
}

.log-empty {
  color: #999;
}

.log-item {
  margin-bottom: 4px;
}
</style>
