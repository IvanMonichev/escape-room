import { Quest } from './types';
import store from '../store';

export type SiteData = {
  quests: Quest[];
  isQuestsLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
