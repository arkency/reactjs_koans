import PartiesList from '../src/02-PartiesList.js';

describe("02 - Parties List", () => {
  var component;

  beforeEach( () => {
    var elem = document.createElement('div');
    elem = document.body.appendChild(elem);
    return component = React.render(React.createElement(PartiesList), elem);
  });

  afterEach( () => {
    React.unmountComponentAtNode(React.findDOMNode(component));
  });

  describe("should complete all tasks", () => {
    it("Task #1: Party hard - have more than 1 party on party list", () => {
      var lists = React.addons.TestUtils.scryRenderedDOMComponentsWithTag(component, 'ul');
      assert.equal(lists.length, 1, "You must render an `ul` HTML list");

      var list = lists[0];
      var parties = React.addons.TestUtils.scryRenderedDOMComponentsWithTag(list, 'li');

      assert.equal(parties.length > 1, true, "You have only one party on the list. Add one more party to the list.");
    });

    it("Task #2: List has proper class attribute", () => {
      var list = React.addons.TestUtils.findRenderedDOMComponentWithTag(component, 'ul');
      assert.equal(list.props.className, 'parties-list', "`ul` element rendered by React should have `className` attribute `parties-list`");
    });
  });

});
