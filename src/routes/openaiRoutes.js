const router = require('express').Router();
const OpenaiController = require('../controllers/OpenaiController');

router.route('/secretariaIA')
    .post((req, res) => OpenaiController.secretariaIA(req, res));

module.exports = router;