import { CommentType } from "./CommentType";

export type ContentType = {
  id: string;
  title: string;
  points: number;
  figure: string;
  user: string;
  time: string;
  video: string;
  comments: CommentType[];
};
