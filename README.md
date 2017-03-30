# pdf-annotate.js

[![build status](https://img.shields.io/travis/instructure/pdf-annotate.js.svg?style=flat-square)](https://travis-ci.org/instructure/pdf-annotate.js)
[![code coverage](https://img.shields.io/coveralls/instructure/pdf-annotate.js.svg?style=flat-square)](https://coveralls.io/r/instructure/pdf-annotate.js)

Annotation layer for [pdf.js](https://github.com/mozilla/pdf.js)

## Objectives

- Provide a low level annotation layer for [pdf.js](https://github.com/mozilla/pdf.js).
- Optional high level UI for managing annotations.
- Agnostic of backend, just supply your own `StoreAdapter` to fetch/store data.
- Prescribe annotation format.

## Example

```js
import __pdfjs from 'pdfjs-dist/build/pdf';
import PDFJSAnnotate from 'pdfjs-annotate';
import MyStoreAdapter from './myStoreAdapter';

const { UI } = PDFJSAnnotate;
const VIEWER = document.getElementById('viewer');
const RENDER_OPTIONS = {
  documentId: 'MyPDF.pdf',
  pdfDocument: null,
  scale: 1,
  rotate: 0
};

PDFJS.workerSrc = 'pdf.worker.js';
PDFJSAnnotate.setStoreAdapter(MyStoreAdapter);

PDFJS.getDocument(RENDER_OPTIONS.documentId).then((pdf) => {
  RENDER_OPTIONS.pdfDocument = pdf;
  VIEWER.appendChild(UI.createPage(1));
  UI.renderPage(1, RENDER_OPTIONS);
});
```

See more [examples](https://github.com/instructure/pdf-annotate.js/blob/master/web/index.js).

## Documentation

[View the docs](https://github.com/instructure/pdf-annotate.js/tree/master/docs).

## Developing

```bash
# clone the repo
$ git clone git@github.com:dlabs/pamoja-pdf-annotate.js.git
$ cd pdf-annotate.js

# intall dependencies
$ npm install

# start example server
$ npm start
$ open http://127.0.0.1:8080

# start Development sync with pamoja-platform
$ npm run dev "relative/path/to/pamoja-platform"
open platform on http://localhost:8080
changes in pdf-annotate.js should be automatically injected into pamoja-platform/build/js folder. Also browser-sync on Platform should hot-reload the app with new lib.

# Deploy version
Once changes are ready to be used run following command:
$ npm run build & npm run build-min
push feature branch to remote repository and create a Pull request
merge it to master branch (via PR).
tag the new master branch with new version

In order to use that version on Platform, we need to change dependency version in Platform's bower.json. 
Example: "pdf-annotate-js": "git@github.com:dlabs/pamoja-pdf-annotate.js.git#tag" and run bower install to load new lib.

# run tests
$ npm test
```
## License

MIT
