let assert = require('assert');
let jsdom  = require('jsdom');

global.document  = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
global.window    = document.parentWindow;
global.navigator = { userAgent: "Node.JS" };

let React = require('react/addons');
let _     = require('lodash');

global.React     = React;
global.assert    = assert;
global._         = _;
