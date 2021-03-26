import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import invoicesReducer from '../slices/invoicesSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    invoices: invoicesReducer,
  },
});
