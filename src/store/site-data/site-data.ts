import { SiteData } from '../../types/state';
import { createSlice } from '@reduxjs/toolkit';
import { StoreSlice } from '../../utils/constant';
import { fetchQuest, fetchQuests } from '../action';


const initialState: SiteData = {
  quests: [],
  isQuestsLoading: false,
  quest: null,
  isQuestLoading: false,
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
      })
      .addCase(fetchQuest.pending, (state) => {
        state.isQuestLoading = true;
      })
      .addCase(fetchQuest.fulfilled, (state, action) => {
        state.quest = action.payload;
        state.isQuestLoading = false;
      })
      .addCase(fetchQuest.rejected, (state) => {
        state.isQuestLoading = false;
      });
  }
});
