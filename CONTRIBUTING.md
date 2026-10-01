# 贡献指南（CONTRIBUTING）

欢迎参与 HITech-AI 开源组织的建设。本指南适用于组织内的所有仓库（`docs`、`projects` 及组织主页），请先阅读，再参与贡献。

## 参与方式

- **文档与资料**：补充或修订 `docs` 中的科普、教学、活动归档内容。
- **项目开发**：在 `projects` 中发起新项目，或加入现有项目开发。
- **建议与反馈**：对社团技术方向、活动安排、组织建设提出 issue。

## 提交 issue

- 标题简洁，说明问题或建议；文档/项目相关请在正文中说明所属仓库与目录。
- 附上必要的背景：相关链接、复现步骤、期望结果。
- 遵循 [行为准则](CODE_OF_CONDUCT.md)，不发表人身攻击或无关内容。

## 提交 Pull Request

1. **Fork** 目标仓库，从 `main` 新建自己的分支，命名如 `fix/typo-docs`、`feat/new-tutorial`、`docs/add-x`。
2. 完成改动，**每个改动保持聚焦**，一次 PR 只做一件事。
3. 提交信息遵循 **Conventional Commits**，例如：

   ```
   docs(科普): 新增《大模型是什么》白话科普
   feat(projects): 初始化 hello-agents 学习项目脚手架
   fix(docs): 修正教学资料中的链接失效
   ```

4. 推送分支并提交 Pull Request，在描述中说明改动内容与目的。
5. 等待维护者 review；如需修改，按反馈更新后重新推送。

## 提交信息规范

统一采用 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/)：

```
<type>(<scope>): <subject>
```

- `type`：`feat`（新功能/新内容）、`fix`（修复）、`docs`（文档）、`refactor`（重构）、`chore`（杂务）。
- `scope`：可省略，常为目录名或主题名。

## 约定

- 文档统一使用 **Markdown** 编写。
- 遵循"**仓库固定、目录扩展**"原则：新内容加目录，不为单个项目/文章新建仓库。
- 不清楚归属时，先提 issue 询问，再动手。

---

© 2026 HITech-AI · "智启新航"AI 研学社
