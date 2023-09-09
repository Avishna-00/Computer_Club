import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Members from './pages/Members';
// import Routes from './Routes';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/events",
    element: <Events/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
  {
    path: "/members",
    element: <Members/>,
  }, 
]);

function App() {
  return (
    <div>
      <NavBar/>

      <RouterProvider router={router} />
      {/* <Routes /> */}

    </div>
  );
}

export default App;
