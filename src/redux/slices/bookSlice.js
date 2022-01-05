import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk("book/fetchBooks", async () => {
  const response = await fetch(
    "https://salty-river-32904.herokuapp.com/books"
  ).then((res) => res.json());
  console.log(response);
  return response;
});

const bookSlice = createSlice({
  name: "book",
  initialState: {
    discover: [],
    readingList: [],
    finishedList: [],
    status: "idle",
  },
  reducers: {
    addToReadingList: (state, { payload }) => {
      state.readingList.push(payload);
    },
    removeFormReadingList: (state, { payload }) => {
      state.readingList = state.readingList.filter(
        (book) => book.id !== payload.id
      );
    },
    markedAsFinished: (state, { payload }) => {
      state.finishedList.push(payload);
      state.readingList = state.readingList.filter(
        (book) => book.id !== payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.discover = action.payload;
    });
  },
});

export const { addToReadingList, removeFormReadingList, markedAsFinished } =
  bookSlice.actions;

export default bookSlice.reducer;
