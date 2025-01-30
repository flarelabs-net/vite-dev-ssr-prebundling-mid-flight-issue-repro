# vite-dev-ssr-prebundling-mid-flight-issue-repro (ssr-react variant)

The same issue but reproduced simply using react

## Reproduction

To run the minimal reproduction simply run:

```
pnpm i
pnpm dev
```

and navigate to dev server's URL, you should see an error such as this:
![screenshot of the error overlay](./error-screenshot.png)

Refreshing the page will cause the error to go away, running

```
pnpm dev
```

makes the error reappear (since a `predev` script deletes the `node-modules/.vite` directories)

running

```
pnpm vite dev
```

afterwords does not trigger the error (since this only happens then dependencies are getting optimized)
