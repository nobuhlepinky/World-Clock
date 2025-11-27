function updateTime() {
  let seoulElement = document.querySelector("#seoul");
  if (seoulElement) {
    let seoulDateElement = seoulElement.querySelector(".date");
    let seoulTimeElement = seoulElement.querySelector(".time");
    let seoulTime = moment().tz("Asia/Seoul");

    seoulDateElement.innerHTML = seoulTime.format("MMMM Do, YYYY");
    seoulTimeElement.innerHTML = `<strong>  ${seoulTime.format(
      "h:mm:ss"
    )} </strong> <small>${seoulTime.format("A")}</small>`;
  }

  let capeTownElement = document.querySelector("#cape-town");
  if (capeTownElement) {
    let capeTownDateElement = capeTownElement.querySelector(".date");
    let capeTownTimeElement = capeTownElement.querySelector(".time");
    let capeTownTime = moment().tz("Africa/Johannesburg");

    capeTownDateElement.innerHTML = capeTownTime.format("MMMM Do, YYYY");
    capeTownTimeElement.innerHTML = `<strong>  ${capeTownTime.format(
      "h:mm:ss"
    )} </strong> <small>${capeTownTime.format("A")}</small>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
        </div>
        <div class="time">
          <strong> ${cityTime.format("h:mm:ss")} </strong>
          <small>${cityTime.format("A")}</small>
        </div>
      </div>
    </div> 
    </br> <a href="/">All cities</a> `;
}

setInterval(updateTime, 1000);
updateTime();

let selectElement = document.querySelector("#select-city");
selectElement.addEventListener("change", updateCity);
