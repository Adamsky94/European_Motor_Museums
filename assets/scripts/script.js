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