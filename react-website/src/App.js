import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import CaseStudy from "./components/Case-study/CaseStudy";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Industries from "./components/Industries/Industries";

function App() {
  return (
    <div style={{scrollBehavior: "smooth"}}>
      <Navbar />
      <Intro />
      <CaseStudy id="section2"/>
      <Industries id="section3"/>
      <Footer id="section4"/>
    </div>
  );
}

export default App;
