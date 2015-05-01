import jsdom from 'jsdom';

global.document  = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
global.window    = document.parentWindow;
global.navigator = { userAgent: "Node.JS" };