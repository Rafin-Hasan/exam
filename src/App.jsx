import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import LayoutOne from "./Layouts/LayoutOne";
import Home from "./Pages/Home/Home";
import ToDo from "./Pages/To Do/ToDo";
import Done from "./Pages/Done/Done";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<Home />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/done" element={<Done />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;