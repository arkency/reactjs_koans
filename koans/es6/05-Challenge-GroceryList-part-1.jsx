var React = require("react");

// This exercise is a bit bigger than the previous ones.
// We would make reactive grocery list.
//
// Task: Fill the `return` of `GroceryList` render method. It should return
//          HTML list of `GroceryListItem`. We already prepared variable
//          containing list of these items for you. Next thing is to display the
//          grocery's name using `this.props` in `GroceryListItem`. 

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        {
          name: "Apples",
          selected: false
        }
      ]
    };
  }

  render() {
    // As you can see we prepared all view elements for you. Please add necesary handlers and
    // render all elements.
    let groceriesComponents = [];

    // Properties are a way to pass parameters to your React components.
    // We mentioned this in the third exercise. Properties are to React
    // components what attributes are to HTML elements.
    //
    // This is a method to pass a configuration to child components.
    // As you can see here we have defined `grocery` property for each `GroceryListItem`.
    for(var index = 0; index < this.state.groceries.length; index++) {
      groceriesComponents.push(
          <GroceryListItem
            grocery={this.state.groceries[index]}
          />
      );
    }

    return (
      <div>
      </div>
    );
  }
}

// You have to use component's props to get grocery's name. 
// If you have problem check `this.props` in the console.
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<li>FILL ME IN!</li>);
  }
}

export default GroceryList;