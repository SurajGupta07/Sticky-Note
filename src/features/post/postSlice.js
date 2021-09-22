import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createPost = createAsyncThunk(
    "post/createPost",
    async ({ content, selectImage }) => {
        return {content, selectImage};
    }
);

export const postSlice = createSlice({
    name: "post",
    initialState: {
        postList: [],
    },
    postLoading: true,

    reducers: {},

    extraReducers: {
        [createPost.pending]: (state, action) => {
            state.postLoading = true;
        },

        [createPost.fulfilled]: (state, action) => {
            state.postLoading = false;
            console.log(action.payload)
            state.postList = [...state.postList, action.payload];
        },
    },
});

export default postSlice.reducer;
