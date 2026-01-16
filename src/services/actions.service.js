const delay = ms => new Promise(res => setTimeout(res, ms));

exports.executeAction = async (step, context) => {
  switch (step.type) {
    case 'log':
      context.logs.push(step.message);
      break;

    case 'notify':
      context.notifications.push(step.channel);
      break;

    case 'delay':
      await delay(step.ms || 500);
      break;

    default:
      throw new Error(`Unknown action: ${step.type}`);
  }
};
