import mapboxgl from 'mapbox-gl';

const buildMap = (id) => {
  const mapElement = document.querySelector(`#map_${id}`);
  mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
  return new mapboxgl.Map({
    container: `map_${id}`,
    style: 'mapbox://styles/mapbox/streets-v10?'
  });
};

const addMarkersToMap = (map, marker, logo_boolean) => {
  if (logo_boolean) {
    const el = document.createElement('div');
    el.className = 'marker-logo-company';
    el.style.backgroundImage = `url('https://www.belaircamp.org/wp-content/uploads/2018/06/KickMaker.png')`;
    el.style.backgroundSize = 'contain';
    el.style.width = '120px';
    el.style.height = '64px';
    el.style.backgroundRepeat = 'no-repeat';
    new mapboxgl.Marker(el)
      .setLngLat(marker)
      .addTo(map);

  } else {
    new mapboxgl.Marker()
      .setLngLat(marker)
      .addTo(map);
  }

};

const fitMapToMarkers = (map, markers) => {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
  map.fitBounds(bounds, { padding: 70, maxZoom: 29 });
};

const initMapbox = (intensiveness) => {
  const activityIntensiveness = document.querySelector(`.activity-${intensiveness}`);
  const activitiesIds = activityIntensiveness.querySelector('#activities');
  if (activitiesIds) {
    const ids = JSON.parse(activitiesIds.dataset.ids)
    ids.forEach((id) => {
      const map = buildMap(id);
      const mapElement = document.querySelector(`#map_${id}`);
      const markersActivity = JSON.parse(mapElement.dataset.markersActivity);
      const markersCompany = JSON.parse(mapElement.dataset.markersCompany);
      const markers = [markersCompany, markersActivity];
      addMarkersToMap(map, markersCompany, true);
      addMarkersToMap(map, markersActivity);
      fitMapToMarkers(map, markers);
    })
  }
};

export { initMapbox };
