var map = L.map('map').setView([40.64095818867095, -8.653921595656492], 17);

        var myIcon = L.icon({
            iconUrl: '../../assets/img/logo.png', // Replace with the path to your vinyl store icon image
            iconSize: [30, 30],
            iconAnchor: [15, 35],
            popupAnchor: [0, -30]
        });

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

        $.getJSON("vinil_stores.geojson", function (data) {
            var vinylStores = L.geoJSON(data.features, {
                pointToLayer: function (feature, latlng) {
                    return L.marker(latlng, {
                        icon: myIcon
                    });
                },
            }).addTo(map);
        });

        $(".leaflet-control-attribution").remove();