import { createSlice } from '@reduxjs/toolkit';

const reportSlice = createSlice({
  name: 'report',
  initialState: [],
  reducers: {
    addReport: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addReport } = reportSlice.actions;
export default reportSlice.reducer;