import ReactDomServer from "react-dom/server";
import Root from "./root";

const handler = async (_req, res) => {
  const ssrHtml = ReactDomServer.renderToString(<Root />);
  const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>ssr react repro</title>
      </head>
      <body>
        <div id="root">${ssrHtml}</div>
      </body>
    </html>
  `;
  res.setHeader("content-type", "text/html").end(html);
};

export default handler;
