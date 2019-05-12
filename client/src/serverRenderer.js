import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import Root from "./Root";
import configureStore from "./configureStore";

//middleware for express to render html
function renderHTML(html, preloadedState) {
  return `
    <!doctype html>
    <html>
        <head>
            <meta charset=utf-8>
            <title>Movies</title>
            ${
              process.env.NODE_ENV === "development"
                ? ""
                : '<link href="css/main.css" rel="stylesheet" type="text/css">'
            }
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(
              /</g,
              "\\u003c"
            )}
            </script>
            <script src="/js/main.js"></script>
        </body>
    </html>
    `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    //this context object contains the results of the render
    const context = {};

    const root = (
      <Root
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );

    //console.log(store.runSaga());
    store.runSaga().done.then(() => {
      const htmlString = renderToString(root);

      //context.url will contain the URL to redirect to if a <Redirect> was used
      if (context.url) {
        res.withHead(302, { Location: context.url });
        res.end();
        return;
      }

      const preloadedState = store.getState();

      res.send(renderHTML(htmlString, preloadedState));
    });

    //Do first render, starts initial actions.
    renderToString(root);
    //When the first render is finished, send the END action to redux-saga.
    store.close();
  };
}