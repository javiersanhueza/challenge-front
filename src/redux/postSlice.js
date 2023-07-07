import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: []
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    allPosts: (state, action) => {
      const { posts } = action.payload;
      state.posts = posts;
    }
  }
})

export const { allPosts } = postSlice.actions;
export default postSlice.reducer;
