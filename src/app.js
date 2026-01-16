const express = require('express');
const workflowRoutes = require('./routes/workflow.routes');

const app = express();
app.use(express.json());

app.use('/api/workflows', workflowRoutes);

app.get('/health', (_, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
