import { Container, Row, Col } from "react-bootstrap";
import { SubReddit } from "@/mainPage/presentation/components/subReddit";

export const SideBar = () => {
  return (
    <Container className="ctn">
      <Col className="d-flex flex-column">
        <Row className="mb-3 mt-3">
          <h2 className="fs-3">Subreddits</h2>
        </Row>
        <Row>
          <SubReddit
            src="/images/devjokes.png"
            name="Dev Jokes"
            selected={true}
          />
          <SubReddit
            src="/images/devjokes.png"
            name="Discord"
            selected={false}
          />
        </Row>
      </Col>
    </Container>
  );
};
