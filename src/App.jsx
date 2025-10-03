import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Blog from './pages/Blog/Blog'
import About from './pages/About/About'
import Contact from "./pages/Contact/Contact";
import Service from "./pages/ServicesP/Service";
import Carreer from "./pages/careers/Carreer";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/aboutus" />
        <Route element={<Blog />} path="/blogs" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Service />} path="/services" />
        <Route element={<Carreer />} path="/careers" />
      </Route>
    </Routes>
  );
}

export default App;
