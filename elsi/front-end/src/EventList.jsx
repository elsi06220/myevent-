import React, { useState, useEffect } from 'react';
import './App.css';

const EventList = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Conference A', date: '2024-05-15' },
    { id: 2, name: 'Workshop B', date: '2024-04-20' },
    { id: 3, name: 'Seminar C', date: '2024-06-10' },
  ]);
  const [sortKey, setSortKey] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    sortEvents(sortKey);
  }, []);

  const sortEvents = (key) => {
    const sortedEvents = [...events].sort((a, b) => {
      if (a[key] < b[key]) return sortOrder === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
    setEvents(sortedEvents);
    setSortKey(key);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div>
      <h1>Event List</h1>
      <div>
        <button onClick={() => sortEvents('date')}>Sort by Date</button>
        <button onClick={() => sortEvents('name')}>Sort by Name</button>
      </div>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.name} - {new Date(event.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;