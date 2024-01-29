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

setInterval(timeRefreash, 1000);
