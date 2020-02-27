import { UI } from './ui';
import { IFrame } from './iframe';

document.addEventListener('DOMContentLoaded', UI.displayIFrame);

document
  .querySelector('.iframe-creator__user-creator')
  .addEventListener('click', () => {
    const name = document.querySelector('.iframe-creator__name-input').value;
    if (name !== '') {
      UI.addIFrameToChat(new IFrame(name));
    }
  });
