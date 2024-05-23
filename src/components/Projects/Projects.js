import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import autoguard from "../../assets/Projects/AutoGuard.png"
import bls from "../../assets/Projects/BlindNavigation.png"
import tb from "../../assets/Projects/TalentBridge.png"
import toureasy from "../../assets/Projects/TourEasy.png"
import inventory from "../../assets/Projects/Inventory.png"
import sb from "../../assets/Projects/SeatBooking.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few of my recent academic projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toureasy}
              isBlog={false}
              title="TourEasy"
              description="A robust tour management platform, using Java, and autogonnerated code via Papyrus from models with proper OCL constraints, implementing user-friendly features like personalized profiles and efficient guide matching for an exceptional tour booking experience."
              ghLink="https://github.com/gargshivam1101/toureasy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autoguard}
              isBlog={false}
              title="AutoGuard"
              description="A vehicle authentication system employing AWS services (Rekognition, Lambda, S3, DynamoDB, API Gateway) for image processing, serverless computing, and database management."
              ghLink="https://github.com/gargshivam1101/autoguard"
              demoLink="https://www.youtube.com/watch?v=GvAdcQhfmkQ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="Inventory Manager"
              description="Manages the inventory list of a business, and handles all of the CRUD operations. Used gRPC and ensured high performance endpoints, and offers more flexbility to collaborate."
              ghLink="https://github.com/gargshivam1101/inventory"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bls}
              isBlog={false}
              title="Blind Navigation System"
              description="Aimed to empower visually impaired individuals for independent navigation, a system utilizing Python-based image recognition for object identification and 3 ultrasonic sensors for distance measurement, with Raspberry Pi making informed decisions based on the readings."
              ghLink="https://github.com/gargshivam1101/blind-navigation-system"
              demoLink="https://www.youtube.com/watch?v=at2zXDhJKfM"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tb}
              isBlog={false}
              title="TalentBridge"
              description="Facilitates freelancers to find projects and enables seamless user connections, with server-side in SpringBoot and client-side code developed using Vue.js"
              ghLink="https://github.com/gargshivam1101/talent-bridge"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sb}
              isBlog={false}
              title="Seat Booking"
              description="A Java application which helps organizers list locations, customers to book seats, and resell them if required at a new price. "
              ghLink="https://github.com/gargshivam1101/seat-booking"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;