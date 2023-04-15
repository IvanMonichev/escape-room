import { createSlice } from '@reduxjs/toolkit';
import { UserProcess } from '../../types/types';
import { AuthorizationStatus, StoreSlice } from '../../utils/constant';
import { loginUser } from '../action';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userProcess = createSlice({
  name: StoreSlice.UserProcess,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
    });
  },
});
