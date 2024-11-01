"use client";
import { Navbar, Image, Form, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./styles.module.css";
import { getPosts } from "@/core/utils/getPosts";
import { useDispatch } from "react-redux";
import { toggleNightMode } from "@/core/data/slices/contentSlice";
import { selectNightMode } from "@/core/data/slices/contentSlice";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const dispatch = useDispatch();
  const isNightMode = useSelector(selectNightMode);

  const toggleColorScheme = () => {
    dispatch(toggleNightMode());
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
          label={isNightMode ? "Dark Mode" : "Light Mode"}
          checked={isNightMode}
          id={styles.darkSwitch}
        ></Form.Check>
      </Col>
    </Navbar>
  );
};
