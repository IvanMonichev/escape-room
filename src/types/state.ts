import { LevelName, QuestCard, QuestView, TypeName } from './types';
import store from '../store';

export type SiteData = {
  quests: QuestCard[];
  isQuestsLoading: boolean;
  quest: QuestView | null;
  isQuestLoading: boolean;
}

export type SiteProcess = {
  type: TypeName;
  level: LevelName;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
