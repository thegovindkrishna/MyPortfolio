import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ashray"
              description="Ashray is an advanced mental health advisory chatbot designed to provide empathetic, contextually appropriate responses to mental health queries. It leverages cutting-edge machine learning technologies to process and retrieve mental health information effectively."
              ghLink="https://github.com/thegovindkrishna/Ashray"
              demoLink="https://ashray.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Terminator"
              description="Implemented a secure, real-time group chat application using sockets and
multi-threading in C++. Enabled multiple clients to connect, send/receive
messages, and communicate seamlessly within the terminal interface.
Incorporated encryption for data privacy and user authentication
mechanisms"
             ghLink="https://github.com/thegovindkrishna/terminator-chat"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Card.io"
              description="Developed a predictive model using supervised learning algorithms to diagnose the risk of heart disease based on clinical data. Performed exploratory data analysis, feature engineering, and model selection to achieve high accuracy in identifying potential cardiovascular disorders."
            //  ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
