'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('campaigns', [{
      name: 'compain1',
      discriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      amount: 100.00,
      expiration_date: '2022-12-30',
      status: 'active',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
      ownerId: 1,
      received_amount: 0
    },
    {
      name: 'compain2',
      discriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      amount: 100.00,
      expiration_date: '2022-12-30',
      status: 'active',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
      ownerId: 2,
      received_amount: 0
    },
    {
      name: 'compain3',
      discriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      amount: 100.00,
      expiration_date: '2022-12-30',
      status: 'active',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
      ownerId: 3,
      received_amount: 0
    },
    {
      name: 'compain4',
      discriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      amount: 100.00,
      expiration_date: '2022-12-30',
      status: 'active',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
      ownerId: 4,
      received_amount: 0
    },
    {
      name: 'compain5',
      discriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      amount: 100.00,
      expiration_date: '2022-12-30',
      status: 'active',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
      ownerId: 5,
      received_amount: 0
    },
    {
      name: 'compain6',
      discriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      amount: 100.00,
      expiration_date: '2022-12-30',
      status: 'active',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
      ownerId: 6,
      received_amount: 0
    },
    {
      name: 'compain7',
      discriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      amount: 100.00,
      expiration_date: '2022-12-30',
      status: 'active',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
      ownerId: 7,
      received_amount: 0
    },
    {
      name: 'compain8',
      discriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      amount: 100.00,
      expiration_date: '2022-12-30',
      status: 'active',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
      ownerId: 8,
      received_amount: 0
    },
    {
      name: 'compain9',
      discriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      amount: 100.00,
      expiration_date: '2022-12-30',
      status: 'active',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
      ownerId: 9,
      received_amount: 0
    },
    {
      name: 'compain10',
      discriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      amount: 100.00,
      expiration_date: '2022-12-30',
      status: 'active',
      createdAt: '2022-12-19 12:10:02',
      updatedAt: '2022-12-19 12:10:02',
      ownerId: 10,
      received_amount: 0
    }
    ],
  {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('compaigns', null, {});
  }
};
