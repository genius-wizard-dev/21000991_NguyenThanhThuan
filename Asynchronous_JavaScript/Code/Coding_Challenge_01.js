function whereAmI(lat, lng) {
    const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(`You are in ${data.city}, ${data.country}`);
        })
        .catch(err => {
            console.error('Something went wrong:', err.message);
        });
}

whereAmI(10.80176,106.66667);