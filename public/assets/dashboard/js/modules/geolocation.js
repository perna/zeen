'use strict';

var Zeen = Zeen || {};

Zeen.Geolocation = (function(){

    function init() {
        L.mapbox.accessToken = 'pk.eyJ1IjoicGVybmEiLCJhIjoiY2lnMjdqZWMwMTkxbnQ1bTNkc3JraW5keSJ9.qKes84mgNe5PTEUGe47-ww';
        L.mapbox.map('map', 'perna.cig27jd2218wvtxkx3fqahozu');   
    }


    function getPosition(){
        navigator.geolocation.getCurrentPosition(function(pos) {
            console.log("latitude: " + pos.coords.latitude);
            console.log("longitude: " + pos.coords.longitude);
        });
    }



    return{
        init:init,
        getPosition:getPosition
    }

})();