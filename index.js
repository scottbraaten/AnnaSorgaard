//// Marine Traffic API
//fetch("https://services.marinetraffic.com/api/exportvesseltrack/cb76f8c980cb004fad7fe2ee860f8197417c920f?v=1&mmsi=338340434&days=1&protocol=json").then(response => response.json()).then(data => {
//	
//	// Mapbox API
//	
//	// 
//});

mapboxgl.accessToken = 'pk.eyJ1IjoiZG15YWNodHMiLCJhIjoiY2txc2NrbGsxMTV5YzJ4bzE1ODJ6eDM1cSJ9.v7pjjZ_FQ8AuA3GAcj0qdg';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [8.972222222222223, 44.4027778], // starting position [lng, lat]
zoom: 9, // starting zoom
projection: 'globe' // display the map as a 3D globe
});
map.on('style.load', () => {
map.setFog({}); // Set the default atmosphere style
});