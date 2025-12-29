document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    // In a real application, you would send this data to a server to get bus results.
    // For this example, we'll just display a dummy result.
    const busList = document.getElementById('bus-list');
    busList.innerHTML = ''; // Clear previous results

    const listItem = document.createElement('li');
    listItem.textContent = `Found 1 bus from ${from} to ${to} on ${date}`;
    busList.appendChild(listItem);
});
