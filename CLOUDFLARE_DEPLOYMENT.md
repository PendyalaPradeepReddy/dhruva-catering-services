# Cloudflare Workers Deployment

## What caused the failed deployment

The build completed successfully. The failure occurred afterward because Wrangler attempted an interactive Vite setup and could not identify a literal `plugins` array in the Vite configuration. The project now exposes that array directly and includes a checked-in `wrangler.jsonc`, so Wrangler no longer needs to modify the project during deployment.

> Cloudflare’s SPA configuration requires an `assets.directory` and `assets.not_found_handling: "single-page-application"`; this lets Wouter routes such as `/services` and `/contact` resolve to the application shell rather than returning a 404. [1]

| Cloudflare setting | Project value | Purpose |
| --- | --- | --- |
| Worker name | `dhruva-catering-services` | Identifies the deployed Worker. |
| Asset directory | `./dist/public` | Matches the Vite build output used by this project. |
| SPA routing | `single-page-application` | Serves `index.html` for client-side routes. |

## Deploy steps

In Cloudflare Workers Builds, keep the build command as `pnpm run build` and use `pnpm run cf:deploy` as the deploy command. Alternatively, after pushing this version, run the deployment from a local terminal with `pnpm run cf:deploy` after signing in to Cloudflare.

## Important asset note

The website currently uses `/manus-storage/...` image paths, which are managed by the Manus project runtime. Those paths will not be present on a standalone Cloudflare domain. Before publishing to Cloudflare, copy those images to a Cloudflare-controlled source such as R2 or Worker static assets, then replace the `/manus-storage/...` URLs in the site with the resulting public URLs. Cloudflare Workers can serve static assets configured from the supplied asset directory and cache them globally. [2]

If you want to avoid this migration, you can use Manus built-in hosting and attach a custom domain instead. This project’s existing preview and asset URLs remain compatible with that route.

## References

[1]: https://developers.cloudflare.com/workers/static-assets/routing/single-page-application/ "Cloudflare Workers: Single Page Application"
[2]: https://developers.cloudflare.com/workers/static-assets/ "Cloudflare Workers: Static Assets"
