import { fetchPost } from "@/mainPage/infra";
import { ContentType } from "../types/ContenType";
import {
  addCard,
  resetState,
  toggleLoading,
} from "../data/slices/contentSlice";
import { Dispatch } from "react";
import { UnknownAction } from "@reduxjs/toolkit";

export const getPosts = async (
  dispatch: Dispatch<UnknownAction>,
  url: string
) => {
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
  dispatch(toggleLoading());
};
