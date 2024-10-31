import { Container, Row, Col, Image } from "react-bootstrap";
import {
  ArrowFatLineDown,
  ArrowFatLineUp,
  ChatCircle,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.css";
import { ContentType } from "@/core/types/ContenType";
import {
  addPoint,
  subtractPoint,
  updateComments,
} from "@/core/data/slices/contentSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { CommentCard } from "../commentCard";
import { fetchComments } from "@/mainPage/infra";
import { selectCurrentSubReddit } from "@/core/data/slices/sideBarSlice";
import { PropagateLoader } from "react-spinners";

export const ContentCard = ({
  id,
  title,
  points,
  figure,
  comments,
  time,
  user,
  video,
}: ContentType) => {
  const [arrowStyle, setArrowStyle] = useState<"normal" | "up" | "down">(
    "normal"
  );
  const [toggleMessage, setToggleMessage] = useState<boolean>(false);
  const [isMessageLoading, setIsMessageLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const currentSub = useSelector(selectCurrentSubReddit);

  const transformPoints = (point: number) => {
    if (point > 1000) {
      const reducedPoints = (point / 1000).toString();
      const pointsArray: string[] = reducedPoints.split(".");
      if (pointsArray) {
        const finalNumber: string =
          pointsArray[0] + "." + pointsArray[1].slice(0, 1) + "K";
        return finalNumber;
      }
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

  const handleMsgClick = async () => {
    setIsMessageLoading(true);
    setToggleMessage(!toggleMessage);
    const comments = await fetchComments(currentSub, id);
    dispatch(updateComments({ id: id, comments: comments }));
    setIsMessageLoading(false);
  };

  const renderMedia = (figure: string, video: string) => {
    const isFigureViable =
      figure.includes(".png") ||
      figure.includes(".jpg") ||
      figure.includes(".jpeg");

    const isVideoViable = video !== "";

    if (isFigureViable) {
      return <Image src={figure} className="rounded" alt="Image" />;
    }

    if (isVideoViable) {
      return (
        <video controls style={{ maxHeight: "90vh" }}>
          <source src={video} type="video/mp4"></source>
        </video>
      );
    }

    return;
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
          {renderMedia(figure, video)}

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
              <p className={styles.text}>
                {comments.length > 0 ? comments.length : ""}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      {toggleMessage && isMessageLoading && (
        <Container className="d-flex h-100 justify-content-center">
          <PropagateLoader color="var(--foreground)" />
        </Container>
      )}

      {toggleMessage &&
        !isMessageLoading &&
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
