export class UI {
  static addIFrameToChat(iframe) {
    const chat = document.querySelector('.iframe-chat');
    const iframeForm = document.createElement('div');
    iframeForm.setAttribute('class', 'iframe iframe_appearance');

    iframeForm.innerHTML = `
      <button class="iframe__delete-btn iframe__delete-btn_color">x</button>
      <h1 class="iframe__name">${iframe.name}</h1>
      <input class="iframe__own-message">
      <button class="iframe__send-btn">send</button>
      <div class="iframe__all-messages"></div>
    `;

    chat.appendChild(iframeForm);
  }

  static deleteIFrame(element) {
    element.parentElement.remove();
  }
}
