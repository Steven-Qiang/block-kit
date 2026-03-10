# Block Kit - 批量拉黑工具

一个功能强大的多平台油猴脚本，支持通过关键词搜索并批量拉黑营销账号和垃圾用户。

[![Release](https://github.com/Steven-Qiang/block-kit/actions/workflows/release.yml/badge.svg)](https://github.com/Steven-Qiang/block-kit/actions/workflows/release.yml)
[![License](https://img.shields.io/github/license/Steven-Qiang/block-kit)](./LICENSE)
[![Version](https://img.shields.io/github/package-json/v/Steven-Qiang/block-kit)](./package.json)

<div align="center">
  <img src="https://github.com/Steven-Qiang/block-kit/blob/main/assets/screenshot.douyin.png?raw=true" width="45%" alt="抖音拉黑界面" />
  <img src="https://github.com/Steven-Qiang/block-kit/blob/main/assets/screenshot.bilibili.png?raw=true" width="45%" alt="B站拉黑界面" />
</div>

<div align="center">
  <img src="https://github.com/Steven-Qiang/block-kit/blob/main/assets/screenshot.template.png?raw=true" width="45%" alt="预设管理界面" />
  <img src="https://github.com/Steven-Qiang/block-kit/blob/main/assets/screenshot.block-manager.png?raw=true" width="45%" alt="黑名单管理界面" />
</div>

## ✨ 核心功能

### 批量拉黑
- 🎯 关键词搜索用户（支持多关键词批量处理）
- 🚫 自动批量拉黑用户
- 🔄 自动跳过已拉黑用户
- ⏸️ 支持暂停/停止操作
- 📊 实时进度显示和操作日志

### 高级过滤
- ✅ 仅拉黑认证用户选项
- 🏷️ 认证类型关键词过滤（抖音）
- ⚙️ 可调节操作间隔和翻页延迟

### 黑名单管理（哔哩哔哩）
- 🗑️ 一键清理黑名单
- 📥 导出黑名单为 CSV 文件
- 📋 实时清理进度显示

### 预设管理
- 💾 创建和保存自定义拉黑预设
- 📤 导入/导出预设分享

## 🌐 支持平台

| 平台 | 支持情况 | 功能 |
|------|--------|------|
| [抖音](https://www.douyin.com) | ✅ 完全支持 | 拉黑、预设管理 |
| [哔哩哔哩](https://www.bilibili.com) | ✅ 完全支持 | 拉黑、黑名单管理、预设管理 |

## 📦 安装

### 前置要求
- 浏览器：Chrome、Firefox、Edge 等（需要支持油猴脚本）
- 油猴管理器：[Tampermonkey](https://www.tampermonkey.net/) 或 [Greasemonkey](https://www.greasespot.net/)

### 安装步骤

1. 安装油猴管理器浏览器扩展
2. 选择下列一个安装源：
   - [GreasyFork](https://greasyfork.org/zh-CN/scripts/569170)
   - [GitHub Releases](https://github.com/Steven-Qiang/block-kit/releases/latest/download/block-kit.user.js)
3. 在弹出的对话框中点击「安装」
4. 访问支持的平台网页版即可使用

## 🚀 使用指南

### 批量拉黑用户

1. 登录对应平台网页版
2. 左上角浮球面板会自动出现
3. 输入要搜索的关键词（如：`新闻`、`日报`、`资讯`）
   - 支持多个关键词，用逗号分隔：`新闻,日报,资讯`
4. 设置目标拉黑数量（0 表示不限制）
5. 可选：启用高级设置调整操作间隔
6. 点击「开始拉黑」按钮启动

### 清理黑名单（仅哔哩哔哩）

1. 访问 [B站黑名单页面](https://account.bilibili.com/account/blacklist)
2. 面板自动切换为黑名单管理模式
3. 点击「清理黑名单」或「导出黑名单」
4. 等待操作完成

### 管理预设模板

1. 点击面板中的「预设管理」标签
2. 查看已保存的预设模板
3. 可以：
   - 创建新预设
   - 编辑现有预设
   - 导入/导出预设

## ⚙️ 高级设置

| 选项 | 说明 | 默认值 |
|------|------|--------|
| 操作间隔 | 每次拉黑后的等待时间（毫秒） | 1000ms |
| 翻页间隔 | 每次翻页后的等待时间（毫秒） | 2000ms |
| 只拉黑认证用户 | 仅对认证账号进行拉黑 | 关闭 |

## 💡 使用建议

- **合理设置间隔**：避免过快操作触发平台风控
- **从小到大**：先用较小的数量测试，确认效果后再大批量操作

## 🔒 隐私和安全

- 所有操作均在本地浏览器执行
- 不收集任何用户数据
- 预设数据存储在浏览器本地存储中

## 📝 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 反馈

- 🐛 [报告 Bug](https://github.com/Steven-Qiang/block-kit/issues)
- 💬 [功能建议](https://github.com/Steven-Qiang/block-kit/discussions)

---

**免责声明**：本工具仅供学习和研究使用。使用者需自行承担使用本工具产生的一切后果，作者不承担任何责任。
