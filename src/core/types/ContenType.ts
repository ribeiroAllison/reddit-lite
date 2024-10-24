export type ContentType = {
  id: string;
  title: string;
  points: string;
  figure: string;
  user: string;
  time: string;
  comments: {
    user: string;
    comment: string;
    time: string;
    total: number;
  }[];
};
