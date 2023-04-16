import { createSlice } from '@reduxjs/toolkit';

import { SiteData, SubmitStatus } from '../../types/state';
import { StoreSlice } from '../../utils/constant';
import { fetchOffers, fetchQuest, fetchQuests, postBooking } from '../action';

const initialState: SiteData = {
  quests: [],
  isQuestsLoading: false,
  isQuestLoading: false,
  quest: null,
  isOffersLoading: false,
  offers: null,
  bookingStatus: SubmitStatus.Still,
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
      })
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isOffersLoading = false;
      })
      .addCase(postBooking.pending, (state) => {
        state.bookingStatus = SubmitStatus.Pending;
      })
      .addCase(postBooking.fulfilled, (state) => {
        state.bookingStatus = SubmitStatus.Fullfilled;
      })
      .addCase(postBooking.rejected, (state) => {
        state.bookingStatus = SubmitStatus.Rejected;
      });
  },
});
