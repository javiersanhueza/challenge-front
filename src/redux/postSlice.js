import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  list: [],
  loading: false,
  status: ''
};

const API_URL = 'http://localhost:8080/api/v1/posts';

export const fetchPost = createAsyncThunk(
  'posts/fetchPost',
  async () => {
    const response = await axios.get(API_URL);
    const data = await response.data;
    return data;
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async(id) => {
    const response = await axios.delete(`${API_URL}/${id}`)
    const data = await response.data;
    return data;
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async(body) => {
    const response = await axios.post(
      API_URL,
      body
    );
    const data = await response.data;
    return data;
  }
);

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    filterPostWithName: (state, action) => {
      state.list = state.list.filter(post => post.name.toLowerCase().includes(action.payload.toLowerCase()));
    }
  },
  extraReducers: (builder) => {

    // Fetch Post
    builder.addCase(fetchPost.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.data;
      state.status = action.payload.status;
    })
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.status = action.payload.status;
    })

    // Delete Post
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.list = state.list.filter(post => post.id !== action.payload.data.id);
      state.status = action.payload.status;
    })
    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.status = action.payload.status;
    })

    // Create Post
    builder.addCase(createPost.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.loading = false;
      state.list.push(action.payload.data);
      state.status = action.payload.status;
    })
    builder.addCase(createPost.rejected, (state, action) => {
      state.loading = false;
      state.status = action.payload.status;
    })
  }
})

export const {
  filterPostWithName
} = postSlice.actions;
export default postSlice.reducer;
