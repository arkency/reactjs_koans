var React = require("react");

// We will work on creating dynamic list of parties nearby.
// Let's standafirst see how to render list of items
//
// TASK #1: Add another party (or parties) to the list.
// TASK #2: Change class attribute of the list to 'parties-list'.

class PartiesList extends React.Component {
    // We can nest DOM elements delivered by React in itself just like HTML elements. See how
    // this list looks like. Does it look similar to you?
    //
    // You can nest every React element in render method.
    render() {
      return(
        <ul className="FILL ME">
          <li>Party at Aperture Laboratories</li>
        </ul>
      );
    }
    // Think about it: Why is that `className` attribute not called just `class`?
    //
    // Hint: JSX isn't HTML.
}

export default PartiesList;
