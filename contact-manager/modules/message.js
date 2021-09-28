export const render = (message = '', type = 'primary') => {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('alert', `alert-${type}`);

  messageContainer.textContent = message;

  return messageContainer;
};
