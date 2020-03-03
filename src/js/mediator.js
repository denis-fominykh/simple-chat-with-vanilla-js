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
    UI.clearChat();
  }

  addIFrame(iframe) {
    this.iframes.push(iframe);
  }

  getIFrames() {
    return this.iframes;
  }
}
