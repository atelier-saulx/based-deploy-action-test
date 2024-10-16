import { BasedAppFunction } from '@based/functions';

const app: BasedAppFunction = async (_based) => {
  return (
    '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head>' +
    '<meta charset="utf-8" />' +
    '<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, viewport-fit=cover" />' +
    '<meta name="title" content="Hello World" />' +
    '<title>Hello World</title>' +
    '</head>' +
    '<body style="margin: 0;">' +
    `<div id="root">Hello World from the branch main 2 in Based.io!</div>` +
    '</body>' +
    '</html>'
  );
};

export default app;
