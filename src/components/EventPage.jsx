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
    <div className="min-h-screen flex flex-col justify-start items-center gap-8 mx-auto font-sans px-10 pb-10">
      <p className="text-center font-extrabold text-5xl p-10">{event.title}</p>
      <div className="bg-white outline flex sm:flex-col lg:flex-row  gap-4 shadow-lg  ">
        <img
          src={event.img}
          alt={event.title}
          className="w-full max-w-lg aspect-video object-cover h-auto"
        />
        <div className="flex flex-col gap-1 justify-between w-full max-w-lg px-6 lg:pt-6 pb-6">
          <p className="text-white bg-black w-fit px-4 py-2 font-semibold">
            Details
          </p>
          <p className="font-semibold ext-2xl max-w-lg text-xl">
            {event.details}
          </p>
          <NavLink
            to={"/events"}
            className={
              "outline my-2 px-4 py-2 w-full text-center font-bold hover:text-white hover:bg-black"
            }
          >
            Go Back
          </NavLink>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-white min-h-dvh flex justify-center text-3xl font-bold  text-center items-center">
      <p>The Event Doesn't Exist or It's Loading...</p>
    </div>
  );
}
