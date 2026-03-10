<template>
  <floating-ball :title="title" :default-expanded="isBlacklistPage">
    <blacklist-manager v-if="isBlacklistPage" />
    <template-manager v-else-if="showTemplateManager" />
    <blocking-tool v-else />
    <div v-if="!isBlacklistPage" class="nav-section">
      <button
        class="nav-btn"
        title="切换到拉黑工具页面"
        :class="{ active: !showTemplateManager }"
        @click="showTemplateManager = false"
      >
        拉黑工具
      </button>
      <button
        class="nav-btn"
        title="切换到预设管理页面"
        :class="{ active: showTemplateManager }"
        @click="showTemplateManager = true"
      >
        预设管理
      </button>
      <a
        v-if="currentPlatform?.name === 'bilibili'"
        target="_blank"
        href="https://account.bilibili.com/account/blacklist"
        class="nav-btn"
        title="黑名单管理"
      >
        黑名单管理
      </a>
    </div>
    <div class="footer">
      <div class="version">
        v{{ pkg.version }}
      </div>
      <div class="copyright">
        © {{ pkg.author }}
      </div>
      <a :href="pkg.repository.url" target="_blank" class="github-link">
        <img :src="logoGithub" class="github-icon" alt="github">
        GitHub
      </a>
    </div>
  </floating-ball>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import pkg from '../package.json';
import logoGithub from './assets/github.svg';
import BlacklistManager from './components/BlacklistManager.vue';
import BlockingTool from './components/BlockingTool.vue';
import FloatingBall from './components/FloatingBall.vue';
import TemplateManager from './components/TemplateManager.vue';
import { getCurrentPlatform } from './platforms';
import { applyTheme } from './theme';

const currentPlatform = getCurrentPlatform();
const showTemplateManager = ref(false);
const isBlacklistPage = computed(() => window.location.href.includes('account.bilibili.com/account/blacklist'));

const title = computed(() =>
  isBlacklistPage.value
    ? '黑名单管理'
    : showTemplateManager.value
      ? '预设管理'
      : `${currentPlatform?.displayName || '多平台'}拉黑工具`
);

onMounted(() => {
  if (currentPlatform?.theme) {
    applyTheme(currentPlatform.theme);
  }
});
</script>

<style scoped>
.footer {
  padding: 8px 16px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: #999;
}

.version {
  font-weight: bold;
}

.copyright {
  flex: 1;
  text-align: center;
}

.github-link {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.2s;
}

.github-link:hover {
  color: var(--color-primary-hover);
}

.github-icon {
  width: 14px;
  height: 14px;
}

.nav-section {
  padding: 8px 16px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 4px;
}

.nav-btn {
  flex: 1;
  padding: 6px 8px;
  font-size: 11px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-btn:hover {
  background: #ebebeb;
}

.nav-btn.active {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}
</style>
