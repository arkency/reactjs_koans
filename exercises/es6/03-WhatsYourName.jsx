var React = require("react");

class WhatsYourName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.onNameChange = this.onNameChange.bind(this);
  }

  onNameChange(event) {
    this.setState({attribute: "Something!"});
  }

  render() {
    return (
      <div>
        <p>Hello {this.state.name}</p>
        <input type="text" name="name" onChange={this.onNameChange} />
      </div>
    )
  }
}

// Notice some details here:
//   1. `onChange` attribute isn't placed betwen `" "`, but `{ }` - we want to reference function,
//      not string

// ProTip: Always specify input's `name` attribute: React uses it to identify inputs on page.
//         Not doing so, may cause some long time wasted debugging your program.

export default WhatsYourName
