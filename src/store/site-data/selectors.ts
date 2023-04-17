import { createSelector } from '@reduxjs/toolkit';

import { State, SubmitStatus } from '../../types/state';
import { Offer, QuestCard, QuestView } from '../../types/types';
import { StoreSlice } from '../../utils/constant';
import { getLevel, getType } from '../site-process/selectors';

export const getIsQuestsLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isQuestsLoading;
export const getQuests = ({ [StoreSlice.SiteData]: SITE_DATA }: State): QuestCard[] => SITE_DATA.quests;
export const getIsQuestLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isQuestLoading;
export const getQuest = ({ [StoreSlice.SiteData]: SITE_DATA }: State): QuestView | null => SITE_DATA.quest;
export const getIsOffersLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isOffersLoading;
export const getOffers = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Offer[] | null => SITE_DATA.offers;
export const getBookingStatus = ({ [ StoreSlice.SiteData]: SITE_DATA }: State): SubmitStatus => SITE_DATA.bookingStatus;

export const selectQuests = createSelector([getQuests, getType, getLevel], (quests, type, level) =>
  quests.filter((quest) => {
    const typeParams = quest.type === type || type === 'all-quests';
    const levelParams = quest.level === level.toLowerCase() || level === 'Any';
    return typeParams && levelParams;
  })
);
