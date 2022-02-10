import React from 'react';
import ReactDOM, { render } from 'react-dom';

import Message from '../partial/Message';

class MessageService {

  constructor() {
    this.container = null;
  }

  showMessage(options) {
    this.closeMessage();
    clearTimeout(this.timeout);
    const data = options || JSON.parse(localStorage.getItem('messageObject'));
    this.container = document.getElementById('js-message-error')
    render(<Message {...data} />, this.container);
    localStorage.removeItem('messageObject');
    this.timeout = setTimeout(() => {
      this.closeMessage();
      clearTimeout(this.timeout);
    }, 3000);
  }

  closeMessage() {
    if (this.container) {
      ReactDOM.unmountComponentAtNode(this.container);
    }
  }
}

const messageService = new MessageService();
export default messageService;
