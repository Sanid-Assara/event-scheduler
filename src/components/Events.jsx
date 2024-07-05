import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function Events() {
  const [storedEvents, setStoredEvents] = useState([]);
  const events = [
    {
      id: 1,
      date: "2024-08-28",
      title:
        "Agile Community Schleswig-Holstein Agile Community Schleswig-Holstein",
      location: "Kiel, Germany",
      img: "https://secure.meetupstatic.com/photos/event/1/4/5/e/600_513665214.webp?w=750",
      details:
        "Join the Agile Community Schleswig-Holstein for an engaging meetup. This event will feature insightful talks on agile methodologies. Network with professionals from various industries. Participate in interactive workshops. Enjoy refreshments and light snacks.",
    },
    {
      id: 2,
      date: "2024-07-30",
      title: "Agile Community Flensburg",
      location: "Flensburg, Germany",
      img: "https://secure.meetupstatic.com/photos/event/1/4/5/e/600_513665214.webp?w=750",
      details:
        "The Agile Community Flensburg invites you to our monthly meetup. Discuss the latest trends in agile practices. Meet like-minded individuals and share your experiences. Engage in group activities and discussions. Light refreshments will be provided.",
    },
    {
      id: 3,
      date: "2024-09-10",
      title: "Lorem ipsum dolor sit amet",
      location: "Lorem, Germany",
      img: "https://secure.meetupstatic.com/photos/event/1/4/5/e/600_513665214.webp?w=750",
      details:
        "Join us for a unique event in Lorem. This event will cover various topics in technology and innovation. Connect with professionals in your field. Enjoy keynote speeches from industry leaders. A networking session will follow the main event.",
    },
    {
      id: 4,
      date: "2024-10-15",
      title: "Tech Meetup Berlin",
      location: "Berlin, Germany",
      img: "https://secure.meetupstatic.com/photos/event/c/7/6/8/600_521931048.webp?w=750",
      details:
        "Tech Meetup Berlin is back with another exciting session. Explore the latest in technology trends. Meet tech enthusiasts and professionals. Participate in hands-on workshops and demos. Refreshments will be available throughout the event.",
    },
    {
      id: 5,
      date: "2024-11-20",
      title: "Startup Pitch Night",
      location: "Hamburg, Germany",
      img: "https://secure.meetupstatic.com/photos/event/c/7/6/8/600_521931048.webp?w=750",
      details:
        "Don't miss the Startup Pitch Night in Hamburg. Watch startups pitch their ideas to a panel of judges. Network with entrepreneurs and investors. Gain insights from expert feedback sessions. Enjoy an evening of innovation and inspiration.",
    },
    {
      id: 6,
      date: "2024-12-05",
      title: "JavaScript Conference",
      location: "Munich, Germany",
      img: "https://secure.meetupstatic.com/photos/event/c/7/6/8/600_521931048.webp?w=750",
      details:
        "The JavaScript Conference in Munich is a must-attend event. Learn about the latest advancements in JavaScript. Attend sessions by renowned speakers. Participate in coding workshops. Network with developers from around the world. Enjoy the vibrant tech community atmosphere.",
    },
  ];

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
    const storedEventsData = localStorage.getItem("events");
    if (storedEventsData) {
      const parsedEvents = JSON.parse(storedEventsData);
      const sortedEvents = parsedEvents.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      setStoredEvents(sortedEvents);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-8 mx-auto font-sans px-16">
      <p className="text-center font-extrabold text-5xl p-10">Events</p>
      <ul className=" flex flex-col gap-10 mx-auto pb-10">
        {storedEvents.map((event) => (
          <li
            key={event.id}
            className="bg-white outline flex sm:flex-col lg:flex-row  gap-4 shadow-lg  "
          >
            <img
              src={event.img}
              alt={event.title}
              className="w-full  max-w-lg aspect-video object-cover h-auto"
            />
            <div className="flex flex-col max-w-lg justify-between w-full p-6">
              <p className="text-white bg-black w-fit px-4 py-2 font-semibold">
                {event.date}
              </p>
              <h3 className="font-bold text-2xl max-w-lg">{event.title}</h3>
              <p className="font-semibold text-gray-800 text-xl">
                {event.location}
              </p>
              <NavLink
                to={`/events/${event.id}`}
                onClick={window.scrollTo(0, 0)}
                className={
                  "outline my-2 px-4 py-2 w-full  text-center font-bold hover:text-white hover:bg-black"
                }
              >
                Learn More
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
