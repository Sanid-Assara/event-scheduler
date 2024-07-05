import { NavLink } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-svh text-2xl font-bold">
      <p>404 Page not found</p>
      <NavLink
        to="/"
        className={"outline px-4 py-2 hover:bg-black hover:text-white"}
      >
        Go To Home Page
      </NavLink>
    </div>
  );
}
