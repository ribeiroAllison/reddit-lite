import { createSlice } from "@reduxjs/toolkit";
import { SubRedditType } from "@/core/types/SubReddit";

type SubRedditState = {
  subReddits: Record<string, SubRedditType>;
  currentSubReddit: string;
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
        url: "/r/devjokes/.json",
      },
      "2000": {
        src: "/images/ask.png",
        name: "Ask Reddit",
        selected: false,
        id: "2000",
        url: "/r/AskReddit/.json",
      },
      "3000": {
        src: "/images/switch.jpg",
        name: "Nintendo Switch",
        selected: false,
        id: "3000",
        url: "/r/NintendoSwitch/.json",
      },
      "4000": {
        src: "/images/relationship.png",
        name: "Relationship Advice",
        selected: false,
        id: "4000",
        url: "/r/relationship_advice/.json",
      },
      "5000": {
        src: "/images/shower.png",
        name: "Shower Thoughts",
        selected: false,
        id: "5000",
        url: "/r/Showerthoughts.json",
      },
      "6000": {
        src: "/images/piercing.png",
        name: "Piercing",
        selected: false,
        id: "6000",
        url: "/r/piercing.json",
      },
      "7000": {
        src: "/images/amazing.png",
        name: "Amazing",
        selected: false,
        id: "7000",
        url: "/r/BeAmazed.json",
      },
      "8000": {
        src: "/images/pets.png",
        name: "Cats",
        selected: false,
        id: "8000",
        url: "/r/cats/.json",
      },
      "9000": {
        src: "/images/awww.png",
        name: "Awww",
        selected: false,
        id: "9000",
        url: "/r/Awww/.json",
      },
      "10000": {
        src: "/images/unb.jpg",
        name: "Unbelievable Stuff",
        selected: false,
        id: "10000",
        url: "/r/UnbelievableStuff/.json",
      },
    },
    currentSubReddit: "",
  } as SubRedditState,
  reducers: {
    toggleCard: (state, action) => {
      const { id } = action.payload;
      Object.keys(state.subReddits).map(
        (key) => (state.subReddits[key].selected = false)
      );
      state.subReddits[id].selected = true;
      state.currentSubReddit = state.subReddits[id].url.slice(0, -6);
    },
  },
});

export const selectSubReddit = (state: { sideBarSlice: SubRedditState }) =>
  state.sideBarSlice.subReddits;

export const selectCurrentSubReddit = (state: {
  sideBarSlice: SubRedditState;
}) => state.sideBarSlice.currentSubReddit;

export const { toggleCard } = sideBarSlice.actions;
export default sideBarSlice.reducer;
