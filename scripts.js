mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2FzdG9uY29kZXMiLCJhIjoiY2t3bWVhc2pvMGc0MjJvbXIyNTJoaTB5MiJ9.O6HwC8kOPxUXjcW8fGKlRw";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [-56.20200395354019, -34.90653640519817], // starting position [lng, lat]
  zoom: 15, // starting zoom
});
const marker2 = new mapboxgl.Marker({ color: "red" })
  .setLngLat([-56.20200395354019, -34.90653640519817])
  .addTo(map);
/*const wa = document.getElementById("whatsapp");
let time = new Date();
let hours = time.getUTCHours();
let day = time.getUTCDay();
if (day != 6 && day != 0) {
  if (hours >= 9 && hours <= 18) {
    wa.style.display = "block";
  }
}*/
