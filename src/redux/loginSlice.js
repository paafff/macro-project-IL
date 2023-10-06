import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: [],
  reducers: {
    addLogin: (state, actiion) => {
      state.push(actiion.payload);
    },
  },
});

export const { addLogin } = loginSlice.actions;
export default loginSlice.reducer;
