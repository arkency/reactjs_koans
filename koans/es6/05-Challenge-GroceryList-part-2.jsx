
var React = require("react");

// This exercise is a bit bigger than the previous ones.
// We would make reactive grocery list.
//
//
// Task: You have to implement adding items to list. Create the implementation
//          of the `addGroceryItem` method. This method should modify `GroceryList`
//          component's state and by that re-render this component.
//
//          After that, you need to render input and button in `GroceryList`
//          (after the groceries list). Users will use them as an input for
//          new groceries.
//
//          We prepared two components for you. Please render the button and
//          input under your list and define the `onClick` handler for the button.
//
//          Hint: See `render` method body. Look for `newProductInput` and
//                `newProductAddButton` variables
//
//          Do you remember how we used `onChange` event in third exercise?


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
    this.inputChanged = this.inputChanged.bind(this);
  }

  // Warning: You shouldn't change this method except working with extra tasks.
  inputChanged(event) {
    this.setState({newGroceryName: event.target.value});
  }

  // Fill the definition of the following method to allow adding new items to the list
  // Hint #1: You can try use the `concat` method to modify groceries list.
  // Hint #2: Remember about case where input is empty.
  addGroceryItem() {}

  render() {
    // As you can see we prepared all view elements for you. Please add necesary handlers and
    // render all elements.
    let groceriesComponents = [],
        newProductInput,
        newProductAddButton;

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

    // Here are components for task #2.
    newProductInput = <input className='new-item' type="text" onChange={this.inputChanged}/>;

    // Something is missing here... What will happen if you click these button now?
    newProductAddButton = <button className='add-product'>Add new Product</button>;

    return (
      <div>
        {groceriesComponents}
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