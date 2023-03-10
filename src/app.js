//PARIS

setInterval(function () {
  let parisTime = moment().tz("Europe/Paris");

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format(
    "h:mm:ss [<small>] A  [</small]"
  );
}, 1000);

//Bangkok

function setBankokTime() {
  let bangkokTime = moment().tz("Asia/Bangkok");

  let bangkokElement = document.querySelector("#bangkok");
  let bangkokDateElement = bangkokElement.querySelector(".date");
  let bangkokTimeElement = bangkokElement.querySelector(".time");

  bangkokDateElement.innerHTML = bangkokTime.format("MMMM Do YYYY");
  bangkokTimeElement.innerHTML = bangkokTime.format(
    "h:mm:ss [<small>] A  [</small]"
  );
}

setInterval(setBankokTime, 1000);

// Mumbai

function setReykjavikTime() {
  let reykjavikTime = moment().tz("Atlantic/Reykjavik");

  let reykjavikElement = document.querySelector("#reykjavik");
  let reykjavikDateElement = reykjavikElement.querySelector(".date");
  let reykjavikTimeElement = reykjavikElement.querySelector(".time");

  reykjavikDateElement.innerHTML = reykjavikTime.format("MMMM Do YYYY");
  reykjavikTimeElement.innerHTML = reykjavikTime.format(
    "h:mm:ss [<small>] A  [</small]"
  );
}

setInterval(setReykjavikTime, 1000);

// Select

function showCityTime(event) {
  let selectedCityTimezone = event.target.value;
  if (selectedCityTimezone == "current") {
    selectedCityTimezone = moment.tz.guess();
  }
  let cityName = selectedCityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(selectedCityTimezone);
  let citiesElement = document.querySelector("#all-cities");
  citiesElement.innerHTML = `
  <div class="city">
            <div>
              <h2>${cityName}</h2>
              <div class="date"> ${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )} <small> ${cityTime.format("A")} </small"
            </div>
          </div>
<a class="btn btn-primary"role="button" a href="index.html"> Return to Home</a>`;
}

let select = document.querySelector("#select");
select.addEventListener("change", showCityTime);
