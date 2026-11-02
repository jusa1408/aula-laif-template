# Aula-Laif

A calm daily overview of your children's [Aula](https://www.aula.dk) – today, the next school day, the week, lunch menu, pick-up, weather, packing list, messages, calendar and contacts – refreshed twice a day by a scheduled Claude task on your own Mac.

*En rolig daglig oversigt over jeres børns Aula. Dansk guide: se nedenfor.*

- **Demo with made-up data:** https://claude.ai/artifact/H56XqG2Ei4TY51JgqEhfNT
- **Step-by-step guide (English + dansk):** https://claude.ai/artifact/JWJx3ooJTVdi258JtrHoVX
- **Built on [aula-mcp](https://github.com/Casperjuel/aula-mcp) by Casper Juel** – the unofficial, read-only Aula connector that makes this possible.

## What's here
| Folder | What |
|---|---|
| `template/` | The page: `index.html` (small shell) + `aula-laif.css` + `aula-laif.js`. No family data – it reads everything from the page's own database. Live copy: https://claude.ai/artifact/7E2YLY53ooPn9ruKZVsTwQ |
| `demo/` | The same page as one file, with three made-up children. Open it directly in a browser. |
| `docs/task-prompt.md` | The scheduled task's prompt. Replace `<PAGE_URL>` with your page's URL. |

## How it works
1. **aula-mcp** runs on your Mac and logs in to Aula with your MitID (read-only).
2. A **scheduled Claude task** (10:00 and 17:00) reads Aula through it and writes a summary into the page's database. Everything about your family lives in one profile document there – nothing family-specific is in the code or the prompt.
3. **The page** is a private Claude artifact that renders that data, in Danish or English, mobile first.

The easiest setup is the guide: it ends with one message you paste into Claude, which builds your page from the template and creates the task.

## Using it with another AI tool
The page is plain HTML/CSS/JS. Outside claude.ai it has no database, so `template/` shows empty states and `demo/` shows its built-in data. To use it elsewhere, feed it data in the same shape as the demo's `D` object (see the bottom of `demo/index.html`) and replace the `claude.use("db")` calls.

## Privacy
- Read-only: never send, reply to or change anything in Aula.
- Only use it for your own children with your own MitID. Keep your own page private (share by invitation).
- Message text is sent to the AI provider when it is read, like anything else you give an assistant.
- Unofficial – not made or endorsed by Aula, KMD or Netcompany. Things can break when Aula changes.

## License
MIT – see `LICENSE`. aula-mcp has its own license; see its repo.

---
Made by Julie Pardoe. Aula access by Casper Juel's aula-mcp.
