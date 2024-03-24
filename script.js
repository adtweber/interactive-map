let map

function buildMap(coords) {
    map = L.map('map').setView([coords[0], coords[1]], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([coords[0], coords[1]]).addTo(map)
        .bindPopup('You are here')
        .openPopup();
}

// get coordinates via geolocation api
async function getCoords() {
    const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    });
    return [pos.coords.latitude, pos.coords.longitude]
}

window.onload = async () => {
    const coordinates = await getCoords()
    buildMap(coordinates)
}

// eventListener