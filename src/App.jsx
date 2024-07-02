import "./App.css";
import Home from "./components/Home";
import Event from "./components/Event";
import Events from "./components/Events";
import CreateEvent from "./components/CreateEvent";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/event" element={<Event />} />
        <Route path="/events" element={<Events />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
