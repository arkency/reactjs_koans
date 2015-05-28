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
// Task #2: Now something exciting. You have to implement adding items to list. Create definition of the 'addGroceryItem' method. This method should modify current state and re-render component. 
//          After all you will be able to add a new element on the list. We prepared two components for you. Please render the button and input under your list and define the `onClick` handler for the button.
//          Do you remember how we used `onChange` event in third exercise?
// Task #3: Allow clearing list of items. Render a proper button under your list and implement a definition of the `clearList` method. This method should clear `groceries` array placed in your state. 
//          This is similar to previous task so I don't want to say nothing more. Have fun.
// Tesk #4: Ok now the last excersise. You have to implement toggling completness of the each grocery list's item. You have to make each item reactive. 
//          This is why we prepared declaration of the `toggleGroceryCompleteness` method in the `GroceryListItem` component. Take the example of previous exercises :)

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        {
          name: "Apples",
          selected: false
        },
        newGroceryName: "" 
      ]
    };

    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.clearList = this.clearList.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
  }

  // Warning: Do not try to change the `inputChanged` method structure.
  inputChanged(event) {
    this.setState({newGroceryName: event.target.value});
  }

  // Fill definition of the following method to allow adding new items to the list
  // Hint 1: You can try use the `concat` method to modify groceries list.
  // Hint 2: Remember about case where input is empty
  addGroceryItem() {}

  // Fill definition of the following method to allow clearing the list
  clearList() {}

  // Fill definition of the following method to allow adding making complete each item
  // Hint 1: Remember about index value
  toggleGroceryCompleteness() {}

  // Properties are a way to pass parameters to your React components. We mentioned about this in proevious excersise.
  // Properties are to React components what attributes are to HTML elements. This is a method to pass a configuration to child components. As you can see here we have defined `grocery` property for each `GroceryListItem`. 

  render() {
    //As you can see we prepared all view elements for you. Please add necesary handlers and render all elements.
    let groceriesComponents = [];
    let newProductInput = null;
    let newProductAddButton = null;
    let clearListButton = null;
    
    for(var index = 0; index < this.state.groceries.length; index++) {
      groceriesComponents.push(<GroceryListItem grocery={this.state.groceries[index]} onComplete={this.toggleGroceryCompleteness.bind(this, index)}/>);
    }

    newProductInput = <input className='new-item' type="text" onChange={this.inputChanged}/>;
    // Something is missing here... What will happen if you click these buttons now?
    newProductAddButton = <button className='add-product'>'Add new Product'</button>;
    clearListButton = <button className='clear-list'>'Clear the List'</button>;

    return (
      <div>
      </div>
    );
  } 
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let selected = (this.props.grocery.selected == true ? "selected" : "");
    return (<li className={selected} onClick={this.props.onComplete}>{this.props.grocery.name}</li>);
  }
}

export default GroceryList;
