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

// Engineering
var locations = [
  ['Kabul', 34.5539097, 69.0576492, 16],
  ['Tirana', 41.3310131, 19.8003137, 16],
  ['Algiers', 36.7538302, 3.0556523, 16],
  ['Andorra la Vella', 42.5050929, 1.5159882, 16],
  ['Luanda', -8.8534459, 13.2490852, 16]
];

// Agriculture
var locations1 = [
  ['Saint Johns', 47.4820582, -52.9677822, 16],
  ['Buenos Aires', -34.6156625, -58.5033376, 16],
  ['Yerevan', 40.1535005, 44.4185278, 16],
  ['Canberra', -35.2812958, 149.124822, 16],
  ['Vienna', 48.220778, 16.3100208, 16]
];

// Operating and Maintenance
var locations2 = [
  ['baku', 40.3947021, 49.7849203, 16],
  ['Nassau', 25.0326342, -77.4421124, 16],
  ['Manama', 26.2266541, 50.5715166, 16],
  ['Dhaka', 23.7807777 ,90.3492863, 16],
  ['Bridgetown', 13.1013529, -59.6140472, 16]
];

// Agriculture
var locations3 = [
  ['Saint Johns', 47.4820582, -52.9677822, 16],
  ['Buenos Aires', -34.6156625, -58.5033376, 16],
  ['Yerevan', 40.1535005, 44.4185278, 16],
  ['Canberra', -35.2812958, 149.124822, 16],
  ['Vienna', 48.220778, 16.3100208, 16]
];

// Agriculture
var locations4 = [
  ['Saint Johns', 47.4820582, -52.9677822, 16],
  ['Buenos Aires', -34.6156625, -58.5033376, 16],
  ['Yerevan', 40.1535005, 44.4185278, 16],
  ['Canberra', -35.2812958, 149.124822, 16],
  ['Vienna', 48.220778, 16.3100208, 16]
];

// Agriculture
var locations5 = [
  ['Saint Johns', 47.4820582, -52.9677822, 16],
  ['Buenos Aires', -34.6156625, -58.5033376, 16],
  ['Yerevan', 40.1535005, 44.4185278, 16],
  ['Canberra', -35.2812958, 149.124822, 16],
  ['Vienna', 48.220778, 16.3100208, 16]
];

// Agriculture
var locations6 = [
  ['Saint Johns', 47.4820582, -52.9677822, 16],
  ['Buenos Aires', -34.6156625, -58.5033376, 16],
  ['Yerevan', 40.1535005, 44.4185278, 16],
  ['Canberra', -35.2812958, 149.124822, 16],
  ['Vienna', 48.220778, 16.3100208, 16]
];

// Agriculture
var locations7 = [
  ['Saint Johns', 47.4820582, -52.9677822, 16],
  ['Buenos Aires', -34.6156625, -58.5033376, 16],
  ['Yerevan', 40.1535005, 44.4185278, 16],
  ['Canberra', -35.2812958, 149.124822, 16],
  ['Vienna', 48.220778, 16.3100208, 16]
];

// Agriculture
var locations8 = [
  ['Saint Johns', 47.4820582, -52.9677822, 16],
  ['Buenos Aires', -34.6156625, -58.5033376, 16],
  ['Yerevan', 40.1535005, 44.4185278, 16],
  ['Canberra', -35.2812958, 149.124822, 16],
  ['Vienna', 48.220778, 16.3100208, 16]
];

var map;
var markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: new google.maps.LatLng(30.0595581, 31.22344),
        scrollwheel: false,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
    });

    var num_markers = locations.length;
    for (var i = 0; i < num_markers; i++) {
        markers[i] = new google.maps.Marker({
            position: {
                lat: locations[i][1],
                lng: locations[i][2]
            },
            map: map,
            html: locations[i][0],
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

//Setting Location with jQuery
$(document).ready(function () {
    $("#business").on('change', function () {
        
        if (this.value == '1') {
            var num_markers2 = locations1.length;
            for (var i = 0; i < num_markers2; i++) {
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
        
        if (this.value == '2') {
            var num_markers2 = locations2.length;
            for (var i = 0; i < num_markers2; i++) {
                markers[i] = new google.maps.Marker({
                    position: {
                        lat: locations2[i][1],
                        lng: locations2[i][2]
                    },
                    map: map,
                    html: locations2[i][0],
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

    });

});