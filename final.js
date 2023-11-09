
async function initMap() {

  var zoom = 8;

  var kuwaitBounds = {
    north: 30.095,
    south: 28.524,
    west: 46.372,
    east: 48.421
  };
  
  const { Map } = await google.maps.importLibrary("maps");
  const map = new Map(document.getElementById("map"), {
    center: { lat: 29.378586, lng: 47.990341  },
    zoom: 8,
    mapId: "bae535d125485c46",

    mapTypeControl: false,

    minZoom: zoom - 2,
    maxZoom: zoom + 2,
    disableDefaultUI: true,

    restriction: {
      latLngBounds: kuwaitBounds,
      strictBounds: false
    },

    styles: [
      {
        featureType: "all",
        elementType: "geometry",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "country",
        elementType: "geometry",
        stylers: [{ visibility: "on", featureVisibility: "on" }]
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ visibility: "on" }]
      },
      {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [{ visibility: "off" }]
      }
    ],




  });
  const featureLayer = map.getFeatureLayer(
    google.maps.FeatureType.ADMINISTRATIVE_AREA_LEVEL_1,
  );

  featureLayer.style = (featureStyleFunctionOptions) => {
    const placeFeature = featureStyleFunctionOptions.feature;
    const population = states[placeFeature.placeId];
    let fillColor;


    if (population < 10) {
      fillColor = "green";
    } else if (population < 20) {
      fillColor = "red";
    } else if (population < 30) {
      fillColor = "blue";
    } else if (population < 40) {
      fillColor = "yellow";
    }
    return {
      fillColor,
      fillOpacity: 1,
    };
  };


  const states = {
    "ChIJmxzDjW4zxT8RHSyOnKJvDrY":5,
    "ChIJXUiYX6Gazz8R4R7AzvKiGrg":15,

  };
}









// var map = L.map('map').setView([29.3759, 47.9774], 10); // Centered on Kuwait

//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '© OpenStreetMap contributors'
//   }).addTo(map);

//   var cities = [
//     { name: 'Kuwait City', location: [29.3759, 47.9774] },
//     // Add more cities as needed
//   ];

//   cities.forEach(function(city) {
//     // Create a custom icon
//     var customIcon = L.divIcon({ className: 'city-marker', html: city.name });

//     // Create a marker with the custom icon
//     var marker = L.marker(city.location, { icon: customIcon }).addTo(map);

//     // Add a popup with city information
//     marker.bindPopup('<b>' + city.name + '</b><br>Coordinates: ' + city.location.join(', '));
//   });

//   // Load GeoJSON data and add it to the map
//   fetch('kuwait_borders.geojson')
//     .then(response => response.json())
//     .then(data => {
//       L.geoJSON(data, {
//         style: {
//           color: '#3498db',
//           weight: 2
//         }
//       }).addTo(map);
//     });
