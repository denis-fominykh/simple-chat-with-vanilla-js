import { IFrame } from './iframe';
import { Mediator } from './mediator';

document.addEventListener('DOMContentLoaded', () => {
  const mediator = new Mediator();

  document
    .querySelector('.iframe-creator__user-creator')
    .addEventListener('click', () => {
      const name = document.querySelector('.iframe-creator__name-input');
      if (name.value !== '') {
        mediator.addIFrame(new IFrame(name.value));
        name.value = '';
      }
    });

  document
    .querySelector('.iframe-chat')
    .addEventListener('click', event => {
      if (event.target.classList.contains('iframe__delete-btn')) {
        mediator.deleteIFrame(event.target);
      }

      const message = event.target.previousSibling.previousSibling;
      const from = event.target
        .previousSibling
        .previousSibling
        .previousSibling
        .previousSibling;
      if (
        message.classList.contains('iframe__own-message') ||
        from.classList.contains('iframe__name')
      ) {
        mediator.send(message.value, from.textContent);
        message.value = '';
      }
    });
});
