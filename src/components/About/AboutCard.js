import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="clr">Shivam Garg</span> currently
            based in Canada.
            <br />I have completed{" "}
            <span className="clr">Master of Engineering</span> at Concordia
            University, Montreal.
            <br />I have over two years of experience as a{" "}
            <span className="clr">Software Development Engineer</span> in the
            digital signing industry.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Going to the gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Organizing events
            </li>
            <li className="about-activity">
              <ImPointRight /> Trekking and Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
