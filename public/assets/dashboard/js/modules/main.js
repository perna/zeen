var Zeen = Zeen || {};

(function($, NS){

    $(document).ready(function(){
         NS.Geolocation.init();
        NS.Geolocation.getPosition();

    });

})(jQuery, Zeen);