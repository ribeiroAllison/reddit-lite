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

export const MainPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  const getInitialPosts = async () => {
    const response = await fetchPost("/.json");
    response.forEach((item: ContentType) => {
      const { id, title, points, figure, user, time, comments, video } = item;
      dispatch(
        addCard({
          id: id,
          title: title,
          points: points,
          figure: figure,
          user: user,
          time: time,
          comments: comments,
          video: video,
        })
      );
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch(toggleLoading());
      await getInitialPosts();
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
    </main>
  );
};
