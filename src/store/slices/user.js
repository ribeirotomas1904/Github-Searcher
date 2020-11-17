import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
  user: {},
  repos: [],
  isLoading: true,
  error: null,
};

export const getUser = createAsyncThunk(
  'user/getUser',
  async ({ username }, { rejectWithValue }) => {
    try {
      const [{ data: user }, { data: repos }] = await api.getUser({ username });
      return { user, repos };
    } catch (error) {
      if (!error.response) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue(error.response.data.message);
      }
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [getUser.pending]: (state) => {
      state.isLoading = true;
      state.user = {};
      state.repos = [];
      state.error = null;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.repos = payload.repos
      state.isLoading = false;
    },
    [getUser.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
