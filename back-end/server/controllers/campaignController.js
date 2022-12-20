const campaign = require('../models').campaign;
const currency = require('../models').currency;
const donator = require('../models').donator;
const { QueryTypes } = require('sequelize');
const axios = require('axios');

module.exports = {
  async create(req, res) {
    let to = 'USD';
    let from = req.body.currency;
    let amount = req.body.amount;

    // console.log(req.body.currency);
    if (req.body.currency !=='' && amount !== '' && req.body.name !== '') {
      const response = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?amount=${amount}&from=${from}&to=${to}`, {
        headers: {
            apikey: 'FK6zt7NU68HHRNTVBB2G6bzQC17VfNMU',
            "Accept-Encoding": "gzip,deflate,compress",
        }
      });
      
      let donate = donator
        .create({
          nickname: req.body.name,
          amount: response.data.result,
          state: "valid",
          campaignId: req.body.id,
      });
        
      return campaign
        .findByPk(req.body.id)
        .then(campaigns => {
          if (!campaigns) {
            return res.status(404).send({
              message: 'campaigns not found',
            });
          } else {
            let update_amount = response.data.result + campaigns.received_amount;
            campaign.update(
              { received_amount: update_amount },
              { where: { id: req.body.id } }
            );

            if (campaigns.amount <= update_amount) {
              campaign.update(
                { status: "successful" },
                { where: { id: req.body.id } }
              );
            }
          }
          res.status(200).send({ message: 'amount donate successfully',});
      })
      .catch(error => res.status(400).send(error));
    } else {
      return res.status(500).send({
        status: false,
        message: 'input feild missing',
      })
    }
    
  },
  list(req, res) {
    return campaign
      .findAll({
        where: {status: 'active'}
      })
      .then(campaigns => res.status(200).send(campaigns))
      .catch(error => res.status(400).send(error));
  },
  currency(req, res) {
    return currency
      .findAll()
      .then(currencies => res.status(200).send(currencies))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return campaign
      .findByPk(req.params.id)
      .then(campaigns => {
        if (!campaigns) {
          return res.status(404).send({
            message: 'campaigns not found',
          });
        }
        res.status(200).send(campaigns);
      })
      .catch(error => res.status(400).send(error));
  }
};
