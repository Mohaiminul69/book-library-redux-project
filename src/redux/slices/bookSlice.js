import { createSlice } from '@reduxjs/toolkit'
import booksData from '../../books.json';
console.log(booksData)

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        discover: booksData,
        readingList: [],
        finishedList: [],
        status: 'idle'
    },
    reducers: {
        addToReadingList: (state, { payload }) => {
            state.readingList.push(payload)
        },
        removeFormReadingList: (state, { payload }) => {
            state.readingList = state.readingList.filter(book => book.id !== payload.id);
        },
        markedAsFinished: (state, { payload }) => {
            state.finishedList.push(payload);
            state.readingList = state.readingList.filter(book => book.id !== payload.id);
        },
    },
});

export const { addToReadingList, removeFormReadingList, markedAsFinished } = bookSlice.actions;

export default bookSlice.reducer;