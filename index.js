function updateTime() {
  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = seoulTime.format("MMMM Do, YYYY");
  seoulTimeElement.innerHTML = `<strong>  ${seoulTime.format(
    "h:mm:ss"
  )} </strong> <small>${seoulTime.format("A")}</small>`;

  let capeTownElement = document.querySelector("#cape-town");
  let capeTownDateElement = capeTownElement.querySelector(".date");
  let capeTownTimeElement = capeTownElement.querySelector(".time");
  let capeTownTime = moment().tz("Africa/Johannesburg");

  capeTownDateElement.innerHTML = capeTownTime.format("MMMM Do, YYYY");
  capeTownTimeElement.innerHTML = `<strong>  ${capeTownTime.format(
    "h:mm:ss"
  )} </strong> <small>${capeTownTime.format("A")}</small>`;
}
setInterval(updateTime, 1000);
updateTime();
