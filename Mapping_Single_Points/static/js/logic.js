// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [ 40.7, -94.5],
    zoom: 4
});

// Add a marker to the map for Los Angeles, CA
let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a circle marker to the map. Radius is measured in meters.
let circle = L.circle([34.0522, -118.2437], {
  color: 'red',
  radius: 300
}).addTo(map);


// Add a circleMarker to the map. Default radius is 10 pixels.
let circleMarker = L.circleMarker([34.0522, -118.2437], {
  color: 'black',
  fillColor: '#ffffa1'
}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);