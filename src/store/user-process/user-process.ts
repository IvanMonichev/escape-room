import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { UserProcess } from '../../types/types';
import { AuthorizationStatus, StoreSlice } from '../../utils/constant';
import history from '../../utils/history';
import { fetchUserStatus, loginUser, logoutUser } from '../action';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  token: '',
  bookingUrl: '',
};

export const userProcess = createSlice({
  name: StoreSlice.UserProcess,
  initialState,
  reducers: {
    setBookingUrl: (state, action: PayloadAction<string>) => {
      state.bookingUrl = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        if (state.bookingUrl) {
          history.push(state.bookingUrl);
        }
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
        state.bookingUrl = '';
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});

export const { setBookingUrl } = userProcess.actions;
