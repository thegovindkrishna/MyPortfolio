import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cloud Engineer",
          "Python Developer",
          "AI/ML Researcher-Teaching Robots to Procrastinate",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
        typeSpeed: 20,  // Added this line to increase typing speed
        delay: 20,      // Added this line to reduce delay between characters
      }}
    />
  );
}

export default Type;
