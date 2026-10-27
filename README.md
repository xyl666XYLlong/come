# come

一个最小可用的 [DeepSeek Harness](https://github.com/) 插件包，在对话输入框下方显示一个带状态圆点的 **come** 徽标。

## 结构

```
come/
├── package.json       # 包清单；dsh.bundle.patch 指向 cordis.patch.yml
├── cordis.patch.yml   # Loader 补丁：插入一条 id 为 come 的插件行
├── index.js           # Host 半部（纯视觉插件，无需 Host 逻辑）
├── client.js          # Client 半部：向 conversation.composer.dock 槽位注册徽标
├── locale/
│   ├── en.json        # 插件管理器中显示的标题与描述
│   └── zh.json
└── icon.svg           # 插件图标（原创）
```

## 安装

在 DeepSeek Harness 中通过插件管理器安装：

```
target: https://github.com/xyl666XYLlong/come
```

或安装本地目录：把仓库克隆到任意位置后，以该目录作为 `install_bundle` 的 target。

安装后无需重启，徽标会出现在输入框下方（`conversation.composer.dock` 槽位的 `order: 9` 处，排在 `usage` 之后）。

## 实现要点

- 这是一个 **纯 Client 插件**：`index.js` 的 `apply()` 为空，渲染全部由 `client.js` 通过 `window.__ModuleLoader__` 完成。
- 槽位 `conversation.composer.dock` 是 `list` 类型、`session` 作用域，注册参数为 `{ id, order, label }`。
- 徽标样式只用 `inherit` 与半透明灰，因此在浅色和深色主题下都保持可读。

## License

Apache-2.0，见 [LICENSE](./LICENSE)。
