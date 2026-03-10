// ==UserScript==
// @name         批量拉黑工具
// @namespace    block-kit
// @version      1.4.0
// @author       Steven-Qiang
// @description  基于关键词搜索用户并批量拉黑的多平台油猴脚本，支持抖音、哔哩哔哩等
// @license      MIT
// @source       https://github.com/Steven-Qiang/block-kit
// @downloadURL  https://github.com/Steven-Qiang/block-kit/releases/latest/download/block-kit.user.js
// @match        https://www.douyin.com/*
// @match        https://www.bilibili.com/*
// @match        https://search.bilibili.com/*
// @match        https://account.bilibili.com/account/blacklist*
// @require      https://cdn.jsdelivr.net/npm/vue@3.5.30/dist/vue.global.prod.js
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function (vue) {
  'use strict';

  const d=new Set;const importCSS = async e=>{d.has(e)||(d.add(e),(t=>{typeof GM_addStyle=="function"?GM_addStyle(t):(document.head||document.documentElement).appendChild(document.createElement("style")).append(t);})(e));};

  importCSS(' .log-container[data-v-74131611]{margin-bottom:12px}.log-header[data-v-74131611]{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:#ecf0f1;border-radius:4px 4px 0 0;border-bottom:1px solid #bdc3c7;font-size:13px;font-weight:600;color:#2c3e50}.log-controls[data-v-74131611]{display:flex;gap:4px}.log-control-btn[data-v-74131611]{width:auto;padding:4px 6px;font-size:12px;background:none;border:1px solid #bdc3c7;border-radius:3px;cursor:pointer;transition:all .2s;display:flex;align-items:center;justify-content:center}.log-control-btn img[data-v-74131611]{width:16px;height:16px;filter:invert(.4)}.log-control-btn[data-v-74131611]:hover{background:#d5dbdb}.log-area[data-v-74131611]{padding:10px;background:#f5f5f5;border-radius:0 0 4px 4px;font-size:12px;color:#666;min-height:60px;max-height:150px;overflow-y:auto}.log-area.expanded[data-v-74131611]{max-height:300px}.log-empty[data-v-74131611]{color:#999}.log-item[data-v-74131611]{margin-bottom:4px}[data-v-55b67a04]:root{--color-primary: #fb7299;--color-primary-hover: #e85a8a;--color-secondary: #e74c3c;--color-secondary-hover: #c0392b;--color-success: #27ae60;--color-error: #e74c3c;--color-warning: #f39c12;--color-info: #3498db;--color-muted: #95a5a6;--color-header-bg: #fb7299;--color-header-text: #fff}.content[data-v-55b67a04]{padding:16px}.form-group[data-v-55b67a04]{margin-bottom:12px}label[data-v-55b67a04]{display:block;margin-bottom:4px;font-size:13px;color:#333}input[type=text][data-v-55b67a04],input[type=number][data-v-55b67a04]{width:100%;padding:8px;border:1px solid #ddd;border-radius:4px;box-sizing:border-box;font-size:13px}.checkbox-label[data-v-55b67a04]{display:flex;align-items:center;font-size:13px;color:#333;cursor:pointer}.checkbox-label input[type=checkbox][data-v-55b67a04]{width:auto;margin-right:6px}input[data-v-55b67a04]:disabled{background:#f5f5f5;cursor:not-allowed}button[data-v-55b67a04]{width:100%;padding:10px;border:none;border-radius:4px;cursor:pointer;font-size:14px;font-weight:600;transition:all .2s ease}.btn-start[data-v-55b67a04]{background:var(--color-primary);color:#fff}.btn-start[data-v-55b67a04]:disabled{background:#bdc3c7;cursor:not-allowed}.btn-stop[data-v-55b67a04]{background:var(--color-secondary);color:#fff}.btn-stop[data-v-55b67a04]:hover:not(:disabled){background:var(--color-secondary-hover)}.btn-stop[data-v-55b67a04]:disabled{background:#bdc3c7;cursor:not-allowed}.log-area[data-v-55b67a04]{padding:10px;background:#f5f5f5;border-radius:4px;font-size:12px;color:#666;min-height:60px;max-height:150px;overflow-y:auto}.log-empty[data-v-55b67a04]{color:#999}.log-item[data-v-55b67a04]{margin-bottom:4px}.svg-icon[data-v-55b67a04]{width:14px;height:14px;display:inline-block;margin-right:4px;vertical-align:-2px}.counter[data-v-55b67a04]{margin-top:18px;font-size:12px;color:#999;text-align:center}.count[data-v-55b67a04]{font-weight:700}.btn-start[data-v-55b67a04]{background:var(--color-primary)}.btn-start[data-v-55b67a04]:hover:not(:disabled){background:var(--color-primary-hover)}.count[data-v-55b67a04]{color:var(--color-primary)}[data-v-c1e5c150]:root{--color-primary: #fb7299;--color-primary-hover: #e85a8a;--color-secondary: #e74c3c;--color-secondary-hover: #c0392b;--color-success: #27ae60;--color-error: #e74c3c;--color-warning: #f39c12;--color-info: #3498db;--color-muted: #95a5a6;--color-header-bg: #fb7299;--color-header-text: #fff}.content[data-v-c1e5c150]{padding:16px}.form-group[data-v-c1e5c150]{margin-bottom:12px}label[data-v-c1e5c150]{display:block;margin-bottom:4px;font-size:13px;color:#333}input[type=text][data-v-c1e5c150],input[type=number][data-v-c1e5c150]{width:100%;padding:8px;border:1px solid #ddd;border-radius:4px;box-sizing:border-box;font-size:13px}.checkbox-label[data-v-c1e5c150]{display:flex;align-items:center;font-size:13px;color:#333;cursor:pointer}.checkbox-label input[type=checkbox][data-v-c1e5c150]{width:auto;margin-right:6px}input[data-v-c1e5c150]:disabled{background:#f5f5f5;cursor:not-allowed}button[data-v-c1e5c150]{width:100%;padding:10px;border:none;border-radius:4px;cursor:pointer;font-size:14px;font-weight:600;transition:all .2s ease}.btn-start[data-v-c1e5c150]{background:var(--color-primary);color:#fff}.btn-start[data-v-c1e5c150]:hover:not(:disabled){background:var(--color-primary-hover)}.btn-start[data-v-c1e5c150]:disabled{background:#bdc3c7;cursor:not-allowed}.btn-stop[data-v-c1e5c150]{background:var(--color-secondary);color:#fff}.btn-stop[data-v-c1e5c150]:hover:not(:disabled){background:var(--color-secondary-hover)}.btn-stop[data-v-c1e5c150]:disabled{background:#bdc3c7;cursor:not-allowed}.log-area[data-v-c1e5c150]{padding:10px;background:#f5f5f5;border-radius:4px;font-size:12px;color:#666;min-height:60px;max-height:150px;overflow-y:auto}.log-empty[data-v-c1e5c150]{color:#999}.log-item[data-v-c1e5c150]{margin-bottom:4px}.svg-icon[data-v-c1e5c150]{width:14px;height:14px;display:inline-block;margin-right:4px;vertical-align:-2px}.counter[data-v-c1e5c150]{margin-top:18px;font-size:12px;color:#999;text-align:center}.count[data-v-c1e5c150]{font-weight:700}.count[data-v-c1e5c150]{color:var(--color-primary)}.hint[data-v-c1e5c150]{font-size:11px;color:#999;margin-top:10px;margin-left:2px}.advanced-toggle[data-v-c1e5c150]{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:#ecf0f1;border-radius:4px;cursor:pointer;font-size:13px;color:var(--color-primary);transition:background-color .2s;-webkit-user-select:none;user-select:none}.advanced-toggle[data-v-c1e5c150]:hover{background:#d5dbdb}.arrow[data-v-c1e5c150]{font-size:10px;transition:transform .2s}.arrow.expanded[data-v-c1e5c150]{transform:rotate(180deg)}.advanced-content[data-v-c1e5c150]{margin-top:8px;padding:12px;background:#fafafa;border-radius:4px;border:1px solid #eee}.advanced-item[data-v-c1e5c150]{margin-bottom:12px}.advanced-item[data-v-c1e5c150]:last-child{margin-bottom:0}.input-with-dropdown[data-v-c1e5c150]{display:flex;gap:4px}.input-with-dropdown input[data-v-c1e5c150]{flex:1}.template-dropdown[data-v-c1e5c150]{position:relative}.dropdown-btn[data-v-c1e5c150]{padding:8px 12px;font-size:11px;background:#ecf0f1;border:1px solid #bdc3c7;border-radius:4px;color:var(--color-primary);cursor:pointer;transition:all .2s;white-space:nowrap}.dropdown-btn[data-v-c1e5c150]:hover:not(:disabled){background:#d5dbdb;border-color:#95a5a6}.dropdown-btn[data-v-c1e5c150]:disabled{opacity:.5;cursor:not-allowed}.dropdown-menu[data-v-c1e5c150]{position:absolute;top:100%;right:0;min-width:150px;background:#fff;border:1px solid #ddd;border-radius:4px;box-shadow:0 4px 12px #00000026;z-index:1000;max-height:200px;overflow-y:auto}.dropdown-item[data-v-c1e5c150]{display:flex;align-items:center;padding:8px 12px;cursor:pointer;transition:background-color .2s;font-size:12px}.dropdown-item[data-v-c1e5c150]:hover{background:#f5f5f5}.item-icon[data-v-c1e5c150]{margin-right:8px;font-size:14px}.item-name[data-v-c1e5c150]{flex:1}.warning-banner[data-v-c1e5c150]{background:#fff3cd;border:1px solid #ffc107;border-radius:4px;padding:8px 12px;margin-bottom:12px;color:#856404;font-size:12px;line-height:1.5}.float-ball[data-v-f90f5c86]{position:fixed;width:60px;height:60px;background:var(--color-header-bg);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:24px;cursor:pointer;box-shadow:0 2px 8px #00000026;border:var(--float-ball-border, none);z-index:999999;-webkit-user-select:none;user-select:none;overflow:hidden;transition:transform .2s cubic-bezier(.4,0,.2,1),box-shadow .2s cubic-bezier(.4,0,.2,1);transform:scale(1)}.float-ball.animating[data-v-f90f5c86]{transition:all .3s cubic-bezier(.4,0,.2,1)}.float-ball.dragging[data-v-f90f5c86]{transition:none;transform:scale(1.05);box-shadow:0 4px 12px #0003}.float-ball[data-v-f90f5c86]:hover{transform:scale(1.05);box-shadow:0 4px 12px #0003}.float-ball[data-v-f90f5c86]:active{transform:scale(.95)}.ball-icon[data-v-f90f5c86]{position:relative;z-index:2;transition:transform .2s;width:32px;height:32px;filter:brightness(0) invert(1)}.ripple[data-v-f90f5c86]{position:absolute;top:50%;left:50%;width:0;height:0;background:#fff3;border-radius:50%;transform:translate(-50%,-50%);animation:ripple-f90f5c86 3s infinite}@keyframes ripple-f90f5c86{0%{width:0;height:0;opacity:1}to{width:120px;height:120px;opacity:0}}.panel[data-v-f90f5c86]{position:fixed;min-width:300px;max-width:90vw;background:var(--color-header-bg);border-radius:12px;box-shadow:0 8px 32px #00000026;z-index:999999;font-family:Arial,sans-serif;animation:panelEnter-f90f5c86 .3s cubic-bezier(.4,0,.2,1);overflow:hidden}@keyframes panelEnter-f90f5c86{0%{opacity:0;transform:scale(.8) translateY(-20px)}to{opacity:1;transform:scale(1) translateY(0)}}.header[data-v-f90f5c86]{background:var(--color-header-bg);color:var(--color-header-text);padding:12px 16px;border-radius:12px 12px 0 0;font-weight:600;cursor:move;-webkit-user-select:none;user-select:none;display:flex;justify-content:space-between;align-items:center;position:relative;overflow:hidden}.header[data-v-f90f5c86]:before{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent);transition:left .5s}.header[data-v-f90f5c86]:hover:before{left:100%}.close-btn[data-v-f90f5c86]{background:none;border:none;color:#fff;cursor:pointer;font-size:20px;line-height:1;padding:4px;width:28px;height:28px;display:flex;align-items:center;justify-content:center;border-radius:50%;transition:all .2s;position:relative;z-index:1}.close-btn[data-v-f90f5c86]:hover{background-color:#fff3;transform:rotate(90deg)}.content-wrapper[data-v-f90f5c86]{background:#fff;animation:contentSlide-f90f5c86 .3s ease-out .1s both}@keyframes contentSlide-f90f5c86{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}[data-v-b054ded4]:root{--color-primary: #fb7299;--color-primary-hover: #e85a8a;--color-secondary: #e74c3c;--color-secondary-hover: #c0392b;--color-success: #27ae60;--color-error: #e74c3c;--color-warning: #f39c12;--color-info: #3498db;--color-muted: #95a5a6;--color-header-bg: #fb7299;--color-header-text: #fff}.content[data-v-b054ded4]{padding:16px}.form-group[data-v-b054ded4]{margin-bottom:12px}label[data-v-b054ded4]{display:block;margin-bottom:4px;font-size:13px;color:#333}input[type=text][data-v-b054ded4],input[type=number][data-v-b054ded4]{width:100%;padding:8px;border:1px solid #ddd;border-radius:4px;box-sizing:border-box;font-size:13px}.checkbox-label[data-v-b054ded4]{display:flex;align-items:center;font-size:13px;color:#333;cursor:pointer}.checkbox-label input[type=checkbox][data-v-b054ded4]{width:auto;margin-right:6px}input[data-v-b054ded4]:disabled{background:#f5f5f5;cursor:not-allowed}button[data-v-b054ded4]{width:100%;padding:10px;border:none;border-radius:4px;cursor:pointer;font-size:14px;font-weight:600;transition:all .2s ease}.btn-start[data-v-b054ded4]{background:var(--color-primary);color:#fff}.btn-start[data-v-b054ded4]:hover:not(:disabled){background:var(--color-primary-hover)}.btn-start[data-v-b054ded4]:disabled{background:#bdc3c7;cursor:not-allowed}.btn-stop[data-v-b054ded4]{background:var(--color-secondary);color:#fff}.btn-stop[data-v-b054ded4]:hover:not(:disabled){background:var(--color-secondary-hover)}.btn-stop[data-v-b054ded4]:disabled{background:#bdc3c7;cursor:not-allowed}.log-area[data-v-b054ded4]{padding:10px;background:#f5f5f5;border-radius:4px;font-size:12px;color:#666;min-height:60px;max-height:150px;overflow-y:auto}.log-empty[data-v-b054ded4]{color:#999}.log-item[data-v-b054ded4]{margin-bottom:4px}.svg-icon[data-v-b054ded4]{width:14px;height:14px;display:inline-block;margin-right:4px;vertical-align:-2px}.counter[data-v-b054ded4]{margin-top:18px;font-size:12px;color:#999;text-align:center}.count[data-v-b054ded4]{font-weight:700}.header[data-v-b054ded4]{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;gap:8px}.header h3[data-v-b054ded4]{margin:0;color:#333;font-size:14px;flex:1}.btn-add[data-v-b054ded4]{padding:4px 8px;background:var(--color-primary);color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:11px;transition:background .2s;display:flex;align-items:center;justify-content:center}.btn-add img[data-v-b054ded4]{width:14px;height:14px;filter:brightness(0) invert(1)}.btn-add[data-v-b054ded4]:hover{background:var(--color-primary-hover)}.template-list[data-v-b054ded4]{margin-bottom:16px;max-height:200px;overflow-y:auto}.template-item[data-v-b054ded4]{display:flex;justify-content:space-between;align-items:center;padding:8px;border:1px solid #eee;border-radius:6px;margin-bottom:6px}.template-info[data-v-b054ded4]{display:flex;align-items:center;flex:1;min-width:0}.template-icon[data-v-b054ded4]{font-size:14px;margin-right:8px;flex-shrink:0}.template-details[data-v-b054ded4]{flex:1;min-width:0}.template-name[data-v-b054ded4]{font-weight:700;margin-bottom:2px;font-size:12px;display:flex;align-items:center;gap:4px}.template-author[data-v-b054ded4]{font-size:10px;color:var(--color-success);font-weight:400}.template-source[data-v-b054ded4]{font-size:10px;color:var(--color-primary);font-weight:400}.template-keywords[data-v-b054ded4]{font-size:10px;color:#666;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.template-actions[data-v-b054ded4]{display:flex;gap:2px;flex-shrink:0}.template-actions button[data-v-b054ded4]{padding:2px 4px;border:none;border-radius:3px;cursor:pointer;font-size:10px;display:flex;align-items:center;justify-content:center}.template-actions button img[data-v-b054ded4]{width:14px;height:14px;filter:invert(.4)}.btn-edit[data-v-b054ded4]{background:#ecf0f1;color:#2c3e50}.btn-edit[data-v-b054ded4]:hover{background:#d5dbdb}.btn-share[data-v-b054ded4]{background:#ecf0f1;color:#2c3e50}.btn-share[data-v-b054ded4]:hover{background:#d5dbdb}.btn-delete[data-v-b054ded4]{background:#ecf0f1;color:#2c3e50}.btn-delete[data-v-b054ded4]:hover{background:#d5dbdb}.btn-edit[data-v-b054ded4]:disabled,.btn-delete[data-v-b054ded4]:disabled{opacity:.3;cursor:not-allowed}.import-section[data-v-b054ded4]{border-top:1px solid #eee;padding-top:12px}.import-section h4[data-v-b054ded4]{margin:0 0 6px;font-size:12px}.import-section textarea[data-v-b054ded4]{width:100%;margin-bottom:6px;padding:6px;border:1px solid #ddd;border-radius:4px;resize:vertical;font-size:11px}.dialog-overlay[data-v-b054ded4]{position:fixed;inset:0;background:#00000080;display:flex;align-items:center;justify-content:center;z-index:1000000}.dialog[data-v-b054ded4]{background:#fff;padding:16px;border-radius:6px;width:90%;max-width:320px}.dialog h4[data-v-b054ded4]{margin:0 0 12px;font-size:14px}.dialog textarea[data-v-b054ded4]{width:100%;padding:6px;border:1px solid #ddd;border-radius:4px;resize:vertical;font-size:11px}.dialog input[data-v-b054ded4]{font-size:11px}.dialog-actions[data-v-b054ded4]{display:flex;justify-content:flex-end;gap:6px;margin-top:12px}.btn-cancel[data-v-b054ded4]{padding:4px 8px;background:#95a5a6;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:11px;transition:background .2s}.btn-cancel[data-v-b054ded4]:hover{background:#7f8c8d}.btn-save[data-v-b054ded4]{padding:4px 8px;background:var(--color-primary);color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:11px;transition:background .2s}.btn-save[data-v-b054ded4]:hover{background:var(--color-primary-hover)}.footer[data-v-601c9119]{padding:8px 16px;border-top:1px solid #eee;display:flex;justify-content:space-between;align-items:center;font-size:11px;color:#999}.version[data-v-601c9119]{font-weight:700}.copyright[data-v-601c9119]{flex:1;text-align:center}.github-link[data-v-601c9119]{display:flex;align-items:center;gap:4px;color:var(--color-primary);text-decoration:none;transition:color .2s}.github-link[data-v-601c9119]:hover{color:var(--color-primary-hover)}.github-icon[data-v-601c9119]{width:14px;height:14px}.nav-section[data-v-601c9119]{padding:8px 16px;border-top:1px solid #eee;display:flex;gap:4px}.nav-btn[data-v-601c9119]{flex:1;padding:6px 8px;font-size:11px;background:#f5f5f5;border:1px solid #ddd;border-radius:4px;cursor:pointer;transition:all .2s;text-decoration:none;display:flex;align-items:center;justify-content:center}.nav-btn[data-v-601c9119]:hover{background:#ebebeb}.nav-btn.active[data-v-601c9119]{background:var(--color-primary);color:#fff;border-color:var(--color-primary)} ');

  const name = "block-kit";
  const type = "module";
  const version = "1.4.0";
  const packageManager = "pnpm@10.24.0";
  const description = "基于关键词搜索用户并批量拉黑的多平台油猴脚本，支持抖音、哔哩哔哩等";
  const author = "Steven-Qiang";
  const license = "MIT";
  const repository = { "type": "git", "url": "https://github.com/Steven-Qiang/block-kit" };
  const keywords = ["douyin", "bilibili", "userscript", "tampermonkey", "block", "automation"];
  const scripts = { "dev": "vite", "build": "vue-tsc -b && vite build", "preview": "vite preview", "lint": "eslint .", "lint:fix": "eslint . --fix", "prettier": 'prettier --write "src/**/*.{vue,js,ts,json,html,css,scss,md,mjs}"', "release": "semantic-release" };
  const dependencies = { "ua-parser-js": "0.7.40", "vue": "^3.5.30" };
  const devDependencies = { "@antfu/eslint-config": "^7.7.0", "@semantic-release/changelog": "^6.0.3", "@semantic-release/exec": "^7.1.0", "@semantic-release/git": "^10.0.1", "@semantic-release/github": "^12.0.6", "@types/ua-parser-js": "^0.7.39", "@vitejs/plugin-vue": "^6.0.4", "eslint": "^10.0.3", "eslint-plugin-format": "^2.0.1", "prettier": "^3.8.1", "semantic-release": "^25.0.3", "typescript": "^5.9.3", "unplugin-auto-import": "^21.0.0", "vite": "^7.3.1", "vite-plugin-monkey": "^7.1.9", "vue-tsc": "^3.2.5" };
  const pkg = {
    name,
    type,
    version,
    "private": true,
    packageManager,
    description,
    author,
    license,
    repository,
    keywords,
    scripts,
    dependencies,
    devDependencies
  };
  const logoGithub = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20width='800px'%20height='800px'%20viewBox='0%20-0.5%2025%2025'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m12.301%200h.093c2.242%200%204.34.613%206.137%201.68l-.055-.031c1.871%201.094%203.386%202.609%204.449%204.422l.031.058c1.04%201.769%201.654%203.896%201.654%206.166%200%205.406-3.483%2010-8.327%2011.658l-.087.026c-.063.02-.135.031-.209.031-.162%200-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466%200-.005%200-.01%200-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249%200-.792-.323-1.508-.844-2.025.618-.061%201.176-.163%201.718-.305l-.076.017c.573-.16%201.073-.373%201.537-.642l-.031.017c.508-.28.938-.636%201.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281%200-.045%200-.091-.001-.136v.007c0-.022.001-.047.001-.072%200-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479%200-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334%200-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124%200-.246.01-.364.03l.013-.002c-.248.524-.393%201.139-.393%201.788%200%20.531.097%201.04.275%201.509l-.01-.029c-.785.844-1.266%201.979-1.266%203.227%200%20.025%200%20.051.001.076v-.004c-.001.039-.001.084-.001.13%200%20.809.12%201.591.344%202.327l-.015-.057c.189.643.476%201.202.85%201.693l-.009-.013c.354.435.782.793%201.267%201.062l.022.011c.432.252.933.465%201.46.614l.046.011c.466.125%201.024.227%201.595.284l.046.004c-.431.428-.718%201-.784%201.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022%200-.044%200-.066%200h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14%200-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402%201.057.478l.016.002c.33.064.714.104%201.106.112h.007c.045.002.097.002.15.002.261%200%20.517-.021.767-.062l-.027.004.368-.064q0%20.609.008%201.418t.008.873v.014c0%20.185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075%200-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69%200-2.268.612-4.393%201.681-6.219l-.032.058c1.094-1.871%202.609-3.386%204.422-4.449l.058-.031c1.739-1.034%203.835-1.645%206.073-1.645h.098-.005zm-7.64%2017.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112%200-.304-.128-.208-.272-.096-.144.08%200%20.288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256%200-.256.176%200%20.208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z'/%3e%3c/svg%3e";
  var PlatformType = ((PlatformType2) => {
    PlatformType2["DOUYIN"] = "douyin";
    PlatformType2["BILIBILI"] = "bilibili";
    return PlatformType2;
  })(PlatformType || {});
  const CSRF_TOKEN_REGEX = /bili_jct=([^;]+)/;
  const BILIBILI_THEME = {
    primary: "#fb7299",
    primaryHover: "#e85a8a",
    secondary: "#e74c3c",
    secondaryHover: "#c0392b",
    success: "#27ae60",
    error: "#e74c3c",
    warning: "#f39c12",
    info: "#3498db",
    muted: "#95a5a6",
    headerBg: "#fb7299",
    headerText: "#fff"
  };
  class BilibiliPlatform {
    name = PlatformType.BILIBILI;
    displayName = "哔哩哔哩";
    theme = BILIBILI_THEME;
    blacklist = new Set();
    isCurrentPlatform() {
      return window.location.hostname.includes("bilibili.com");
    }
    async loadBlacklist(onProgress) {
      let page = 1;
      let hasMore = true;
      let totalLoaded = 0;
      onProgress?.("正在加载黑名单...");
      while (hasMore) {
        const res = await fetch(
          `https://api.bilibili.com/x/relation/blacks?re_version=0&pn=${page}&ps=50&jsonp=jsonp&web_location=333.33`,
          {
            credentials: "include"
          }
        );
        const data = await res.json();
        const list = data.data?.list || [];
        list.forEach((item) => this.blacklist.add(item.mid.toString()));
        totalLoaded += list.length;
        onProgress?.(`已加载 ${totalLoaded} 个黑名单用户...`);
        hasMore = list.length >= 50;
        page++;
      }
      onProgress?.(`黑名单加载完成，共 ${totalLoaded} 个用户`);
    }
    isBlocked(uid) {
      return this.blacklist.has(uid);
    }
    async searchUsers(keyword, page, onProgress) {
      if (page === 0 && this.blacklist.size === 0) {
        await this.loadBlacklist(onProgress);
      }
      const searchParams = new URLSearchParams({
        keyword,
        page: (page + 1).toString(),
        order: "totalrank",
        duration: "0",
        tids: "0",
        search_type: "bili_user"
      });
      const res = await fetch(`https://api.bilibili.com/x/web-interface/search/type?${searchParams}`, {
        method: "GET",
        headers: {
          accept: "application/json, text/plain, */*",
          referer: "https://search.bilibili.com/"
        },
        credentials: "include"
      });
      const data = await res.json();
      const users = data.data?.result || [];
      onProgress?.(`搜索到 ${users.length} 个用户`);
      return {
        users: users.map((item) => ({
          user_info: {
            nickname: item.uname,
            uid: item.mid.toString(),
            avatar: item.upic,
            is_blocked: this.isBlocked(item.mid.toString()),
            official_verify: !!item.official_verify?.desc
          }
        })),
        hasMore: users.length >= 20
      };
    }
    async blockUser(user) {
      const csrf = this.getCsrfToken();
      if (!csrf) {
        console.error("未找到CSRF token");
        return false;
      }
      const body = `fid=${user.uid}&act=5&re_src=11&gaia_source=web_main&spmid=333.1387.0.0&extend_content=${encodeURIComponent(JSON.stringify({ entity: "user", entity_id: Number.parseInt(user.uid) }))}&csrf=${csrf}`;
      const res = await fetch(
        "https://api.bilibili.com/x/relation/modify?statistics=%7B%22appId%22:100,%22platform%22:5%7D",
        {
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          },
          body,
          credentials: "include"
        }
      );
      const data = await res.json();
      if (data.code === 0) {
        this.blacklist.add(user.uid);
        return true;
      }
      return false;
    }
    async removeFromBlacklist(uid) {
      const csrf = this.getCsrfToken();
      if (!csrf) return false;
      const body = `fid=${uid}&act=6&re_src=11&csrf=${csrf}`;
      const res = await fetch("https://api.bilibili.com/x/relation/modify", {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        },
        body,
        credentials: "include"
      });
      const data = await res.json();
      return data.code === 0;
    }
    async fetchBlacklist() {
      const blacklist = [];
      let page = 1;
      while (true) {
        const res = await fetch(
          `https://api.bilibili.com/x/relation/blacks?re_version=0&pn=${page}&ps=50&jsonp=jsonp&web_location=333.33`,
          {
            credentials: "include"
          }
        );
        const data = await res.json();
        const list = data.data?.list || [];
        if (list.length === 0) break;
        for (const item of list) {
          blacklist.push({ uid: item.mid, name: item.uname });
        }
        page++;
      }
      return blacklist;
    }
    getCsrfToken() {
      const match = document.cookie.match(CSRF_TOKEN_REGEX);
      return match ? match[1] : null;
    }
  }
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var uaParser$1 = { exports: {} };
  var uaParser = uaParser$1.exports;
  var hasRequiredUaParser;
  function requireUaParser() {
    if (hasRequiredUaParser) return uaParser$1.exports;
    hasRequiredUaParser = 1;
    (function(module, exports$1) {
      (function(window2, undefined$1) {
        var LIBVERSION = "0.7.40", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 500;
        var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook", CHROMIUM_OS = "Chromium OS", MAC_OS = "Mac OS", SUFFIX_BROWSER = " Browser";
        var extend = function(regexes2, extensions) {
          var mergedRegexes = {};
          for (var i in regexes2) {
            if (extensions[i] && extensions[i].length % 2 === 0) {
              mergedRegexes[i] = extensions[i].concat(regexes2[i]);
            } else {
              mergedRegexes[i] = regexes2[i];
            }
          }
          return mergedRegexes;
        }, enumerize = function(arr) {
          var enums = {};
          for (var i = 0; i < arr.length; i++) {
            enums[arr[i].toUpperCase()] = arr[i];
          }
          return enums;
        }, has = function(str1, str2) {
          return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
        }, lowerize = function(str) {
          return str.toLowerCase();
        }, majorize = function(version2) {
          return typeof version2 === STR_TYPE ? version2.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined$1;
        }, trim = function(str, len) {
          if (typeof str === STR_TYPE) {
            str = str.replace(/^\s\s*/, EMPTY);
            return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
          }
        };
        var rgxMapper = function(ua, arrays) {
          var i = 0, j, k, p, q, matches, match;
          while (i < arrays.length && !matches) {
            var regex = arrays[i], props = arrays[i + 1];
            j = k = 0;
            while (j < regex.length && !matches) {
              if (!regex[j]) {
                break;
              }
              matches = regex[j++].exec(ua);
              if (!!matches) {
                for (p = 0; p < props.length; p++) {
                  match = matches[++k];
                  q = props[p];
                  if (typeof q === OBJ_TYPE && q.length > 0) {
                    if (q.length === 2) {
                      if (typeof q[1] == FUNC_TYPE) {
                        this[q[0]] = q[1].call(this, match);
                      } else {
                        this[q[0]] = q[1];
                      }
                    } else if (q.length === 3) {
                      if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined$1;
                      } else {
                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined$1;
                      }
                    } else if (q.length === 4) {
                      this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined$1;
                    }
                  } else {
                    this[q] = match ? match : undefined$1;
                  }
                }
              }
            }
            i += 2;
          }
        }, strMapper = function(str, map) {
          for (var i in map) {
            if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
              for (var j = 0; j < map[i].length; j++) {
                if (has(map[i][j], str)) {
                  return i === UNKNOWN ? undefined$1 : i;
                }
              }
            } else if (has(map[i], str)) {
              return i === UNKNOWN ? undefined$1 : i;
            }
          }
          return map.hasOwnProperty("*") ? map["*"] : str;
        };
        var oldSafariMap = {
          "1.0": "/8",
          "1.2": "/1",
          "1.3": "/3",
          "2.0": "/412",
          "2.0.2": "/416",
          "2.0.3": "/417",
          "2.0.4": "/419",
          "?": "/"
        }, windowsVersionMap = {
          "ME": "4.90",
          "NT 3.11": "NT3.51",
          "NT 4.0": "NT4.0",
          "2000": "NT 5.0",
          "XP": ["NT 5.1", "NT 5.2"],
          "Vista": "NT 6.0",
          "7": "NT 6.1",
          "8": "NT 6.2",
          "8.1": "NT 6.3",
          "10": ["NT 6.4", "NT 10.0"],
          "RT": "ARM"
        };
        var regexes = {
          browser: [
            [
              /\b(?:crmo|crios)\/([\w\.]+)/i
],
            [VERSION, [NAME, "Chrome"]],
            [
              /edg(?:e|ios|a)?\/([\w\.]+)/i
],
            [VERSION, [NAME, "Edge"]],
            [
/(opera mini)\/([-\w\.]+)/i,
/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
],
            [NAME, VERSION],
            [
              /opios[\/ ]+([\w\.]+)/i
],
            [VERSION, [NAME, OPERA + " Mini"]],
            [
              /\bop(?:rg)?x\/([\w\.]+)/i
],
            [VERSION, [NAME, OPERA + " GX"]],
            [
              /\bopr\/([\w\.]+)/i
],
            [VERSION, [NAME, OPERA]],
            [
/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
],
            [VERSION, [NAME, "Baidu"]],
            [
              /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
],
            [VERSION, [NAME, "Maxthon"]],
            [
              /(kindle)\/([\w\.]+)/i,
/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,

/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
/(?:ms|\()(ie) ([\w\.]+)/i,

/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
/(heytap|ovi|115)browser\/([\d\.]+)/i,
/(weibo)__([\d\.]+)/i
],
            [NAME, VERSION],
            [
              /quark(?:pc)?\/([-\w\.]+)/i
],
            [VERSION, [NAME, "Quark"]],
            [
              /\bddg\/([\w\.]+)/i
],
            [VERSION, [NAME, "DuckDuckGo"]],
            [
              /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
],
            [VERSION, [NAME, "UC" + BROWSER]],
            [
              /microm.+\bqbcore\/([\w\.]+)/i,
/\bqbcore\/([\w\.]+).+microm/i,
              /micromessenger\/([\w\.]+)/i
],
            [VERSION, [NAME, "WeChat"]],
            [
              /konqueror\/([\w\.]+)/i
],
            [VERSION, [NAME, "Konqueror"]],
            [
              /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
],
            [VERSION, [NAME, "IE"]],
            [
              /ya(?:search)?browser\/([\w\.]+)/i
],
            [VERSION, [NAME, "Yandex"]],
            [
              /slbrowser\/([\w\.]+)/i
],
            [VERSION, [NAME, "Smart Lenovo " + BROWSER]],
            [
              /(avast|avg)\/([\w\.]+)/i
],
            [[NAME, /(.+)/, "$1 Secure " + BROWSER], VERSION],
            [
              /\bfocus\/([\w\.]+)/i
],
            [VERSION, [NAME, FIREFOX + " Focus"]],
            [
              /\bopt\/([\w\.]+)/i
],
            [VERSION, [NAME, OPERA + " Touch"]],
            [
              /coc_coc\w+\/([\w\.]+)/i
],
            [VERSION, [NAME, "Coc Coc"]],
            [
              /dolfin\/([\w\.]+)/i
],
            [VERSION, [NAME, "Dolphin"]],
            [
              /coast\/([\w\.]+)/i
],
            [VERSION, [NAME, OPERA + " Coast"]],
            [
              /miuibrowser\/([\w\.]+)/i
],
            [VERSION, [NAME, "MIUI" + SUFFIX_BROWSER]],
            [
              /fxios\/([\w\.-]+)/i
],
            [VERSION, [NAME, FIREFOX]],
            [
              /\bqihoobrowser\/?([\w\.]*)/i
],
            [VERSION, [NAME, "360"]],
            [
              /\b(qq)\/([\w\.]+)/i
],
            [[NAME, /(.+)/, "$1Browser"], VERSION],
            [
              /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
            ],
            [[NAME, /(.+)/, "$1" + SUFFIX_BROWSER], VERSION],
            [
/samsungbrowser\/([\w\.]+)/i
],
            [VERSION, [NAME, SAMSUNG + " Internet"]],
            [
              /metasr[\/ ]?([\d\.]+)/i
],
            [VERSION, [NAME, "Sogou Explorer"]],
            [
              /(sogou)mo\w+\/([\d\.]+)/i
],
            [[NAME, "Sogou Mobile"], VERSION],
            [
              /(electron)\/([\w\.]+) safari/i,
/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
],
            [NAME, VERSION],
            [
              /(lbbrowser|rekonq)/i,
/\[(linkedin)app\]/i
],
            [NAME],
            [
              /ome\/([\w\.]+) \w* ?(iron) saf/i,
/ome\/([\w\.]+).+qihu (360)[es]e/i
],
            [VERSION, NAME],
            [
/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
],
            [[NAME, FACEBOOK], VERSION],
            [
              /(Klarna)\/([\w\.]+)/i,
/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
/safari (line)\/([\w\.]+)/i,
/\b(line)\/([\w\.]+)\/iab/i,
/(alipay)client\/([\w\.]+)/i,
/(twitter)(?:and| f.+e\/([\w\.]+))/i,
/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i
],
            [NAME, VERSION],
            [
              /\bgsa\/([\w\.]+) .*safari\//i
],
            [VERSION, [NAME, "GSA"]],
            [
              /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
],
            [VERSION, [NAME, "TikTok"]],
            [
              /headlesschrome(?:\/([\w\.]+)| )/i
],
            [VERSION, [NAME, CHROME + " Headless"]],
            [
              / wv\).+(chrome)\/([\w\.]+)/i
],
            [[NAME, CHROME + " WebView"], VERSION],
            [
              /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
],
            [VERSION, [NAME, "Android " + BROWSER]],
            [
              /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
],
            [NAME, VERSION],
            [
              /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
],
            [VERSION, [NAME, "Mobile Safari"]],
            [
              /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
],
            [VERSION, NAME],
            [
              /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
],
            [NAME, [VERSION, strMapper, oldSafariMap]],
            [
              /(webkit|khtml)\/([\w\.]+)/i
            ],
            [NAME, VERSION],
            [
/(navigator|netscape\d?)\/([-\w\.]+)/i
],
            [[NAME, "Netscape"], VERSION],
            [
              /(wolvic|librewolf)\/([\w\.]+)/i
],
            [NAME, VERSION],
            [
              /mobile vr; rv:([\w\.]+)\).+firefox/i
],
            [VERSION, [NAME, FIREFOX + " Reality"]],
            [
              /ekiohf.+(flow)\/([\w\.]+)/i,
/(swiftfox)/i,
/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
/(firefox)\/([\w\.]+)/i,
/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,

/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
/(links) \(([\w\.]+)/i
],
            [NAME, [VERSION, /_/g, "."]],
            [
              /(cobalt)\/([\w\.]+)/i
],
            [NAME, [VERSION, /master.|lts./, ""]]
          ],
          cpu: [
            [
              /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
],
            [[ARCHITECTURE, "amd64"]],
            [
              /(ia32(?=;))/i
],
            [[ARCHITECTURE, lowerize]],
            [
              /((?:i[346]|x)86)[;\)]/i
],
            [[ARCHITECTURE, "ia32"]],
            [
              /\b(aarch64|arm(v?8e?l?|_?64))\b/i
],
            [[ARCHITECTURE, "arm64"]],
            [
              /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
],
            [[ARCHITECTURE, "armhf"]],
            [
/windows (ce|mobile); ppc;/i
            ],
            [[ARCHITECTURE, "arm"]],
            [
              /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
],
            [[ARCHITECTURE, /ower/, EMPTY, lowerize]],
            [
              /(sun4\w)[;\)]/i
],
            [[ARCHITECTURE, "sparc"]],
            [
              /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
],
            [[ARCHITECTURE, lowerize]]
          ],
          device: [
            [



/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ],
            [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]],
            [
              /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
              /samsung[- ]((?!sm-[lr])[-\w]+)/i,
              /sec-(sgh\w+)/i
            ],
            [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]],
            [
/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
],
            [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]],
            [
              /\((ipad);[-\w\),; ]+apple/i,
/applecoremedia\/[\w\.]+ \((ipad)/i,
              /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ],
            [MODEL, [VENDOR, APPLE], [TYPE, TABLET]],
            [
              /(macintosh);/i
            ],
            [MODEL, [VENDOR, APPLE]],
            [
/\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ],
            [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]],
            [
/(?:honor)([-\w ]+)[;\)]/i
            ],
            [MODEL, [VENDOR, "Honor"], [TYPE, MOBILE]],
            [
/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ],
            [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]],
            [
              /(?:huawei)([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
            ],
            [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]],
            [
/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
/\b; (\w+) build\/hm\1/i,
/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i
],
            [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, MOBILE]],
            [
              /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
],
            [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, TABLET]],
            [
/; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ],
            [MODEL, [VENDOR, "OPPO"], [TYPE, MOBILE]],
            [
              /\b(opd2\d{3}a?) bui/i
            ],
            [MODEL, [VENDOR, "OPPO"], [TYPE, TABLET]],
            [
/vivo (\w+)(?: bui|\))/i,
              /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ],
            [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]],
            [
/\b(rmx[1-3]\d{3})(?: bui|;|\))/i
            ],
            [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]],
            [
/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ](\w*)/i,
              /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ],
            [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]],
            [
              /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ],
            [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]],
            [
/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ],
            [MODEL, [VENDOR, LG], [TYPE, TABLET]],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
              /\blg-?([\d\w]+) bui/i
            ],
            [MODEL, [VENDOR, LG], [TYPE, MOBILE]],
            [
/(ideatab[-\w ]+)/i,
              /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ],
            [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]],
            [
/(?:maemo|nokia).*(n900|lumia \d+)/i,
              /nokia[-_ ]?([-\w\.]*)/i
            ],
            [[MODEL, /_/g, " "], [VENDOR, "Nokia"], [TYPE, MOBILE]],
            [
/(pixel c)\b/i
],
            [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]],
            [
              /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
],
            [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]],
            [
/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ],
            [MODEL, [VENDOR, SONY], [TYPE, MOBILE]],
            [
              /sony tablet [ps]/i,
              /\b(?:sony)?sgp\w+(?: bui|\))/i
            ],
            [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE, TABLET]],
            [
/ (kb2005|in20[12]5|be20[12][59])\b/i,
              /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ],
            [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]],
            [
/(alexa)webm/i,
              /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
/(kf[a-z]+)( bui|\)).+silk\//i
],
            [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]],
            [
              /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
],
            [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE, MOBILE]],
            [
/(playbook);[-\w\),; ]+(rim)/i
],
            [MODEL, VENDOR, [TYPE, TABLET]],
            [
              /\b((?:bb[a-f]|st[hv])100-\d)/i,
              /\(bb10; (\w+)/i
],
            [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]],
            [
/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ],
            [MODEL, [VENDOR, ASUS], [TYPE, TABLET]],
            [
              / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ],
            [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]],
            [
/(nexus 9)/i
],
            [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,

/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
],
            [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
            [
/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i
            ],
            [MODEL, [VENDOR, "TCL"], [TYPE, TABLET]],
            [
/(itel) ((\w+))/i
            ],
            [[VENDOR, lowerize], MODEL, [TYPE, strMapper, { "tablet": ["p10001l", "w7001"], "*": "mobile" }]],
            [
/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ],
            [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
            [
/droid.+; (m[1-5] note) bui/i,
              /\bmz-([-\w]{2,})/i
            ],
            [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]],
            [
/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
            ],
            [MODEL, [VENDOR, "Ulefone"], [TYPE, MOBILE]],
            [
/; (energy ?\w+)(?: bui|\))/i,
              /; energizer ([\w ]+)(?: bui|\))/i
            ],
            [MODEL, [VENDOR, "Energizer"], [TYPE, MOBILE]],
            [
/; cat (b35);/i,
              /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
            ],
            [MODEL, [VENDOR, "Cat"], [TYPE, MOBILE]],
            [
/((?:new )?andromax[\w- ]+)(?: bui|\))/i
            ],
            [MODEL, [VENDOR, "Smartfren"], [TYPE, MOBILE]],
            [
/droid.+; (a(?:015|06[35]|142p?))/i
            ],
            [MODEL, [VENDOR, "Nothing"], [TYPE, MOBILE]],
            [
/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
/; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i,
/(hp) ([\w ]+\w)/i,
/(asus)-?(\w+)/i,
/(microsoft); (lumia[\w ]+)/i,
/(lenovo)[-_ ]?([-\w]+)/i,
/(jolla)/i,
/(oppo) ?([\w ]+) bui/i
],
            [VENDOR, MODEL, [TYPE, MOBILE]],
            [
              /(imo) (tab \w+)/i,
/(kobo)\s(ereader|touch)/i,
/(archos) (gamepad2?)/i,
/(hp).+(touchpad(?!.+tablet)|tablet)/i,
/(kindle)\/([\w\.]+)/i,
/(nook)[\w ]+build\/(\w+)/i,
/(dell) (strea[kpr\d ]*[\dko])/i,
/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
/(trinity)[- ]*(t\d{3}) bui/i,
/(gigaset)[- ]+(q\w{1,9}) bui/i,
/(vodafone) ([\w ]+)(?:\)| bui)/i
],
            [VENDOR, MODEL, [TYPE, TABLET]],
            [
              /(surface duo)/i
],
            [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]],
            [
              /droid [\d\.]+; (fp\du?)(?: b|\))/i
],
            [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]],
            [
              /(u304aa)/i
],
            [MODEL, [VENDOR, "AT&T"], [TYPE, MOBILE]],
            [
              /\bsie-(\w*)/i
],
            [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]],
            [
              /\b(rct\w+) b/i
],
            [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]],
            [
              /\b(venue[\d ]{2,7}) b/i
],
            [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]],
            [
              /\b(q(?:mv|ta)\w+) b/i
],
            [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]],
            [
              /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
],
            [MODEL, [VENDOR, "Barnes & Noble"], [TYPE, TABLET]],
            [
              /\b(tm\d{3}\w+) b/i
            ],
            [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]],
            [
              /\b(k88) b/i
],
            [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]],
            [
              /\b(nx\d{3}j) b/i
],
            [MODEL, [VENDOR, "ZTE"], [TYPE, MOBILE]],
            [
              /\b(gen\d{3}) b.+49h/i
],
            [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]],
            [
              /\b(zur\d{3}) b/i
],
            [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]],
            [
              /\b((zeki)?tb.*\b) b/i
],
            [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]],
            [
              /\b([yr]\d{2}) b/i,
              /\b(dragon[- ]+touch |dt)(\w{5}) b/i
],
            [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]],
            [
              /\b(ns-?\w{0,9}) b/i
],
            [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]],
            [
              /\b((nxa|next)-?\w{0,9}) b/i
],
            [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]],
            [
              /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
],
            [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]],
            [
              /\b(lvtel\-)?(v1[12]) b/i
],
            [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]],
            [
              /\b(ph-1) /i
],
            [MODEL, [VENDOR, "Essential"], [TYPE, MOBILE]],
            [
              /\b(v(100md|700na|7011|917g).*\b) b/i
],
            [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]],
            [
              /\b(trio[-\w\. ]+) b/i
],
            [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]],
            [
              /\btu_(1491) b/i
],
            [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]],
            [
              /(shield[\w ]+) b/i
],
            [MODEL, [VENDOR, "Nvidia"], [TYPE, TABLET]],
            [
              /(sprint) (\w+)/i
],
            [VENDOR, MODEL, [TYPE, MOBILE]],
            [
              /(kin\.[onetw]{3})/i
],
            [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE, MOBILE]],
            [
              /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
],
            [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]],
            [
              /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ],
            [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]],
            [


/smart-tv.+(samsung)/i
],
            [VENDOR, [TYPE, SMARTTV]],
            [
              /hbbtv.+maple;(\d+)/i
            ],
            [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE, SMARTTV]],
            [
              /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
],
            [[VENDOR, LG], [TYPE, SMARTTV]],
            [
              /(apple) ?tv/i
],
            [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]],
            [
              /crkey/i
],
            [[MODEL, CHROME + "cast"], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
            [
              /droid.+aft(\w+)( bui|\))/i
],
            [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]],
            [
              /\(dtv[\);].+(aquos)/i,
              /(aquos-tv[\w ]+)\)/i
],
            [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],
            [
              /(bravia[\w ]+)( bui|\))/i
],
            [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]],
            [
              /(mitv-\w{5}) bui/i
],
            [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]],
            [
              /Hbbtv.*(technisat) (.*);/i
],
            [VENDOR, MODEL, [TYPE, SMARTTV]],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
],
            [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]],
            [
              /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
],
            [[TYPE, SMARTTV]],
            [


/(ouya)/i,
/(nintendo) ([wids3utch]+)/i
],
            [VENDOR, MODEL, [TYPE, CONSOLE]],
            [
              /droid.+; (shield) bui/i
],
            [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]],
            [
              /(playstation [345portablevi]+)/i
],
            [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]],
            [
              /\b(xbox(?: one)?(?!; xbox))[\); ]/i
],
            [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]],
            [


/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i
],
            [MODEL, [VENDOR, SAMSUNG], [TYPE, WEARABLE]],
            [
              /((pebble))app/i
],
            [VENDOR, MODEL, [TYPE, WEARABLE]],
            [
              /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
],
            [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]],
            [
              /droid.+; (glass) \d/i
],
            [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]],
            [
              /droid.+; (wt63?0{2,3})\)/i
            ],
            [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]],
            [


/droid.+; (glass) \d/i
],
            [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]],
            [
              /(pico) (4|neo3(?: link|pro)?)/i
],
            [VENDOR, MODEL, [TYPE, WEARABLE]],
            [
              /; (quest( \d| pro)?)/i
],
            [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]],
            [


/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
],
            [VENDOR, [TYPE, EMBEDDED]],
            [
              /(aeobc)\b/i
],
            [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]],
            [


/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i
],
            [MODEL, [TYPE, MOBILE]],
            [
              /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
],
            [MODEL, [TYPE, TABLET]],
            [
              /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
],
            [[TYPE, TABLET]],
            [
              /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
],
            [[TYPE, MOBILE]],
            [
              /(android[-\w\. ]{0,9});.+buil/i
],
            [MODEL, [VENDOR, "Generic"]]
          ],
          engine: [
            [
              /windows.+ edge\/([\w\.]+)/i
],
            [VERSION, [NAME, EDGE + "HTML"]],
            [
              /(arkweb)\/([\w\.]+)/i
],
            [NAME, VERSION],
            [
              /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
],
            [VERSION, [NAME, "Blink"]],
            [
              /(presto)\/([\w\.]+)/i,
/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
/ekioh(flow)\/([\w\.]+)/i,
/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
/(icab)[\/ ]([23]\.[\d\.]+)/i,
/\b(libweb)/i
            ],
            [NAME, VERSION],
            [
              /rv\:([\w\.]{1,9})\b.+(gecko)/i
],
            [VERSION, NAME]
          ],
          os: [
            [
/microsoft (windows) (vista|xp)/i
],
            [NAME, VERSION],
            [
              /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i
],
            [NAME, [VERSION, strMapper, windowsVersionMap]],
            [
              /windows nt 6\.2; (arm)/i,
/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
              /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ],
            [[VERSION, strMapper, windowsVersionMap], [NAME, "Windows"]],
            [
/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
              /cfnetwork\/.+darwin/i
            ],
            [[VERSION, /_/g, "."], [NAME, "iOS"]],
            [
              /(mac os x) ?([\w\. ]*)/i,
              /(macintosh|mac_powerpc\b)(?!.+haiku)/i
],
            [[NAME, MAC_OS], [VERSION, /_/g, "."]],
            [
/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
],
            [VERSION, NAME],
            [
/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i,
              /(blackberry)\w*\/([\w\.]*)/i,
/(tizen|kaios)[\/ ]([\w\.]+)/i,
/\((series40);/i
],
            [NAME, VERSION],
            [
              /\(bb(10);/i
],
            [VERSION, [NAME, BLACKBERRY]],
            [
              /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
],
            [VERSION, [NAME, "Symbian"]],
            [
              /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
],
            [VERSION, [NAME, FIREFOX + " OS"]],
            [
              /web0s;.+rt(tv)/i,
              /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
],
            [VERSION, [NAME, "webOS"]],
            [
              /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
],
            [VERSION, [NAME, "watchOS"]],
            [
/crkey\/([\d\.]+)/i
],
            [VERSION, [NAME, CHROME + "cast"]],
            [
              /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
],
            [[NAME, CHROMIUM_OS], VERSION],
            [
/panasonic;(viera)/i,
/(netrange)mmh/i,
/(nettv)\/(\d+\.[\w\.]+)/i,

/(nintendo|playstation) ([wids345portablevuch]+)/i,
/(xbox); +xbox ([^\);]+)/i,

/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
/(mint)[\/\(\) ]?(\w*)/i,
/(mageia|vectorlinux)[; ]/i,
/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
/(hurd|linux) ?([\w\.]*)/i,
/(gnu) ?([\w\.]*)/i,
/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
/(haiku) (\w+)/i
],
            [NAME, VERSION],
            [
              /(sunos) ?([\w\.\d]*)/i
],
            [[NAME, "Solaris"], VERSION],
            [
              /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
/(unix) ?([\w\.]*)/i
],
            [NAME, VERSION]
          ]
        };
        var UAParser2 = function(ua, extensions) {
          if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined$1;
          }
          if (!(this instanceof UAParser2)) {
            return new UAParser2(ua, extensions).getResult();
          }
          var _navigator = typeof window2 !== UNDEF_TYPE && window2.navigator ? window2.navigator : undefined$1;
          var _ua = ua || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
          var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined$1;
          var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
          var _isSelfNav = _navigator && _navigator.userAgent == _ua;
          this.getBrowser = function() {
            var _browser = {};
            _browser[NAME] = undefined$1;
            _browser[VERSION] = undefined$1;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser[MAJOR] = majorize(_browser[VERSION]);
            if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) {
              _browser[NAME] = "Brave";
            }
            return _browser;
          };
          this.getCPU = function() {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined$1;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
          };
          this.getDevice = function() {
            var _device = {};
            _device[VENDOR] = undefined$1;
            _device[MODEL] = undefined$1;
            _device[TYPE] = undefined$1;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) {
              _device[TYPE] = MOBILE;
            }
            if (_isSelfNav && _device[MODEL] == "Macintosh" && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
              _device[MODEL] = "iPad";
              _device[TYPE] = TABLET;
            }
            return _device;
          };
          this.getEngine = function() {
            var _engine = {};
            _engine[NAME] = undefined$1;
            _engine[VERSION] = undefined$1;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
          };
          this.getOS = function() {
            var _os = {};
            _os[NAME] = undefined$1;
            _os[VERSION] = undefined$1;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            if (_isSelfNav && !_os[NAME] && _uach && _uach.platform && _uach.platform != "Unknown") {
              _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS);
            }
            return _os;
          };
          this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            };
          };
          this.getUA = function() {
            return _ua;
          };
          this.setUA = function(ua2) {
            _ua = typeof ua2 === STR_TYPE && ua2.length > UA_MAX_LENGTH ? trim(ua2, UA_MAX_LENGTH) : ua2;
            return this;
          };
          this.setUA(_ua);
          return this;
        };
        UAParser2.VERSION = LIBVERSION;
        UAParser2.BROWSER = enumerize([NAME, VERSION, MAJOR]);
        UAParser2.CPU = enumerize([ARCHITECTURE]);
        UAParser2.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
        UAParser2.ENGINE = UAParser2.OS = enumerize([NAME, VERSION]);
        {
          if (module.exports) {
            exports$1 = module.exports = UAParser2;
          }
          exports$1.UAParser = UAParser2;
        }
        var $ = typeof window2 !== UNDEF_TYPE && (window2.jQuery || window2.Zepto);
        if ($ && !$.ua) {
          var parser = new UAParser2();
          $.ua = parser.getResult();
          $.ua.get = function() {
            return parser.getUA();
          };
          $.ua.set = function(ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for (var prop in result) {
              $.ua[prop] = result[prop];
            }
          };
        }
      })(typeof window === "object" ? window : uaParser);
    })(uaParser$1, uaParser$1.exports);
    return uaParser$1.exports;
  }
  var uaParserExports = requireUaParser();
  const UAParser = getDefaultExportFromCjs(uaParserExports);
  const UIFID_REGEX = /UIFID=([^;]+)/;
  const DOUYIN_THEME = {
    primary: "#1f1f1f",
    primaryHover: "#333",
    secondary: "#e74c3c",
    secondaryHover: "#c0392b",
    success: "#27ae60",
    error: "#e74c3c",
    warning: "#f39c12",
    info: "#3498db",
    muted: "#95a5a6",
    headerBg: "#1f1f1f",
    headerText: "#fff"
  };
  class DouyinPlatform {
    name = PlatformType.DOUYIN;
    displayName = "抖音";
    theme = DOUYIN_THEME;
    lastSearchId = null;
    isCurrentPlatform() {
      return window.location.hostname.includes("douyin.com");
    }
    commonParams() {
      const parser = new UAParser();
      const result = parser.getResult();
      const nav = navigator;
      return {
        cookie_enabled: navigator.cookieEnabled,
        screen_width: screen.width,
        screen_height: screen.height,
        browser_language: navigator.language,
        browser_platform: navigator.platform,
        browser_name: result.browser?.name || "",
        browser_version: result.browser?.version || "",
        browser_online: navigator.onLine,
        engine_name: result.engine?.name || "",
        engine_version: result.engine?.version || "",
        os_name: result.os?.name || "",
        os_version: result.os?.version || "",
        cpu_core_num: navigator.hardwareConcurrency || "",
        device_memory: nav.deviceMemory || "",
        platform: this.detectPlatform(),
        downlink: nav.connection?.downlink || "",
        effective_type: nav.connection?.effectiveType || "",
        round_trip_time: nav.connection?.rtt || ""
      };
    }
    detectPlatform() {
      const userAgent = navigator.userAgent || "";
      const platforms2 = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
      for (const platform of platforms2) {
        if (userAgent.includes(platform)) {
          return platform;
        }
      }
      return "PC";
    }
    getUifid() {
      const match = document.cookie.match(UIFID_REGEX);
      return match ? match[1] : null;
    }
    getWebid() {
      const e = document.getElementById("RENDER_DATA");
      if (!e) return "";
      try {
        const d = JSON.parse(decodeURIComponent(e.textContent));
        return d?.app?.odin?.user_unique_id || "";
      } catch {
        return "";
      }
    }
    async searchUsers(keyword, page, onProgress) {
      const offset = page * 10;
      const common = this.commonParams();
      const params = {
        device_platform: "webapp",
        aid: "6383",
        channel: "channel_pc_web",
        search_channel: "aweme_user_web",
        keyword,
        search_source: "normal_search",
        query_correct_type: "1",
        is_filter_search: "0",
        from_group_id: "",
        disable_rs: "0",
        offset: offset.toString(),
        count: "10",
        need_filter_settings: "0",
        list_type: "single",
        pc_search_top_1_params: '{"enable_ai_search_top_1":1}',
        update_version_code: "170400",
        pc_client_type: "1",
        pc_libra_divert: "Windows",
        support_h265: "1",
        support_dash: "1",
        version_code: "170400",
        version_name: "17.4.0",
        ...common
      };
      const webid = this.getWebid();
      if (webid) {
        params.webid = webid;
      }
      const uifid = this.getUifid();
      if (uifid) {
        params.uifid = uifid;
      }
      if (page > 0 && this.lastSearchId) {
        params.search_id = this.lastSearchId;
      }
      const searchParams = new URLSearchParams(params);
      const res = await fetch(`https://www.douyin.com/aweme/v1/web/discover/search/?${searchParams}`, {
        method: "GET",
        headers: {
          "accept": "application/json, text/plain, */*",
          "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
          "cache-control": "no-cache",
          "pragma": "no-cache"
        },
        credentials: "include"
      });
      const data = await res.json();
      const users = data.user_list || [];
      if (data.extra?.logid) {
        this.lastSearchId = data.extra.logid;
      }
      onProgress?.(`搜索到 ${users.length} 个用户`);
      return {
        users,
        hasMore: data.has_more === 1
      };
    }
    async blockUser(user) {
      const common = this.commonParams();
      const blockUrlParams = new URLSearchParams({
        device_platform: "webapp",
        aid: "6383",
        channel: "channel_pc_web",
        pc_client_type: "1",
        pc_libra_divert: "Windows",
        update_version_code: "170400",
        support_h265: "1",
        support_dash: "1",
        version_code: "170400",
        version_name: "17.4.0",
        ...common
      });
      const blockBody = new URLSearchParams({
        block_type: "1",
        source: "0",
        user_id: user.uid,
        sec_user_id: user.sec_uid
      });
      const res = await fetch(`https://www-hj.douyin.com/aweme/v1/web/user/block/?${blockUrlParams}`, {
        method: "POST",
        headers: {
          "accept": "application/json, text/plain, */*",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "referrer": "https://www.douyin.com/"
        },
        body: blockBody.toString(),
        credentials: "include"
      });
      const data = await res.json();
      return data.status_code === 0;
    }
  }
  class PlatformUtils {
static isDouyin(platform) {
      return platform?.name === PlatformType.DOUYIN;
    }
static isBilibili(platform) {
      return platform?.name === PlatformType.BILIBILI;
    }
static isUserBlocked(platform, userInfo) {
      if (this.isDouyin(platform)) {
        return userInfo.user_tags?.some((tag) => tag.type === "blocked_label");
      }
      if (this.isBilibili(platform)) {
        return userInfo.is_blocked;
      }
      return false;
    }
static isVerifiedUser(platform, userInfo) {
      if (this.isBilibili(platform)) {
        return !!userInfo.official_verify;
      }
      if (this.isDouyin(platform)) {
        try {
          const certInfo = userInfo.account_cert_info ? JSON.parse(userInfo.account_cert_info) : null;
          return certInfo && certInfo.label_style > 0;
        } catch {
          return false;
        }
      }
      return false;
    }
static getVerifyType(platform, userInfo) {
      if (this.isDouyin(platform)) {
        try {
          const certInfo = userInfo.account_cert_info ? JSON.parse(userInfo.account_cert_info) : null;
          return certInfo?.label_text || null;
        } catch {
          return null;
        }
      }
      return null;
    }
static getPlatformDisplayName(platformType) {
      const displayNames = {
        [PlatformType.DOUYIN]: "抖音",
        [PlatformType.BILIBILI]: "哔哩哔哩"
      };
      return displayNames[platformType] || "未知平台";
    }
  }
  var LogColors = ((LogColors2) => {
    LogColors2["PRIMARY"] = "#3498db";
    LogColors2["SUCCESS"] = "#27ae60";
    LogColors2["ERROR"] = "#e74c3c";
    LogColors2["WARNING"] = "#f39c12";
    LogColors2["INFO"] = "#2980b9";
    LogColors2["MUTED"] = "#95a5a6";
    return LogColors2;
  })(LogColors || {});
  const platforms = [new DouyinPlatform(), new BilibiliPlatform()];
  function getCurrentPlatform() {
    return platforms.find((platform) => platform.isCurrentPlatform()) || null;
  }
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const trashSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1773151147382'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4468'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='256'%20height='256'%3e%3cpath%20d='M874.666667%20241.066667h-202.666667V170.666667c0-40.533333-34.133333-74.666667-74.666667-74.666667h-170.666666c-40.533333%200-74.666667%2034.133333-74.666667%2074.666667v70.4H149.333333c-17.066667%200-32%2014.933333-32%2032s14.933333%2032%2032%2032h53.333334V853.333333c0%2040.533333%2034.133333%2074.666667%2074.666666%2074.666667h469.333334c40.533333%200%2074.666667-34.133333%2074.666666-74.666667V305.066667H874.666667c17.066667%200%2032-14.933333%2032-32s-14.933333-32-32-32zM416%20170.666667c0-6.4%204.266667-10.666667%2010.666667-10.666667h170.666666c6.4%200%2010.666667%204.266667%2010.666667%2010.666667v70.4h-192V170.666667z%20m341.333333%20682.666666c0%206.4-4.266667%2010.666667-10.666666%2010.666667H277.333333c-6.4%200-10.666667-4.266667-10.666666-10.666667V309.333333h490.666666V853.333333z'%20fill='%23666666'%20p-id='4469'%3e%3c/path%3e%3cpath%20d='M426.666667%20736c17.066667%200%2032-14.933333%2032-32V490.666667c0-17.066667-14.933333-32-32-32s-32%2014.933333-32%2032v213.333333c0%2017.066667%2014.933333%2032%2032%2032zM597.333333%20736c17.066667%200%2032-14.933333%2032-32V490.666667c0-17.066667-14.933333-32-32-32s-32%2014.933333-32%2032v213.333333c0%2017.066667%2014.933333%2032%2032%2032z'%20fill='%23666666'%20p-id='4470'%3e%3c/path%3e%3c/svg%3e";
  const expandSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1773151113630'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4164'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='256'%20height='256'%3e%3cpath%20d='M149.333333%20394.666667c17.066667%200%2032-14.933333%2032-32v-136.533334l187.733334%20187.733334c6.4%206.4%2014.933333%208.533333%2023.466666%208.533333s17.066667-2.133333%2023.466667-8.533333c12.8-12.8%2012.8-32%200-44.8l-187.733333-187.733334H362.666667c17.066667%200%2032-14.933333%2032-32s-14.933333-32-32-32H149.333333c-4.266667%200-8.533333%200-10.666666%202.133334-8.533333%204.266667-14.933333%2010.666667-19.2%2017.066666-2.133333%204.266667-2.133333%208.533333-2.133334%2012.8v213.333334c0%2017.066667%2014.933333%2032%2032%2032zM874.666667%20629.333333c-17.066667%200-32%2014.933333-32%2032v136.533334L642.133333%20597.333333c-12.8-12.8-32-12.8-44.8%200s-12.8%2032%200%2044.8l200.533334%20200.533334H661.333333c-17.066667%200-32%2014.933333-32%2032s14.933333%2032%2032%2032h213.333334c4.266667%200%208.533333%200%2010.666666-2.133334%208.533333-4.266667%2014.933333-8.533333%2017.066667-17.066666%202.133333-4.266667%202.133333-8.533333%202.133333-10.666667V661.333333c2.133333-17.066667-12.8-32-29.866666-32zM381.866667%20595.2l-200.533334%20200.533333V661.333333c0-17.066667-14.933333-32-32-32s-32%2014.933333-32%2032v213.333334c0%204.266667%200%208.533333%202.133334%2010.666666%204.266667%208.533333%208.533333%2014.933333%2017.066666%2017.066667%204.266667%202.133333%208.533333%202.133333%2010.666667%202.133333h213.333333c17.066667%200%2032-14.933333%2032-32s-14.933333-32-32-32h-136.533333l200.533333-200.533333c12.8-12.8%2012.8-32%200-44.8s-29.866667-10.666667-42.666666%200zM904.533333%20138.666667c0-2.133333%200-2.133333%200%200-4.266667-8.533333-10.666667-14.933333-17.066666-17.066667-4.266667-2.133333-8.533333-2.133333-10.666667-2.133333H661.333333c-17.066667%200-32%2014.933333-32%2032s14.933333%2032%2032%2032h136.533334l-187.733334%20187.733333c-12.8%2012.8-12.8%2032%200%2044.8%206.4%206.4%2014.933333%208.533333%2023.466667%208.533333s17.066667-2.133333%2023.466667-8.533333l187.733333-187.733333V362.666667c0%2017.066667%2014.933333%2032%2032%2032s32-14.933333%2032-32V149.333333c-2.133333-4.266667-2.133333-8.533333-4.266667-10.666666z'%20fill='%23666666'%20p-id='4165'%3e%3c/path%3e%3c/svg%3e";
  const shrinkSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1773151123559'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4318'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='256'%20height='256'%3e%3cpath%20d='M313.6%20358.4H177.066667c-17.066667%200-32%2014.933333-32%2032s14.933333%2032%2032%2032h213.333333c4.266667%200%208.533333%200%2010.666667-2.133333%208.533333-4.266667%2014.933333-8.533333%2017.066666-17.066667%202.133333-4.266667%202.133333-8.533333%202.133334-10.666667v-213.333333c0-17.066667-14.933333-32-32-32s-32%2014.933333-32%2032v136.533333L172.8%20125.866667c-12.8-12.8-32-12.8-44.8%200-12.8%2012.8-12.8%2032%200%2044.8l185.6%20187.733333zM695.466667%20650.666667H832c17.066667%200%2032-14.933333%2032-32s-14.933333-32-32-32H618.666667c-4.266667%200-8.533333%200-10.666667%202.133333-8.533333%204.266667-14.933333%208.533333-17.066667%2017.066667-2.133333%204.266667-2.133333%208.533333-2.133333%2010.666666v213.333334c0%2017.066667%2014.933333%2032%2032%2032s32-14.933333%2032-32v-136.533334l200.533333%20200.533334c6.4%206.4%2014.933333%208.533333%2023.466667%208.533333s17.066667-2.133333%2023.466667-8.533333c12.8-12.8%2012.8-32%200-44.8l-204.8-198.4zM435.2%20605.866667c-4.266667-8.533333-8.533333-14.933333-17.066667-17.066667-4.266667-2.133333-8.533333-2.133333-10.666666-2.133333H192c-17.066667%200-32%2014.933333-32%2032s14.933333%2032%2032%2032h136.533333L128%20851.2c-12.8%2012.8-12.8%2032%200%2044.8%206.4%206.4%2014.933333%208.533333%2023.466667%208.533333s17.066667-2.133333%2023.466666-8.533333l200.533334-200.533333V832c0%2017.066667%2014.933333%2032%2032%2032s32-14.933333%2032-32V618.666667c-2.133333-4.266667-2.133333-8.533333-4.266667-12.8zM603.733333%20403.2c4.266667%208.533333%208.533333%2014.933333%2017.066667%2017.066667%204.266667%202.133333%208.533333%202.133333%2010.666667%202.133333h213.333333c17.066667%200%2032-14.933333%2032-32s-14.933333-32-32-32h-136.533333L896%20170.666667c12.8-12.8%2012.8-32%200-44.8-12.8-12.8-32-12.8-44.8%200l-187.733333%20187.733333V177.066667c0-17.066667-14.933333-32-32-32s-32%2014.933333-32%2032v213.333333c2.133333%204.266667%202.133333%208.533333%204.266666%2012.8z'%20fill='%23666666'%20p-id='4319'%3e%3c/path%3e%3c/svg%3e";
  const lockSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1773151097399'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4009'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='256'%20height='256'%3e%3cpath%20d='M785.066667%20416h-61.866667v-121.6c0-108.8-91.733333-198.4-202.666667-198.4s-202.666667%2089.6-202.666666%20198.4v121.6h-78.933334c-55.466667%200-100.266667%2044.8-100.266666%20100.266667v311.466666c0%2055.466667%2044.8%20100.266667%20100.266666%20100.266667h546.133334c55.466667%200%20100.266667-44.8%20100.266666-100.266667V516.266667c0-55.466667-44.8-100.266667-100.266666-100.266667z%20m-403.2-121.6c0-74.666667%2061.866667-134.4%20138.666666-134.4s138.666667%2059.733333%20138.666667%20134.4v121.6h-277.333333v-121.6z%20m439.466666%20533.333333c0%2019.2-17.066667%2036.266667-36.266666%2036.266667H238.933333c-19.2%200-36.266667-17.066667-36.266666-36.266667V516.266667c0-19.2%2017.066667-36.266667%2036.266666-36.266667h546.133334c19.2%200%2036.266667%2017.066667%2036.266666%2036.266667v311.466666z'%20fill='%23666666'%20p-id='4010'%3e%3c/path%3e%3cpath%20d='M512%20544c-17.066667%200-32%2014.933333-32%2032v106.666667c0%2017.066667%2014.933333%2032%2032%2032s32-14.933333%2032-32v-106.666667c0-17.066667-14.933333-32-32-32z'%20fill='%23666666'%20p-id='4011'%3e%3c/path%3e%3c/svg%3e";
  const unlockSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1773151085100'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='3858'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='256'%20height='256'%3e%3cpath%20d='M785.066667%20416H381.866667v-121.6c0-74.666667%2061.866667-134.4%20138.666666-134.4%2059.733333%200%20113.066667%2036.266667%20132.266667%2091.733333%206.4%2017.066667%2023.466667%2025.6%2040.533333%2019.2%2017.066667-6.4%2025.6-23.466667%2019.2-40.533333-27.733333-81.066667-104.533333-134.4-192-134.4-110.933333%200-202.666667%2089.6-202.666666%20198.4v121.6h-78.933334c-55.466667%200-100.266667%2044.8-100.266666%20100.266667v311.466666c0%2055.466667%2044.8%20100.266667%20100.266666%20100.266667h546.133334c55.466667%200%20100.266667-44.8%20100.266666-100.266667V516.266667c0-55.466667-44.8-100.266667-100.266666-100.266667z%20m36.266666%20411.733333c0%2019.2-17.066667%2036.266667-36.266666%2036.266667H238.933333c-19.2%200-36.266667-17.066667-36.266666-36.266667V516.266667c0-19.2%2017.066667-36.266667%2036.266666-36.266667h546.133334c19.2%200%2036.266667%2017.066667%2036.266666%2036.266667v311.466666z'%20fill='%23666666'%20p-id='3859'%3e%3c/path%3e%3cpath%20d='M512%20544c-17.066667%200-32%2014.933333-32%2032v106.666667c0%2017.066667%2014.933333%2032%2032%2032s32-14.933333%2032-32v-106.666667c0-17.066667-14.933333-32-32-32z'%20fill='%23666666'%20p-id='3860'%3e%3c/path%3e%3c/svg%3e";
  var _GM_getValue = (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_setValue = (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  const _hoisted_1$5 = { class: "log-container" };
  const _hoisted_2$5 = { class: "log-header" };
  const _hoisted_3$4 = { class: "log-controls" };
  const _hoisted_4$4 = ["title"];
  const _hoisted_5$4 = ["src", "alt"];
  const _hoisted_6$4 = ["title"];
  const _hoisted_7$4 = ["src", "alt"];
  const _hoisted_8$3 = ["src"];
  const _hoisted_9$3 = {
    key: 0,
    class: "log-empty"
  };
  const _sfc_main$5 = vue.defineComponent({
    __name: "LogViewer",
    props: {
      filename: { default: "日志" },
      logKey: { default: "default" }
    },
    setup(__props, { expose: __expose }) {
      const props = __props;
      const logs = vue.ref([]);
      const logExpanded = vue.ref(false);
      const autoScroll = vue.ref(true);
      const logAreaRef = vue.useTemplateRef("logArea");
      function getLogsKey() {
        return `block-kit-logs-${props.logKey}`;
      }
      function saveLogs() {
        _GM_setValue(getLogsKey(), JSON.stringify(logs.value));
      }
      function loadLogs() {
        try {
          const saved = _GM_getValue(getLogsKey(), null);
          if (saved) {
            logs.value = JSON.parse(saved);
          }
        } catch (error) {
          console.error("Failed to load logs:", error);
        }
      }
      function addLog(msg, color = "#333") {
        const time = ( new Date()).toLocaleTimeString();
        logs.value.push({ msg, color, time });
        saveLogs();
        if (autoScroll.value) {
          vue.nextTick(() => {
            logAreaRef.value?.scrollTo(0, logAreaRef.value.scrollHeight);
          });
        }
      }
      function clearLogs() {
        logs.value = [];
        saveLogs();
      }
      __expose({
        addLog,
        clearLogs,
        loadLogs,
        logs: logs.value
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
          vue.createElementVNode("div", _hoisted_2$5, [
            _cache[2] || (_cache[2] = vue.createElementVNode("span", null, "执行日志", -1)),
            vue.createElementVNode("div", _hoisted_3$4, [
              vue.createElementVNode("button", {
                class: "log-control-btn",
                title: autoScroll.value ? "关闭自动滚动" : "开启自动滚动",
                onClick: _cache[0] || (_cache[0] = ($event) => autoScroll.value = !autoScroll.value)
              }, [
                vue.createElementVNode("img", {
                  src: autoScroll.value ? vue.unref(lockSvg) : vue.unref(unlockSvg),
                  alt: autoScroll.value ? "锁定" : "解锁"
                }, null, 8, _hoisted_5$4)
              ], 8, _hoisted_4$4),
              vue.createElementVNode("button", {
                class: "log-control-btn",
                title: logExpanded.value ? "收起日志" : "展开日志",
                onClick: _cache[1] || (_cache[1] = ($event) => logExpanded.value = !logExpanded.value)
              }, [
                vue.createElementVNode("img", {
                  src: logExpanded.value ? vue.unref(shrinkSvg) : vue.unref(expandSvg),
                  alt: logExpanded.value ? "收起" : "展开"
                }, null, 8, _hoisted_7$4)
              ], 8, _hoisted_6$4),
              vue.createElementVNode("button", {
                class: "log-control-btn",
                title: "清除日志",
                onClick: clearLogs
              }, [
                vue.createElementVNode("img", {
                  src: vue.unref(trashSvg),
                  alt: "删除"
                }, null, 8, _hoisted_8$3)
              ])
            ])
          ]),
          vue.createElementVNode("div", {
            ref: "logArea",
            class: vue.normalizeClass(["log-area", { expanded: logExpanded.value }])
          }, [
            logs.value.length === 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_9$3, " 等待开始... ")) : vue.createCommentVNode("", true),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(logs.value, (log, i) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                key: i,
                class: "log-item",
                style: vue.normalizeStyle({ color: log.color })
              }, " [" + vue.toDisplayString(log.time) + "] " + vue.toDisplayString(log.msg), 5);
            }), 128))
          ], 2)
        ]);
      };
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const LogViewer = _export_sfc(_sfc_main$5, [["__scopeId", "data-v-74131611"]]);
  const _hoisted_1$4 = { class: "content" };
  const _hoisted_2$4 = { class: "form-group" };
  const _hoisted_3$3 = ["disabled"];
  const _hoisted_4$3 = { class: "form-group" };
  const _hoisted_5$3 = ["disabled"];
  const _hoisted_6$3 = { class: "form-group" };
  const _hoisted_7$3 = ["disabled"];
  const _hoisted_8$2 = { class: "counter" };
  const _hoisted_9$2 = { class: "count" };
  const _sfc_main$4 = vue.defineComponent({
    __name: "BlacklistManager",
    setup(__props) {
      const isRunning = vue.ref(false);
      const isStopped = vue.ref(false);
      const removedCount = vue.ref(0);
      const logViewerRef = vue.useTemplateRef("logViewer");
      const platform = getCurrentPlatform();
      function addLog(msg, color = "#333") {
        logViewerRef.value?.addLog(msg, color);
      }
      async function startCleanup() {
        isRunning.value = true;
        isStopped.value = false;
        removedCount.value = 0;
        logViewerRef.value?.clearLogs();
        addLog("开始清理黑名单...", "#3498db");
        let page = 1;
        let totalRemoved = 0;
        while (!isStopped.value) {
          const res = await fetch(
            `https://api.bilibili.com/x/relation/blacks?re_version=0&pn=${page}&ps=50&jsonp=jsonp&web_location=333.33`,
            {
              credentials: "include"
            }
          );
          const data = await res.json();
          const list = data.data?.list || [];
          if (list.length === 0) {
            addLog("黑名单已清空", "#27ae60");
            break;
          }
          addLog(`处理第 ${page} 页，共 ${list.length} 个用户`, "#3498db");
          for (const item of list) {
            if (isStopped.value) break;
            if (await platform.removeFromBlacklist(item.mid)) {
              totalRemoved++;
              removedCount.value = totalRemoved;
              addLog(`✓ 移除成功：${item.uname}`, "#27ae60");
            } else {
              addLog(`✗ 移除失败：${item.uname}`, "#e74c3c");
            }
            await sleep(500);
          }
          page++;
          await sleep(1e3);
        }
        addLog(`清理完成！共移除 ${totalRemoved} 个用户`, "#3498db");
        isRunning.value = false;
      }
      async function exportBlacklist() {
        addLog("开始导出黑名单...", "#3498db");
        const blacklist = await platform.fetchBlacklist();
        if (blacklist.length === 0) {
          addLog("黑名单为空", "#f39c12");
          return;
        }
        const csv = ["UID,用户名", ...blacklist.map((u) => `${u.uid},${u.name}`)].join("\n");
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `bilibili_blacklist_${( new Date()).toISOString().split("T")[0]}.csv`);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        addLog(`导出完成！共 ${blacklist.length} 个用户`, "#27ae60");
      }
      function stopCleanup() {
        isStopped.value = true;
        addLog("清理已停止", "#e74c3c");
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [
          vue.createElementVNode("div", _hoisted_2$4, [
            vue.createElementVNode("button", {
              class: "btn-start",
              title: "开始清理黑名单中的所有用户",
              disabled: isRunning.value,
              onClick: startCleanup
            }, " 清理黑名单 ", 8, _hoisted_3$3)
          ]),
          vue.createElementVNode("div", _hoisted_4$3, [
            vue.createElementVNode("button", {
              class: "btn-start",
              title: "导出黑名单为 CSV 文件",
              disabled: isRunning.value,
              onClick: exportBlacklist
            }, " 导出黑名单 ", 8, _hoisted_5$3)
          ]),
          vue.createElementVNode("div", _hoisted_6$3, [
            vue.createElementVNode("button", {
              class: "btn-stop",
              title: "停止清理任务",
              disabled: !isRunning.value,
              onClick: stopCleanup
            }, " 停止清理 ", 8, _hoisted_7$3)
          ]),
          vue.createVNode(LogViewer, {
            ref: "logViewer",
            filename: "黑名单管理日志",
            "log-key": "manager-bilibili"
          }, null, 512),
          vue.createElementVNode("div", _hoisted_8$2, [
            _cache[0] || (_cache[0] = vue.createTextVNode(" 已移除： ", -1)),
            vue.createElementVNode("span", _hoisted_9$2, vue.toDisplayString(removedCount.value), 1),
            _cache[1] || (_cache[1] = vue.createTextVNode(" 个用户 ", -1))
          ])
        ]);
      };
    }
  });
  const BlacklistManager = _export_sfc(_sfc_main$4, [["__scopeId", "data-v-55b67a04"]]);
  const STORAGE_KEY = "block-kit-templates";
  const COMMUNITY_INITIALIZED_KEY = "block-kit-community-initialized";
  const COMMUNITY_TEMPLATES = [
    {
      id: "community-official-media",
      name: "官方新闻媒体",
      icon: "📰",
      keywords: "新闻,共青团,官方,日报,资讯,政务,央视,新华,人民,时讯,快讯,发布,权威,央媒,党媒,快报,要闻,团委,中青,时政,民生,法治,纪检,监察,公示,公告,通知,官微,政讯",
      source: "community",
      author: "Steven-Qiang"
    },
    {
      id: "community-marketing-account",
      name: "营销号流量号",
      icon: "📢",
      keywords: "热点,评测,文旅,考公,头条",
      source: "community",
      author: "Steven-Qiang"
    },
    {
      id: "community-metaphysics-superstition",
      name: "玄学迷信",
      icon: "🔮",
      keywords: "中医,玄学,八字,命理,化灾,风水,算命,转运,开光,卜卦,占星,手相,面相,祈福,辟邪,招财",
      source: "community",
      author: "Steven-Qiang"
    },
    {
      id: "community-tv-channel",
      name: "电视台栏目频道",
      icon: "📺",
      keywords: "电视台,栏目,卫视,综艺,影视,剧场,节目,文艺,文娱,剧集,热播,栏目组,地方台,卫视直播,卫视综艺,综合频道",
      source: "community",
      author: "Steven-Qiang"
    },
    {
      id: "community-game-promotion",
      name: "游戏推广",
      icon: "🎮",
      keywords: "游戏,手游,网游,传奇,私服,外挂,代练,礼包,皮肤,充值,返利,内测,公测,仙侠,卡牌,辅助,福利",
      source: "community",
      author: "Steven-Qiang"
    }
  ];
  class TemplateStore {
    templates = [];
    constructor() {
      this.loadTemplates();
      this.initCommunityTemplates();
    }
    initCommunityTemplates() {
      try {
        const initialized = _GM_getValue(COMMUNITY_INITIALIZED_KEY, false);
        if (!initialized) {
          this.templates.push(...COMMUNITY_TEMPLATES);
          this.saveTemplates();
          _GM_setValue(COMMUNITY_INITIALIZED_KEY, true);
        }
      } catch (error) {
        console.error("Failed to initialize community templates:", error);
      }
    }
    loadTemplates() {
      try {
        const stored = _GM_getValue(STORAGE_KEY, null);
        if (stored) {
          this.templates = JSON.parse(stored);
        } else {
          this.templates = [];
          this.saveTemplates();
        }
      } catch (error) {
        console.error("Failed to load templates:", error);
        this.templates = [];
      }
    }
    saveTemplates() {
      try {
        _GM_setValue(STORAGE_KEY, JSON.stringify(this.templates));
      } catch (error) {
        console.error("Failed to save templates:", error);
      }
    }
    getTemplates() {
      return [...this.templates];
    }
    addTemplate(template) {
      const newTemplate = {
        ...template,
        id: `user-${Date.now()}`,
        source: "user"
      };
      this.templates.push(newTemplate);
      this.saveTemplates();
      return newTemplate;
    }
    addCommunityTemplate(template) {
      const existing = this.templates.find((t) => t.id === template.id);
      if (existing) {
        const index = this.templates.findIndex((t) => t.id === template.id);
        this.templates[index] = template;
      } else {
        this.templates.push(template);
      }
      this.saveTemplates();
      return this.templates.find((t) => t.id === template.id);
    }
    updateTemplate(id, updates) {
      const index = this.templates.findIndex((t) => t.id === id);
      if (index !== -1) {
        this.templates[index] = { ...this.templates[index], ...updates };
        this.saveTemplates();
      }
    }
    deleteTemplate(id) {
      this.templates = this.templates.filter((t) => t.id !== id);
      this.saveTemplates();
    }
    resetToDefaults() {
      this.templates = [];
      this.saveTemplates();
    }
  }
  let templateStore;
  function useTemplateStore() {
    if (!templateStore) {
      templateStore = new TemplateStore();
    }
    return templateStore;
  }
  const _hoisted_1$3 = { class: "content" };
  const _hoisted_2$3 = {
    key: 0,
    class: "warning-banner"
  };
  const _hoisted_3$2 = { class: "form-group" };
  const _hoisted_4$2 = { class: "input-with-dropdown" };
  const _hoisted_5$2 = ["disabled"];
  const _hoisted_6$2 = ["disabled"];
  const _hoisted_7$2 = {
    key: 0,
    class: "dropdown-menu"
  };
  const _hoisted_8$1 = ["onClick"];
  const _hoisted_9$1 = { class: "item-icon" };
  const _hoisted_10$1 = { class: "item-name" };
  const _hoisted_11$1 = { class: "form-group" };
  const _hoisted_12$1 = ["disabled"];
  const _hoisted_13$1 = { class: "form-group" };
  const _hoisted_14$1 = { class: "checkbox-label" };
  const _hoisted_15$1 = ["disabled"];
  const _hoisted_16$1 = {
    key: 1,
    class: "form-group"
  };
  const _hoisted_17$1 = ["disabled"];
  const _hoisted_18$1 = { class: "form-group" };
  const _hoisted_19$1 = { class: "advanced-content" };
  const _hoisted_20$1 = { class: "advanced-item" };
  const _hoisted_21$1 = ["disabled"];
  const _hoisted_22$1 = { class: "advanced-item" };
  const _hoisted_23 = ["disabled"];
  const _hoisted_24 = { class: "form-group" };
  const _hoisted_25 = ["disabled"];
  const _hoisted_26 = { class: "form-group" };
  const _hoisted_27 = ["disabled"];
  const _hoisted_28 = { class: "counter" };
  const _hoisted_29 = { key: 0 };
  const _hoisted_30 = { class: "count" };
  const _hoisted_31 = { class: "count" };
  const _hoisted_32 = { key: 1 };
  const _hoisted_33 = { class: "count" };
  const SETTINGS_KEY = "block-kit-settings";
  const _sfc_main$3 = vue.defineComponent({
    __name: "BlockingTool",
    setup(__props) {
      const SEPARATOR_REGEX = /[,，]/;
      const state = vue.reactive({
        keyword: "",
        limit: 10,
        isRunning: false,
        isStopped: false,
        blockedCount: 0,
        keywordBlockedCount: 0,
        currentKeyword: "",
        onlyVerified: false,
        verifyFilter: "",
        showAdvanced: false,
        delay: 1e3,
        pageDelay: 2e3
      });
      const currentPlatform = getCurrentPlatform();
      const logViewerRef = vue.useTemplateRef("logViewer");
      const isDouyinSearchPage = vue.ref(false);
      function saveSettings() {
        _GM_setValue(SETTINGS_KEY, JSON.stringify(state));
      }
      function loadSettings() {
        try {
          const saved = _GM_getValue(SETTINGS_KEY, null);
          if (saved) {
            const settings = JSON.parse(saved);
            Object.assign(state, {
              keyword: settings.keyword ?? "",
              limit: settings.limit ?? 10,
              onlyVerified: settings.onlyVerified ?? false,
              verifyFilter: settings.verifyFilter ?? "",
              delay: settings.delay ?? 1e3,
              pageDelay: settings.pageDelay ?? 2e3,
              showAdvanced: settings.showAdvanced ?? false,
              blockedCount: settings.blockedCount ?? 0,
              keywordBlockedCount: settings.keywordBlockedCount ?? 0,
              currentKeyword: settings.currentKeyword ?? ""
            });
          }
        } catch (error) {
          console.error("Failed to load settings:", error);
        }
      }
      const templateStore2 = useTemplateStore();
      const keywordTemplates = vue.ref(templateStore2.getTemplates());
      const showDropdown = vue.ref(false);
      const dropdownRef = vue.useTemplateRef("dropdownRef");
      function applyTemplate(keywords2) {
        state.keyword = keywords2;
        showDropdown.value = false;
      }
      function handleClickOutside(event) {
        if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
          showDropdown.value = false;
        }
      }
      vue.onMounted(() => {
        loadSettings();
        keywordTemplates.value = templateStore2.getTemplates();
        document.addEventListener("click", handleClickOutside);
        if (PlatformUtils.isDouyin(currentPlatform)) {
          isDouyinSearchPage.value = location.pathname.includes("/search/");
        }
        setTimeout(() => {
          logViewerRef.value?.loadLogs();
        }, 100);
      });
      vue.watch(
        state,
        () => {
          saveSettings();
        },
        { deep: true }
      );
      vue.onUnmounted(() => {
        saveSettings();
        document.removeEventListener("click", handleClickOutside);
      });
      function addLog(msg, color = LogColors.MUTED) {
        logViewerRef.value?.addLog(msg, color);
        saveSettings();
      }
      async function startTask() {
        if (!state.keyword.trim()) {
          alert("请输入搜索关键词！");
          return;
        }
        if (state.limit < 0) {
          alert("拉黑数量输入不正确");
          return;
        }
        if (!currentPlatform) {
          alert("当前平台不支持！请在抖音或哔哩哔哩网页版使用");
          return;
        }
        state.isRunning = true;
        state.isStopped = false;
        state.blockedCount = 0;
        state.keywordBlockedCount = 0;
        state.currentKeyword = "";
        logViewerRef.value?.clearLogs();
        const keywords2 = state.keyword.split(SEPARATOR_REGEX).map((k) => k.trim()).filter((k) => k);
        for (let i = 0; i < keywords2.length && !state.isStopped; i++) {
          const currentKeyword = keywords2[i];
          addLog(`[${i + 1}/${keywords2.length}] 开始处理关键词「${currentKeyword}」`, LogColors.PRIMARY);
          await processKeyword(currentKeyword);
          if (i < keywords2.length - 1 && !state.isStopped) {
            addLog(`关键词「${currentKeyword}」处理完成，等待 2 秒后处理下一个...`, LogColors.MUTED);
            await sleep(2e3);
          }
        }
        addLog(`所有任务结束！共成功拉黑 ${state.blockedCount} 个用户`, LogColors.PRIMARY);
        state.isRunning = false;
      }
      async function processKeyword(keywordName) {
        state.currentKeyword = keywordName;
        state.keywordBlockedCount = 0;
        let currentPage = 0;
        while (!state.isStopped && (state.limit === 0 || state.keywordBlockedCount < state.limit)) {
          addLog(`获取第 ${currentPage + 1} 页用户...`, LogColors.INFO);
          const { users, hasMore } = await currentPlatform.searchUsers(keywordName, currentPage, (msg) => {
            addLog(msg, LogColors.INFO);
          });
          if (users.length === 0) {
            addLog("无更多用户，任务结束", LogColors.WARNING);
            break;
          }
          for (const item of users) {
            if (state.limit > 0 && state.keywordBlockedCount >= state.limit || state.isStopped) break;
            const user = {
              nickname: item.user_info.nickname,
              uid: item.user_info.uid,
              sec_uid: item.user_info.sec_uid
            };
            const isBlocked = PlatformUtils.isUserBlocked(currentPlatform, item.user_info);
            if (isBlocked) {
              addLog(`已拉黑：${user.nickname}（跳过）`, LogColors.MUTED);
              continue;
            }
            if (state.onlyVerified && !PlatformUtils.isVerifiedUser(currentPlatform, item.user_info)) {
              addLog(`非认证用户：${user.nickname}（跳过）`, LogColors.MUTED);
              continue;
            }
            if (state.onlyVerified && state.verifyFilter && PlatformUtils.isDouyin(currentPlatform)) {
              const verifyType = PlatformUtils.getVerifyType(currentPlatform, item.user_info);
              if (verifyType) {
                const filters = state.verifyFilter.split(SEPARATOR_REGEX).map((f) => f.trim()).filter((f) => f);
                const matched = filters.some((filter) => verifyType.includes(filter));
                if (!matched) {
                  addLog(`认证类型不匹配：${user.nickname} [${verifyType}]（跳过）`, LogColors.MUTED);
                  continue;
                }
              }
            }
            if (await currentPlatform.blockUser(user)) {
              state.keywordBlockedCount++;
              state.blockedCount++;
              addLog(`✓ 拉黑成功：${user.nickname}`, LogColors.SUCCESS);
            } else {
              addLog(`✗ 拉黑失败：${user.nickname}`, LogColors.ERROR);
            }
            await sleep(state.delay);
          }
          if (!hasMore) break;
          currentPage++;
          await sleep(state.pageDelay);
        }
        addLog(`关键词「${keywordName}」处理完成，拉黑 ${state.keywordBlockedCount} 个用户`, LogColors.PRIMARY);
      }
      function stopTask() {
        state.isStopped = true;
        addLog("任务已停止", LogColors.ERROR);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [
          vue.unref(PlatformUtils).isDouyin(vue.unref(currentPlatform)) && isDouyinSearchPage.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$3, " ⚠ 不建议在抖音搜索页面使用本脚本，可能触发风控导致搜索失败！请切换到其他页面使用。 ")) : vue.createCommentVNode("", true),
          vue.createElementVNode("div", _hoisted_3$2, [
            _cache[8] || (_cache[8] = vue.createElementVNode("label", null, "搜索关键词：", -1)),
            vue.createElementVNode("div", _hoisted_4$2, [
              vue.withDirectives(vue.createElementVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.keyword = $event),
                type: "text",
                placeholder: "用逗号分隔，例如：新闻,日报,资讯",
                disabled: state.isRunning
              }, null, 8, _hoisted_5$2), [
                [vue.vModelText, state.keyword]
              ]),
              vue.createElementVNode("div", {
                ref_key: "dropdownRef",
                ref: dropdownRef,
                class: "template-dropdown"
              }, [
                vue.createElementVNode("button", {
                  class: "dropdown-btn",
                  title: "选择预设关键词模板",
                  disabled: state.isRunning,
                  onClick: _cache[1] || (_cache[1] = ($event) => showDropdown.value = !showDropdown.value)
                }, " ★ 预设 ", 8, _hoisted_6$2),
                showDropdown.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_7$2, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(keywordTemplates.value, (template) => {
                    return vue.openBlock(), vue.createElementBlock("div", {
                      key: template.id,
                      class: "dropdown-item",
                      onClick: ($event) => applyTemplate(template.keywords)
                    }, [
                      vue.createElementVNode("span", _hoisted_9$1, vue.toDisplayString(template.icon), 1),
                      vue.createElementVNode("span", _hoisted_10$1, vue.toDisplayString(template.name), 1)
                    ], 8, _hoisted_8$1);
                  }), 128))
                ])) : vue.createCommentVNode("", true)
              ], 512)
            ])
          ]),
          vue.createElementVNode("div", _hoisted_11$1, [
            _cache[9] || (_cache[9] = vue.createElementVNode("label", null, "目标拉黑数量(每个关键词)：", -1)),
            vue.withDirectives(vue.createElementVNode("input", {
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => state.limit = $event),
              type: "number",
              min: "0",
              disabled: state.isRunning
            }, null, 8, _hoisted_12$1), [
              [
                vue.vModelText,
                state.limit,
                void 0,
                { number: true }
              ]
            ]),
            _cache[10] || (_cache[10] = vue.createElementVNode("div", { class: "hint" }, " 数量 0 表示不限制，直到无搜索结果 ", -1))
          ]),
          vue.createElementVNode("div", _hoisted_13$1, [
            vue.createElementVNode("label", _hoisted_14$1, [
              vue.withDirectives(vue.createElementVNode("input", {
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => state.onlyVerified = $event),
                type: "checkbox",
                disabled: state.isRunning
              }, null, 8, _hoisted_15$1), [
                [vue.vModelCheckbox, state.onlyVerified]
              ]),
              _cache[11] || (_cache[11] = vue.createTextVNode(" 只拉黑认证用户 ", -1))
            ])
          ]),
          state.onlyVerified && vue.unref(PlatformUtils).isDouyin(vue.unref(currentPlatform)) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_16$1, [
            _cache[12] || (_cache[12] = vue.createElementVNode("label", null, "认证类型关键词（可选）：", -1)),
            vue.withDirectives(vue.createElementVNode("input", {
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => state.verifyFilter = $event),
              type: "text",
              placeholder: "例如：官方,媒体,新闻",
              disabled: state.isRunning
            }, null, 8, _hoisted_17$1), [
              [vue.vModelText, state.verifyFilter]
            ]),
            _cache[13] || (_cache[13] = vue.createElementVNode("div", { class: "hint" }, " 过滤包含指定关键词的认证类型，用逗号分隔，留空表示不过滤 ", -1))
          ])) : vue.createCommentVNode("", true),
          vue.createElementVNode("div", _hoisted_18$1, [
            vue.createElementVNode("div", {
              class: "advanced-toggle",
              onClick: _cache[5] || (_cache[5] = ($event) => state.showAdvanced = !state.showAdvanced)
            }, [
              _cache[14] || (_cache[14] = vue.createElementVNode("span", null, "高级设置", -1)),
              vue.createElementVNode("span", {
                class: vue.normalizeClass(["arrow", { expanded: state.showAdvanced }])
              }, "▼", 2)
            ]),
            vue.withDirectives(vue.createElementVNode("div", _hoisted_19$1, [
              vue.createElementVNode("div", _hoisted_20$1, [
                _cache[15] || (_cache[15] = vue.createElementVNode("label", null, "操作间隔（毫秒）：", -1)),
                vue.withDirectives(vue.createElementVNode("input", {
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => state.delay = $event),
                  type: "number",
                  step: "100",
                  disabled: state.isRunning
                }, null, 8, _hoisted_21$1), [
                  [
                    vue.vModelText,
                    state.delay,
                    void 0,
                    { number: true }
                  ]
                ]),
                _cache[16] || (_cache[16] = vue.createElementVNode("div", { class: "hint" }, " 每次拉黑后的等待时间 ", -1))
              ]),
              vue.createElementVNode("div", _hoisted_22$1, [
                _cache[17] || (_cache[17] = vue.createElementVNode("label", null, "翻页间隔（毫秒）：", -1)),
                vue.withDirectives(vue.createElementVNode("input", {
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => state.pageDelay = $event),
                  type: "number",
                  step: "100",
                  disabled: state.isRunning
                }, null, 8, _hoisted_23), [
                  [
                    vue.vModelText,
                    state.pageDelay,
                    void 0,
                    { number: true }
                  ]
                ]),
                _cache[18] || (_cache[18] = vue.createElementVNode("div", { class: "hint" }, " 每次翻页后的等待时间 ", -1))
              ])
            ], 512), [
              [vue.vShow, state.showAdvanced]
            ])
          ]),
          vue.createElementVNode("div", _hoisted_24, [
            vue.createElementVNode("button", {
              class: "btn-start",
              title: "开始执行拉黑任务",
              disabled: state.isRunning,
              onClick: startTask
            }, " 开始拉黑 ", 8, _hoisted_25)
          ]),
          vue.createElementVNode("div", _hoisted_26, [
            vue.createElementVNode("button", {
              class: "btn-stop",
              title: "停止当前拉黑任务",
              disabled: !state.isRunning,
              onClick: stopTask
            }, " 停止任务 ", 8, _hoisted_27)
          ]),
          vue.createVNode(LogViewer, {
            ref: "logViewer",
            filename: "拉黑日志",
            "log-key": `blocking-${vue.unref(currentPlatform)?.name || "unknown"}`
          }, null, 8, ["log-key"]),
          vue.createElementVNode("div", _hoisted_28, [
            state.currentKeyword ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_29, [
              vue.createTextVNode(vue.toDisplayString(state.currentKeyword) + "：已拉黑： ", 1),
              vue.createElementVNode("span", _hoisted_30, vue.toDisplayString(state.keywordBlockedCount), 1),
              vue.createTextVNode(" " + vue.toDisplayString(state.limit > 0 ? ` / ${state.limit}` : "") + " | 总计： ", 1),
              vue.createElementVNode("span", _hoisted_31, vue.toDisplayString(state.blockedCount), 1)
            ])) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_32, [
              _cache[19] || (_cache[19] = vue.createTextVNode(" 已拉黑： ", -1)),
              vue.createElementVNode("span", _hoisted_33, vue.toDisplayString(state.blockedCount), 1)
            ]))
          ])
        ]);
      };
    }
  });
  const BlockingTool = _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c1e5c150"]]);
  const logoSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1773148936752'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='1617'%20width='256'%20height='256'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20d='M512.608%20768H223.872A31.904%2031.904%200%200%201%20192%20736.16L192.096%20256h608.192c17.504%200%2031.68%2014.432%2031.68%2032.128v161.856a32%2032%200%200%200%2064%200V288.128A96%2096%200%200%200%20800.32%20192H192.096A64%2064%200%200%200%20128%20255.776v480.384A96%2096%200%200%200%20223.872%20832h288.736a32%2032%200%200%200%200-64'%20fill='currentColor'%20p-id='1618'%3e%3c/path%3e%3cpath%20d='M416%20512H288a32%2032%200%200%200%200%2064h128a32%2032%200%200%200%200-64M416%20640H288a32%2032%200%200%200%200%2064h128a32%2032%200%200%200%200-64M544%20384H288a32%2032%200%200%200%200%2064h256a32%2032%200%200%200%200-64M768%20832c-70.592%200-128-57.408-128-128%200-23.68%206.88-45.568%2018.144-64.608l174.464%20174.464A126.304%20126.304%200%200%201%20768%20832m0-256c70.592%200%20128%2057.408%20128%20128%200%2023.68-6.88%2045.568-18.144%2064.608l-174.464-174.464A126.304%20126.304%200%200%201%20768%20576m0-64c-105.888%200-192%2086.112-192%20192s86.112%20192%20192%20192%20192-86.112%20192-192-86.112-192-192-192'%20fill='currentColor'%20p-id='1619'%3e%3c/path%3e%3c/svg%3e";
  const _hoisted_1$2 = ["src"];
  const _hoisted_2$2 = { class: "content-wrapper" };
  const _sfc_main$2 = vue.defineComponent({
    __name: "FloatingBall",
    props: {
      title: {},
      defaultExpanded: { type: Boolean }
    },
    setup(__props) {
      const props = __props;
      const isExpanded = vue.ref(false);
      const isAnimating = vue.ref(false);
      const panelWidth = vue.ref(350);
      const isInitialized = vue.ref(false);
      const isDragging = vue.ref(false);
      const dragMoved = vue.ref(false);
      const startX = vue.ref(0);
      const startY = vue.ref(0);
      const panelX = vue.ref(20);
      const panelY = vue.ref(window.innerHeight * 0.1);
      vue.watch(
        () => props.defaultExpanded,
        (newVal) => {
          if (!isInitialized.value && newVal !== void 0) {
            isExpanded.value = newVal;
            isInitialized.value = true;
            if (newVal) {
              setTimeout(snapToEdge, 50);
            }
          }
        },
        { immediate: true }
      );
      function updatePanelWidth() {
        const screenWidth = window.innerWidth;
        panelWidth.value = Math.min(350, screenWidth - 40);
      }
      function snapToEdge() {
        const centerX = panelX.value + 30;
        const screenWidth = window.innerWidth;
        let targetX;
        if (isExpanded.value) {
          targetX = centerX < screenWidth / 2 ? 10 : screenWidth - panelWidth.value - 20;
        } else {
          targetX = centerX < screenWidth / 2 ? 10 : screenWidth - 80;
        }
        isAnimating.value = true;
        panelX.value = targetX;
        setTimeout(() => {
          isAnimating.value = false;
        }, 300);
      }
      function handleMouseDown(e) {
        e.preventDefault();
        e.stopPropagation();
        isDragging.value = true;
        dragMoved.value = false;
        startX.value = e.clientX - panelX.value;
        startY.value = e.clientY - panelY.value;
      }
      function handleMouseMove(e) {
        if (isDragging.value) {
          const moveX = Math.abs(e.clientX - startX.value - panelX.value);
          const moveY = Math.abs(e.clientY - startY.value - panelY.value);
          if (moveX > 5 || moveY > 5) {
            dragMoved.value = true;
            panelX.value = e.clientX - startX.value;
            panelY.value = e.clientY - startY.value;
          }
        }
      }
      function handleMouseUp() {
        if (isDragging.value) {
          if (!dragMoved.value) {
            isExpanded.value = !isExpanded.value;
            setTimeout(snapToEdge, 50);
          } else {
            snapToEdge();
          }
        }
        isDragging.value = false;
        dragMoved.value = false;
      }
      function handleResize() {
        updatePanelWidth();
        snapToEdge();
      }
      vue.onMounted(() => {
        updatePanelWidth();
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("resize", handleResize);
      });
      vue.onUnmounted(() => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("resize", handleResize);
      });
      return (_ctx, _cache) => {
        return !isExpanded.value ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass(["float-ball", { animating: isAnimating.value, dragging: isDragging.value }]),
          style: vue.normalizeStyle({ top: `${panelY.value}px`, left: `${panelX.value}px` }),
          onMousedown: handleMouseDown
        }, [
          vue.createElementVNode("img", {
            src: vue.unref(logoSvg),
            class: "ball-icon",
            alt: "logo"
          }, null, 8, _hoisted_1$2),
          _cache[1] || (_cache[1] = vue.createElementVNode("div", { class: "ripple" }, null, -1))
        ], 38)) : (vue.openBlock(), vue.createElementBlock("div", {
          key: 1,
          class: "panel",
          style: vue.normalizeStyle({ top: `${panelY.value}px`, left: `${panelX.value}px`, width: `${panelWidth.value}px` })
        }, [
          vue.createElementVNode("div", {
            class: "header",
            onMousedown: handleMouseDown
          }, [
            vue.createElementVNode("span", null, vue.toDisplayString(__props.title), 1),
            vue.createElementVNode("button", {
              class: "close-btn",
              title: "收起面板",
              onClick: _cache[0] || (_cache[0] = ($event) => isExpanded.value = false)
            }, " × ")
          ], 32),
          vue.createElementVNode("div", _hoisted_2$2, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ], 4));
      };
    }
  });
  const FloatingBall = _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f90f5c86"]]);
  const addCircleSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1773152471835'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='3804'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='256'%20height='256'%3e%3cpath%20d='M512%2074.666667C270.933333%2074.666667%2074.666667%20270.933333%2074.666667%20512S270.933333%20949.333333%20512%20949.333333%20949.333333%20753.066667%20949.333333%20512%20753.066667%2074.666667%20512%2074.666667z%20m0%20810.666666c-204.8%200-373.333333-168.533333-373.333333-373.333333S307.2%20138.666667%20512%20138.666667%20885.333333%20307.2%20885.333333%20512%20716.8%20885.333333%20512%20885.333333z'%20fill='%23666666'%20p-id='3805'%3e%3c/path%3e%3cpath%20d='M682.666667%20480h-138.666667V341.333333c0-17.066667-14.933333-32-32-32s-32%2014.933333-32%2032v138.666667H341.333333c-17.066667%200-32%2014.933333-32%2032s14.933333%2032%2032%2032h138.666667V682.666667c0%2017.066667%2014.933333%2032%2032%2032s32-14.933333%2032-32v-138.666667H682.666667c17.066667%200%2032-14.933333%2032-32s-14.933333-32-32-32z'%20fill='%23666666'%20p-id='3806'%3e%3c/path%3e%3c/svg%3e";
  const copySvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1773151272083'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='3654'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='256'%20height='256'%3e%3cpath%20d='M853.333333%20224h-53.333333V170.666667c0-40.533333-34.133333-74.666667-74.666667-74.666667H170.666667C130.133333%2096%2096%20130.133333%2096%20170.666667v554.666666c0%2040.533333%2034.133333%2074.666667%2074.666667%2074.666667h53.333333V853.333333c0%2040.533333%2034.133333%2074.666667%2074.666667%2074.666667h554.666666c40.533333%200%2074.666667-34.133333%2074.666667-74.666667V298.666667c0-40.533333-34.133333-74.666667-74.666667-74.666667zM160%20725.333333V170.666667c0-6.4%204.266667-10.666667%2010.666667-10.666667h554.666666c6.4%200%2010.666667%204.266667%2010.666667%2010.666667v554.666666c0%206.4-4.266667%2010.666667-10.666667%2010.666667H170.666667c-6.4%200-10.666667-4.266667-10.666667-10.666667z%20m704%20128c0%206.4-4.266667%2010.666667-10.666667%2010.666667H298.666667c-6.4%200-10.666667-4.266667-10.666667-10.666667v-53.333333H725.333333c40.533333%200%2074.666667-34.133333%2074.666667-74.666667V288H853.333333c6.4%200%2010.666667%204.266667%2010.666667%2010.666667v554.666666z'%20fill='%23666666'%20p-id='3655'%3e%3c/path%3e%3cpath%20d='M576%20416h-96V320c0-17.066667-14.933333-32-32-32s-32%2014.933333-32%2032v96H320c-17.066667%200-32%2014.933333-32%2032s14.933333%2032%2032%2032h96V576c0%2017.066667%2014.933333%2032%2032%2032s32-14.933333%2032-32v-96H576c17.066667%200%2032-14.933333%2032-32s-14.933333-32-32-32z'%20fill='%23666666'%20p-id='3656'%3e%3c/path%3e%3c/svg%3e";
  const editSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1773151281668'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='3809'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='256'%20height='256'%3e%3cpath%20d='M853.333333%20501.333333c-17.066667%200-32%2014.933333-32%2032v320c0%206.4-4.266667%2010.666667-10.666666%2010.666667H170.666667c-6.4%200-10.666667-4.266667-10.666667-10.666667V213.333333c0-6.4%204.266667-10.666667%2010.666667-10.666666h320c17.066667%200%2032-14.933333%2032-32s-14.933333-32-32-32H170.666667c-40.533333%200-74.666667%2034.133333-74.666667%2074.666666v640c0%2040.533333%2034.133333%2074.666667%2074.666667%2074.666667h640c40.533333%200%2074.666667-34.133333%2074.666666-74.666667V533.333333c0-17.066667-14.933333-32-32-32z'%20fill='%23666666'%20p-id='3810'%3e%3c/path%3e%3cpath%20d='M405.333333%20484.266667l-32%20125.866666c-2.133333%2010.666667%200%2023.466667%208.533334%2029.866667%206.4%206.4%2014.933333%208.533333%2023.466666%208.533333h8.533334l125.866666-32c6.4-2.133333%2010.666667-4.266667%2014.933334-8.533333l300.8-300.8c38.4-38.4%2038.4-102.4%200-140.8-38.4-38.4-102.4-38.4-140.8%200L413.866667%20469.333333c-4.266667%204.266667-6.4%208.533333-8.533334%2014.933334z%20m59.733334%2023.466666L761.6%20213.333333c12.8-12.8%2036.266667-12.8%2049.066667%200%2012.8%2012.8%2012.8%2036.266667%200%2049.066667L516.266667%20558.933333l-66.133334%2017.066667%2014.933334-68.266667z'%20fill='%23666666'%20p-id='3811'%3e%3c/path%3e%3c/svg%3e";
  const _hoisted_1$1 = { class: "content" };
  const _hoisted_2$1 = { class: "header" };
  const _hoisted_3$1 = ["src"];
  const _hoisted_4$1 = { class: "template-list" };
  const _hoisted_5$1 = { class: "template-info" };
  const _hoisted_6$1 = { class: "template-icon" };
  const _hoisted_7$1 = { class: "template-details" };
  const _hoisted_8 = { class: "template-name" };
  const _hoisted_9 = {
    key: 0,
    class: "template-author"
  };
  const _hoisted_10 = {
    key: 1,
    class: "template-source"
  };
  const _hoisted_11 = { class: "template-keywords" };
  const _hoisted_12 = { class: "template-actions" };
  const _hoisted_13 = ["onClick"];
  const _hoisted_14 = ["src"];
  const _hoisted_15 = ["onClick"];
  const _hoisted_16 = ["src"];
  const _hoisted_17 = ["onClick"];
  const _hoisted_18 = ["src"];
  const _hoisted_19 = { class: "import-section" };
  const _hoisted_20 = { class: "form-group" };
  const _hoisted_21 = { class: "form-group" };
  const _hoisted_22 = { class: "form-group" };
  const _sfc_main$1 = vue.defineComponent({
    __name: "TemplateManager",
    setup(__props) {
      const EMOJI_REGEX = /^[\p{Emoji}\p{Emoji_Component}]+$/u;
      const templateStore2 = useTemplateStore();
      const templates = vue.ref(templateStore2.getTemplates());
      const showAddDialog = vue.ref(false);
      const editingTemplate = vue.ref(null);
      const importText = vue.ref("");
      const currentTemplate = vue.ref({
        name: "",
        icon: "",
        keywords: ""
      });
      function editTemplate(template) {
        editingTemplate.value = template;
        currentTemplate.value = { ...template };
      }
      function closeDialog() {
        showAddDialog.value = false;
        editingTemplate.value = null;
        currentTemplate.value = { name: "", icon: "", keywords: "" };
      }
      function saveTemplate() {
        if (!currentTemplate.value.name || !currentTemplate.value.keywords) {
          alert("请填写完整信息！");
          return;
        }
        if (currentTemplate.value.icon && !EMOJI_REGEX.test(currentTemplate.value.icon)) {
          alert("图标必须是单个 emoji！");
          return;
        }
        if (editingTemplate.value) {
          templateStore2.updateTemplate(editingTemplate.value.id, currentTemplate.value);
        } else {
          templateStore2.addTemplate(currentTemplate.value);
        }
        templates.value = templateStore2.getTemplates();
        closeDialog();
      }
      function deleteTemplate(index) {
        if (confirm("确定要删除这个预设吗？")) {
          const template = templates.value[index];
          templateStore2.deleteTemplate(template.id);
          templates.value = templateStore2.getTemplates();
        }
      }
      function shareTemplate(template) {
        const shareData = JSON.stringify(template);
        navigator.clipboard.writeText(shareData).then(() => {
          alert("预设已复制到剪贴板！");
        });
      }
      function importTemplate() {
        if (!importText.value.trim()) {
          alert("请输入要导入的预设数据！");
          return;
        }
        try {
          const templateData = JSON.parse(importText.value);
          if (!templateData.name || !templateData.name.trim()) {
            alert("预设名称不能为空！");
            return;
          }
          if (!templateData.keywords || !templateData.keywords.trim()) {
            alert("关键词不能为空！");
            return;
          }
          if (!templateData.icon || !templateData.icon.trim()) {
            templateData.icon = "📋";
          }
          templateStore2.addTemplate({
            name: templateData.name.trim(),
            icon: templateData.icon.trim(),
            keywords: templateData.keywords.trim()
          });
          templates.value = templateStore2.getTemplates();
          importText.value = "";
          alert("预设导入成功！");
        } catch {
          alert("预设数据格式错误！");
        }
      }
      vue.onMounted(() => {
        templates.value = templateStore2.getTemplates();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
          vue.createElementVNode("div", _hoisted_2$1, [
            _cache[6] || (_cache[6] = vue.createElementVNode("h3", null, "预设管理", -1)),
            vue.createElementVNode("div", null, [
              vue.createElementVNode("button", {
                class: "btn-add",
                title: "创建新的关键词预设",
                onClick: _cache[0] || (_cache[0] = ($event) => showAddDialog.value = true)
              }, [
                vue.createElementVNode("img", {
                  src: vue.unref(addCircleSvg),
                  alt: "新建"
                }, null, 8, _hoisted_3$1)
              ])
            ])
          ]),
          vue.createElementVNode("div", _hoisted_4$1, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(templates.value, (template, index) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                key: template.id,
                class: "template-item"
              }, [
                vue.createElementVNode("div", _hoisted_5$1, [
                  vue.createElementVNode("span", _hoisted_6$1, vue.toDisplayString(template.icon), 1),
                  vue.createElementVNode("div", _hoisted_7$1, [
                    vue.createElementVNode("div", _hoisted_8, [
                      vue.createTextVNode(vue.toDisplayString(template.name) + " ", 1),
                      template.source === "community" ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_9, "by " + vue.toDisplayString(template.author), 1)) : template.source === "user" ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_10, "自定义")) : vue.createCommentVNode("", true)
                    ]),
                    vue.createElementVNode("div", _hoisted_11, vue.toDisplayString(template.keywords), 1)
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_12, [
                  vue.createElementVNode("button", {
                    class: "btn-edit",
                    title: "编辑此预设",
                    onClick: ($event) => editTemplate(template)
                  }, [
                    vue.createElementVNode("img", {
                      src: vue.unref(editSvg),
                      alt: "编辑"
                    }, null, 8, _hoisted_14)
                  ], 8, _hoisted_13),
                  vue.createElementVNode("button", {
                    class: "btn-share",
                    title: "复制预设到剪贴板",
                    onClick: ($event) => shareTemplate(template)
                  }, [
                    vue.createElementVNode("img", {
                      src: vue.unref(copySvg),
                      alt: "分享"
                    }, null, 8, _hoisted_16)
                  ], 8, _hoisted_15),
                  vue.createElementVNode("button", {
                    class: "btn-delete",
                    title: "删除此预设",
                    onClick: ($event) => deleteTemplate(index)
                  }, [
                    vue.createElementVNode("img", {
                      src: vue.unref(trashSvg),
                      alt: "删除"
                    }, null, 8, _hoisted_18)
                  ], 8, _hoisted_17)
                ])
              ]);
            }), 128))
          ]),
          vue.createElementVNode("div", _hoisted_19, [
            _cache[7] || (_cache[7] = vue.createElementVNode("h4", null, "导入预设", -1)),
            vue.withDirectives(vue.createElementVNode("textarea", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => importText.value = $event),
              placeholder: "粘贴预设 JSON 数据...",
              rows: "2"
            }, null, 512), [
              [vue.vModelText, importText.value]
            ]),
            vue.createElementVNode("button", {
              class: "btn-start",
              title: "导入预设 JSON 数据",
              onClick: importTemplate
            }, " 导入 ")
          ]),
          showAddDialog.value || editingTemplate.value ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: "dialog-overlay",
            onClick: closeDialog
          }, [
            vue.createElementVNode("div", {
              class: "dialog",
              onClick: _cache[5] || (_cache[5] = vue.withModifiers(() => {
              }, ["stop"]))
            }, [
              vue.createElementVNode("h4", null, vue.toDisplayString(editingTemplate.value ? "编辑预设" : "新建预设"), 1),
              vue.createElementVNode("div", _hoisted_20, [
                _cache[8] || (_cache[8] = vue.createElementVNode("label", null, "名称：", -1)),
                vue.withDirectives(vue.createElementVNode("input", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => currentTemplate.value.name = $event),
                  type: "text",
                  placeholder: "例如：营销号"
                }, null, 512), [
                  [vue.vModelText, currentTemplate.value.name]
                ])
              ]),
              vue.createElementVNode("div", _hoisted_21, [
                _cache[9] || (_cache[9] = vue.createElementVNode("label", null, "图标：", -1)),
                vue.withDirectives(vue.createElementVNode("input", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => currentTemplate.value.icon = $event),
                  type: "text",
                  placeholder: "例如：📰"
                }, null, 512), [
                  [vue.vModelText, currentTemplate.value.icon]
                ])
              ]),
              vue.createElementVNode("div", _hoisted_22, [
                _cache[10] || (_cache[10] = vue.createElementVNode("label", null, "关键词：", -1)),
                vue.withDirectives(vue.createElementVNode("textarea", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => currentTemplate.value.keywords = $event),
                  placeholder: "用逗号分隔，例如：新闻,日报,资讯",
                  rows: "3"
                }, null, 512), [
                  [vue.vModelText, currentTemplate.value.keywords]
                ])
              ]),
              vue.createElementVNode("div", { class: "dialog-actions" }, [
                vue.createElementVNode("button", {
                  class: "btn-cancel",
                  title: "取消操作",
                  onClick: closeDialog
                }, " 取消 "),
                vue.createElementVNode("button", {
                  class: "btn-save",
                  title: "保存预设",
                  onClick: saveTemplate
                }, " 保存 ")
              ])
            ])
          ])) : vue.createCommentVNode("", true)
        ]);
      };
    }
  });
  const TemplateManager = _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b054ded4"]]);
  function applyTheme(theme) {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", theme.primary);
    root.style.setProperty("--color-primary-hover", theme.primaryHover);
    root.style.setProperty("--color-secondary", theme.secondary);
    root.style.setProperty("--color-secondary-hover", theme.secondaryHover);
    root.style.setProperty("--color-success", theme.success);
    root.style.setProperty("--color-error", theme.error);
    root.style.setProperty("--color-warning", theme.warning);
    root.style.setProperty("--color-info", theme.info);
    root.style.setProperty("--color-muted", theme.muted);
    root.style.setProperty("--color-header-bg", theme.headerBg);
    root.style.setProperty("--color-header-text", theme.headerText);
    if (theme.headerBg === "#1f1f1f") {
      root.style.setProperty("--float-ball-border", "2px solid #fff");
    } else {
      root.style.setProperty("--float-ball-border", "none");
    }
  }
  const _hoisted_1 = {
    key: 3,
    class: "nav-section"
  };
  const _hoisted_2 = {
    key: 0,
    target: "_blank",
    href: "https://account.bilibili.com/account/blacklist",
    class: "nav-btn",
    title: "黑名单管理"
  };
  const _hoisted_3 = { class: "footer" };
  const _hoisted_4 = { class: "version" };
  const _hoisted_5 = { class: "copyright" };
  const _hoisted_6 = ["href"];
  const _hoisted_7 = ["src"];
  const _sfc_main = vue.defineComponent({
    __name: "App",
    setup(__props) {
      const currentPlatform = getCurrentPlatform();
      const showTemplateManager = vue.ref(false);
      const isBlacklistPage = vue.computed(() => window.location.href.includes("account.bilibili.com/account/blacklist"));
      const title = vue.computed(
        () => isBlacklistPage.value ? "黑名单管理" : showTemplateManager.value ? "预设管理" : `${currentPlatform?.displayName || "多平台"}拉黑工具`
      );
      vue.onMounted(() => {
        if (currentPlatform?.theme) {
          applyTheme(currentPlatform.theme);
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(FloatingBall, {
          title: title.value,
          "default-expanded": isBlacklistPage.value
        }, {
          default: vue.withCtx(() => [
            isBlacklistPage.value ? (vue.openBlock(), vue.createBlock(BlacklistManager, { key: 0 })) : showTemplateManager.value ? (vue.openBlock(), vue.createBlock(TemplateManager, { key: 1 })) : (vue.openBlock(), vue.createBlock(BlockingTool, { key: 2 })),
            !isBlacklistPage.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
              vue.createElementVNode("button", {
                class: vue.normalizeClass(["nav-btn", { active: !showTemplateManager.value }]),
                title: "切换到拉黑工具页面",
                onClick: _cache[0] || (_cache[0] = ($event) => showTemplateManager.value = false)
              }, " 拉黑工具 ", 2),
              vue.createElementVNode("button", {
                class: vue.normalizeClass(["nav-btn", { active: showTemplateManager.value }]),
                title: "切换到预设管理页面",
                onClick: _cache[1] || (_cache[1] = ($event) => showTemplateManager.value = true)
              }, " 预设管理 ", 2),
              vue.unref(currentPlatform)?.name === "bilibili" ? (vue.openBlock(), vue.createElementBlock("a", _hoisted_2, " 黑名单管理 ")) : vue.createCommentVNode("", true)
            ])) : vue.createCommentVNode("", true),
            vue.createElementVNode("div", _hoisted_3, [
              vue.createElementVNode("div", _hoisted_4, " v" + vue.toDisplayString(vue.unref(pkg).version), 1),
              vue.createElementVNode("div", _hoisted_5, " © " + vue.toDisplayString(vue.unref(pkg).author), 1),
              vue.createElementVNode("a", {
                href: vue.unref(pkg).repository.url,
                target: "_blank",
                class: "github-link"
              }, [
                vue.createElementVNode("img", {
                  src: vue.unref(logoGithub),
                  class: "github-icon",
                  alt: "github"
                }, null, 8, _hoisted_7),
                _cache[2] || (_cache[2] = vue.createTextVNode(" GitHub ", -1))
              ], 8, _hoisted_6)
            ])
          ]),
          _: 1
        }, 8, ["title", "default-expanded"]);
      };
    }
  });
  const App = _export_sfc(_sfc_main, [["__scopeId", "data-v-601c9119"]]);
  const wrapperCss = ".block-kit-wrapper{all:initial;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:14px;line-height:1.5;color:#333;box-sizing:border-box}.block-kit-wrapper *,.block-kit-wrapper *:before,.block-kit-wrapper *:after{box-sizing:border-box;font-family:inherit}";
  importCSS(wrapperCss);
  const app = document.createElement("div");
  app.classList.add("block-kit-wrapper");
  document.body.append(app);
  vue.createApp(App).mount(app);

})(Vue);