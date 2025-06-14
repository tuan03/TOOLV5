// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// document.addEventListener('mousedown', async function (event) {

// });

(function () {
  function initToastSystem() {
    const container = document.createElement('div');
    container.style.position = 'fixed'; // fixed để dính góc màn hình
    container.style.top = '20px';
    container.style.right = '20px';
    container.style.zIndex = '999999'; // đủ lớn để nằm trên tất cả
    container.style.pointerEvents = 'none'; // không chặn click của phần tử bên dưới
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'flex-end'; // canh phải
    container.style.gap = '10px'; // cách đều toast, thay vì margin-bottom

    document.body.appendChild(container);

    const shadow = container.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
      .toast {
        background: linear-gradient(135deg, #2a2a2a, #3c3c3c);
        color: #ffffff;
        padding: 20px 30px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 15px;
        min-width: 200px;
        max-width: 320px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        animation: slideIn 0.4s ease-out forwards;
        opacity: 0;
        pointer-events: auto; /* cho phép tương tác */
        transition: all 0.2s ease;
      }
      .toast.exiting {
        animation: slideOut 0.4s ease-in forwards;
      }
      .toast:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
      }
      .toast-content {
        flex-grow: 1;
        margin-right: 10px;
      }
      .close-btn {
        background: none;
        border: none;
        color: #ffffff;
        font-size: 14px;
        cursor: pointer;
        opacity: 0.7;
        padding: 0 4px;
      }
      .close-btn:hover {
        opacity: 1;
      }
      @keyframes slideIn {
        0% { opacity: 0; transform: translateX(100%); }
        100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideOut {
        0% { opacity: 1; transform: translateX(0); }
        100% { opacity: 0; transform: translateX(100%); }
      }
      @media (max-width: 480px) {
        .toast {
          min-width: 160px;
          max-width: 90vw;
          font-size: 14px;
        }
      }
    `;
    shadow.appendChild(style);

    window.showToast = function (message, duration = 4000) {
      const toast = document.createElement('div');
      toast.className = 'toast';

      const content = document.createElement('span');
      content.className = 'toast-content';
      content.textContent = message;
      toast.appendChild(content);

      const closeBtn = document.createElement('button');
      closeBtn.className = 'close-btn';
      closeBtn.textContent = '×';
      closeBtn.onclick = () => {
        toast.classList.add('exiting');
        setTimeout(() => toast.remove(), 400);
      };
      toast.appendChild(closeBtn);

      shadow.appendChild(toast);

      // Auto-remove sau duration
      setTimeout(() => {
        toast.classList.add('exiting');
        setTimeout(() => toast.remove(), 400);
      }, duration);
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToastSystem);
  } else {
    initToastSystem();
  }
})();
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


document.addEventListener('mousedown', async function (event) {
  if (event.button === 1) {
    const textarea = await navigator.clipboard.readText();
    const lines = textarea.split(/\r?\n/);
    const links = lines
      .map(line => line.trim())
      .filter(line => line !== "");
    for (let i = 0; i < links.length; i++) {
      await delay(200);
      const link = links[i];
      window.open(link, '_blank');
    }
    for (let i = 0; i < links.length; i++) {
      await delay(200);
      const link = links[i];
      window.open(link, '_blank');
    }
  }
  if (event.button === 2) {
    const mt = await fetch("http://localhost:3001/getLink")
    const data = await mt.json()
    if (data.error) {
      showToast(data.error, 2000);
      return;
    }
    const { firstLink, secondLink } = data;
    window.open(firstLink.link, '_blank', "noopener");
    await delay(50);
    window.open(secondLink.link, '_blank', "noopener");
    await delay(200);
    window.open("https://www.paypal.com/myaccount/profile/email/list?entryPoint=profile_home", '_blank', "noopener");
    
  }
});
