import { Row, Col, Image, Container } from "react-bootstrap";
import styles from "./styles.module.css";

type Props = {
  src: string;
  name: string;
  selected: boolean;
};

export const SubReddit = ({ src, name, selected }: Props) => {
  return (
    <Container>
      <Row
        className={`d-flex jusify-content-start align-items-center gap-2 my-2 mx-2 rounded ${
          selected ? styles.selected : styles.cardCtn
        }`}
      >
        {selected && (
          <Col className={styles.selectedBar} xs="1">
            '
          </Col>
        )}
        <Col xs="1">
          <Image src={src} width={22} height={22} roundedCircle />
        </Col>
        <Col className=" m-0">
          <p className="m-0 fs-5">{name}</p>
        </Col>
      </Row>
    </Container>
  );
};
