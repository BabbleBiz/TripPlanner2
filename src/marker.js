const mapboxgl = require('mapbox-gl');

const activityURL = 'url(http://i.imgur.com/WbMOfMl.png)';
const hotelURL = 'url(http://i.imgur.com/D9574Cu.png)';
const restaurantURL = 'url(http://i.imgur.com/cqR6pUI.png)';

module.exports = function (activity, cordArray){
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  if (activity === 'activity'){
  markerDomEl.style.backgroundImage = activityURL;
  }
  else if (activity === 'hotel') {
    markerDomEl.style.backgroundImage = hotelURL;
  }
  else {
         markerDomEl.style.backgroundImage = restaurantURL;
       }

  return new mapboxgl.Marker(markerDomEl).setLngLat(cordArray);

}
