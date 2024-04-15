import React, { useState } from 'react';
import axios from 'axios';

function HomePage() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [itinerary, setItinerary] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('YOUR_API_ENDPOINT', {
        source,
        destination,
        date,
      });
      setItinerary(response.data);
    } catch (error) {
      console.error('Error fetching itinerary:', error);
    }
  };

  return (
    <div className="home-page">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="From"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <input
          type="text"
          placeholder="To"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Plan Trip</button>
      </form>
      {itinerary && (
        <div className="itinerary">
          <h2>Itinerary</h2>
          <ul>
            {itinerary.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HomePage;
