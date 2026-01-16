const { executeAction } = require('./actions.service');

exports.runWorkflow = async (workflow) => {
  const context = {
    logs: [],
    notifications: [],
    executedSteps: 0
  };

  for (const step of workflow.steps) {
    if (step.type === 'condition') {
      if (eval(step.if)) {
        await executeAction(step.then, context);
        context.executedSteps++;
      }
    } else {
      await executeAction(step, context);
      context.executedSteps++;
    }
  }

  return {
    workflow: workflow.workflowName,
    status: 'completed',
    ...context
  };
};
