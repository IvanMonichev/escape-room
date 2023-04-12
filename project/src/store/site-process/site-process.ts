import { SiteProcess } from '../../types/state';
import { StoreSlice, types } from '../../constant';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeName } from '../../types/types';


const initialState: SiteProcess = {
  type: types[0]
};

export const siteProcess = createSlice({
  name: StoreSlice.SiteProcess,
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<TypeName>) => {
      state.type = action.payload;
    }
  }
});

export const { setType } = siteProcess.actions;
