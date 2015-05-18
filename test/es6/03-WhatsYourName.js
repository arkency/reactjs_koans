import assert        from 'assert';
import WhatsYourName from '../../src/es6/03-WhatsYourName.js';
import jsdom         from 'jsdom';
import React         from 'react/addons';
import _             from 'lodash';

describe("03 - Whats Your Name?", () => {
  var component;
  var paragraphs;
  var inputs; 

  var nameInParagraphEqualsTo = (paragraph, name) => {
    var children = paragraph.props.children;
    var text = _.isArray(children) ? children.join() : children;
    return _.isEqual(text, `Hello ${ name }`);
  }

  beforeEach( () => {
    var elem = document.createElement('div');
    elem = document.body.appendChild(elem);
    component = React.render(React.createElement(WhatsYourName), elem);
    paragraphs = React.addons.TestUtils.scryRenderedDOMComponentsWithTag(component, 'p');
    inputs = React.addons.TestUtils.scryRenderedDOMComponentsWithTag(component, 'input');
  });

  afterEach( () => {
    React.unmountComponentAtNode(React.findDOMNode(component));
  });

  describe("should complete all tasks", () => {
    describe("Task #1 - greet user", () => {
      it("There should be only required tags rendered", () => {
        assert.equal(paragraphs.length, 1, "There should be only one paragraph on component");
        assert.equal(inputs.length, 1, "There should be only one input on component");
      });

      it("Should change name in paragraph on name change in input", () =>{
        var input     = _.first(inputs);
        var paragraph = _.first(paragraphs);

        React.addons.TestUtils.Simulate.change(input, {target: { value: "XYZ" } });
        assert.equal(nameInParagraphEqualsTo(paragraph, 'XYZ'), true, "After changing name in input, we should see the change in paragraph.");

        React.addons.TestUtils.Simulate.change(input, {target: { value: "ZYX" } });
        assert.equal(nameInParagraphEqualsTo(paragraph, 'ZYX'), true, "After changing name in input for the second time, we should see the change in paragraph.");
      });
    });

    describe("Task #2 - don't greet user if he didn't provide a name", () => {
      it("Should display welcoming message if user didn't provide his name", () => {
        var input     = _.first(inputs);
        var paragraph = _.first(paragraphs);


        React.addons.TestUtils.Simulate.change(input, {target: { value: "" } });
        assert.equal(paragraph.props.children, "Hey there. Enter you name.", "If user didn't input name, component should display text encouraging the user to do so.");

        React.addons.TestUtils.Simulate.change(input, {target: { value: "XYZ" } });
        assert.equal(nameInParagraphEqualsTo(paragraph, 'XYZ'), true, "After changing name in input, we should see the change in paragraph.");
      });
    });
  });
});
