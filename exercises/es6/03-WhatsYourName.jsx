var React = require("react");

// Let's get to the most important feature of React.js - reactive state.
// Each React component has 2 important objects:
//  * Properties - we pass these values when we create component. They don't change over entire 
//                 life of component.
//  * State      - these are the values that we can change over entire time of component's 
//                 existance. When you change some value in `state` object, React will trigger UI
//                 update and modify HTML to look exactly like after the change.
//
//  You can pass properties to components using JSX attributes (you did it on last exercise!). e.g.
//
//  ```
//  <div className="example-class" attr1="ugabuga">[...]</div>
//  ```
//
//  We created `React.DOM.div` component with properties: `{className: "example-class", attr1: "ugabuga"}`
//
// You have two tasks to complete in this exercise:
//
// TASK #1: Someone left non-working code here. Fix the `onNameChange` method. After user type name 
//          into input, the paragraph should automatically update.
// Warning: Do not try to change the `render` structure. But it's good idea to look how it looks like
//
// TASK #2: If there are no name given, we shouldn't display the welcoming message.
//          Display text: "Hey there. Enter you name." - just copy it
//          Use temporary variables to achieve the goal. E.g.
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
  // If nobody sets state for component, it will be `null`. In render we are referring to 
  // `state.name`. If we don't set state, we will get error, because we would try to get
  // key from `null`
  //
  // Think about it: you could set initial user's name from cookie! What else could you do here?
  constructor(props) {
    super(props);
    this.state = { name: "" };

    // If we don't bind this method - it would have access to wrong `state`.
    this.onNameChange = this.onNameChange.bind(this);
  }

  // We can deined our own methods in React's component class. That's really convenient way to 
  // make our code much clearner.
  //
  // `event` variable doesn't contain only value we entered into input field. You should find
  // that value in this object
  //
  // Hint: use `console.log`.
  onNameChange(event) {
    // Huh... There's something wrong here...
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
//   2. You must be very careful on binding methods of components! (see last line of `constructor`)
//   3. `state` object is `null` by default! If you want to display blank value based on attribute
//      from state, you should at least initialize state as an empty object. 

// ProTip: Always specify input's `name` attribute: React uses it to identify inputs on page.
//         Not doing so, may cause some long time wasted debugging your program.

export default WhatsYourName
