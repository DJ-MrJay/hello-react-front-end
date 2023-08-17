import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const store = configureStore({
  reducer: {
    greeting: reducer,
  },
});

export default store;
