import mapboxgl from 'mapbox-gl';

const buildMap = (id) => {
  const mapElement = document.querySelector(`#map_${id}`);
  mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
  return new mapboxgl.Map({
    container: `map_${id}`,
    style: 'mapbox://styles/mapbox/streets-v10'
  });
};

const addMarkersToMap = (map, marker) => {
  // const markerL = new mapboxgl.LngLat([parseFloat(marker.lng), parseFloat(marker.lat)]);
  // const markerL = new mapboxgl.LngLat([marker.lng, marker.lat]);
  new mapboxgl.Marker()
    .setLngLat(marker)
    .addTo(map);
};

const fitMapToMarkers = (map, markers) => {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
  map.fitBounds(bounds, { padding: 70, maxZoom: 29 });
};

const initMapbox = () => {
  if (document.querySelector('#activities')) {
    const ids = JSON.parse(document.querySelector('#activities').dataset.ids)
    // const mapAll = document.querySelectorAll(".map");
    ids.forEach((id) => {
      const map = buildMap(id);
      const mapElement = document.querySelector(`#map_${id}`);
      const markersActivity = JSON.parse(mapElement.dataset.markersActivity);
      // const markersActivity = mapElement.dataset.markersActivity;
      const markersCompany = JSON.parse(mapElement.dataset.markersCompany);
      // const markersCompany = mapElement.dataset.markersCompany;
      const markers = [markersCompany, markersActivity];
      addMarkersToMap(map, markersCompany);
      addMarkersToMap(map, markersActivity);
      fitMapToMarkers(map, markers);
    })
  }
};

export { initMapbox };
