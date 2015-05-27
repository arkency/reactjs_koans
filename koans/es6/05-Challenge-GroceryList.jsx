/**
  * ATTENTION!
  * This exercise is under construction. Some tasks may be finished and working, but don't expect it
  * working fully until this comment disappears!
  **/

var React = require("react");

// This exercise would be a bit bigger than previous exercises. We would make reactive grocery list.
//
// Task #1: Fill return of `GroceryList` render method. It should return HTML list of 
//          `GroceryListItem`. We already prepared variable containing list of items for you.
// Task #2: Create definition of the 'addGroceryItem' method. It should modify current state and re-render component. After all you will see 
//          new element on the list. We prepared two commponents for you. Please render the button and input under your list and define `onClick` handler for the button. 
//          Do you remember how we used `onChange` event in third excersise?

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        {
          name: "Apples"
        },
        inputValue: "" 
      ]
    };

    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.clearList = this.clearList.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
  }

  inputChanged(event) {
    this.setState({inputValue: event.target.value});
  }

  // Hint 1: You can `concat` method to modify groceries list.
  // Hint 2: Remember about empty values
  addGroceryItem(event) {}

  clearList() {}

  // There are a few ways in which React components can be customised and one method is to use properties. We mentioned about this in proevious excersise.
  // Properties are to React components what attributes are to HTML elements. This is a method to pass immutable 
  // configuration to child components. As you can see here we have defined `grocery` property for each `GroceryListItem`. 

  render() {
    let groceriesComponents = [];
    let newProductInput = null;
    let newProductAddButton = null;
    
    for(let grocery of this.state.groceries) {
      groceriesComponents.push(<GroceryListItem grocery={grocery} />);
    }

    newProductInput = <input type="text" name="item" onChange={this.inputChanged}/>;
    // Something is missing here... What happen if you click this button now?
    newProductAddButton = <button>'Add new Product'</button>;

    return (<div></div>);
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
