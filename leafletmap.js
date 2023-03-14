export function load_map(longitude, latitude) {
    var map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
        center: [longitude, latitude], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
}