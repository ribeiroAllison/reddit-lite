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

    addCard: (state, action) => {
      action.payload.map((sub: SubRedditType) => {
        const { id, src, name, selected } = sub;
        state.subReddits[id] = {
          src: src,
          name: name,
          selected: selected,
          id: id,
        };
      });
    },
  },
});

export const selectSubReddit = (state: any) => state.sideBarSlice.subReddits;

export const { toggleCard, addCard } = sideBarSlice.actions;
export default sideBarSlice.reducer;
