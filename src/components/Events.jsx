import React, { useEffect, useState } from "react";
export default function Events() {
  const [storedEvents, setStoredEvents] = useState([]);
  const events = [
    {
      id: 1,
      date: "2024-08-28",
      title: "Agile Community Schleswig-Holstein",
      location: "Kiel, Germany",
      img: "https://secure.meetupstatic.com/photos/event/1/4/5/e/600_513665214.webp?w=750",
    },
    {
      id: 2,
      date: "2024-07-30",
      title: "Agile Community Flensburg",
      location: "Flensburg, Germany",
      img: "https://secure.meetupstatic.com/photos/event/1/4/5/e/600_513665214.webp?w=750",
    },
    {
      id: 3,
      date: "2024-09-10",
      title: "Lorem ipsum dolor sit amet",
      location: "Lorem , Germany",
      img: "https://secure.meetupstatic.com/photos/event/1/4/5/e/600_513665214.webp?w=750",
    },
    {
      id: 4,
      date: "2024-10-15",
      title: "Tech Meetup Berlin",
      location: "Berlin, Germany",
      img: "https://secure.meetupstatic.com/photos/event/c/7/6/8/600_521931048.webp?w=750",
    },
    {
      id: 5,
      date: "2024-11-20",
      title: "Startup Pitch Night",
      location: "Hamburg, Germany",
      img: "https://secure.meetupstatic.com/photos/event/c/7/6/8/600_521931048.webp?w=750",
    },
    {
      id: 6,
      date: "2024-12-05",
      title: "JavaScript Conference",
      location: "Munich, Germany",
      img: "https://secure.meetupstatic.com/photos/event/c/7/6/8/600_521931048.webp?w=750",
    },
  ];

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
    const storedEventsData = localStorage.getItem("events");
    if (storedEventsData) {
      setStoredEvents(JSON.parse(storedEventsData));
    }
  }, []);

  return (
    <div>
      <p>Events Page</p>
      <ul>
        {storedEvents.map((event) => (
          <li key={event.id}>
            <img src={event.img} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
