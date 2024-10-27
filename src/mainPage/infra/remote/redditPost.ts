import API from "@/core/api/axios";
import { RedditPost } from "@/mainPage/domain";

export const fetchPost = async (url: string) => {
  const apiResponse = await API.get(url);
  if (apiResponse) {
    const responseArray = apiResponse.data.data.children;
    const response = responseArray.map((res: any) => new RedditPost(res.data));
    return response;
  }
};
