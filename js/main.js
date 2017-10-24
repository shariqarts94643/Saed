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

var map;

function initMap() {
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(26.378169, 43.906614), //Setting Initial Position
        zoom: 10
    });
}

function newLocation(newLat, newLng) {
    map.setCenter({
        lat: newLat,
        lng: newLng
    });
}


//Setting Location with jQuery
$(document).ready(function () {
    $("#1").on('click', function () {
        newLocation(26.378169, 43.906614);
    });

    $("#2").on('click', function () {
        newLocation(13.67473458, -65.25445093);
    });

    $("#3").on('click', function () {
        newLocation(26.378169, 43.906614);
    });
    
    $("#4").on('click', function () {
        newLocation(55.35327212, 4.80272414);
    });

    $("#5").on('click', function () {
        newLocation(25.88426, 54.12609711);
    });

    $("#6").on('click', function () {
        newLocation(-32.19286997, 18.44107915);
    });
    
    $("#7").on('click', function () {
        newLocation(23.12988958, 94.89940183);
    });

    $("#8").on('click', function () {
        newLocation(23.4282276, 32.43463021);
    });

    $("#9").on('click', function () {
        newLocation(-50.26263659, 155.46307644);
    });
});