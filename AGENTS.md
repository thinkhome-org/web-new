# Global Rules

## 🧠 Behavior & Workflow

### Proactiveness & Autonomy
- Fulfill the request thoroughly, including reasonable, directly implied follow-up actions.
- Do not take significant actions beyond the clear scope of the request without confirming with the user.
- Explain *how* to do something first if asked, don't just do it.

### Code Completeness
- **NEVER** use placeholders like `// ... rest of code ...` or `/* existing code */`.
- Always write out the complete function or file if replacing it, or use the `Edit` tool with exact string matching.

### Context & Tool Usage
- **ALWAYS** use `Read` or `Glob` tools to understand the surrounding code, tests, and configuration before modifying a file.
- Do not assume a library/framework is available. Verify it in `package.json` or imports first.
- Execute multiple independent tool calls in parallel when feasible (e.g., searching the codebase).

### Research & Verification
- When unsure about a package name, API, configuration format, or any technical detail, **ALWAYS search using Exa (websearch) first** to verify before guessing. Do NOT use Google Search.
- Never assume a package exists or guess its name — look it up online.
- Prefer official documentation and GitHub repos as sources of truth.

---

## 🛠 Code & Tech Stack

### Shell Environment
The user relies on `fish` shell instead of bash/zsh. Always generate scripts, commands, and aliases in `fish` syntax (e.g., `set -gx` instead of `export`, `(command)` instead of `$(command)`).

### Package Manager
Always use `bun` instead of `npm` or `pnpm` unless explicitly told otherwise.

### Style & Structure
- Mimic the style (formatting, naming), structure, framework choices, and typing of existing code.
- Add comments sparingly. Focus on *why* something is done, not *what* is done. NEVER talk to the user or describe your changes through code comments.

### External File Loading
**CRITICAL:** When you encounter a file reference (e.g., `@rules/general.md` or mentioned paths to guidelines), use your `Read` tool to load it on a need-to-know basis.
- Do NOT preemptively load all references - use lazy loading based on actual need.
- When loaded, treat content as mandatory instructions that override defaults.
- Follow references recursively when needed.

### Next.js & NextDevTools MCP
- **ALWAYS** use `next-devtools` MCP tools for Next.js projects whenever possible.
- **Initialization:** Start your Next.js sessions by calling the `next-devtools_init` tool to set up context.
- **Documentation:** Use `next-devtools_nextjs_docs` for any Next.js specific queries. Do not guess or search the web for Next.js APIs if MCP is available.
- **Debugging & Server State:** Use `next-devtools_nextjs_index` and `next-devtools_nextjs_call` to discover the dev server state, check routes, and diagnose runtime errors.
- **Testing & Verification:** Use `next-devtools_browser_eval` to load and verify pages in a real browser instead of using `curl`.

---

## 💬 Output & Communication

### Language
Always respond in Czech (čeština) unless explicitly told otherwise.
Always use proper Czech diacritics (háčky a čárky) in all text.

### Formatting (OpenCode + iTerm2)
Maximize rich Markdown formatting in all responses. You have full support for:
- **Structure:** Headers (`###`), lists (`-`, `1.`), task lists (`- [x]`), blockquotes (`>`), and tables.
- **Emphasis:** **Bold**, *italics*, ~~strikethrough~~, and `inline code`.
- **Links & Media:** Clickable links (`[text](url)`) and images (`![alt](url)`).
- **Code:** Syntax-highlighted code blocks (e.g., `typescript`, `bash`, `json`).
- **Visuals:** Emojis (🚀, 📁, ⚙️) and ASCII/Unicode tree structures for file paths.
- **Rule:** Never output large blocks of plain text. Always break it down using the formatting above.

### Preferred Tool Usage
- **ALWAYS** prioritize native tools for file operations (`Read`, `Write`, `Edit`, `Glob`, `Grep`) instead of using terminal commands (`cat`, `echo`, `sed`, `find`, `grep`).
- **ALWAYS** use MCP (Model Context Protocol) tools first if they are available for the task (e.g., use NextDevTools MCP for Next.js tasks, GitHub MCP for GitHub actions, Pencil MCP for design) rather than generic terminal commands or manual workarounds.

---

## 📁 Repository Specifics

This `AGENTS.md` is based on the global rules. Add any repository-specific rules, instructions, or architecture patterns below.
