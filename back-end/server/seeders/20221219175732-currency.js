'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('currencies', [{
      country: 'Afghanistan',
      name: 'AFN',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      country: 'Argentina Peso',
      name: 'ARS',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      country: 'Aruba Guilder',
      name: 'AWG',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      country: 'Australia Dollar',
      name: 'AUD',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      country: 'Azerbaijan Manat',
      name: 'AZN',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },



    {
      country: 'Bahamas Dollar',
      name: 'AZN',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      country: 'Barbados Dolla',
      name: 'BBD',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      country: 'Belarus Ruble',
      name: 'BYN',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      country: 'Belize Dollar',
      name: 'BZD',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      country: 'Bermuda Dollar',
      name: 'BMD',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      country: 'Bolivia Bolíviano',
      name: 'BOB',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      country: 'Brazil Real',
      name: 'BRL',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    {
      country: 'Canada Dollar',
      name: 'CAD',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
    },
    ],
  {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('currencies', null, {});
  }
};
