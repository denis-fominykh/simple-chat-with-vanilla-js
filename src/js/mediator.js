export class Mediator {
  constructor() {
    this.iframes = [];
  }

  addIFrame(iframe) {
    this.iframes.push(iframe);
  }

  getIFrames() {
    return this.iframes;
  }
}
