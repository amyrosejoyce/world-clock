function timeRefreash() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = document.querySelector("#los-angeles .date");
  let losAngelesTimeElement = document.querySelector("#los-angeles .time");

  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("hh:mm:ss [<small>]A[</small>]");

  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("dddd,MMM D,YYYY");

  let parisElement = document.querySelector("#paris");
  let parisDateElement = document.querySelector("#paris .date");
  let parisTimeElement = document.querySelector("#paris .time");

  parisTimeElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("hh:mm:ss [<small>]A[</small>]");

  parisDateElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("dddd,MMM D,YYYY");

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = document.querySelector("#sydney .date");
  let sydneyTimeElement = document.querySelector("#sydney .time");

  sydneyTimeElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("hh:mm:ss [<small>]A[</small>]");

  sydneyDateElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("dddd,MMM D,YYYY");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);

  if (cityTimeZone === "Current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let citiesSelectElement = document.querySelector("#cities");
  citiesSelectElement.innerHTML = ` <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd,MMM D,YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("hh:mm:ss [<small>]A[</small>]")}
        </div> `;
}

timeRefreash();
setInterval(timeRefreash, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
