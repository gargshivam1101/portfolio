import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,DiAngularSimple,DiMysql,DiAws,DiJira
} from "react-icons/di";
import {
    SiRedis,
    SiSpringboot,SiKubernetes,SiJenkins
} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

            <Col xs={4} md={2} className="tech-icons">
                <SiSpringboot />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiAngularSimple />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMysql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedis />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiAws />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKubernetes />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJenkins />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJira />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <CgCPlusPlus />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
        </Row>
    );
}

export default Techstack;