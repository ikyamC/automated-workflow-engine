const { runWorkflow } = require('../services/workflow.engine');

exports.executeWorkflow = async (req, res) => {
  try {
    const result = await runWorkflow(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
