const shopList = document.querySelector(".shop-list");
const form = document.querySelector(".js-form");
const input = form.querySelector("input");

const ITEM_LS = "items";
let items = [];

function saveListItem() {
  localStorage.setItem(ITEM_LS, JSON.stringify(items));
}

function submitHandler(event) {
  event.preventDefault();
  const itemName = input.value;
  paintShowList(itemName);
  input.value = "";
}

function delBtnHandler(event) {
  const btn = event.target;
  const li = btn.parentNode.parentNode;
  const delLiId = parseInt(li.id);
  shopList.removeChild(li);
  const newItems = items.filter(function (item) {
    return item.id !== delLiId;
  });
  items = newItems;
  saveListItem();
}
function paintShowList(itemName) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const delBtn = document.createElement("button");
  const spanItem = document.createElement("span");
  const newid = items.length + 1;
  spanItem.innerText = itemName;
  delBtn.innerText = "🛒";
  delBtn.addEventListener("click", delBtnHandler);
  div.appendChild(spanItem);
  div.appendChild(delBtn);
  li.appendChild(div);
  li.setAttribute("id", `${newid}`);
  shopList.appendChild(li);
  const itemObj = {
    name: itemName,
    id: newid,
  };
  items.push(itemObj);
  saveListItem();
}

function loadList() {
  const loadedItem = localStorage.getItem(ITEM_LS);
  if (loadedItem !== null) {
    const parsedItem = JSON.parse(loadedItem);
    parsedItem.forEach(function (element) {
      paintShowList(element.name);
    });
  }
}

function init() {
  loadList();
  form.addEventListener("submit", submitHandler);
}

init();
