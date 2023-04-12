import { SiteData } from '../../types/state';
import { createSlice } from '@reduxjs/toolkit';
import { StoreSlice } from '../../constant';
import { fetchQuests } from '../action';


const initialState: SiteData = {
  quests: [],
  isQuestsLoading: false,
};

export const siteData = createSlice({
  name: StoreSlice.SiteData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuests.pending, (state) => {
        state.isQuestsLoading = true;
      })
      .addCase(fetchQuests.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.isQuestsLoading = false;
      })
      .addCase(fetchQuests.rejected, (state) => {
        state.isQuestsLoading = false;
      });
  }
});
