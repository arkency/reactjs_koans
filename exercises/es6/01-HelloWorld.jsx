var React = require("react");

// That's really simple React Component. It has it's own name (HelloWorld) - it will be used for
// e.g. error displaying. 
//
// TASK: Your task is to render HTML span with "Hello World" text.

class HelloWorld extends React.Component {
    // All components *must* have `render` method defined.
    //
    // To define components' render method, we use syntax called JSX. As you can see it looks
    // similar to HTML. But it's not HTML - in next lessons you will see the differences.
    //
    // React delivers big set of standard HTML elements live `div`, `p`, `canvas` etc. They are
    // React components ressembilng HTML tags we use on our sites everyday.
    //
    // You can also use standard JavaScript syntax and put React.DOM elements here. However, JSX
    // is much more popular, so we will stick with it.
    render() {
        return(
            <div>Fill Me In!</div>
        );
    }
}

// Note: You can use official Google Chrome extension to browse all ReactJS components rendered
//       on single page. See the description here: https://facebook.github.io/react/blog/2014/01/02/react-chrome-developer-tools.html

export default HelloWorld;
