import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { SiteProcess } from '../../types/state';
import { LevelName, TypeName } from '../../types/types';
import { StoreSlice, types } from '../../utils/constant';

const initialState: SiteProcess = {
  type: types[0],
  level: 'Any',
};

export const siteProcess = createSlice({
  name: StoreSlice.SiteProcess,
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<TypeName>) => {
      state.type = action.payload;
    },
    setLevel: (state, action: PayloadAction<LevelName>) => {
      state.level = action.payload;
    },
  },
});

export const { setType, setLevel } = siteProcess.actions;
