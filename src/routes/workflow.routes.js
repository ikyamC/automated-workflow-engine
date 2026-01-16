const router = require('express').Router();
const { executeWorkflow } = require('../controllers/workflow.controller');

router.post('/execute', executeWorkflow);

module.exports = router;
