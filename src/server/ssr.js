/* eslint-disable indent */

export function getHTMLtemplate(appHtml, preloadedState) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Redux Universal Example</title>
      <link rel="stylesheet" href="/static/dist/main.css">
    </head>
    <body>
      <div id="root">${appHtml}</div>
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\\u003c'
        )}
      </script>
      <script src="/static/dist/client-bundle.js"></script>
    </body>
  </html>
`;
}
