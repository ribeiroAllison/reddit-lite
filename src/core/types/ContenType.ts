export type ContentType = {
  id: string;
  title: string;
  points: number;
  figure: string;
  user: string;
  time: string;
  video: string;
  comments: {
    user: string;
    comment: string;
    time: string;
    total: number;
  }[];
};
