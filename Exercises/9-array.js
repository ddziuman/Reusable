'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Danil Dziuman', phone: '+380000000001' },
  { name: 'Soluian Oleksandr', phone: '+380531111112' },
];

const findPhoneByName = (name) => {
  for (const item of phonebook) {
    if (item.name === name) return item.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
