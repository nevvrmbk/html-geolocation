// window.addEventListener("DOMContentLoaded", async () => {
//     if ("geolocation" in navigator) {
//         navigator.geolocation.getCurrentPosition(position => {
//             document.getElementById("latitude").innerHTML = position.coords.latitude;
//             document.getElementById("longitude").innerHTML = position.coords.longitude;
//             document.getElementById("accuracy").innerHTML = position.coords.accuracy;
//             document.getElementById("altitude").innerHTML = position.coords.altitude;
//             document.getElementById("altitude-accuracy").innerHTML = position.coords.altitudeAccuracy;
//             document.getElementById("heading").innerHTML = position.coords.heading;
//             document.getElementById("speed").innerHTML = position.coords.speed;
//         }, error => {
//             document.writeln(error.message);
//         }, {
//             enableHighAccuracy: true,
//             maximumAge: 1000000,
//             timeout: 1000000,
//         });
//     }
// });

window.addEventListener("DOMContentLoaded", () => {
    navigator.geolocation.watchPosition((position) => {
        document.getElementById("latitude").innerHTML = position.coords.latitude;
        document.getElementById("longitude").innerHTML = position.coords.longitude;
        document.getElementById("accuracy").innerHTML = position.coords.accuracy;
        document.getElementById("altitude").innerHTML = position.coords.altitude;
        document.getElementById("altitude-accuracy").innerHTML = position.coords.altitudeAccuracy;
        document.getElementById("heading").innerHTML = position.coords.heading;
        document.getElementById("speed").innerHTML = position.coords.speed;
    }, (error) => {
        document.writeln(error.message);
    }, {
        enableHighAccuracy: true,
        maximumAge: 1000000,
        timeout: 1000000,
    });
});