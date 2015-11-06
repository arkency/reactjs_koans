import renderNameComponent from '../src/06-RenderComponent.js';

describe("06 - RenderComponent", () => {

  beforeEach( () => {
    renderNameComponent(document.body);
  });

  describe("Task #1 - render Name component", () => {
    it('There should be a rendered React component', () => {
      var element = document.getElementById('hello');
      assert.notEqual(element, null, "There should be a paragraph with id `hello` rendered on site.");
      assert.equal(element.innerHTML, "Bazinga!", "Rendered paragraph should contain `Bazinga!`");
    });
  });
});
