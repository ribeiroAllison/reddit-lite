import { transformDate } from "@/core/utils/transformData";

export class Comment {
  public readonly user: string;
  public readonly comment: string;
  public readonly time: string;

  constructor(data: CommentData) {
    this.user = data.author;
    this.comment = data.body;
    this.time = transformDate(data.created_utc);
  }
}

export type CommentData = {
  author: string;
  body: string;
  created_utc: number;
};
