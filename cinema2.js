
// GET LOCATION
var x = document.getElementById("demo");
var l = document.getElementById("listingstable");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  // x.innerHTML = "Latitude: " + position.coords.latitude +
  // "<br>Longitude: " + position.coords.longitude;
    console.log("location saved");
var lat = position.coords.latitude;
var lon = position.coords.longitude;
 var url = "https://76ea5f03.ngrok.io/search/cinemas/coordinates/" + lat + "/" + lon;
// var url = "http://localhost:3000/search/cinemas/coordinates/" + lat + "/" + lon;

// Closest Nearest Cinema
var nearestcinema;
var nearestcinema2;
var listings;
fetch(url, {insecure: true, credentials: "same-origin"})
.then(function(response) {
    // The response is a Response instance.
    // You parse the data into a useable format using `.json()`
    return response.json();
  }).then(function(data) {
    // `data` is the parsed version of the JSON returned from the above endpoint.
    console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
      nearestcinema = data.cinemas[0].id;
      nearestcinema2 = data.cinemas[1].id;
      nearestcinema3 = data.cinemas[2].id;

     console.log(nearestcinema);
     console.log(nearestcinema2);
      console.log(nearestcinema3);
     document.getElementById("cinema1").innerHTML = data.cinemas[0].name;
     document.getElementById("cinema2").innerHTML = data.cinemas[1].name;
     document.getElementById("cinema3").innerHTML = data.cinemas[2].name;
     console.log(data.cinemas[0].name);
      return fetch("https://76ea5f03.ngrok.io/get/times/cinema/" + nearestcinema); // make a 2nd request and return a promise
  //  return fetch("http://localhost:3000/get/times/cinema/" + nearestcinema); // make a 2nd request and return a promise

  })
  .then(function(response) {
      // The response is a Response instance.
      // You parse the data into a useable format using `.json()`
      return response.json();
    }).then(function(data) {
      // `data` is the parsed version of the JSON returned from the above endpoint.
      console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
        listings = data.listings[0].title;
       console.log(listings);

         var i;
         var text = "";
         for (i = 0; i < listings.length; i++) {
           text += "<b>" + data.listings[i].title + ": "  + "</b>"  + data.listings[i].times + "<hr>";
         }
         document.getElementById("table1").innerHTML = text;


//   document.getElementById("table1").innerHTML = "<b>" + data.listings[0].title  + "</b>" + " " + data.listings[0].times +"<hr>"
//   + "<b>" + data.listings[1].title  + "</b>" + " " + data.listings[1].times +"<hr>"
//     + "<b>" + data.listings[2].title  + "</b>" + " " + data.listings[2].times +"<hr>"
//       + "<b>" + data.listings[3].title  + "</b>" + " " + data.listings[3].times +"<hr>"
//       +"<b>" + data.listings[4].title  + "</b>" + " " + data.listings[4].times +"<hr>"
//+ "<b>" + data.listings[5].title  + "</b>" + " " + data.listings[5].times +"<hr>"
//+ "<b>" + data.listings[6].title  + "</b>" + " " +"<p>"+ data.listings[6].times +"</p>" +"<hr>"
//+"<b>" + data.listings[7].title  + "</b>" + " " + data.listings[7].times +"<hr>"



  });


    // I THINK THIS IS THE CLOSE OF NEAREST CINEMA
//this was used to show promise  .then(res => console.log(res));
//  console.log("the get worked");



} //CLOSE OF MAIN FUNCITON
