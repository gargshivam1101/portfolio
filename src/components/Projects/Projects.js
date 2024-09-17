import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import autoguard from "../../assets/Projects/AutoGuard.png";
import bls from "../../assets/Projects/BlindNavigation.png";
import tb from "../../assets/Projects/TalentBridge.png";
import toureasy from "../../assets/Projects/TourEasy.png";
import inventory from "../../assets/Projects/Inventory.png";
import sid from "../../assets/Projects/StayInDreams.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few of my recent projects.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sid}
              isBlog={false}
              title="StayInDreams"
              description="A real estate platform built using the MERN stack with a focus on user-friendly property management and search functionalities. It allows users to sign up and log in via OAuth or Google and create, edit, and manage property listings with images stored securely using Google Firebase."
              ghLink="https://github.com/gargshivam1101/stay-in-dreams"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toureasy}
              isBlog={false}
              title="TourEasy"
              description="A robust tour management platform, using Java, and auto-generated code via Papyrus from models with detailed OCL constraints, implementing user-friendly features like personalized profiles and efficient guide matching for an exceptional tour booking experience."
              ghLink="https://github.com/gargshivam1101/toureasy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autoguard}
              isBlog={false}
              title="AutoGuard"
              description="A vehicle authentication system employing AWS services (Rekognition, Lambda, S3, DynamoDB, API Gateway) for image processing, serverless computing, and database management, which scans the vehicle's registration number and checks if the user has the necessary access."
              ghLink="https://github.com/gargshivam1101/autoguard"
              demoLink="https://www.youtube.com/watch?v=GvAdcQhfmkQ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="Inventory Manager"
              description="An application designed to manage a business's inventory with efficient CRUD operations. Built using gRPC, it ensures high-performance endpoints, allowing rapid data processing and real-time updates. This approach offers greater flexibility for teams to collaborate seamlessly."
              ghLink="https://github.com/gargshivam1101/inventory"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bls}
              isBlog={false}
              title="Blind Navigation System"
              description="Designed to empower visually impaired individuals by enabling independent navigation. It uses Python-based image recognition for object detection and three ultrasonic sensors for distance measurement.. A Raspberry Pi processes the data and makes real-time decisions to guide users safely."
              ghLink="https://github.com/gargshivam1101/blind-navigation-system"
              demoLink="https://www.youtube.com/watch?v=at2zXDhJKfM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tb}
              isBlog={false}
              title="TalentBridge"
              description="A platform to connect freelancers with projects, offering a smooth and efficient user experience. It features a Spring Boot backend for reliability and a Vue.js frontend for a responsive user experience. This project enables seamless communication, making it easy for freelancers to find and collaborate on opportunities."
              ghLink="https://github.com/gargshivam1101/talent-bridge"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
