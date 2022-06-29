mapboxgl.accessToken =
  "pk.eyJ1IjoiaGlkZGVqdWxpdXN2YW5kZXJwbGFhdCIsImEiOiJjbDR5dG52Mm0xdmdnM2RwaDZna2tpb2VvIn0.OSK9N__FZyvAVy0q2NZx9g";

navigator.geolocation.getCurrentPosition(succesLocation, errorLocation, {
  enableHighAccuracy: true,
});

function succesLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {}

function setupMap(center) {
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10",
    center: center,
    zoom: 8,
  });
}

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.032, 38.913],
      },
      properties: {
        title: "Mapbox",
        description: "Washington, D.C.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [51.926517, 4.462456],
      },
      properties: {
        title: "Mapbox",
        description: "Rotterdam, Netherlands",
      },
    },
  ],
};

// add markers to map
for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement("div");
  el.className = "marker";

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
}
