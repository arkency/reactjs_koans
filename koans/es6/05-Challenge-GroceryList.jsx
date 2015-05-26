var React = require("react");

// This exercise would be a bit bigger than previous exercises. We would make reactive grocery list.
//
// Task #1: Fill return of `GroceryList` render method. It should return HTML list of 
//          `GroceryListItem`. We already prepared variable containing list of items for you.

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        {
          name: "Test"
        } 
      ]
    };

    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  addGroceryItem() {}
  clearList() {}

  render() {
    let groceriesComponents = [];
    for(let grocery of this.state.groceries) {
      groceriesComponents.push(<GroceryListItem grocery={grocery} />);
    }

    return (<span>FILL ME IN</span>);
  } 
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grocery: props.grocery };
    this.toggleGroceryCompleteness = this.toggleGroceryCompleteness.bind(this);
  }

  toggleGroceryCompleteness() {}

  render() {
    return (<li>{this.props.grocery.name}</li>);
  }
}

export default GroceryList;
