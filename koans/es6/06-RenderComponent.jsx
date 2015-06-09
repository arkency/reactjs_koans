var React = require('react');

// Congratulations for completing your first React challange!
// You have already learnt how to create React's Components and how they affect
// each other. This excercise will show you how to render components on the web page.
//
// Task #1: Fill the `renderName` function. It should render ReactElement
//          into the DOM.
class Name extends React.Component {
  render() {
    return (
      <p>Bazinga!</p>
    );
  }
}

function renderName(domNode) {

}

// Hint: You have to use `React.render(ReactElement element, DOMNode node)` method.
//        As you can see, this method takes two parameters:
//        `ReactElement` and DOM node.
//
//        Don't mistake `React.render` with `render` method in component class.
//        They are completely different methods!
//
//        Notice that class `Name` has type `React.Component`.
//        It's a ReactComponent, not a ReactElement! You need to create an
//        element from component before putting it into DOM. One way of doing
//        that is using `React.createElement(ReactComponent component)`. E.g.
//
//        `let element = React.createElement(Name);`

export default renderName;
