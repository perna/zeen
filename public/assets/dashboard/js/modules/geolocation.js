'use strict';

var Zeen = Zeen || {};

Zeen.Geolocation = (function(){

    var map;
    var latGlobal;
    var lngGlobal;

    function init() {
        initMap();
        bindEvents();
    }

    function bindEvents() {

        google.maps.event.addListener(map, 'click', function (e) {
            latGlobal = e.latLng.lat();
            lngGlobal = e.latLng.lng();
            addMarker(e.latLng);

            console.log(latGlobal);
            console.log(lngGlobal);
            $('#latitude_input_form').val(latGlobal);
            $('#longitude_input_form').val(lngGlobal);

        });

        $('#btn_add_point').on('click', addPoint);

    }

    function initMap(){
    
        map = new google.maps.Map(document.getElementById('map'),{
            /*center: {lat: -22.227855,lng:-49.964857},*/
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom:14
        });

        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat:position.coords.latitude,
                    lng:position.coords.longitude
                }

                var marker = new google.maps.Marker({
                    position: pos,
                    map: map,
                    title: "Você está aqui"
                });
                map.setCenter(pos);
                populateMapPoints(pos.lat, pos.lng);
            });
        }
    }

    function addPoint() {
        console.log('addpoint');

        $.post('/api/points', $("#form_add_point").serialize())
            .done(function(data){
                $('#alert_form_add_point').html('Ponto adicionado com sucesso!');
            })
            .fail(function(err){
                alert('error' + err);
            });
    }

    function populateMapPoints(latitude, longitude){
        
        var infowindow = new google.maps.InfoWindow();

        var url = 'api/points/location/'+latitude+'/'+longitude;
        
        $.getJSON(url, function(data){
            $.each(data, function(key, val){
                var point = JSON.parse(val.location);
                //console.log("point " + point.description);
                console.log(val.description);
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(point.coordinates[0], point.coordinates[1]),
                    map: map,
                    title: val.description
                });

                marker.info = new google.maps.InfoWindow({
                    content: '<strong>'+ val.description +'<strong>' + '<br>'
                });

                google.maps.event.addListener(marker, 'click', function() {
                    marker.info.open(map, marker);
                });            
            });  
        });
      
    }


    function addMarker(location) {
        var marker = new google.maps.Marker({
            position: location,
            draggable:true,
            map: map
    });
}


    return{
        init:init,
    }

})();