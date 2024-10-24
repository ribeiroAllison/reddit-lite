import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SubReddit } from "@/mainPage/presentation/components/sideBar/subReddit";
import { SubRedditType } from "@/core/types/SubReddit";
import { selectSubReddit, toggleCard } from "@/core/data/slices/sideBarSlice";

export const SideBar = () => {
  const data = useSelector(selectSubReddit);
  const subReddits: SubRedditType[] = Object.values(data);
  const dispatch = useDispatch();

  const handleClick = (id: string) => {
    dispatch(toggleCard({ id: id }));
  };

  return (
    <Container className="ctn m-0">
      <Col className="d-flex flex-column">
        <Row className="mb-3 mt-3">
          <h2 className="fs-3">Subreddits</h2>
        </Row>
        <Row>
          {subReddits.map((sub) => (
            <SubReddit
              src={sub.src}
              name={sub.name}
              selected={sub.selected}
              id={sub.id}
              onClick={() => handleClick(sub.id)}
            />
          ))}
        </Row>
      </Col>
    </Container>
  );
};
