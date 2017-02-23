var lat = 0;
var long = 0;
// var mymap = L.map('map').locate({setView: true, maxZoom: 10});
var mymap = L.map('map').setView([4.75984, -75.6189], 10);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

// L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token={ACCES_TOKEN}', {
//   ACCES_TOKEN: 'pk.eyJ1IjoibGVpdmVyYW5kcmVzIiwiYSI6ImNpeml6aTQydzAzMnkycW93cWdnNWhsYTYifQ.WhLCnluRwsmi4D33o4YZhA'
// }).addTo(mymap);


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent('<h1>Do you want to add a marker at (' +
                    e.latlng.lat + ', '+ e.latlng.lng +
                    ')</h1><button type="button" name="button">Accept</button>')
        .openOn(mymap);
}

mymap.on('click', onMapClick);
