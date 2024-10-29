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
  const apiResponse = await API.get(`${url}/${postId}/.json`);

  if (apiResponse) {
    const responseArray = apiResponse.data;
    const response = responseArray.map((item: any) => {
      if (item.data.children.data.body) new Comment(item.data.children.data);
    });
    return response;
  }
};
