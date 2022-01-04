import React from "react";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <Welcome />
      <Interests />
      <About />
      <Footer />
    </div>
  );
}
