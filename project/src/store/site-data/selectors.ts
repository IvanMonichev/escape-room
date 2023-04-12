import { StoreSlice } from '../../constant';
import { State } from '../../types/state';
import { Quest } from '../../types/types';

export const getQuests = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Quest[] => SITE_DATA.quests;
