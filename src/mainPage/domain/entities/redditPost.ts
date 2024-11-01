import { transformDate } from "@/core/utils/transformData";

export class RedditPost {
  public readonly id: string;
  public readonly title: string;
  public readonly points: number;
  public readonly user: string;
  public readonly time: string;
  public readonly figure: string;
  public readonly video: string;
  public readonly comments: {
    user: string;
    comment: string;
    time: string;
  }[];

  constructor(data: RedditPostData) {
    this.id = data.id;
    this.title = data.title;
    this.points = data.score;
    this.user = data.author;
    this.time = transformDate(data.created_utc);
    this.figure = data.url;
    this.video = data.secure_media?.reddit_video?.fallback_url || "";
    this.comments = [];
  }
}

export type RedditPostData = {
  id: string;
  title: string;
  score: number;
  author: string;
  created_utc: number;
  url: string;
  secure_media: {
    reddit_video: {
      fallback_url: string;
    };
  };
};
