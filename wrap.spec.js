const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns input string if input string is less than the maxLen', () => {
    expect(wrap("Hello World", 15)).to.equal("Hello World");
  });

  it('Returns input string if input string is less than the maxLen', () => {
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal(`Lorem ipsum dolor
sit eu amet, elit na
magna sem amet nulla
vel purus ac ligula.`);
  });
});

//Consider: when input line is actually shorter than maxLen
//Consider: words that are longer than maxLen
//Consider: word break when word makes sentence more than maxLen
//recursive function
//Type of parameter for line should only be string?