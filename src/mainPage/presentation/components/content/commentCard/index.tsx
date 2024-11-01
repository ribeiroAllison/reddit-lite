import { Container, Row, Col } from "react-bootstrap";

type Props = {
  userName: string;
  time: string;
  comment: string;
};

export const CommentCard = ({ userName, time, comment }: Props) => {
  return (
    <Container
      className="ctn mb-3"
      style={{ backgroundColor: "var(--commentBox)" }}
    >
      <Row className="ms-5">
        <Row className="d-flexjustify-content-between">
          <Col>
            <p className="fw-bold" style={{ color: "var(--blue100)" }}>
              {userName}
            </p>
          </Col>
          <Col>
            <p style={{ color: "var(--hover)", textAlign: "end" }}>{time}</p>
          </Col>
        </Row>
        <Row className="pb-2">{comment}</Row>
      </Row>
    </Container>
  );
};
