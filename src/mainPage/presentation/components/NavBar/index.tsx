"use client";
import {
  Navbar,
  Container,
  Image,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

export const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" className="shadow">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <Image
            src="/images/reddit-logo.png"
            alt="reddit logo"
            roundedCircle
            height={50}
            width={50}
          />
          <Form.Text>Lite</Form.Text>
        </Navbar.Brand>

        <FormControl
          type="search"
          placeholder="Type your search here"
          className="me-5"
          aria-label="Search"
        />
        <Button variant="outline-light">
          <i className="bi bi-search"></i>
        </Button>
      </Container>
    </Navbar>
  );
};
