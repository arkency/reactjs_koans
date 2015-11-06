var React = require("react");

import HelloWorld 	  	from './01-HelloWorld.jsx';
import PartiesList 	  	from './02-PartiesList.jsx';
import WhatsYourName  	from './03-WhatsYourName.jsx';
import GroceryListPart1 from './05-Challenge-GroceryList-part-1.jsx';
import GroceryListPart2 from './05-Challenge-GroceryList-part-2.jsx';
import GroceryListPart3 from './05-Challenge-GroceryList-part-3.jsx';
import GroceryListPart4 from './05-Challenge-GroceryList-part-4.jsx';
import renderName 	  	from './06-RenderComponent.jsx';

React.render(<HelloWorld/>,    	  document.getElementById("tab-content1"));
React.render(<PartiesList/>,   	  document.getElementById("tab-content2"));
React.render(<WhatsYourName/>, 	  document.getElementById("tab-content3"));
React.render(<GroceryListPart1/>, document.getElementById("tab-content4"));
React.render(<GroceryListPart2/>, document.getElementById("tab-content5"));
React.render(<GroceryListPart3/>, document.getElementById("tab-content6"));
React.render(<GroceryListPart4/>, document.getElementById("tab-content7"));
renderName(document.getElementById("tab-content8"));