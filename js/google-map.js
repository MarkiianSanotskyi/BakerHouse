var map;
var egglabs = new google.maps.LatLng(50.438065, 30.534100);
var mapCoordinates = new google.maps.LatLng(50.438065, 30.534100);

var markers = [];
var image = new google.maps.MarkerImage(
    'images/pin.png',
    new google.maps.Size(101,82),
    new google.maps.Point(0,0),
    new google.maps.Point(42,56)
	
  );
function addMarker() 
{
      markers.push(new google.maps.Marker({
      position: egglabs,
      raiseOnDrag: false,
	  icon: image,
      map: map,
      draggable: false,
      }));
      
}
function initialize() {
  var mapOptions = {
	
    zoom: 15,
	disableDefaultUI: false,
    center: mapCoordinates,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
	  scrollwheel: false,
	styles: [
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#ff0000"
            }
        ]
    }
]};
map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
addMarker();
}
google.maps.event.addDomListener(window, 'load', initialize);


