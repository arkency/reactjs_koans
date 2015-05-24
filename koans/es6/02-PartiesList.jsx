var React = require("react");

// We will work on creating dynamic list of parties nearby.
// Let's see how to render list of items.
//
// TASK #1: Add another party (or parties) to the list.
// TASK #2: Change `ul` HTML attribute `class` to 'parties-list'.

class PartiesList extends React.Component {
    // We can nest DOM elements delivered by React just like HTML elements. See how this list looks 
    // like. Doesn't it look similar?
    render() {
      return(
        <ul className="FILL ME">
          <li>Party at Aperture Laboratories</li>
        </ul>
      );
    }
    // Think about it: Why is that `className` attribute not called just `class`?
    // Hint: JSX isn't HTML.
}

export default PartiesList;
