const container = document.querySelector(".container");
const listContainer = container.querySelector(".list-container");
const showListBtn = document.querySelector(".show-list-btn");

const SHOWLIST = "show";

function showShopContainer() {
  listContainer.classList.toggle(SHOWLIST);
}

showListBtn.addEventListener("click", showShopContainer);
