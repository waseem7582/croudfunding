const campaignController = require('../controllers').campaignController;

module.exports = (app) => {
  app.get('/api', (req, res) => {
    return res.status(200).send({
      message: 'Welcome to the Charities API!',
    })
  });

  app.get('/api/campaign', (req, res) => {
    campaignController.list(req, res)
  });
  app.get('/api/currency', (req, res) => {
    campaignController.currency(req, res)
  });
  app.get('/api/campaign/:id', (req, res) => {
    campaignController.retrieve(req, res)
  });

  app.post('/api/donate', (req, res) => {
    campaignController.create(req, res)
  });
};
