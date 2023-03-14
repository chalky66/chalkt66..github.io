window.localStorageInterop = {
    getItem: function (key) {
        return localStorage.getItem(key);
    },
    setItem: function (key, value) {
        localStorage.setItem(key, value);
    },
    removeItem: function (key) {
        localStorage.removeItem(key);
    },
    loadMap_old: function (longitude, latitude) {
        var map = new maplibregl.Map({
            container: 'map',
            style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
            center: [longitude, latitude], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });
    },
    loadMap: function (longitude, latitude) {
        var map = new maplibregl.Map({
            container: 'map',
            style: 'https://api.maptiler.com/maps/streets/style.json?key=IEqSsNtmxfRK4qMPRAas', // Use MapTiler's Streets style
            center: [longitude, latitude], // Set the center of the map
            zoom: 19 // Set the zoom level of the map
        });

        var center = [longitude, latitude]; // Set the latitude and longitude of the center of the map
        map.setCenter(center); // Set the center of the map to the specified location
    }
};