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

  addIFrame(iframe) {
    this.iframes.push(iframe);
  }

  getIFrames() {
    return this.iframes;
  }
}
