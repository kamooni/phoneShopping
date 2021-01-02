const clock = document.querySelector(".clock");
const title = clock.querySelector(".clock-title");

function init() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  title.innerText = `${hour < 10 ? `0${hour}` : hour} : ${
    minute < 10 ? `0${minute}` : minute
  }`;
  setInterval(init, 1000);
}
init();
