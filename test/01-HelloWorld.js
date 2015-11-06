import HelloWorld from '../src/01-HelloWorld.js';

describe("01 - HelloWorld", () => {
  var component;

  beforeEach( () => {
    var elem = document.createElement('div');
    elem = document.body.appendChild(elem);
    return component = React.render(React.createElement(HelloWorld), elem);
  });

  afterEach( () => {
    React.unmountComponentAtNode(React.findDOMNode(component));
  });

  it("should complete all tasks", () => {
    var divTags = React.addons.TestUtils.scryRenderedDOMComponentsWithTag(component, 'div');
    var spanTags = React.addons.TestUtils.scryRenderedDOMComponentsWithTag(component, 'span');

    assert.equal(divTags.length == 0, true, "Your React component shouldn't render any `div` HTML elements")
    assert.equal(spanTags.length == 1, true, "You need to render exactly one `span` HTML element")

    assert.equal(spanTags[0].props.children, "Hello World", "You have rendered wrong message in your `span` element");
  })
});
