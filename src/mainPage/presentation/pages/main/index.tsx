"use client";
import { NavBar } from "@/mainPage/presentation/components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import { Content } from "../../components/content";
import { SideBar } from "../../components/sideBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Loader } from "@/core/components/loader";
import {
  selectLoading,
  selectNightMode,
  setToNightMode,
} from "@/core/data/slices/contentSlice";
import { ToastContainer } from "react-toastify";
import { getPosts } from "@/core/utils/getPosts";
import "react-toastify/dist/ReactToastify.css";

export const MainPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isNightMode = useSelector(selectNightMode);

  useEffect(() => {
    const now = new Date();
    if (now.getHours() > 17) {
      dispatch(setToNightMode());
    }
    const fetchData = async () => {
      await getPosts(dispatch, "/.json");
    };
    fetchData();
  }, []);

  return (
    <main
      className={isNightMode ? "night-mode" : "light-mode"}
      style={{ backgroundColor: "var(--background)" }}
    >
      <NavBar />
      <Container fluid className="my-3">
        <Row className="justify-content-center">
          <Col xs={9}>{isLoading ? <Loader /> : <Content />}</Col>
          <Col>
            <SideBar />
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </main>
  );
};
