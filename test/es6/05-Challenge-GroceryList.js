import assert      from 'assert';
import GroceryList from '../../src/es6/05-Challenge-GroceryList.js';
import jsdom       from 'jsdom';
import React       from 'react/addons';
import _           from 'lodash';

describe("05 - Challenge - Grocery List", () => {
  var component;
  var input;
  var button;

  beforeEach( () => {
    var elem = document.createElement('div');
    elem = document.body.appendChild(elem);
    component = React.render(React.createElement(GroceryList), elem);
    input = React.addons.TestUtils.findRenderedDOMComponentWithTag(component, "input");
    button = React.addons.TestUtils.findRenderedDOMComponentWithTag(component, "button");
  });

  afterEach( () => {
    React.unmountComponentAtNode(React.findDOMNode(component));
  });

  describe("Task #1 - display a list of groceries", () => {
    it('There should be an unordered list of groceries', () => {
      let groceryListItems = React.addons.TestUtils.scryRenderedDOMComponentsWithTag(component, "li");
      let groceryItem = _.first(groceryListItems);
      
      assert.equal(groceryListItems.length, 1, "There should be exactly one element on the groceries list");
      assert.equal(groceryItem.props.children, "Apples", "GroceriesListItem should display a grocery name"); 
    });
  });

  describe("Task #2 - add a new product to list", () => {
    it('Should render required tags', () => {
      let productsNameInput = React.addons.TestUtils.scryRenderedDOMComponentsWithTag(component, "input");
      let productsAddButton = React.addons.TestUtils.scryRenderedDOMComponentsWithTag(component, "button");
      assert.equal(productsNameInput.length, 1, "GroceriesList should render HTML input");
      assert.equal(productsAddButton.length, 1, "GroceriesList should render HTML 'add product' button"); 
    });

    it('Should be possible to add a new product to list', () => {
      React.addons.TestUtils.Simulate.change(input.getDOMNode(), { target: {value: 'Oranges' }});
      React.addons.TestUtils.Simulate.click(button.getDOMNode());
      let groceryListItems = React.addons.TestUtils.scryRenderedDOMComponentsWithTag(component, "li");
      let groceryItem = _.last(groceryListItems);
      
      assert.equal(groceryListItems.length, 2, "There should be exactly two elements on the groceries list");
      assert.equal(groceryItem.props.children, "Oranges", "GroceriesListItem should display a grocery name");  
    });

    it('Should not be possible to add empty element', () => {
      React.addons.TestUtils.Simulate.click(button.getDOMNode());
      let groceryListItems = React.addons.TestUtils.scryRenderedDOMComponentsWithTag(component, "li");
      let groceryItem = _.last(groceryListItems);
      
      assert.equal(groceryListItems.length, 1, "There should be exactly one element on the groceries list");  
    });
  });
});
