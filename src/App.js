import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Footer2 from "./Footer2";
import NotMatch from "./NotMatch";

const App = () => {
  return (
    <>
      <div id="templatemo_container_wrapper">
        <div className="templatemo_spacer"></div>
        <div id="templatemo_container">
          <Header />
          <div id="templatemo_left_column">
            <div className="text_area" align="justify">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="service" element={<Service />} />
                <Route path="portfolio" element={<Portfolio/>} />
                <Route path="portfolio/:id" element={<Portfolio/>} />
                <Route path="*" element={<NotMatch />} />
              </Routes>
            </div>
          </div>
          <Sidebar />
          <Footer />
        </div>
        <div className="templatemo_spacer"></div>
      </div>
     
      <Footer2/>
    </>
  );
};

export default App;
