import { configureStore } from '@reduxjs/toolkit';
import reportSliceReducer from './reportSlice';
import loginSliceReducer from './loginSlice';

export default configureStore({
  reducer: {
    report: reportSliceReducer,
    login: loginSliceReducer,
  },
});
