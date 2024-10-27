import { Container, Row, Col, Image } from "react-bootstrap";
import {
  ArrowFatLineDown,
  ArrowFatLineUp,
  ChatCircle,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.css";
import { ContentType } from "@/core/types/ContenType";
import { addPoint, subtractPoint } from "@/core/data/slices/contentSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { CommentCard } from "../commentCard";

export const ContentCard = ({
  id,
  title,
  points,
  figure,
  comments,
  time,
  user,
}: ContentType) => {
  const [arrowStyle, setArrowStyle] = useState<"normal" | "up" | "down">(
    "normal"
  );
  const [toggleMessage, setToggleMessage] = useState<boolean>(false);
  const dispatch = useDispatch();

  const transformPoints = (point: number) => {
    if (point > 1000) {
      const reducedPoints = (point / 1000).toString();
      const pointsArray: string[] = reducedPoints.split(".");
      const finalNumber: string =
        pointsArray[0] + "." + pointsArray[1].slice(0, 1) + "K";
      return finalNumber;
    } else {
      return point.toString();
    }
  };

  const handleArrowClick = (type: "up" | "down") => {
    if (type === "up") {
      dispatch(addPoint({ id: id }));
    } else if (type === "down") {
      dispatch(subtractPoint({ id: id }));
    }
    setArrowStyle(type);
  };

  const handleMsgClick = () => {
    setToggleMessage(!toggleMessage);
  };

  return (
    <Container className="ctn mb-3 pb-2">
      <Row>
        <Col className="mt-4">
          <div
            className="d-flex flex-column justify-content-start align-items-center h-100"
            id={id}
          >
            <ArrowFatLineUp
              size={25}
              className={styles.onHover}
              onClick={() => handleArrowClick("up")}
              color={arrowStyle === "up" ? "var(--blue100)" : "black"}
            />
            <p className="m-0">{transformPoints(points)}</p>
            <ArrowFatLineDown
              size={25}
              className={styles.onHover}
              onClick={() => handleArrowClick("down")}
              color={arrowStyle === "down" ? "var(--red100)" : "black"}
            />
          </div>
        </Col>
        <Col xs="11" className="d-flex flex-column mt-4 mb-0">
          <h2 className="fs-3">{title}</h2>
          <Image src={figure} className="rounded" alt="Image" />
          <Image src="/images/line.png" className="my-2" />
          <Row className="d-flex justify-content-space-between">
            <Col className="d-flex align-items-center justify-content-start">
              <p
                className={styles.text}
                style={{ color: "var(--blue100)", fontWeight: "bold" }}
              >
                {user}
              </p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <p className={styles.text} style={{ color: "var(--hover)" }}>
                {time}
              </p>
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
              <ChatCircle
                className={`${styles.text} ${styles.onHover}`}
                onClick={handleMsgClick}
              />
              <p className={styles.text}>{comments.length}</p>
            </Col>
          </Row>
        </Col>
      </Row>
      {toggleMessage &&
        comments.map((comment) => (
          <CommentCard
            userName={comment.user}
            time={comment.time}
            comment={comment.comment}
            key={comment.user}
          />
        ))}
    </Container>
  );
};
