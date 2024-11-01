import { fetchPost } from "@/mainPage/infra";
import { ContentType } from "../types/ContenType";
import {
  addCard,
  resetState,
  toggleLoading,
} from "../data/slices/contentSlice";
import { Dispatch } from "react";
import { UnknownAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getPosts = async (
  dispatch: Dispatch<UnknownAction>,
  url: string
) => {
  try {
    dispatch(resetState());
    dispatch(toggleLoading());
    const response = await fetchPost(url);
    response.forEach((item: ContentType) => {
      const { id, title, points, figure, user, time, comments, video } = item;
      dispatch(
        addCard({
          id: id,
          title: title,
          points: points,
          figure: figure,
          user: user,
          time: time,
          comments: comments,
          video: video,
        })
      );
    });
  } catch (error) {
    console.error(error);
    toast.error("Could not load posts, please try again");
  } finally {
    dispatch(toggleLoading());
  }
};
