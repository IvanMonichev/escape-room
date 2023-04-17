import { createSlice } from '@reduxjs/toolkit';

import { SiteData, SubmitStatus } from '../../types/state';
import { StoreSlice } from '../../utils/constant';
import { fetchOffers, fetchQuest, fetchQuests, fetchReservation, postBooking, removeReservation } from '../action';

const initialState: SiteData = {
  quests: [],
  isQuestsLoading: false,
  isQuestLoading: false,
  quest: null,
  isOffersLoading: false,
  offers: null,
  bookingStatus: SubmitStatus.Still,
  removingStatus: SubmitStatus.Still,
  isReservationLoading: false,
  reservation: [],
};

export const siteData = createSlice({
  name: StoreSlice.SiteData,
  initialState,
  reducers: {
    setSubmitStatus: (state) => {
      state.bookingStatus = SubmitStatus.Still;
    },
  },
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
      })
      .addCase(fetchReservation.pending, (state) => {
        state.isReservationLoading = true;
      })
      .addCase(fetchReservation.fulfilled, (state, action) => {
        state.reservation = action.payload;
        state.isReservationLoading = false;
      })
      .addCase(fetchReservation.rejected, (state) => {
        state.isReservationLoading = false;
      })
      .addCase(removeReservation.pending, (state) => {
        state.bookingStatus = SubmitStatus.Pending;
      })
      .addCase(removeReservation.fulfilled, (state, action) => {
        state.bookingStatus = SubmitStatus.Fullfilled;
        state.reservation = state.reservation.filter((item) => item.id !== action.payload);
      })
      .addCase(removeReservation.rejected, (state) => {
        state.bookingStatus = SubmitStatus.Rejected;
      });
  },
});

export const { setSubmitStatus } = siteData.actions;
