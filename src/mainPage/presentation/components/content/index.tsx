import { Container, Row, Col, Image } from "react-bootstrap";
import {
  ArrowFatLineDown,
  ArrowFatLineUp,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.css";

export const Content = () => {
  return (
    <Container style={{ backgroundColor: "var(--box)", borderRadius: "10px" }}>
      <Row>
        <Col className="mt-4">
          <div className="d-flex flex-column justify-content-start align-items-center h-100">
            <ArrowFatLineUp size={25} className={styles.arrow} />
            <p className="m-0">10</p>
            <ArrowFatLineDown size={25} className={styles.arrow} />
          </div>
        </Col>
        <Col xs="11" className="d-flex flex-column mt-4 mb-0">
          <h2 className="fs-3">Lula gosta de baby shark</h2>
          <Image
            src="https://f.i.uol.com.br/fotografia/2024/10/22/17296163476717d9dbd367c_1729616347_3x2_md.jpg"
            className="rounded"
            alt="Image"
          />
          <p>
            ______________________________________________________________________________________________________
          </p>
        </Col>
      </Row>
    </Container>
  );
};
