var React = require("react");

// This exercise is a bit bigger than the previous ones.
// We would make reactive grocery list.
//
//
// Task: User would need to clear whole grocery list in one click.
//          Render a proper button under your list and implement the `clearList` method.
//          This method should clear `groceries` array placed in your state.
//          This is similar to previous task so I don't want to say nothing more.
//          Have fun.
//
//          Caution: Remember that you should change state only using `setState`
//                   method. The only exception of that rule is state definition
//                   in component's class constructor.
//

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
      this.setState({groceries: this.state.groceries.concat([{name: this.state.newGroceryName}])});
    }
  }

  // Fill the definition of the following method to allow clearing the list
  // Hint: You can just simply set the groceries to an empty array.
  clearList() {}

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
          />
      );
    }

    newProductInput = <input className='new-item' type="text" onChange={this.inputChanged}/>;

    newProductAddButton = <button className='add-product' onClick={this.addGroceryItem}>Add new Product</button>;

    //Something is missing here... You will need this component to finish task #3
    clearListButton = <button className='clear-list'>Clear the List</button>;

    return (
      <div>
        <ul>
        {groceriesComponents}
        </ul>
        {newProductInput}
        {newProductAddButton}
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
    return (<li className={selected}>{this.props.grocery.name}</li>);
  }
}

export default GroceryList;
