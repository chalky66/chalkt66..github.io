// geolocation.js

function testAsyncFunction() {
    return new Promise((resolve, reject) => {
        // Do some async work, like fetching data or waiting for a timeout
        setTimeout(() => {
            // Simulate success by resolving the promise with a result
            resolve("Async function call successful");
        }, 1000);
    });
}


window.geolocationInterop = {
    requestGeolocationPermission: function () {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error('Geolocation not supported'));
            } else {
                navigator.permissions.query({ name: 'geolocation' }).then(permissionStatus => {
                    if (permissionStatus.state === 'granted') {
                        resolve();
                    } else if (permissionStatus.state === 'prompt') {
                        navigator.geolocation.getCurrentPosition(() => resolve(), () => reject(new Error('User denied geolocation permission')));
                    } else {
                        reject(new Error('Geolocation permission not granted'));
                    }
                }).catch(() => reject(new Error('Error while checking geolocation permission')));
            }
        });
    }
};
