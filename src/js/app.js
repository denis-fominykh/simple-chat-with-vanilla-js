import { UI } from './ui';
import { IFrame } from './iframe';
import { Mediator } from './mediator';

const mediator = new Mediator();

document.addEventListener('DOMContentLoaded', UI.displayIFrame(mediator));

document
  .querySelector('.iframe-creator__user-creator')
  .addEventListener('click', () => {
    const name = document.querySelector('.iframe-creator__name-input').value;
    if (name !== '') {
      mediator.addIFrame(new IFrame(name));
      UI.addIFrameToChat(new IFrame(name));
    }
  });

document.querySelector('.iframe-chat').addEventListener('click', event => {
  UI.deleteIFrame(event.target);
});
