import { createSlice } from '@reduxjs/toolkit';
import { fetchGreeting } from './actions';

const initialState = {
  randomGreeting: '',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchGreeting.fulfilled,
      (state, action) => ({ ...state, randomGreeting: action.payload }),
    );
  },
});

export default greetingSlice.reducer;
