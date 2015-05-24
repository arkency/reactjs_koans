var React = require("react");

// Let's get to the most important feature of React.js - reactive state.
// Each React component has 2 important hashes:
//  * Properties - we pass these values when we create component. They don't change over entire 
//                 life of component.
//  * State      - these values can change over entire life of component. When you change some value 
//                 in `state` object, React will re-calculate `render` method and update HTML to 
//                 look exactly like specifed in class.
//
// You can pass properties to components using JSX attributes (you did it on last exercise!). e.g.
//
// ```
// <div className="example-class" attr1="ugabuga">[...]</div>
// ```
//
// We created `React.DOM.div` component with properties: `{className: "example-class", attr1: "ugabuga"}`
//
// You have two tasks to complete in this exercise:
// TASK #1: Someone left broken `onNameChange` method. It is always triggered after changing the
//          value of `username` input (it is `onChange` callabck).
//          This method takes event as its only argument. You need to retrieve input value from 
//          that object and update the `name` field in `state` object.
// Warning: Do not try to change the `render` structure.
//
// TASK #2: If there is no name given, we should display message encouraging user to insert his
//          name. Display text: "Hey there. Enter your name." if name length is 0.
//
//          HINT: Use temporary variables to achieve the goal. E.g.
//          ```
//          render() {
//            var numberToDisplay;
//            if (this.state.number > 9000) {
//              numberToDisplay = "IT'S OVER 9000!";
//            } else {
//              numberToDisplay = this.state.number;
//            }
//            return(
//              <span>{numberToDisplay}</span>
//            )
//          ```
// 
// Further reading on task #2: https://facebook.github.io/react/tips/if-else-in-JSX.html

class WhatsYourName extends React.Component {
  // By default `this.state` is `null`. In rendering method we are reffering to the specific 
  // element from `state` object - `this.state.name`. If we don't set initial state, we will get 
  // error. It's impossible to fetch an object key from `null`.
  //
  // Think about it: you can set username from cookie on component initialization!
  //                 What else could you do here?
  constructor(props) {
    // Properties object is called `props`. You can access it with `this.props`. We won't use them
    // in this exercise.
    super(props);
    this.state = { name: "" };

    // Warning! If we don't bind this method - we would not be able to update state.
    this.onNameChange = this.onNameChange.bind(this);
  }

  // `event` is the only argument passed to that method. It will be an event object thrown by React 
  // on events like `click`, `change` etc.
  //
  // You need to correct the call of `setState` method. Just try to set `username` field to the value
  // passed in event.
  //
  // Hint: use `console.log` and check `event.target` key to see the content of `input`.
  onNameChange(event) {
    // Huh... There's something wrong here...
    this.setState({bad_attribute: "ChangeME!"});
  }

  render() {
    return (
      <div>
        <p>Hello {this.state.name}</p>
        <input type="text" name="username" onChange={this.onNameChange} />
      </div>
    )
  }
}

// Notice some details here:
//   1. `onChange` attribute isn't placed betwen `" "`, but `{ }` - we want to reference function,
//      not string.
//   2. You must be very careful on methods binding (you can do it e.g. in constructor like here).
//   3. `state` object is `null` by default! If you want to display initial value from state object, 
//      you should initialize state object.

// ProTip: Always specify input's `name` attribute: React uses it to identify inputs on page.
//         Not doing so, may cause some long time wasted debugging your program.

export default WhatsYourName
