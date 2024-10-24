"use client";
import { NavBar } from "../../components/navBar";
import { Container, Row, Col } from "react-bootstrap";
import { Content } from "../../components/content";
import { SideBar } from "../../components/sideBar";

export const MainPage = () => {
  return (
    <main style={{ backgroundColor: "var(--background)" }}>
      <NavBar />
      <Container fluid className="my-3">
        <Row className="justify-content-center">
          <Col xs={9}>
            <Content />
          </Col>
          <Col>
            <SideBar />
          </Col>
        </Row>
      </Container>
    </main>
  );
};
