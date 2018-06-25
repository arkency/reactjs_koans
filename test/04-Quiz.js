import Answers from '../src/04-Quiz.js';

describe("04 - Quiz", () => {
  it("Question #1", () => {
    assert.equal(Answers.answer1 === "Component", true, "Check the line that contains `extends` word in each exercise.")
  });

  it("Question #2", () => {
    assert.equal(Answers.answer2, true, "JSX is not an HTML (so what is it?)");
  });

  it("Question #3", () => {
    assert.equal(Answers.answer3 === 'render', true, "In every component we created, there was one method. It contained JSX code.");
  });

  it("Question #4", () => {
    assert.equal(Answers.answer4 === 'className', true, "`class` is a reserved word in JavaScript. See JSX code in exercise #2.");
  });

  it("Question #5", () => {
    assert.equal(Answers.answer5, false, "See the comments about properties in exercise #3");
  });

  it("Question #6", () => {
    assert.equal(Answers.answer6 === 'setState', true, "See the `onNameChange` method from exercise #3");
  });

  it("Question #7", () => {
    assert.equal(Answers.answer7, true, "I'll make it easier for you: yes you have to. Why? See exercise #3! It's very important.");
  });
});
