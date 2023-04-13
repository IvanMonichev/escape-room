import { StoreSlice } from '../../constant';
import { State } from '../../types/state';
import { Quest } from '../../types/types';
import { createSelector } from '@reduxjs/toolkit';
import { getLevel, getType } from '../site-process/selectors';

export const getIsQuestsLoading = ( { [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isQuestsLoading;
export const getQuests = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Quest[] => SITE_DATA.quests;


export const selectQuests = createSelector(
  [getQuests, getType, getLevel],
  (quests, type, level) => quests.filter((quest) => {
    const typeParams = quest.type === type || type === 'all-quests';
    const levelParams = quest.level === level.toLowerCase() || level === 'Any';
    return typeParams && levelParams;
  })
);
