import store from '../store';
import { LevelName, Offer, QuestCard, QuestView, TypeName } from './types';

export type SiteData = {
  quests: QuestCard[];
  isQuestsLoading: boolean;
  isQuestLoading: boolean;
  quest: QuestView | null;
  isOffersLoading: boolean;
  offers: Offer[] | null;
  bookingStatus: SubmitStatus;
};

export type SiteProcess = {
  type: TypeName;
  level: LevelName;
};

export enum SubmitStatus {
  Still = 'STILL',
  Pending = 'PENDING',
  Fullfilled = 'FULLFILLED',
  Rejected = 'REJECTED',
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
