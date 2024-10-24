import { Container, Row, Col, Image } from "react-bootstrap";
import {
  ArrowFatLineDown,
  ArrowFatLineUp,
  ChatCircle,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.css";
import { ContentType } from "@/core/types/ContenType";

export const ContentCard = ({
  title,
  points,
  figure,
  comments,
  time,
  user,
}: ContentType) => {
  return (
    <Container className="ctn">
      <Row>
        <Col className="mt-4">
          <div className="d-flex flex-column justify-content-start align-items-center h-100">
            <ArrowFatLineUp size={25} className={styles.onHover} />
            <p className="m-0">{points}</p>
            <ArrowFatLineDown size={25} className={styles.onHover} />
          </div>
        </Col>
        <Col xs="11" className="d-flex flex-column mt-4 mb-0">
          <h2 className="fs-3">{title}</h2>
          <Image src={figure} className="rounded" alt="Image" />
          <p>
            ______________________________________________________________________________________________________
          </p>
          <Row className="d-flex justify-content-space-between">
            <Col className="d-flex align-items-center justify-content-start">
              <p className={styles.text}>{user}</p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <p className={styles.text}>{time}</p>
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
              <ChatCircle className={`${styles.text} ${styles.onHover}`} />
              <p className={styles.text}>{comments.length}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
