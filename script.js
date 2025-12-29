document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    const busList = document.getElementById('bus-list');
    busList.innerHTML = '<li>Loading...</li>'; // Provide feedback to the user

    const query = `from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}`;

    fetch(`/api/search?${query}`)
        .then(response => response.json())
        .then(buses => {
            busList.innerHTML = ''; // Clear the list

            if (buses.length === 0) {
                busList.innerHTML = `<li>No buses found from ${from} to ${to} on ${date}.</li>`;
                return;
            }

            buses.forEach(bus => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <strong>${bus.from} to ${bus.to}</strong><br>
                    Departure: ${bus.departure} - Arrival: ${bus.arrival}<br>
                    Price: $${bus.price}
                `;
                busList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching search results:', error);
            busList.innerHTML = '<li>Sorry, there was an error fetching results. Please try again.</li>';
        });
});
