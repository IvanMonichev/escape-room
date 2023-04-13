import { StoreSlice, types } from '../../constant';
import { State } from '../../types/state';
import { Quest } from '../../types/types';
import { createSelector } from '@reduxjs/toolkit';
import { getLevel, getType } from '../site-process/selectors';

export const getIsQuestsLoading = ( { [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isQuestsLoading;
export const getQuests = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Quest[] => SITE_DATA.quests;

export const selectQuests = createSelector(
  [getQuests, getType, getLevel],
  (quests, type, level) => quests
    .filter((quest) => {
      if (type === types[0]) {
        return quests;
      }
      return quest.type === type;
    })
    .filter((quest) => {
      if (level === 'Any') {
        return quests;
      }
      return quest.level === level.toLowerCase();
    })
);
