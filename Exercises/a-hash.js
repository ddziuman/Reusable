'use strict';

const phonebook = {
  danil: '+381111111111',
  timur: '+382222222222',
  oleksandr: '+383333333333',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
