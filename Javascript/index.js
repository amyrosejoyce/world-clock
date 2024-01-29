function timeRefreash() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = document.querySelector("#los-angeles .date");
  let losAngelesTimeElement = document.querySelector("#los-angeles .time");

  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("hh:mm:ss [<small>]A[</small]");

  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("dddd,MMM D,YYYY");

  let parisElement = document.querySelector("#paris");
  let parisDateElement = document.querySelector("#paris .date");
  let parisTimeElement = document.querySelector("#paris .time");

  parisTimeElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("hh:mm:ss [<small>]A[</small]");

  parisDateElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("dddd,MMM D,YYYY");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" id="los-angeles">
          <div>
            <h2>${cityTimeZone}</h2>
            <div class=${format("dddd,MMM D,YYYY")}
          </div>
          <div class=${("hh:mm:ss [<small>]A[</small]");><small>AM</small>}</div>`;
              
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);



setInterval(timeRefreash, 1000);
