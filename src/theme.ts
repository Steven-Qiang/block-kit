import type { Theme } from './platforms/types';

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.style.setProperty('--color-primary', theme.primary);
  root.style.setProperty('--color-primary-hover', theme.primaryHover);
  root.style.setProperty('--color-secondary', theme.secondary);
  root.style.setProperty('--color-secondary-hover', theme.secondaryHover);
  root.style.setProperty('--color-success', theme.success);
  root.style.setProperty('--color-error', theme.error);
  root.style.setProperty('--color-warning', theme.warning);
  root.style.setProperty('--color-info', theme.info);
  root.style.setProperty('--color-muted', theme.muted);
  root.style.setProperty('--color-header-bg', theme.headerBg);
  root.style.setProperty('--color-header-text', theme.headerText);

  // 抖音特殊处理：添加边框以提高对比度
  if (theme.headerBg === '#1f1f1f') {
    root.style.setProperty('--float-ball-border', '2px solid #fff');
  } else {
    root.style.setProperty('--float-ball-border', 'none');
  }
}
