# Agent instructions

## Next.js deployment to Namecheap cPanel

When asked to prepare this project or another Next.js project for Namecheap/cPanel deployment, use the repository skill at:

`skills/prepare-nextjs-cpanel/SKILL.md`

Read that file completely, then read its cPanel reference before editing deployment files.

This repository's existing deployment pattern is a useful reference:

- `server.js` is the cPanel startup file.
- It must use cPanel's `process.env.PORT`.
- The current upload package includes a production `.next` build, `public`, source/configuration, `package.json`, and the lockfile.
- `node_modules` is installed on the Linux host and must not be uploaded.

Treat this as a pattern, not a mandate. Inspect the target project and choose either the full Next.js runtime or Next.js standalone output as described by the skill. Verify the final packaged artifact locally before calling it deployment-ready.

Do not access cPanel, upload files, change DNS, or restart a production application unless the user explicitly authorizes those external actions.
