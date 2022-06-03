import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Home";
import Companies from "./Companies";
import Details from "./Details";

//adding router to the main.tsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//create a router
const router = (
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/companies/:id" element={<Companies />}></Route>
      <Route path="/numbers/:id" element={<Details />}></Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>{router}</React.StrictMode>
);
