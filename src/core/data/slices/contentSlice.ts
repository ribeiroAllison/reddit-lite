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
        points: "10.5k",
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
        ],
      },
    },
  } as ContentState,
  reducers: {},
});

export const selectContent = (state: any) => state.contentSlice.content;
export default contentSlice.reducer;
