import assert from 'assert';
import React  from 'react/addons';
import jsdom  from 'jsdom';
import _      from 'lodash';

global.document  = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
global.window    = document.parentWindow;
global.navigator = { userAgent: "Node.JS" };
global.React     = React;
global.assert    = assert;
global._         = _;
