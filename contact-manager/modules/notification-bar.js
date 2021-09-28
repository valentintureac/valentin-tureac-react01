const notificationBar = document.querySelector('.notification-bar');

export const addMessage = (messageElement) => {
  clearMessages();

  notificationBar.append(messageElement);
};

export const clearMessages = () => {
  notificationBar.innerHTML = '';
};

export default notificationBar;
