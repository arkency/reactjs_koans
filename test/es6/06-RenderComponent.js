import assert      from 'assert';
import renderName  from '../../src/es6/06-RenderComponent.js';
import jsdom       from 'jsdom';
import React       from 'react/addons';
import _           from 'lodash';

describe("06 - RenderComponent", () => {

  beforeEach( () => {
    renderName();
  });

  describe("Task #1 - render Name component", () => {
    it('There should be rendered a <p> element with name', () => {
      var element = document.getElementById('name');
      assert.notEqual(element, null, "There should be only one paragraph"); 
      assert.equal(element.innerHTML, "My name is koan", "The paragraph should contain 'My name is koan'"); 
    });
  });
});