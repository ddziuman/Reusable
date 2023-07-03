'use strict';

const fn = () => {
  const assignee = { field1: 1, field2: true };
  const objConstant = { name: 'Danil' };
  let objVariable = { name: 'Ivan' };
  objConstant.name = 'Danil Dziuman!';
  objVariable.name = 'Ivan Train?';
  // objConstant = assignee;
  objVariable = assignee;
}; // explaination: object is a structured type, and has a 'const' reference

module.exports = { fn };
