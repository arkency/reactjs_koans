var React = require("react");

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: []
    };

    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  addGroceryItem() {}
  clearList() {}

  render() {
    let groceriesComponents = [];
    for(grocery in this.state.groceries) {
      groceriesComponents.push(<GroceryListItem grocery={grocery} />);
    }

    return (
      <ul>
        {groceriesComponents}              
      </ul>
    );
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
