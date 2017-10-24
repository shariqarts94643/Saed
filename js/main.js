/* function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
} */

var locations1 = [
  ['Bondi Beach', -33.890542, 151.274856, 4],
  ['Coogee Beach', -33.923036, 151.259052, 5],
  ['Cronulla Beach', -34.028249, 151.157507, 3],
  ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
  ['Maroubra Beach', -33.950198, 151.259302, 1]
];
var map;
var markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(-33.92, 151.25),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var num_markers = locations1.length;
    for (var i = 0; i < num_markers; i++) {
        markers[i] = new google.maps.Marker({
            position: {
                lat: locations1[i][1],
                lng: locations1[i][2]
            },
            map: map,
            html: locations1[i][0],
            id: i,
        });

        google.maps.event.addListener(markers[i], 'click', function () {
            var infowindow = new google.maps.InfoWindow({
                id: this.id,
                content: this.html,
                position: this.getPosition()
            });
            google.maps.event.addListenerOnce(infowindow, 'closeclick', function () {
                markers[this.id].setVisible(true);
            });
            this.setVisible(false);
            infowindow.open(map);
        });
    }
}