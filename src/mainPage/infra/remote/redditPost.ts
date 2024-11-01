import API from "@/core/api/axios";
import { RedditPost } from "@/mainPage/domain";
import { Comment } from "@/mainPage/domain";

export const fetchPost = async (url: string) => {
  const apiResponse = await API.get(url);
  if (apiResponse) {
    const responseArray = apiResponse.data.data.children;
    const response = responseArray.map((res: any) => new RedditPost(res.data));
    return response;
  }
};

export const fetchComments = async (url: string, postId: string) => {
  const apiResponse = await API.get(`${url}/comments/${postId}/.json`);

  if (apiResponse) {
    const data = apiResponse.data;
    const commentArray = data.map((item: any) => item.data.children);
    return commentArray[1].map((comment: any) => new Comment(comment.data));
  }
};
