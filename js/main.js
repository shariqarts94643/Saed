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

// 0
var locations = [
  ['Kabul', 34.5539097, 69.0576492, 16],
  ['Tirana', 41.3310131, 19.8003137, 16],
  ['Algiers', 36.7538302, 3.0556523, 16],
  ['Andorra la Vella', 42.5050929, 1.5159882, 16],
  ['Luanda', -8.8534459, 13.2490852, 16]
];

// 1
var locations1 = [
  ['Saint Johns', 47.4820582, -52.9677822, 16],
  ['Buenos Aires', -34.6156625, -58.5033376, 16],
  ['Yerevan', 40.1535005, 44.4185278, 16],
  ['Canberra', -35.2812958, 149.124822, 16],
  ['Vienna', 48.220778, 16.3100208, 16]
];

// 2
var locations2 = [
  ['baku', 40.3947021, 49.7849203, 16],
  ['Nassau', 25.0326342, -77.4421124, 16],
  ['Manama', 26.2266541, 50.5715166, 16],
  ['Dhaka', 23.7807777, 90.3492863, 16],
  ['Bridgetown', 13.1013529, -59.6140472, 16]
];

// 3
var locations3 = [
  ['Minsk', 53.8840092, 27.5796488, 16],
  ['Brussels', 50.8387874, 4.2933659, 16],
  ['Belmopan', 17.25488, -88.7825991, 16],
  ['Porto Novo', 6.4959937, 2.6047896, 16],
  ['Thimphu', 27.4794738, 89.603376, 16]
];

// 4
var locations4 = [
  ['Sucre', -19.0205659, -65.2948115, 16],
  ['Sarajevo', 43.8937798, 18.3479722, 16],
  ['Gaborone', -24.6091349, 25.8604651, 16],
  ['Brasília', -15.7215857, -48.0073973, 16],
  ['Bandar Seri Begawan', 4.9062259, 114.903071, 16]
];

// 5
var locations5 = [
  ['Sofia', 42.6389981, 23.2539075, 16],
  ['Ouagadougou', 12.3585737, -1.5718626, 16],
  ['Bujumbura', -3.3752144, 29.3203635, 16],
  ['Phnom Penh', 11.579524,104.8201472, 16],
  ['Yaounde', 3.8304736, 11.4404136, 16]
];

// 6
var locations6 = [
  ['Ottawa', 45.2502975, -76.0804292, 16],
  ['Bangui', 4.3783071, 18.5421798, 16],
  ['Santiago', -33.4533303, -70.6967031, 16],
  ['Beijing', 39.9390628, 116.2573775, 16],
  ['Bogota', 4.6484652, -74.1778466, 16]
];

// 7
var locations7 = [
  ['Moroni', -11.7009062, 43.2411225, 16],
  ['San Jose', 9.63482, -84.2767228, 16],
  ['Zagreb', 45.8402941, 15.8942924, 16],
  ['Havana', 23.0508292, -82.4030415, 16],
  ['Nicosia', 35.1923177, 33.3623829, 16]
];

// 8
var locations8 = [
  ['Prague', 50.0597588, 14.3955848, 16],
  ['Copenhagen', 55.6713108, 12.5588047, 16],
  ['Roseau', 15.3061008, -61.3860845, 16],
  ['Paris', 48.8589101, 2.3120407, 16],
  ['Amman', 31.8359753, 35.8075489, 16]
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
            {elementType: 'geometry', stylers: [{color: '#a2bccc'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#ffffff'}]},
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
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#1a5477'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#5285a5'}]
            },
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
            icon: 'images/engineering.png',
            html: locations[i][0],
            id: i,
        });

        google.maps.event.addListener(markers[i], 'click', function () {
            var infowindow = new google.maps.InfoWindow({
                id: this.id,
                content: this.html,
                position: this.getPosition(),
                
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
    $("#business").on('change', function() {
        
        if(markers)   //if any exist, remove them from map, and reset array
    {
           markers.forEach(function(marker){
                   marker.setMap(null);
           });
           markers =[];
    }
        
        if (this.value == '0') {
            
            var num_markers = locations.length;
            for (var i = 0; i < num_markers; i++) {
                markers[i] = new google.maps.Marker({
                    position: {
                        lat: locations[i][1],
                        lng: locations[i][2]
                    },
                    map: map,
                    icon: 'images/engineering.png',
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
        
        if (this.value == '1') {
            var num_markers1 = locations1.length;
            for (var i = 0; i < num_markers1; i++) {
                markers[i] = new google.maps.Marker({
                    position: {
                        lat: locations1[i][1],
                        lng: locations1[i][2]
                    },
                    map: map,
                    icon: 'images/agriculture.png',
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
                    icon: 'images/operating.png',
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
        
        if (this.value == '3') {
            var num_markers3 = locations3.length;
            for (var i = 0; i < num_markers3; i++) {
                markers[i] = new google.maps.Marker({
                    position: {
                        lat: locations3[i][1],
                        lng: locations3[i][2]
                    },
                    map: map,
                    icon: 'images/restaurants.png',
                    html: locations3[i][0],
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
        
        if (this.value == '4') {
            var num_markers4 = locations4.length;
            for (var i = 0; i < num_markers4; i++) {
                markers[i] = new google.maps.Marker({
                    position: {
                        lat: locations4[i][1],
                        lng: locations4[i][2]
                    },
                    map: map,
                    icon: 'images/cars.png',
                    html: locations4[i][0],
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
        
        if (this.value == '5') {
            var num_markers5 = locations5.length;
            for (var i = 0; i < num_markers5; i++) {
                markers[i] = new google.maps.Marker({
                    position: {
                        lat: locations5[i][1],
                        lng: locations5[i][2]
                    },
                    map: map,
                    icon: 'images/production.png',
                    html: locations5[i][0],
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
        
        if (this.value == '6') {
            var num_markers6 = locations6.length;
            for (var i = 0; i < num_markers6; i++) {
                markers[i] = new google.maps.Marker({
                    position: {
                        lat: locations6[i][1],
                        lng: locations6[i][2]
                    },
                    map: map,
                    icon: 'images/aviation.png',
                    html: locations6[i][0],
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
        
        if (this.value == '7') {
            var num_markers7 = locations7.length;
            for (var i = 0; i < num_markers7; i++) {
                markers[i] = new google.maps.Marker({
                    position: {
                        lat: locations7[i][1],
                        lng: locations7[i][2]
                    },
                    map: map,
                    icon: 'images/hospitals.png',
                    html: locations7[i][0],
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
        
        if (this.value == '8') {
            var num_markers8 = locations8.length;
            for (var i = 0; i < num_markers8; i++) {
                markers[i] = new google.maps.Marker({
                    position: {
                        lat: locations8[i][1],
                        lng: locations8[i][2]
                    },
                    map: map,
                    icon: 'images/retail.png',
                    html: locations8[i][0],
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