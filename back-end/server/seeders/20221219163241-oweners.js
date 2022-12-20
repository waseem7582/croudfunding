'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('owners', [{
      username: "Alzheimer",
      cryptowalletaddress: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      username: "smith",
      cryptowalletaddress: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktjfgkj",
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      username: "joy",
      cryptowalletaddress: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktjkdjd",
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      username: "stephene",
      cryptowalletaddress: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktj8ri9y",
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      username: "gold",
      cryptowalletaddress: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktjfgkj",
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      username: "roy",
      cryptowalletaddress: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktjfgkj",
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      username: "json",
      cryptowalletaddress: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktjfgkj",
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      username: "Dixie",
      cryptowalletaddress: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktjfgkj",
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      username: "Asterism",
      cryptowalletaddress: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktjfgkj",
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      username: "Krazy",
      cryptowalletaddress: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktjfgkj",
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('owners', null, {});
  }
};
