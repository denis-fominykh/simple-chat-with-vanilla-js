import { UI } from './ui';

export class Mediator {
  constructor() {
    this.iframes = [];
  }

  send(message, from) {
    this.iframes.forEach(item => {
      if (item.name === from) {
        item.send(message);
      }
    });
  }

  addMessage(message, from) {
    UI.addMessage(message, from);
    UI.cleanChat();
  }

  addIFrame(iframe) {
    if (!this.iframes.find(item => item.name === iframe.name)) {
      this.iframes.push(iframe);
      iframe.mediator = this;
      UI.addIFrameToChat(iframe);
      this.send('I\'ve joined the conversation', iframe.name);
    } else {
      alert('Choose another name');
    }
  }

  deleteIFrame(element) {
    const name = element.nextSibling.nextSibling.textContent;
    const deleteItem = this.iframes.find(item => item.name === name);
    this.send('I\'ve left this conversation', name);
    this.iframes.splice(this.iframes.indexOf(deleteItem), 1);
    UI.deleteIFrame(element);
  }
}
