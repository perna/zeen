'use strict';

var Zeen = Zeen || {};

Zeen.Geolocation = (function(){

    L.mapbox.accessToken = 'pk.eyJ1IjoicGVybmEiLCJhIjoiY2lnMjdqZWMwMTkxbnQ1bTNkc3JraW5keSJ9.qKes84mgNe5PTEUGe47-ww';
    var map = '';

    function init() {
        initMap();
        updatePoints(-22.227855,-49.964857);  
    }


    function initMap(){
        navigator.geolocation.getCurrentPosition(function(pos) {

            var geom = []

            geom.push(pos.coords.latitude);
            geom.push(pos.coords.longitude);

            map = L.mapbox.map('map', 'perna.cig27jd2218wvtxkx3fqahozu').setView(geom, 14);
            
            addPoint(geom);

        });
    }

    function addPoint(geom) {
       L.marker(geom).addTo(map);
    }

    function updatePoints(latitude, longitude){
        var url = 'api/points/location/'+latitude+'/'+longitude;
        
        $.getJSON(url, function(data){
            $.each(data, function(key, val){
                var point = JSON.parse(val.st_asgeojson);
                addPoint(point['coordinates']);

            });  
        });
      
    }


    return{
        init:init,
        updatePoints:updatePoints
    }

})();