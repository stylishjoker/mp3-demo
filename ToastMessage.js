const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const ToastMessage = {
  Messages: [
    {
      status: "update",
      icon: '<i class="fa-solid fa-star-of-david"></i>',
      tittle: "Chức năng đang được cập nhật !!!",
      cancel: '<i class="fa-solid fa-xmark"></i>',
    },
  ],
  displayMessage: () => {
    const main = document.getElementById("toast-message");
    const toast = document.createElement("div");
    toast.classList.add("toast-message");
    toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s 3s forwards`;
    // toast.style.animation = "hidenToast ease 2s"
    const Html = ToastMessage.Messages.map((Message) => {
      return `
      <div class = "message-icon">${Message.icon}</div>
      <div class = "message-tittle"><span>${Message.tittle}</span></div>
      <div class = "message-cancel">${Message.cancel}</div>
      <div class="message-countdown"></div>
      `;
    });
    const autoRemoveId = setTimeout(function () {
      // toast.style.animation = "hidenToast ease 0.3s"
      main.removeChild(toast);
    }, 3000);
    toast.onclick = function (e) {
      if (e.target.closest(".message-cancel")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };
    toast.innerHTML = Html.join("");
    main.appendChild(toast);
  },
  start: () => {
    ToastMessage.displayMessage();
  },
};
const handleClicks = $$(".sideBar_special-main_element");
handleClicks.forEach((handleClick) => {
  handleClick.onclick = () => {
    ToastMessage.start();
  };
});
