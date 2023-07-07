import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: 1, name: 'Primer post', description: 'esta es la descripción' },
    { id: 2, name: 'Segundo post', description: 'esta es la descripción' }
  ]
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    allPosts: (state, action) => {
      const { posts } = action.payload;
      state.posts = posts;
    },
    deletePostState: (state, action) => {
      state.list = state.list.filter(post => post.id !== action.payload)
    },
    addPostState: (state, action) => {
      state.list = state.list.push(action.payload);
    },
    filterPostWithName: (state, action) => {
      state.list = state.list.filter(post => post.name.toLowerCase().includes(action.payload.toLowerCase()));
    }
  }
})

export const {
  allPosts,
  deletePostState,
  filterPostWithName
} = postSlice.actions;
export default postSlice.reducer;
