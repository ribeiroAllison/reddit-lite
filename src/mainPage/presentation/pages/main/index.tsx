"use client";
import { NavBar } from "../../components/navBar";
import { Container, Row, Col } from "react-bootstrap";
import { Content } from "../../components/content";
import { SideBar } from "../../components/sideBar";
import { fetchPost } from "@/mainPage/infra";
import { useDispatch } from "react-redux";
import { addCard } from "@/core/data/slices/contentSlice";
import { useEffect } from "react";
import { ContentType } from "@/core/types/ContenType";

export const MainPage = () => {
  const dispatch = useDispatch();

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
    getInitialPosts();
  }, []);
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
