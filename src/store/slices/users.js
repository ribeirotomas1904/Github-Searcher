import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async ({ query }, { rejectWithValue }) => {
    try {
      const { data } = await api.getUsers({ query });
      
      if (data.total_count === 0) {
        throw new Error(`No results found for: "${query}"`);
      } else {
        return data.items;
      }
    } catch (error) {
      if (!error.response) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue(error.response.data.message);
      }
    }
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true;
      state.users = [];
      state.error = null;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    [getUsers.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default usersSlice.reducer;
