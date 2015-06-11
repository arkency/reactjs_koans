import assert from 'assert';
import jsdom  from 'jsdom';

global.document  = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
global.window    = document.parentWindow;
global.navigator = { userAgent: "Node.JS" };

import React  from 'react/addons';
import _      from 'lodash';

global.React     = React;
global.assert    = assert;
global._         = _;
