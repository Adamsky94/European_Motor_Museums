

 
 function initMap() {

                const Varna = { lat: 43.21733945, lng: 27.898463459304434 };
                const Budapest = { lat:47.514134350000006, lng: 19.091634960797748};
                const MladaBoleslav = { lat: 50.41854105, lng: 14.913829178797954};
                const Koprivnice = { lat: 49.5995142, lng: 18.143911511744882};
                const Sleza  = {lat: 51.0346177, lng: 16.99246135};
                const Otopeni = {lat:44.571096, lng: 26.067225};



                const map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 5,
                    center: { lat: 47.180144, lng: 18.591205},
                    /*Map style array. Code from https://snazzymaps.com/style/1735/discreet */
                    /*Helping video for setting up Snazzymaps https://www.youtube.com/watch?v=iPq69CnYxMA&ab_channel=GoogleDevelopers */
 
                    styles:  
 [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#716464"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#a05519"
            },
            {
                "saturation": "-13"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#84afa3"
            },
            {
                "lightness": 52
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
]
                });

                new google.maps.Marker({
                    position: Varna,
                    map,
                    title: "Retro-Museum, Varna, Bulgaria",
                });

                new google.maps.Marker({
                    position: Budapest,
                    map,
                    title: "Museum of Transport, Budapest, Hungary",
                });

                 new google.maps.Marker({
                    position: MladaBoleslav,
                    map,
                    title: "Škoda Auto Museum, Mladá Boleslav, Czechia",
                });

                 new google.maps.Marker({
                    position: Koprivnice,
                    map,
                    title: "Tatra Muzeum, Kopřivnice, Czechia",
                });

                 new google.maps.Marker({
                    position: Sleza,
                    map,
                    title: "Topacz Museum, Ślęza, Poland",
                });

                 new google.maps.Marker({
                    position: Otopeni,
                    map,
                    title: "Țiriac Collection, Otopeni, Romania",
                });
            }