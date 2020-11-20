$( document ).ready(function() {
    console.log( "ready!" );
});

function initMap() {
    /*coordinates for the markers*/
    const Varna = { lat: 43.21733945, lng: 27.898463459304434 };
    const Budapest = { lat: 47.514134350000006, lng: 19.091634960797748 };
    const MladaBoleslav = { lat: 50.41854105, lng: 14.913829178797954 };
    const Koprivnice = { lat: 49.5995142, lng: 18.143911511744882 };
    const Sleza = { lat: 51.0346177, lng: 16.99246135 };
    const Otopeni = { lat: 44.571096, lng: 26.067225 };
    const Tolyatti = { lat: 53.553455, lng: 49.250049 };
    const Aakirkeby = { lat: 55.058496, lng: 14.932545 };
    const Gjern = { lat: 56.226767, lng: 9.742556 };
    const Loomse = { lat: 58.594695, lng: 24.510503 };
    const Riga = { lat: 56.970487, lng: 24.22754 };
    const Kangasala = { lat: 61.440972, lng: 24.130038 };
    const Trollhattan = { lat: 58.271653, lng: 12.276198 };
    const Gothenburg = { lat: 57.694728, lng: 11.819691 };
    const Limassol = { lat: 34.665722, lng: 32.993622 };
    const Athens = { lat: 37.991419, lng: 23.729918 };
    const Maranello = { lat: 44.529765, lng: 10.861568 };
    const Modena = { lat: 44.65912, lng: 11.125864 };
    const Brescia = { lat: 45.524568, lng: 10.267213 };
    const Turin = { lat: 45.03191, lng: 7.673504 };
    const Catania = { lat: 37.526927, lng: 15.065237 };
    const Istanbul = { lat: 41.128159, lng: 29.047976 };
    const Encamp = { lat: 42.533088, lng: 1.577954 };
    const Aspang = { lat: 47.555919, lng: 16.089862 };
    const Brussels = { lat: 50.838801, lng: 4.392916 };
    const Warwickshire = { lat: 52.188848, lng: -1.481058 };
    const Sparkford = { lat: 51.04095, lng: -2.557735 };
    const Weybridge = { lat: 51.354859, lng: -0.468064 };
    const Mulhouse = { lat: 47.761884, lng: 7.326792 };
    const Paris = { lat: 48.966651, lng: 2.497351 };
    const LeMans = { lat: 47.956885, lng: 0.208425 };
    const Sochaux = { lat: 47.516121, lng: 6.831029 };
    const Reims = { lat: 49.250679, lng: 4.050444 };
    const Monaco = { lat: 43.730926, lng: 7.417058 };
    const Zwickau = { lat: 50.733136, lng: 12.484153 };
    const Wolfsburg = { lat: 52.433247, lng: 10.794309 };
    const Munchen = { lat: 48.176666, lng: 11.558965 };
    const StuttgartMB = { lat: 48.787855, lng: 9.234312 };
    const Cologne = { lat: 50.980793, lng: 6.898708 };
    const StuttgartP = { lat: 48.834187, lng: 9.152548 };
    const Malaga = { lat: 36.699287, lng: -4.43891 };

    /*Function that draws the map from Google Maps Documentation*/
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: { lat: 52.314985, lng: 13.288772 },
        /*Map style array. Code from https://snazzymaps.com/style/1735/discreet */
        /*Helping video for setting up Snazzymaps https://www.youtube.com/watch?v=iPq69CnYxMA&ab_channel=GoogleDevelopers */
        styles: [
            {
                featureType: "administrative",
                elementType: "all",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [
                    {
                        visibility: "on",
                    },
                ],
            },
            {
                featureType: "administrative",
                elementType: "labels",
                stylers: [
                    {
                        visibility: "on",
                    },
                    {
                        color: "#716464",
                    },
                    {
                        weight: "0.01",
                    },
                ],
            },
            {
                featureType: "administrative.country",
                elementType: "labels",
                stylers: [
                    {
                        visibility: "on",
                    },
                ],
            },
            {
                featureType: "landscape",
                elementType: "all",
                stylers: [
                    {
                        visibility: "simplified",
                    },
                ],
            },
            {
                featureType: "landscape.natural",
                elementType: "geometry",
                stylers: [
                    {
                        visibility: "simplified",
                    },
                ],
            },
            {
                featureType: "landscape.natural.landcover",
                elementType: "geometry",
                stylers: [
                    {
                        visibility: "simplified",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "all",
                stylers: [
                    {
                        visibility: "simplified",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "geometry.fill",
                stylers: [
                    {
                        visibility: "simplified",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "geometry.stroke",
                stylers: [
                    {
                        visibility: "simplified",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "labels.text",
                stylers: [
                    {
                        visibility: "simplified",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        visibility: "simplified",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        visibility: "simplified",
                    },
                ],
            },
            {
                featureType: "poi.attraction",
                elementType: "geometry",
                stylers: [
                    {
                        visibility: "on",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "all",
                stylers: [
                    {
                        visibility: "on",
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "all",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [
                    {
                        visibility: "on",
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [
                    {
                        visibility: "on",
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [
                    {
                        visibility: "simplified",
                    },
                    {
                        color: "#a05519",
                    },
                    {
                        saturation: "-13",
                    },
                ],
            },
            {
                featureType: "road.local",
                elementType: "all",
                stylers: [
                    {
                        visibility: "on",
                    },
                ],
            },
            {
                featureType: "transit",
                elementType: "all",
                stylers: [
                    {
                        visibility: "simplified",
                    },
                ],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [
                    {
                        visibility: "simplified",
                    },
                ],
            },
            {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [
                    {
                        visibility: "on",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "all",
                stylers: [
                    {
                        visibility: "simplified",
                    },
                    {
                        color: "#84afa3",
                    },
                    {
                        lightness: 52,
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                    {
                        visibility: "on",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "geometry.fill",
                stylers: [
                    {
                        visibility: "on",
                    },
                ],
            },
        ],
    });
    /*Code that places the markers on the map*/

    const marker1 = new google.maps.Marker({
        position: Varna,
        map,
        title: "Retro-Museum, Varna, Bulgaria",
    });

    const marker2 = new google.maps.Marker({
        position: Budapest,
        map,
        title: "Museum of Transport, Budapest, Hungary",
    });

    const marker3 = new google.maps.Marker({
        position: MladaBoleslav,
        map,
        title: "Škoda Auto Museum, Mladá Boleslav, Czechia",
    });

    const marker4 = new google.maps.Marker({
        position: Koprivnice,
        map,
        title: "Tatra Muzeum, Kopřivnice, Czechia",
    });

    const marker5 = new google.maps.Marker({
        position: Sleza,
        map,
        title: "Topacz Museum, Ślęza, Poland",
    });

    const marker6 = new google.maps.Marker({
        position: Tolyatti,
        map,
        title: "AutoVAZ Museum, Tolyatti, Russia",
    });

    const marker7 = new google.maps.Marker({
        position: Otopeni,
        map,
        title: "Tiriac Collection, Otopeni, Romania",
    });

    const marker8 = new google.maps.Marker({
        position: Aakirkeby,
        map,
        title: "Bornholm Automuseum, Aakirkeby, Denmark",
    });

    const marker9 = new google.maps.Marker({
        position: Gjern,
        map,
        title: "Jysk Automuseum, Gjern, Denmark",
    });

    const marker10 = new google.maps.Marker({
        position: Loomse,
        map,
        title: "Automuuseum, Loomse, Estonia",
    });

    const marker11 = new google.maps.Marker({
        position: Riga,
        map,
        title: "Riga Motor Museum, Riga, Latvia",
    });

    const marker12 = new google.maps.Marker({
        position: Kangasala,
        map,
        title: "Mobilia, Kangasala, Finland",
    });

    const marker13 = new google.maps.Marker({
        position: Trollhattan,
        map,
        title: "Saab Museum, Trollhättan, Sweden",
    });

    const marker14 = new google.maps.Marker({
        position: Gothenburg,
        map,
        title: "Volvo Museum, Gothenburg, Sweden",
    });

    const marker15 = new google.maps.Marker({
        position: Limassol,
        map,
        title: "Cyprus Motor Museum, Limassol, Cyprus",
    });

    const marker16 = new google.maps.Marker({
        position: Athens,
        map,
        title: "Hellenic Motor Museum, Athens, Greece",
    });

    const marker17 = new google.maps.Marker({
        position: Maranello,
        map,
        title: "Museo Ferrari, Maranello, Italy",
    });

    const marker18 = new google.maps.Marker({
        position: Modena,
        map,
        title: "Museo Lamborghini, Modena, Italy",
    });

    const marker19 = new google.maps.Marker({
        position: Brescia,
        map,
        title: "Museo Mille Miglia, Brescia,Italy",
    });

    const marker20 = new google.maps.Marker({
        position: Turin,
        map,
        title: "National Automuseum, Turin, Italy",
    });

    const marker21 = new google.maps.Marker({
        position: Catania,
        map,
        title: "Modern Galery of Arts and Motors, Catania, Sicily",
    });

    const marker22 = new google.maps.Marker({
        position: Istanbul,
        map,
        title: "Ural Ataman Classic Car Museum, Istanbul, Turkey",
    });

    const marker23 = new google.maps.Marker({
        position: Encamp,
        map,
        title: "National Automobile Museum, Encamp, Andorra",
    });

    const marker24 = new google.maps.Marker({
        position: Aspang,
        map,
        title: "Automobilmuseum, Aspang, Austria",
    });

    const marker25 = new google.maps.Marker({
        position: Brussels,
        map,
        title: "Autoworld, Brussels, Belgium",
    });

    const marker26 = new google.maps.Marker({
        position: Warwickshire,
        map,
        title: "British Motor Museum, Warwickshire, England",
    });

    const marker27 = new google.maps.Marker({
        position: Sparkford,
        map,
        title: "Haynes International Motor Museum, Sparkford, England",
    });

    const marker28 = new google.maps.Marker({
        position: Weybridge,
        map,
        title: "Mercedes-Benz World, Weybridge, England",
    });

    const marker29 = new google.maps.Marker({
        position: Mulhouse,
        map,
        title: "Cité de l'Automobile, Mulhouse, France",
    });

    const marker30 = new google.maps.Marker({
        position: Paris,
        map,
        title: "Citroën Heritage, Paris, France",
    });

    const marker31 = new google.maps.Marker({
        position: LeMans,
        map,
        title: "Musée des 24 Heures du Mans, Le Mans, France",
    });

    const marker32 = new google.maps.Marker({
        position: Sochaux,
        map,
        title: "Musée de l'Aventure Peugeot, Sochaux, France",
    });

    const marker33 = new google.maps.Marker({
        position: Reims,
        map,
        title: "Musée Automobile, Reims, France",
    });

    const marker34 = new google.maps.Marker({
        position: Monaco,
        map,
        title: "Monaco Top Cars Collection, Monaco",
    });

    const marker35 = new google.maps.Marker({
        position: Zwickau,
        map,
        title: "August Horch Museum, Zwickau, Germany",
    });

    const marker36 = new google.maps.Marker({
        position: Wolfsburg,
        map,
        title: "Autostadt, Wolfsburg, Germany",
    });

    const marker37 = new google.maps.Marker({
        position: Munchen,
        map,
        title: "BMW Museum, München, Germany",
    });

    const marker38 = new google.maps.Marker({
        position: StuttgartMB,
        map,
        title: "Mercedes-Benz Museum, Stuttgart, Germany",
    });

    const marker39 = new google.maps.Marker({
        position: Cologne,
        map,
        title: "Motorworld, Cologne, Germany",
    });

    const marker40 = new google.maps.Marker({
        position: StuttgartP,
        map,
        title: "Porsche Museum, Stuttgart, Germany",
    });

    const marker41 = new google.maps.Marker({
        position: Malaga,
        map,
        title: "Museo Automovilístico de Málaga, Spain",
    });

    /*Setting up the marker clusters from Google Maps documentation https://cloud.google.com/blog/products/maps-platform/how-cluster-map-markers*/

    const markers = [
        marker1,
        marker2,
        marker3,
        marker4,
        marker5,
        marker6,
        marker7,
        marker9,
        marker10,
        marker11,
        marker12,
        marker13,
        marker14,
        marker15,
        marker16,
        marker17,
        marker18,
        marker19,
        marker20,
        marker21,
        marker22,
        marker23,
        marker24,
        marker25,
        marker26,
        marker27,
        marker28,
        marker29,
        marker30,
        marker31,
        marker32,
        marker33,
        marker34,
        marker35,
        marker36,
        marker37,
        marker38,
        marker39,
        marker40,
        marker41,
    ];

    // Path for cluster icons to be appended (1.png, 2.png, etc.)
    const imagePath = "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m";

    // Enable marker clustering for this map and these markers
    const markerClusterer = new MarkerClusterer(map, markers, { imagePath: imagePath });

    console.log( "Map loaded sucessfully" );
}