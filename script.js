var map = L.map('mapid').setView([42.7284, -73.6918], 7);

var terrain = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	minZoom: 0,
	maxZoom: 18,
	attribution: 'OSM',
	ext: 'png'
});

terrain.addTo(map);

// Define a red icon for the marker
var redIcon = L.icon({
    iconUrl: 'img/red_pin.png', 
    iconSize: [40, 40],
    iconAnchor: [20, 41], 
    popupAnchor: [0, -34] 
});

var skiIcon = L.icon({
    iconUrl: 'img/mountain.png', 
    iconSize: [25, 25], 
    iconAnchor: [12, 41],
    popupAnchor: [1, -30] 
});

// Add red dot for Troy
var troy = L.marker([42.7284, -73.6918], {icon: redIcon}).addTo(map);
troy.bindPopup("<b>Troylet</b>").openPopup;

// Add red dot for New Paltz
var newPaltz = L.marker([41.7476, -74.0869], {icon: redIcon}).addTo(map);
newPaltz.bindPopup("<b>Poo Paltz</b>");

// Add Ski Mountains

// Willard mountain
var willard = L.marker([43.021831, -73.52334], {icon: skiIcon}).addTo(map);
willard.bindPopup("<b><a href='https://www.willardmountain.com/' target='_blank'>Willard Mountain</a></b><br>0:35 from Troy<br>1:50 from New Paltz</br><br>$55 day pass</br>");

// Gore mountain
var gore = L.marker([43.673720, -74.00663114613104], {icon: skiIcon}).addTo(map);
gore.bindPopup("<b><a href='https://www.goremountain.com/' target='_blank'>Gore Mountain</a></b><br>1:30 from Troy<br>2:30 from New Paltz</br><br>$114 day pass</br>");

// Whiteface mountain
var whiteface = L.marker([44.36759, -73.90247], {icon: skiIcon}).addTo(map);
whiteface.bindPopup("<b><a href='https://www.whiteface.com/' target='_blank'>Whiteface Mountain</a></b><br>2:30 from Troy<br>3:30 from New Paltz</br><br>$94 day pass</br>");

// Hunter mountain
var hunter = L.marker([42.17974, -74.22973], {icon: skiIcon}).addTo(map);
hunter.bindPopup("<b><a href='https://www.huntermtn.com/' target='_blank'>Hunter Mountain</a></b><br>1:20 from Troy<br>1:00 from New Paltz</br><br>$105 day pass</br>");

// Belleayre mountain
var belleayre = L.marker([42.141776, -74.501546], {icon: skiIcon}).addTo(map);
belleayre.bindPopup("<b><a href='https://www.belleayre.com/' target='_blank'>Belleayre Mountain</a></b><br>1:40 from Troy<br>1:10 from New Paltz</br><br>$104 day pass</br>");

// Windham mountain
var windham = L.marker([42.301091, -74.255472], {icon: skiIcon}).addTo(map);
windham.bindPopup("<b><a href='https://www.windhammountain.com/' target='_blank'>Windham Mountain</a></b><br>1:15 from Troy<br>1:10 from New Paltz</br><br>$135-195 day pass</br>");

// Plattekill mountain
var plattekill = L.marker([42.290443, -74.65316], {icon: skiIcon}).addTo(map);
plattekill.bindPopup("<b><a href='https://www.plattekill.com/' target='_blank'>Plattekill Mountain</a></b><br>1:50 from Troy<br>1:25 from New Paltz</br><br>$63-83 day pass</br>");

// Catamount mountain
var catamount = L.marker([42.16916, -73.47645], {icon: skiIcon}).addTo(map);
catamount.bindPopup("<b><a href='https://catamountski.com/' target='_blank'>Catamount Mountain</a></b><br>1:10 from Troy<br>1:20 from New Paltz</br><br>$55-95 day pass</br>");

// Jiminy peak
var jiminy = L.marker([42.555936, -73.2899446], {icon: skiIcon}).addTo(map);
jiminy.bindPopup("<b><a href='https://www.jiminypeak.com/' target='_blank'>Jiminy Peak</a></b><br>0:45 from Troy<br>1:40 from New Paltz</br><br>$225 day pass</br>");

// Stratton mountain
var stratton = L.marker([43.0936213, -72.9287031], {icon: skiIcon}).addTo(map);
stratton.bindPopup("<b><a href='https://www.stratton.com/' target='_blank'>Stratton Mountain</a></b><br>1:40 from Troy<br>2:50 from New Paltz</br><br>$130-200 day pass</br>");

// Mount Snow with link
var mountSnow = L.marker([42.9615, -72.8968], {icon: skiIcon}).addTo(map);
mountSnow.bindPopup("<b><a href='https://www.mountsnow.com/' target='_blank'>Mount Snow</a></b><br>1:30 from Troy<br>2:30 from New Paltz</br><br>$150 day pass</br>");

// Butternut mountain
var butternut = L.marker([42.1838020, -73.3201968], {icon: skiIcon}).addTo(map);
butternut.bindPopup("<b><a href='https://skibutternut.com/' target='_blank'>Butternut Mountain</a></b><br>1:10 from Troy<br>1:30 from New Paltz</br><br>$40-85 day pass ($25 fridays)</br>");