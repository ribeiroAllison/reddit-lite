import { createSlice } from "@reduxjs/toolkit";
import { ContentType } from "@/core/types/ContenType";

type ContentState = {
  content: Record<string, ContentType>;
};

const contentSlice = createSlice({
  name: "contentSlice",
  initialState: {
    content: {
      "1100": {
        id: "1100",
        title: "Lula gosta de baby shark",
        points: 100,
        user: "Poliana Moça",
        time: "12 minutes ago",
        figure:
          "https://f.i.uol.com.br/fotografia/2024/10/22/17296163476717d9dbd367c_1729616347_3x2_md.jpg",
        comments: [
          {
            user: "Maria Chiquinha",
            comment:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            time: "2 seconds ago",
            total: 351,
          },
          {
            user: "Maria Chiquinha",
            comment: "Tododododo",
            time: "2 seconds ago",
            total: 351,
          },
        ],
      },
      "2200": {
        id: "1100",
        title: "Lula gosta de baby shark",
        points: 10500,
        user: "Poliana Moça",
        time: "12 minutes ago",
        figure:
          "https://f.i.uol.com.br/fotografia/2024/10/22/17296163476717d9dbd367c_1729616347_3x2_md.jpg",
        comments: [
          {
            user: "Maria Chiquinha",
            comment: "Tododododo",
            time: "2 seconds ago",
            total: 351,
          },
          {
            user: "Maria Chiquinha",
            comment: "Tododododo",
            time: "2 seconds ago",
            total: 351,
          },
          {
            user: "Maria Chiquinha",
            comment: "Tododododo",
            time: "2 seconds ago",
            total: 351,
          },
        ],
      },
    },
  } as ContentState,
  reducers: {
    addCard: (state, action) => {
      const { id, title, points, figure, user, time, comments } =
        action.payload;
      state.content[id] = {
        id: id,
        title: title,
        points: points,
        figure: figure,
        user: user,
        time: time,
        comments: comments,
      };
    },

    addPoint: (state, action) => {
      console.log(action.payload);
      const { id } = action.payload;
      state.content[id].points += 1;
    },

    subtractPoint: (state, action) => {
      const { id } = action.payload;
      state.content[id].points -= 1;
    },
  },
});

export const selectContent = (state: { contentSlice: ContentState }) =>
  state.contentSlice.content;
export const { addPoint, subtractPoint } = contentSlice.actions;
export default contentSlice.reducer;
