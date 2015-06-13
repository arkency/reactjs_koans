var React = require("react");

// This exercise is a bit bigger than the previous ones.
// We will make reactive grocery list.
//
// Task: Fill the `return` of `GroceryList` render method. It should return
//       list of `GroceryListItem`. You need to display the groceries names
//       using `this.props` in `GroceryListItem`. We already prepared variable
//       `groceriesComponents` inside `render` method` containing list of these items for you.

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [ { name: "Apples" } ]
    };
  }

  render() {
    let groceriesComponents = [];
    // Properties are a way to pass parameters to your React components.
    // We mentioned this in the third exercise. Properties are to React
    // components what attributes are to HTML elements.
    //
    // Below you can see how to pass properties to child components.
    // We have defined `grocery` property for each `GroceryListItem`.
    for(var index = 0; index < this.state.groceries.length; index++) {
      groceriesComponents.push(
          <GroceryListItem
            grocery={this.state.groceries[index]}
          />
      );
    }

    return (
      <div>
        // Put your code here
      </div>
    );
  }
}

// Render grocery name from component's properties.
// If you have problem check `this.props` in the console.
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <li>
          // Put your code here.
        </li>
    );
  }
}

export default GroceryList;
