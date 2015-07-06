var React = require("react");

// We will create dynamic list of parties nearby. Let's see how to render
// a list of items.
//
// Task #1: Add another party (or parties) to the list.
// Task #2: Change `ul` HTML attribute `class` to 'parties-list'.

class PartiesList extends React.Component {
  // We can put DOM elements delivered by React just like HTML elements.
  // Doesn't this code look familiar to you?
  render() {
    return (
      <ul className="FILL ME">
        <li>Party at Aperture Laboratories</li>
      </ul>
    );
  }
  // Think about it: Why is that `className` attribute not called just `class`?
  // Hint: Some words in JavaScript/JSX are reserved...
}

export default PartiesList;
