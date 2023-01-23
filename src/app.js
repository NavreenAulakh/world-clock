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

// Select

function showCityTime(event) {
  let selectedCityTimezone = event.target.value;
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
          </div>`;
}

let select = document.querySelector("#select");
select.addEventListener("change", showCityTime);
