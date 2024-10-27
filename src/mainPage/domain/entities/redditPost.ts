import { transformDate } from "@/core/utils/transformData";

export class RedditPost {
  public readonly id: string;
  public readonly title: string;
  public readonly points: number;
  public readonly user: string;
  public readonly time: string;
  public readonly figure: string;
  public readonly comments: {
    user: string;
    comment: string;
    time: string;
    total: number;
  }[];

  constructor(data: RedditPostData) {
    this.id = data.id;
    this.title = data.title;
    this.points = data.score;
    this.user = data.name;
    this.time = transformDate(data.created_utc);
    this.figure = data.url;
    this.comments = [
      {
        user: "Maria Chiquinha",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        time: "2 seconds ago",
        total: 351,
      },
    ];
  }
}

export type RedditPostData = {
  id: string;
  title: string;
  score: number;
  name: string;
  created_utc: number;
  url: string;
};
