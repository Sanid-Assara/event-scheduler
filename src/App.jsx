import "./App.css";
import EventPage from "./components/EventPage";
import Events from "./components/Events";
import CreateEvent from "./components/CreateEvent";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PageNotFound from "./components/PageNotFound";
import PageLayout from "./components/PageLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState } from "react";



function App() {

const [isLoggedIn, setisLoggedIn] = useState(false);

useEffect(() => {
const token = localStorage.getItem("token");
if(token) {
  setisLoggedIn(true);
}
}, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<PageNotFound />} element={<PageLayout isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />}>
        <Route index element={<Events />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventPage />} />
        <Route path="/signin" element={<SignIn isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />} />
        <Route path="/signup" element={<SignUp  />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
