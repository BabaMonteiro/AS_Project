var map = L.map('map').setView([40.64095818867095, -8.653921595656492], 17);

        var myIcon = L.icon({
            iconUrl: './assets/icons/vinyl-store.png', // Replace with the path to your vinyl store icon image
            iconSize: [30, 30],
            iconAnchor: [15, 35],
            popupAnchor: [0, -30]
        });

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

        $.getJSON("https://api.jsonbin.io/v3/b/64442b4b8e4aa6225e8ec932", function (data) {
            var vinylStores = L.geoJSON(data.record.features, {
                pointToLayer: function (feature, latlng) {
                    return L.marker(latlng, {
                        icon: myIcon
                    });
                },
            }).addTo(map);
        });

        $(".leaflet-control-attribution").remove();