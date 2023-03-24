"use script";

const notificationTxt = document.querySelectorAll(".notification-type");
const notificationActive = `<span class="active"></span>`;
const markBtn = document.querySelector(".markBtn");
const count = document.querySelector(".count");

notificationTxt.forEach((txt, i) => {
  // changing notification state
  if (txt.closest(".notification").classList.contains("unread")) {
    txt.insertAdjacentHTML("beforeend", notificationActive);
    count.textContent = i + 1;
  }
  // resetting notification state
  markBtn.addEventListener("click", () => {
    txt.closest(".notification").classList.remove("unread");
    count.textContent = 0;
  });
});
