export class IFrame {
  constructor(name) {
    this.name = name;
    this.mediator = null;
  }

  send(message) {
    this.mediator.addMessage(message, this);
  }
}
