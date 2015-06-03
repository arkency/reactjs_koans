var React = require('react');

// Congratulations for realization of the previous exercise. That was bigger example. So this one you can treat as a rest.
// You have already learnt how to create React's Components and how they affect each other. This excercise will show you
// how to render prepared components on view.  
//
// Task #1: Fill the `renderName` method. It should render ReactElement into the DOM.

// This is a dead simple React component. You have to render it.
var Name = React.createClass({

	render: function() {
		return (
			<p>'My name is koan'</p>
		);
	}

});

// Hint: You have to use `React.render()` method. This method takes two params `ReactElement' and DOM node.

export default function renderName() {}