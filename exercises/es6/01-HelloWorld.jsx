var React = require("react");

// That's really simple React Component. It has it's own name (HelloWorld) - it will be used for
// e.g. error displaying. 

class HelloWorld extends React.Component {
    // All components *must* have `render` method defined.

    // Your task is to render HTML span with "Hello World" text
    render() {
        return(
            <div>Fill Me In!</div>
        );
    }
}

// Note: You can use official Google Chrome extension to browse all ReactJS components rendered
//       on single page. See the description here: https://facebook.github.io/react/blog/2014/01/02/react-chrome-developer-tools.html

export default HelloWorld;
