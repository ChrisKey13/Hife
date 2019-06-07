import mapboxgl from 'mapbox-gl';

// const mapElement = document.getElementById('map');


const buildMap = (id) => {
  const mapElement = document.querySelector(`#map_${id}`);
  mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
  return new mapboxgl.Map({
    container: `map_${id}`,
    style: 'mapbox://styles/mapbox/streets-v10'
  });
};

const addMarkersToMap = (map, markers) => {
  markers.forEach((marker) => {
    new mapboxgl.Marker()
      .setLngLat([ marker.lng, marker.lat ])
      .addTo(map);
  });
};

const fitMapToMarkers = (map, markers) => {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
  map.fitBounds(bounds, { padding: 70, maxZoom: 29 });
};

const initMapbox = () => {
  if (document.querySelector('#activities')) {
    const ids = JSON.parse(document.querySelector('#activities').dataset.ids)
    ids.forEach((id) => {
      const map = buildMap(id);
      const mapElement = document.querySelector(`#map_${id}`);
      const markers = JSON.parse(mapElement.dataset.markers);
      addMarkersToMap(map, markers);
      fitMapToMarkers(map, markers);
    })
  }
};

export { initMapbox };
