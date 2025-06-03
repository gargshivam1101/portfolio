import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="clr">Shivam Garg</span>, an Assistant
            Manager at{" "}
            <span className="clr">
              <a
                href="https://pursimple.com/restaurant/whitby/"
                target="_blank"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Pür & Simple (Whitby)
              </a>
            </span>
            , where I lead daily operations, manage a dynamic team, and ensure a
            seamless guest experience. Previously, I worked for 3 years as a
            <span className="clr"> Software Development Engineer</span> in the
            digital signing industry, building scalable solutions with Java,
            Spring Boot, and Angular. I hold a{" "}
            <span className="clr"> Master of Engineering</span> from Concordia
            University and thrive in fast-paced environments where leadership,
            problem-solving, and efficiency are key to success—no matter the
            industry.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Going to the gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Organizing events
            </li>
            <li className="about-activity">
              <ImPointRight /> Trekking and Travelling
            </li>
          </ul> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
