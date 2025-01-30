import { setup } from 'lib-a';

setup();

const handler = async (_req, res) => {
    const html = (await import('./html')).getHtml();
    res.setHeader("content-type", "text/html").end(html);
};

export default handler;
