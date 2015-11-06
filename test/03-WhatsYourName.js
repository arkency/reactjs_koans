import WhatsYourName from '../src/03-WhatsYourName.js';

describe("03 - What's Your Name?", () => {
  var component;
  var paragraphs;
  var inputs;

  var nameInParagraphEqualsTo = (paragraph, name) => {
    var children = paragraph.props.children;
    var text = _.isArray(children) ? children.join("") : children;
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
      it("Should change name in paragraph on name change in input", () =>{
        var input     = _.first(inputs);
        var paragraph = _.first(paragraphs);

        assert.equal(paragraphs.length, 1, "There should be only one `p` element rendered by the component");
        assert.equal(inputs.length, 1, "There should be only one `input` rendered by the component");

        React.addons.TestUtils.Simulate.change(input, {target: { value: "XYZ" } });
        assert.equal(nameInParagraphEqualsTo(paragraph, 'XYZ'), true, "After changing name in input, I should see the change in `p` element's content. In other words: `this.state.name` should change.");

        React.addons.TestUtils.Simulate.change(input, {target: { value: "ZYX" } });
        assert.equal(nameInParagraphEqualsTo(paragraph, 'ZYX'), true, "After changing name in input for the second time, we should see the change in `p` element. In other words: `this.state.name` should change.");
      });
    });

    describe("Task #2 - don't greet user if name wasn't provided", () => {
      it("Should display welcoming message if user didn't provide their name", () => {
        var input     = _.first(inputs);
        var paragraph = _.first(paragraphs);

        React.addons.TestUtils.Simulate.change(input, {target: { value: "" } });
        assert.equal(paragraph.props.children, "Hey there. Enter your name.",
          "If user didn't enter the name (`this.state.name` length is 0), show \"Hey there. Enter your name.\". See the hint in task's description."
        );
      });
    });
  });
});
