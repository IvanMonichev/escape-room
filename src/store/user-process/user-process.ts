import { createSlice } from '@reduxjs/toolkit';

import { UserProcess } from '../../types/types';
import { AuthorizationStatus, StoreSlice } from '../../utils/constant';
import { fetchUserStatus, loginUser, logoutUser } from '../action';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  token: '',
};

export const userProcess = createSlice({
  name: StoreSlice.UserProcess,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUser.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(fetchUserStatus.fulfilled, (state, action) => {
        state.token = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(fetchUserStatus.rejected, (state) => {
        state.token = '';
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = '';
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});
