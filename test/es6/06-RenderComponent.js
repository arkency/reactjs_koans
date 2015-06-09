import renderName from '../../src/es6/06-RenderComponent.js';

describe("06 - RenderComponent", () => {

  beforeEach( () => {
    renderName(document.body);
  });

  describe("Task #1 - render Name component", () => {
    it('There should be rendered a <p> element with name', () => {
      var element = document.getElementById('name');
      assert.notEqual(element, null, "There should be only one paragraph");
      assert.equal(element.innerHTML, "My name is koan", "The paragraph should contain 'My name is koan'");
    });
  });
});
