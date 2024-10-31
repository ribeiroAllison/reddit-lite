import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SubReddit } from "@/mainPage/presentation/components/sideBar/subReddit";
import { SubRedditType } from "@/core/types/SubReddit";
import { ContentType } from "@/core/types/ContenType";
import { fetchPost } from "@/mainPage/infra";
import {
  addCard,
  resetState,
  toggleLoading,
} from "@/core/data/slices/contentSlice";
import { selectSubReddit, toggleCard } from "@/core/data/slices/sideBarSlice";

export const SideBar = () => {
  const data = useSelector(selectSubReddit);
  const subReddits: SubRedditType[] = Object.values(data);
  const dispatch = useDispatch();

  const getSelectedPosts = async (url: string) => {
    const response = await fetchPost(url);
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

  const handleClick = async (id: string) => {
    dispatch(toggleLoading());
    dispatch(toggleCard({ id: id }));
    dispatch(resetState());
    const url = data[id].url;
    if (url) {
      await getSelectedPosts(url);
    }
    dispatch(toggleLoading());
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
