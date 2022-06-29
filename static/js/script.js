document.getElementById("map").style.display = "block";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGlkZGVqdWxpdXN2YW5kZXJwbGFhdCIsImEiOiJjbDR5dG52Mm0xdmdnM2RwaDZna2tpb2VvIn0.OSK9N__FZyvAVy0q2NZx9g";

var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/mapbox/light-v10", //stylesheet location
  center: [4.89707, 52.377956], // starting position
  zoom: 7, // starting zoom
});

map.on("load", () => {
  var marker = new mapboxgl.Marker()
    .setLngLat([4.462456, 51.926517])
    .addTo(map);
});

map.on("load", () => {
  var marker = new mapboxgl.Marker()
    .setLngLat([4.829199, 52.442039])
    .addTo(map);
});

map.on("load", () => {
  var marker = new mapboxgl.Marker()
    .setLngLat([4.646219, 52.387386])
    .addTo(map);
});

map.on("load", () => {
  var marker = new mapboxgl.Marker()
    .setLngLat([4.8468049, 52.5563611])
    .addTo(map);
});

map.on("load", () => {
  var marker = new mapboxgl.Marker().setLngLat([4.89707, 52.377956]).addTo(map);
});
