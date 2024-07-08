import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"><b>Govind Krishna</b> </span>
            from <span className="purple"><b> Kerala, India.</b></span>
            <br />
            I am currently a Research Intern @HuT Labs.
            <br />
            and is pursuing my Bachleors in Computer Scinece at Amrita University
            Kollam.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Govind Krishna</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
