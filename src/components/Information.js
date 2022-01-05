import React from "react";

import About from "./About";
import Interests from "./Interests";

//name & socials
//about
//interests

export default function Information() {
  return (
    <div className="info-block">
      <h1 className="info-name">Haashim Ameer</h1>
      <h2 className="info-role">Sophomore CS Student</h2>
      <h3 className="info-website">haashim.com</h3>
      {/* <button className="info-email">Email</button> */}
      {/* <button className="info-LI">LinkedIn</button> */}

      <About />
      <Interests />
    </div>
  );
}
