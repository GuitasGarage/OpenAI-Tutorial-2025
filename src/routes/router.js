const router = require('express').Router();

const openaiRoutes = require('./openaiRoutes');

router.use('/', openaiRoutes);

module.exports = router;