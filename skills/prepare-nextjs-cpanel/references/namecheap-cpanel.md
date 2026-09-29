# Namecheap cPanel deployment reference

## Current cPanel model

Namecheap shared hosting exposes **cPanel → Setup Node.js App**. The application definition requires:

- Node.js version
- Production mode
- Application root
- Application URL
- Startup file in `NAME.js` form
- Optional environment variables

As of Namecheap's October 10, 2025 documentation update, shared servers list Node.js 20, 22, and 24 among available versions. Select a version supported by the project's installed Next.js release; do not automatically choose the highest version.

After files are uploaded, cPanel can run NPM Install. SSH users can instead activate the application virtual environment using the command displayed on the application page.

Sources:

- Namecheap: https://www.namecheap.com/support/knowledgebase/article.aspx/10047/2182/how-to-work-with-nodejs-app/
- cPanel: https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/
- Next.js self-hosting: https://nextjs.org/docs/app/guides/self-hosting
- Next.js standalone output: https://nextjs.org/docs/app/api-reference/config/next-config-js/output

## Zaobora pattern

The Zaobora repository demonstrates the full-runtime approach:

- `server.js` creates an HTTP server and forwards requests to Next.js.
- The port comes from `process.env.PORT`.
- The upload archive contains source/configuration, `public`, and a prebuilt `.next`.
- `node_modules` is omitted and dependencies are installed on the host.
- cPanel's startup file is `server.js`.

Carry the pattern, not project-specific package versions, paths, assets, or archives.

## Full-runtime upload manifest

For a prebuilt artifact, normally include:

```text
.next/
public/
package.json
package-lock.json | yarn.lock | pnpm-lock.yaml
next.config.js | next.config.mjs | next.config.ts
server.js
```

Include other runtime files only when the application needs them. Source files are not normally required after a successful build, but keeping them may help when the hosting workflow rebuilds in place.

For a server-built deployment, upload source and configuration, omit local `.next`, then run:

```bash
npm ci
npm run build
```

Use the equivalent frozen-lockfile commands for Yarn or pnpm.

## Standalone upload manifest

Set:

```js
const nextConfig = {
  output: "standalone",
};
```

After building:

```bash
cp -R public .next/standalone/public
mkdir -p .next/standalone/.next
cp -R .next/static .next/standalone/.next/static
```

Upload the contents of `.next/standalone`, not the enclosing directory, into the configured application root. Set the startup file to `server.js`.

## cPanel handoff

Give the operator these exact fields:

```text
Node.js version: <verified supported version>
Application mode: Production
Application root: <directory relative to cPanel home>
Application URL: <https URL>
Application startup file: server.js
Environment variables: NODE_ENV=production plus project-specific values
```

Then instruct the operator to:

1. Upload and extract the artifact into the application root without adding an extra top-level folder.
2. Run NPM Install when using the full-runtime strategy.
3. Run the build in the cPanel virtual environment if `.next` was not uploaded.
4. Add runtime environment variables.
5. Restart the application.
6. Check the domain, static assets, dynamic routes, forms/API routes, and cPanel application logs.

## Common failures

- **503 or application failed to start:** wrong startup filename, unsupported Node version, missing dependencies, or a startup crash.
- **Port already in use / no response:** startup code ignored `process.env.PORT` or bound incorrectly.
- **CSS/JS returns 404:** `.next/static` is missing, the standalone copy step was skipped, or the archive extracted into a nested directory.
- **Images return 400/500:** image optimization dependency/runtime is unavailable or remote image configuration is incomplete.
- **Environment value is stale:** a `NEXT_PUBLIC_*` value changed after the build; rebuild the artifact.
- **Build is killed:** shared-host memory limits are too low; build on a compatible Linux environment and upload the artifact.
- **Native module error:** dependencies were installed for another OS/architecture; reinstall inside cPanel.
- **Changes are not visible:** application was not restarted, old `.next` files remain, or a proxy/browser cache is serving old assets.
