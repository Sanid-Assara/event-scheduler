import { NavLink } from "react-router-dom";
export default function PageNotFound() {
  return (
    <>
      <p>404 Page not found</p>
      <NavLink to="/"> Go To Home Page</NavLink>
    </>
  );
}
