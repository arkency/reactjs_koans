var React = require("react");

// This exercise is a bit bigger than the previous ones.
// We would make reactive grocery list.
//
// Task: Ok now the last excersise. You have to implement toggling
//          completeness of the each grocery list's item. Make each item reactive.
//
//          This is why we prepared declaration of the `toggleGroceryCompleteness`
//          method in the `GroceryList` component.
//
//          Take the example of previous exercises :)
//
// === Tasks below aren't required for proceeding in Koans, but we encourage you to try ===
//
// Extra Task: As you can see in `GroceryList` component - it has more than one
//             responsiblity. It displays groceries list, handles state
//             modification and handles the display and logic of new grocery
//             addition. The last of these responsibilities can be easily
//             extracted to another component. The new component should handle
//             only text input and submit button.
//
//             Hint: You can pass callback to the component's method
//                   (like `addGroceryItem`) as an attribute in `render` method.
//
//             Warning: This task doesn't have its own tests, but current ones
//                      should be enough to cover it. The behaviour of whole
//                      app should not change.
//
// Extra Task: You can try to disable submit button for `newGrocery` if
//             `newGroceryName` state is empty. You can just use property
//             `disabled` for submit button component in `render` method.
//
//             Hint: There are no tests for this extra task. You need to do them
//                   yourself. You can perform manual-testing (meh.)
//                   Or try to create your own tests.
//                   Check out `test/es6/05-Challange-GroceryList.js` for tests to this part.

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        {
          name: "Apples",
          selected: false
        }
      ],
      newGroceryName: ""
    };

    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.clearList = this.clearList.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
  }

  // Warning: You shouldn't change this method except working with extra tasks.
  inputChanged(event) {
    this.setState({newGroceryName: event.target.value});
  }

  addGroceryItem() {
    if(this.state.newGroceryName != "") {
      this.setState({groceries: this.state.groceries.concat([{name: this.state.newGroceryName}]), inputDisabled: true});
    }
  }

  clearList(event) {
    this.setState({groceries: []});
  }

  // Fill the definition of the following method to allow adding making complete each item
  // Hint 1: Pay attention to the element's index on the list.
  toggleGroceryCompleteness(grocery_index) {}

  render() {
    // As you can see we prepared all view elements for you. Please add necesary handlers and
    // render all elements.
    let groceriesComponents = [],
        newProductInput,
        newProductAddButton,
        clearListButton;

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
            onComplete={this.toggleGroceryCompleteness.bind(this, index)}
          />
      );
    }

    newProductInput = <input className='new-item' type="text" onChange={this.inputChanged}/>;

    newProductAddButton = <button className='add-product' onClick={this.addGroceryItem}>Add new Product</button>;

    clearListButton = <button className='clear-list' onClick={this.clearList}>Clear the List</button>;

    return (
      <div>
        {groceriesComponents}
        {newProductInput}
        {newProductAddButton}
        {clearListButton}
      </div>
    );
  }
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let selected = (this.props.grocery.selected === true ? "selected" : "");
    return (<li className={selected} onClick={this.props.onComplete}>{this.props.grocery.name}</li>);
  }
}

export default GroceryList;
