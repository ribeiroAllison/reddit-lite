"use client";
import { Navbar, Image, Form, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./styles.module.css";
import { getPosts } from "@/core/utils/getPosts";
import { useDispatch } from "react-redux";

export const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentDarkMode = window.matchMedia(
      "prefers-color-scheme: dark"
    ).matches;
    setIsDarkMode(currentDarkMode);
  }, []);

  const toggleColorScheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark-mode");
  };

  return (
    <Navbar
      style={{
        backgroundColor: "var(--navBar)",
      }}
      className="d-flex justify-content-between mx-0 w-100"
    >
      <Navbar.Brand
        className="d-flex align-items-center mx-5 hover"
        onClick={() => getPosts(dispatch, "/.json")}
      >
        <Image
          src="/images/reddit-logo.png"
          alt="reddit logo"
          roundedCircle
          height={55}
          width={55}
        />
        <Form.Text style={{ fontSize: "23px" }}>Lite</Form.Text>
      </Navbar.Brand>

      <Col>
        <Form.Check
          onChange={toggleColorScheme}
          type="switch"
          label={isDarkMode ? "Dark Mode" : "Light Mode"}
          checked={isDarkMode}
          id={styles.darkSwitch}
        ></Form.Check>
      </Col>
    </Navbar>
  );
};
