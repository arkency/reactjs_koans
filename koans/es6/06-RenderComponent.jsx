var React = require('react');

// Congratulations for completing your first React challenge!
// You have already learned how to create React's components and how they affect
// each other. In this exercise you will learn how to render components on the web page.
//
// Task #1: Fill the `renderNameComponent` function. It should render ReactElement
//          into the DOM.
class Name extends React.Component {
  render() {
    return (<p id="hello">Bazinga!</p>);
  }
}

// See you got a domNode passed as a `domNode` argument.
function renderNameComponent(domNode) {
  // Put your code here
}

// Hint: You have to use the `React.render(ReactElement element, DOMNode node)` method.
//       As you can see, this method takes two parameters:
//       `ReactElement` and DOM node.
//
//       Don't mistake `React.render` with `render` method in a component class.
//       They are completely different methods!
//
//       Notice that class `Name` has type `React.Component`.
//       It's a ReactComponent, not a ReactElement! You need to create an
//       element from the component before putting it into DOM. One way of doing
//       that is using `React.createElement(ReactComponent component)`. E.g.
//
//       `let element = React.createElement(Name);`

export default renderNameComponent;
