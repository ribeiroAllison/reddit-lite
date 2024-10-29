import { createSlice } from "@reduxjs/toolkit";
import { ContentType } from "@/core/types/ContenType";

type ContentState = {
  content: Record<string, ContentType>;
};

const contentSlice = createSlice({
  name: "contentSlice",
  initialState: {
    content: {},
  } as ContentState,
  reducers: {
    addCard: (state, action) => {
      const { id, title, points, figure, user, time, comments, video } =
        action.payload;
      state.content[id] = {
        id: id,
        title: title,
        points: points,
        figure: figure,
        user: user,
        time: time,
        comments: comments,
        video: video,
      };
    },

    addPoint: (state, action) => {
      const { id } = action.payload;
      state.content[id].points += 1;
    },

    subtractPoint: (state, action) => {
      const { id } = action.payload;
      state.content[id].points -= 1;
    },

    resetState: (state) => {
      state.content = {};
    },
  },
});

export const selectContent = (state: { contentSlice: ContentState }) =>
  state.contentSlice.content;
export const { addPoint, subtractPoint, addCard, resetState } =
  contentSlice.actions;
export default contentSlice.reducer;
