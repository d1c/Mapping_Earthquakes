// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
  center: [ 40.7, -94.5],
  zoom: 4
}).setView([30, 30], 2);

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // Turn each feature into a marker on the map using pointToLayer callback function.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2> <hr>" +
//                "<h3>" + feature.properties.city + ", " + feature.properties.state + ", " + feature.properties.country + "</h3>");
//   }
// }).addTo(map);

// L.geoJSON(sanFranAirport, {
//   // Turn each feature into a marker on the map using pointToLayer callback function.
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup
//   }
// }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'navigation-night-v1',
    id: 'streets-v11',
    accessToken: API_KEY
});

// Add 'streets' tile layer to the map
streets.addTo(map);

// Add GeoJSON data.
let airportData = "https://raw.githubusercontent.com/d1c/Mapping_Earthquakes/main/majorAirports.json"

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    onEachFeature: function(feature, layer) {
      console.log(layer)
      layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2> <hr>" +
                      "<h3>Airport Name: " + feature.properties.name + "</h3>" +
                      "<h3>City: " + feature.properties.city + "</h3>"
      )
    }
  }).addTo(map);
});