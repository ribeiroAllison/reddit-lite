"use client";
import { NavBar } from "../../components/navBar";
import { Container, Row, Col } from "react-bootstrap";
import { Content } from "../../components/content";
import { SideBar } from "../../components/sideBar";
import { fetchPost } from "@/mainPage/infra";
import { useDispatch, useSelector } from "react-redux";
import { addCard, toggleLoading } from "@/core/data/slices/contentSlice";
import { useEffect } from "react";
import { ContentType } from "@/core/types/ContenType";
import { Loader } from "@/core/components/loader";
import { selectLoading } from "@/core/data/slices/contentSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getPosts } from "@/core/utils/getPosts";

export const MainPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(toggleLoading());
      await getPosts(dispatch, "/.json");
      dispatch(toggleLoading());
    };

    fetchData();
  }, []);
  return (
    <main style={{ backgroundColor: "var(--background)" }}>
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
