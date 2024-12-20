import { createSlice } from "@reduxjs/toolkit";
import { ContentType } from "@/core/types/ContenType";
import { CommentType } from "@/core/types/CommentType";

type ContentState = {
  content: Record<string, ContentType>;
  isLoading: boolean;
  nightMode: boolean;
};

const contentSlice = createSlice({
  name: "contentSlice",
  initialState: {
    content: {},
    isLoading: false,
    nightMode: false,
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

    updateComments: (state, action) => {
      const { id, comments } = action.payload;
      state.content[id].comments = [];
      comments.forEach((comment: CommentType) =>
        state.content[id].comments.push(comment)
      );
    },

    toggleLoading: (state) => {
      state.isLoading = !state.isLoading;
    },

    toggleNightMode: (state) => {
      state.nightMode = !state.nightMode;
    },

    setToNightMode: (state) => {
      state.nightMode = true;
    },
  },
});

export const selectContent = (state: { contentSlice: ContentState }) =>
  state.contentSlice.content;

export const selectLoading = (state: { contentSlice: ContentState }) => {
  return state.contentSlice.isLoading;
};

export const selectNightMode = (state: { contentSlice: ContentState }) => {
  return state.contentSlice.nightMode;
};

export const {
  addPoint,
  subtractPoint,
  addCard,
  resetState,
  updateComments,
  toggleLoading,
  toggleNightMode,
  setToNightMode,
} = contentSlice.actions;

export default contentSlice.reducer;
