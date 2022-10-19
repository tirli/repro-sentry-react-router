# Reproduction repo for sentry not handling parametrized urls properly

To reproduce:

- add your `VITE_SENTRY_DSN` to `.env` file
- start the application with `npm run dev` command
- go to `http://localhost:5173/monitor/projects/someProjectId/someSiteId`
- click on `Click to error` button
- open Sentry UI and find error there

Expected result:

- `http://localhost:5173/monitor/projects/:projectId/:siteId` in error details

Actual result:

- error still has `http://localhost:5173/monitor/projects/someProjectId/someSiteId` as url


