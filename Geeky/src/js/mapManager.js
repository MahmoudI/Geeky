var mapManager = (function($) {
/*
* The zoom slider is not available in latest versionof google maps only +/-
* Also the panControl is deprecated
* More info here https://developers.google.com/maps/articles/v322-controls-diff#pan-control-deprecated
* */
    var initMap = function(){
        var mapDiv = document.getElementById('map'),
            initialPosition = {lat: 51.5344, lng: -0.0694},
         map = new google.maps.Map(mapDiv, {
            center: initialPosition,
            zoom: 8,
             mapTypeControl: false,
             zoomControl: true,
             zoomControlOptions: {
                 position: google.maps.ControlPosition.LEFT_TOP,
             },
             panControl: true,
             scaleControl: true,
        }),
         marker = new google.maps.Marker({
            position: initialPosition,
            map: map,
            icon:  'img/marker.png'
        }),
        content ="<div class='no-scroll'>Geek Label <br/> 4th Floor <br/> 27 - 33 Bethnal Green Road <br/> Shoreditch <br/> London <br/> E1 6LA </div>",

         infoWindow = new google.maps.InfoWindow({
            content: content,
        });

        infoWindow.open(map, marker);
        
          google.maps.event.addDomListener(window, 'resize', function() {
            map.setCenter(initialPosition);
        });
    };

    return {
        initMap: initMap

    };

}(jQuery));
