import { configureStore } from '@reduxjs/toolkit';

import { createApi } from '../services/api';
import history from '../utils/history';
import { fetchQuests, fetchUserStatus } from './action';
import { rootReducer } from './root-reducer';

const api = createApi();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api,
          history,
        },
      },
    }),
});

store.dispatch(fetchUserStatus());
store.dispatch(fetchQuests());

export default store;
