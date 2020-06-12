/* eslint-disable */

export const displayMap = location => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibWVobWV0YWtpZiIsImEiOiJja2E5YzdyeWUwNG5zMnJydXVvZnI3aDFwIn0.f2kvGJHCOM3AKQ5ct0ehLw';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mehmetakif/cka9f3q2v37xd1iquokfuc555',
    scrollZoom: false
    //center: [-118.118223, 33.897006],
    //zoom: 5
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
