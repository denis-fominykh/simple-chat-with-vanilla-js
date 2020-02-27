export class UI {
  static displayIFrame() {
    const iframes = [
      {
        name: 'John Doe',
      },
      {
        name: 'Jane Doe',
      },
    ];

    iframes.forEach(iframe => UI.addIFrameToChat(iframe));
  }

  static addIFrameToChat(iframe) {
    const chat = document.querySelector('.iframe-chat');
    const iframeForm = document.createElement('div');
    iframeForm.setAttribute('class', 'iframe iframe_appearance');

    iframeForm.innerHTML = `
      <h1 class="iframe__name">${iframe.name}</h1>
      <input class="iframe__own-message">
      <button class="iframe__send-btn">send</button>
      <div class="iframe__all-messages"></div>
    `;

    chat.appendChild(iframeForm);
  }
}
