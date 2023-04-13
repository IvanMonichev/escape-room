import { SiteProcess } from '../../types/state';
import { StoreSlice, types } from '../../constant';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LevelName, TypeName } from '../../types/types';


const initialState: SiteProcess = {
  type: types[0],
  level: "Any",
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
    }
  }
});

export const { setType, setLevel } = siteProcess.actions;
