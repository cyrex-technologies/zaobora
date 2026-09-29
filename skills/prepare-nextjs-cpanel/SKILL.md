---
name: prepare-nextjs-cpanel
description: Prepare and verify a Next.js application for deployment to Namecheap shared hosting through cPanel Setup Node.js App. Use when Codex must add a cPanel-compatible startup file, select a full-runtime or standalone deployment strategy, configure package scripts and Next.js output, identify build-time and runtime environment variables, create an upload manifest, or provide exact cPanel installation and restart steps.
---

# Prepare Next.js for cPanel

Prepare the repository for a repeatable deployment. Do not access cPanel, upload files, alter DNS, or restart production unless the user explicitly requests those external actions.

## Inspect before editing

1. Read `package.json`, the lockfile, `next.config.*`, existing startup files, `.gitignore`, environment examples, middleware, API routes, and filesystem usage.
2. Determine the package manager from the lockfile.
3. Determine the required Node.js version from Next.js/package requirements and any `engines` field. Prefer a currently supported version available in Namecheap cPanel.
4. Run the existing lint, typecheck, test, and build commands when practical.
5. Preserve unrelated user changes. Never include secrets or `node_modules` in an upload archive.

Read [references/namecheap-cpanel.md](references/namecheap-cpanel.md) before changing deployment files or writing cPanel instructions.

## Select a deployment strategy

Prefer one strategy and document the reason.

### Full Next.js runtime

Use this when matching the established Zaobora deployment, when the project already has a working custom startup file, or when standalone output is unsuitable.

- Keep normal `next build` output.
- Add a root `server.js` based on [assets/server.js](assets/server.js).
- Ensure it listens on `process.env.PORT` and cPanel sets `NODE_ENV=production`.
- Ensure production dependencies include `next`, `react`, and `react-dom`.
- For a locally built upload, include `.next`, `public`, `package.json`, the lockfile, `next.config.*`, and `server.js`.
- For a server-built upload, include source/configuration instead of `.next`, then run dependency installation and the build inside the cPanel virtual environment.

### Standalone runtime

Prefer this for a smaller artifact when the application builds correctly with Next.js standalone output.

- Set `output: "standalone"` in `next.config.*`.
- Build the project.
- Copy `public` to `.next/standalone/public`.
- Copy `.next/static` to `.next/standalone/.next/static`.
- Treat the contents of `.next/standalone` as the application root.
- Use its generated `server.js` as the cPanel startup file.
- Do not combine standalone output with a custom Next.js server.

## Implement

1. Add or update only the deployment files required by the selected strategy.
2. Add an `engines.node` range when the project does not declare one.
3. Keep `dev`, `build`, and local `start` behavior intact unless a change is required.
4. Create `.env.example` only when environment variables are used and no safe example exists. Include names and non-secret placeholders only.
5. Add a concise deployment section to repository documentation or create `CPANEL_DEPLOY.md` if the repository lacks deployment documentation.
6. State which environment variables are build-time:
   - `NEXT_PUBLIC_*` values are embedded into browser bundles at build time.
   - Server-only values can be configured in cPanel for runtime, unless code reads them during static generation.
7. Produce an explicit upload manifest and exclusion list. Exclude `.git`, local environment files, caches, logs, tests, editor settings, old archives, and `node_modules`.

## Verify

1. Install dependencies reproducibly with the detected package manager.
2. Run lint/typecheck/tests that exist.
3. Run a production build.
4. Start the selected artifact locally with `NODE_ENV=production` and a non-default `PORT`.
5. Request `/` and at least one representative dynamic or API route.
6. Confirm referenced static assets return successfully.
7. Inspect the final artifact; reject it if secrets, `node_modules`, nested stale builds, or unrelated archives are present.
8. Report commands run, results, artifact path, required Node version, cPanel application root, startup filename, and environment variables still needing values.

## Guardrails

- Do not claim a deployment succeeded without testing the actual packaged artifact.
- Do not hard-code port `3000` for cPanel.
- Do not upload a macOS/Windows-built native dependency tree to Linux hosting.
- Do not expose server secrets through `NEXT_PUBLIC_*`.
- Do not assume static export supports API routes, server actions, SSR, ISR, image optimization, or other server features.
- Do not delete or overwrite an existing production application directory as part of preparation.
