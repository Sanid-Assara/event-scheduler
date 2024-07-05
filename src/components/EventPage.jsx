import { useParams, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function EventPage() {
  const [event, setEvent] = useState();
  const { id } = useParams();

  useEffect(() => {
    const storedEventsData = localStorage.getItem("events");
    if (storedEventsData) {
      const events = JSON.parse(storedEventsData);
      const foundEvent = events.find((event) => event.id === parseInt(id));
      setEvent(foundEvent);
    }
  }, [id]);

  return event ? (
    <div className="bg-white  flex flex-col mx-auto max-w-xl my-10 p-8">
      <img src={event.img} alt={event.title} />
      <h3>Details</h3>
      <p>{event.details}</p>
      <NavLink
        to={"/events"}
        className={
          "outline my-2 px-4 py-2 w-fit font-bold hover:text-white hover:bg-black"
        }
      >
        Go Back
      </NavLink>
    </div>
  ) : (
    <div className="bg-white min-h-dvh flex justify-center text-3xl font-bold  text-center items-center">
      <p>The Event Doesn't Exist or It's Loading...</p>
    </div>
  );
}
