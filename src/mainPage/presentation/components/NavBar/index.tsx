"use client";
import {
  Navbar,
  Container,
  Image,
  Form,
  FormControl,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { MagnifyingGlass } from "@phosphor-icons/react";
import styles from "./styles.module.css";

export const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <Navbar
      style={{
        backgroundColor: "var(--navBar)",
      }}
    >
      <Container className="mx-3">
        <Navbar.Brand className="d-flex align-items-center">
          <Image
            src="/images/reddit-logo.png"
            alt="reddit logo"
            roundedCircle
            height={55}
            width={55}
          />
          <Form.Text style={{ fontSize: "23px" }}>Lite</Form.Text>
        </Navbar.Brand>

        <Col xs={8} className="mx-auto">
          <Row className="justify-content-center align-items-center">
            <Col xs={5}>
              <FormControl
                type="search"
                placeholder="Type your search here"
                className="me-1"
                aria-label="Search"
                size="lg"
              />
            </Col>
            <Col xs="auto">
              <MagnifyingGlass size={35} />
            </Col>
          </Row>
        </Col>
        <Col>
          <Form.Check
            onChange={handleClick}
            type="switch"
            label={isDarkMode ? "Light Mode" : "Dark Mode"}
            checked={isDarkMode}
            id={styles.darkSwitch}
          ></Form.Check>
        </Col>
      </Container>
    </Navbar>
  );
};
