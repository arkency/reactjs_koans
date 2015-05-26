import assert      from 'assert';
import GroceryList from '../../src/es6/05-Challenge-GroceryList.js';
import jsdom       from 'jsdom';
import React       from 'react/addons';
import _           from 'lodash';

describe("05 - Challenge - Grocery List", () => {
  var component;

  beforeEach( () => {
    var elem = document.createElement('div');
    elem = document.body.appendChild(elem);
    component = React.render(React.createElement(GroceryList), elem);
  });

  afterEach( () => {
    React.unmountComponentAtNode(React.findDOMNode(component));
  });

  describe("Task #1 - display a list of groceries", () => {
    it('There should be an unordered list of groceries', () => {
      let rootElement = React.findDOMNode(component);

      assert.equal(rootElement.nodeName, "UL", "GroceriesList should render HTML list (<ul>)");

      let groceryListItems = React.addons.TestUtils.scryRenderedDOMComponentsWithTag(component, "li");

      assert.equal(groceryListItems.length, 1, "There should be exactly one element on the groceries list");

      let groceryItem = _.first(groceryListItems);
      assert.equal(groceryItem.props.children, "Test", "GroceriesListItem should display a grocery name"); 
    });
  });
});
