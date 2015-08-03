var React = require("react");

// Let's get to the most important feature of React.js - reactive state.
//
// Each React component contains 2 important hashes:
// * Properties - we pass these values when we create a component. They don't
//                change during the component's lifecycle.
// * State      - these values can change over entire life of the component.
//                When you change some value in `state` object, React will
//                re-calculate the `render` method and update the HTML to match
//                the new state (in this case, updating the class).
//
// You can pass properties to components using JSX attributes. You did it in
// the last exercise! See the example below.
//
// ```
// <div className="example-class" attr1="ugabuga">[...]</div>
// ```
//
// We created `React.DOM.div` component with properties:
// `{className: "example-class", attr1: "ugabuga"}`
//
// You have two tasks to complete in this exercise:
// Task #1: Someone left broken code in the `onNameChange` method. It is always triggered
//          after changing the value of `name` input. This method takes
//          event as its only argument. You need to retrieve the input value from
//          that object and update the `name` field in the `state` object.
// Warning: Do not try to change the `render` structure.
//
// Task #2: If there is no name given, we should display a message encouraging
//          the user to insert their name.
//          Display text: "Hey there. Enter your name." if name.length is 0.
//
//          Hint: Use temporary variables to achieve the goal. See the example below.
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
  // By default `this.state` is `null`. In `render` we are referring to
  // a specific element from the `state` object - `this.state.name`.
  // If we don't set an initial state, we will get an error. It's impossible to fetch
  // an object key from `null`.
  //
  // Think about it: you can set name from a cookie on component initialization!
  //                 What else could you do here?

  constructor(props) {
    // Properties object is called `props`. You can access it with `this.props`.
    // We won't use it in this exercise.
    super(props);
    this.state = { name: "" };

    // Warning! If we don't bind this method - we would not be able to update state.
    this.onNameChange = this.onNameChange.bind(this);
  }

  // `event` is the only argument passed to that method. It will be an event
  // object thrown by React on actions like `click`, `change` etc.
  //
  // You need to correct the call of `setState` method. Just try to set
  // the `name` field to the value passed in event.
  //
  // Hint: use `console.log` to check `event.target`. You will find text
  //       entered to the input there.
  onNameChange(event) {
    // Huh... There's something wrong here...
    this.setState({bad_attribute: "ChangeME!"});
  }

  render() {
    return (
      <div>
        <p>Hello {this.state.name}</p>
        <input type="text" name="name" onChange={this.onNameChange} />
      </div>
    );
  }
}

// Notice some details here:
//   1. `onChange` attribute isn't placed between `" "`, but `{ }` - we want to
//      reference function, not string.
//   2. You must be very careful on methods binding. You can do it in the constructor.
//   3. `state` object is `null` by default! If you want to display initial
//       value from state object, you should initialize state object.

// ProTip: Always specify input's `name` attribute: React uses it to identify
//         inputs on page. Not doing so may cause you to waste a long time
//         debugging your program.

export default WhatsYourName;
