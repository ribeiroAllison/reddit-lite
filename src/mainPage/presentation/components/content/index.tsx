import { Container, Row, Col } from "react-bootstrap";
import {
  ArrowFatLineDown,
  ArrowFatLineUp,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.css";

export const Content = () => {
  return (
    <Container style={{ backgroundColor: "var(--box)", borderRadius: "10px" }}>
      <Row>
        <Col className="mt-2">
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <ArrowFatLineUp size={25} className={styles.arrow} />
            <p className="m-0">10</p>
            <ArrowFatLineDown size={25} className={styles.arrow} />
          </div>
        </Col>
        <Col xs="11">
          <h1>Content</h1>
        </Col>
      </Row>
    </Container>
  );
};
