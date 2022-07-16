// Manual Data
const m_pastStations = [
	[8.972222222222223, 44.4027778],
	[8.566953, 44.354832],
];

const m_nextStation = [14.6029, 40.6333]

// Center of last and next station math
let m_center;

const lngHalfDiff = Math.abs(m_pastStations[m_pastStations.length - 1][0] - m_nextStation[0]) / 2
const latHalfDiff = Math.abs(m_pastStations[m_pastStations.length - 1][1] - m_nextStation[1]) / 2

if (m_pastStations[m_pastStations.length - 1][0] > m_nextStation[0]) {
	if (m_pastStations[m_pastStations.length - 1][1] > m_nextStation[1]) {
		m_center = [
			m_pastStations[m_pastStations.length - 1][0] - lngHalfDiff,
			m_pastStations[m_pastStations.length - 1][1] - latHalfDiff
		]
	} else if (m_pastStations[m_pastStations.length - 1][1] < m_nextStation[1]) {
		m_center = [
			m_pastStations[m_pastStations.length - 1][0] - lngHalfDiff,
			m_pastStations[m_pastStations.length - 1][1] + latHalfDiff
		]
	} else m_center = [
		m_pastStations[m_pastStations.length - 1][0] - lngHalfDiff,
		m_nextStation[1]
	]
	
} else if (m_pastStations[m_pastStations.length - 1][0] < m_nextStation[0]) {
	if (m_pastStations[m_pastStations.length - 1][1] > m_nextStation[1]) {
		m_center = [
			m_pastStations[m_pastStations.length - 1][0] + lngHalfDiff,
			m_pastStations[m_pastStations.length - 1][1] - latHalfDiff
		]
	} else if (m_pastStations[m_pastStations.length - 1][1] < m_nextStation[1]) {
		m_center = [
			m_pastStations[m_pastStations.length - 1][0] + lngHalfDiff,
			m_pastStations[m_pastStations.length - 1][1] + latHalfDiff
		]
	} else m_center = [
		m_pastStations[m_pastStations.length - 1][0] + lngHalfDiff,
		m_nextStation[1]
	]
}

//const lessLng = m_pastStations[m_pastStations.length - 1][0] > m_nextStation[0] ? m_nextStation[0] : m_pastStations[m_pastStations.length - 1][0];
//const lessLat = m_pastStations[m_pastStations.length - 1][1] > m_nextStation[0] ? m_nextStation[0] : m_pastStations[m_pastStations.length - 1][1];
//const m_center = [
//	lessLng + lngHalfDiff,
//	lessLat
//]

let m_mostRecentLocation = [9.741666666666667, 43.8480556];

// MapBox API
mapboxgl.accessToken = 'pk.eyJ1IjoiZG15YWNodHMiLCJhIjoiY2txc2NrbGsxMTV5YzJ4bzE1ODJ6eDM1cSJ9.v7pjjZ_FQ8AuA3GAcj0qdg';

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: m_center, // starting position [lng, lat]
  zoom: 5, // starting zoom
  projection: 'globe' // display the map as a 3D globe
});

for (let i = 0; i < m_pastStations.length; i++) {
	if (m_pastStations[i] != m_mostRecentLocation) {
//		const el = document.createElement('div');
//		el.innerHTML = i + 1;
//		new mapboxgl.Marker(el).setLngLat(m_locations[i]).addTo(map);
//		new mapboxgl.Marker().setLngLat(m_locations[i]).setPopup(new mapboxgl.Popup({offset:5}).setHTML(i+1)).addTo(map);
		new mapboxgl.Marker().setLngLat(m_pastStations[i]).addTo(map);
	}
}

new mapboxgl.Marker({color: 'green'}).setLngLat(m_mostRecentLocation).addTo(map);
new mapboxgl.Marker({color: 'red'}).setLngLat(m_nextStation).addTo(map);

map.on('style.load', () => {
  map.setFog({}); // Set the default atmosphere style
});