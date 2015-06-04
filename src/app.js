import React from "react";
import HelloWorld from 		'./es6/01-HelloWorld.js';
import PartiesList from 	'./es6/02-PartiesList.js';
import WhatsYourName from 	'./es6/03-WhatsYourName.js';
import GroceryList from 	'./es6/05-Challenge-GroceryList.js';
import renderName from 		'./es6/06-RenderComponent.js';

(function() {
	React.render(React.createElement(HelloWorld, null), document.getElementById("ex01"));
	React.render(React.createElement(PartiesList, null), document.getElementById("ex02"));
	React.render(React.createElement(WhatsYourName, null), document.getElementById("ex03"));
	React.render(React.createElement(GroceryList, null), document.getElementById("ex05"));
});