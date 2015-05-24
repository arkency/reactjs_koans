import assert  from 'assert';
import Answers from '../../src/es6/04-Quiz.js';

describe("04 - Quiz", () => {
  it("Question #1", () => {
    assert.equal(Answers.answer1 === "React.Component", true, "Check the line that contains `extends` word.")
  });

  it("Question #2", () => {
    assert.equal(Answers.answer2, true, "It's not HTML (as we said in exercises 1 and 2, so what is it?");
  });

  it("Question #3", () => {
    assert.equal(Answers.answer3 === 'render', true, "In every component we did create there was one method with HTML-like looking code (JSX). What was that method?");
  });

  it("question #4", () => {
    assert.equal(Answers.answer4 === 'className', true, "`class` is a reserved word in JavaScript. See exercise 2.");
  });

  it("Question #5", () => {
    assert.equal(Answers.answer5, false, "See the comments in exercise #3");
  });

  it("Question #6", () => {
    assert.equal(Answers.answer6 === 'setState', true, "See the `onNameChange` method from exercise #3");
  });

  it("Question #7", () => {
    assert.equal(Answers.answer7, true, "I'll make it easier for you: yes you have. Why? See exercise #3! It's very important.");
  });
});
