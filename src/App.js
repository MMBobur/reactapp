import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Page from "./Page"

const Component2 = () => {
  return <h1>Component 2</h1>;
};




const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Page /> },
    { path: "component2", element: <Component2 /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;