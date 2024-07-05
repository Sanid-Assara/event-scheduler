import { Outlet, NavLink } from "react-router-dom";

export default function PageLayout() {
  return (
    <>
      <header className="shadow-xl bg-white ">
        <div className=" flex justify-between items-center gap-x-16 max-w-7xl px-6 py-4 mx-auto ">
          <span className="outline px-4 py-2 flex-none cursor-pointer  text-xl  tracking-tight font-extrabold   ">
            <p>EVENT SCHEDULER</p>
          </span>
          <nav className="font-bold text-lg w-full flex justify-between items-center px-8">
            <div className="flex justify-center items-center gap-x-10">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/create-event">Create an Event</NavLink>
            </div>
            <div className="flex justify-center items-center gap-x-10">
              <NavLink to="/signin">Sign in</NavLink>
              <NavLink to="/signup">You Don't Have an Account Yet?</NavLink>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className=" bg-black text-white flex items-center justify-center  gap-6 mx-auto py-4 px-4   w-full ">
        <small className="z-40 font-semibold text-sm ">
          &copy; 2024 EVENT SCHEDULER. All rights reserved.
        </small>
      </footer>
    </>
  );
}
