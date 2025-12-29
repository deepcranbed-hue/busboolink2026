const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Serve static files from the root directory
app.use(express.static('.'));

// API endpoint for searching buses
app.get('/api/search', (req, res) => {
  const { from, to, date } = req.query;

  fs.readFile('buses.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read bus data.' });
    }

    const buses = JSON.parse(data).buses;
    const results = buses.filter(bus =>
      bus.from === from && bus.to === to && bus.date === date
    );

    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
