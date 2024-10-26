import { createSlice } from "@reduxjs/toolkit";
import { SubRedditType } from "@/core/types/SubReddit";

type SubRedditState = {
  subReddits: Record<string, SubRedditType>;
};

const sideBarSlice = createSlice({
  name: "sideBarSlice",
  initialState: {
    subReddits: {
      "1000": {
        src: "/images/devjokes.png",
        name: "Dev Jokes",
        selected: false,
        id: "1000",
      },
      "2000": {
        src: "/images/devjokes.png",
        name: "Discordia",
        selected: true,
        id: "2000",
      },
    },
  } as SubRedditState,
  reducers: {
    toggleCard: (state, action) => {
      const { id } = action.payload;
      Object.keys(state.subReddits).map(
        (key) => (state.subReddits[key].selected = false)
      );
      state.subReddits[id].selected = true;
    },
  },
});

export const selectSubReddit = (state: { sideBarSlice: SubRedditState }) =>
  state.sideBarSlice.subReddits;

export const { toggleCard } = sideBarSlice.actions;
export default sideBarSlice.reducer;
