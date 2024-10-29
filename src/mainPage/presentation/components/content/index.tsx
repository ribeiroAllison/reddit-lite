import { useSelector } from "react-redux";
import { selectContent } from "@/core/data/slices/contentSlice";
import { ContentCard } from "./contentCard";
import { ContentType } from "@/core/types/ContenType";

export const Content = () => {
  const data = useSelector(selectContent);
  const contentCards: ContentType[] = Object.values(data);

  return (
    <>
      {contentCards.map((card) => (
        <ContentCard
          id={card.id}
          title={card.title}
          points={card.points}
          figure={card.figure}
          comments={card.comments}
          time={card.time}
          user={card.user}
          key={card.id}
          video={card.video}
        />
      ))}
    </>
  );
};
