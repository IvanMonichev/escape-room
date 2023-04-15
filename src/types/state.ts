import store from '../store';
import { LevelName, Offer, QuestCard, QuestView, TypeName } from './types';

export type SiteData = {
  quests: QuestCard[];
  isQuestsLoading: boolean;
  isQuestLoading: boolean;
  quest: QuestView | null;
  isOffersLoading: boolean;
  offers: Offer[] | null;
};

export type SiteProcess = {
  type: TypeName;
  level: LevelName;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
