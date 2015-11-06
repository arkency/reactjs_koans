let assert = require('assert');
let jsdom  = require('jsdom');

global.document  = jsdom.jsdom(undefined, {
  virtualConsole: jsdom.createVirtualConsole().sendTo(console)
});
global.window    = global.document.defaultView;
global.navigator = { userAgent: "Node.JS" };

let React = require('react/addons');
let _     = require('lodash');

global.React     = React;
global.assert    = assert;
global._         = _;
