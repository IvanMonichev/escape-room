import { typesQuests } from '../constant';

export type TypeQuestName = typeof typesQuests[number]

export type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: 'easy' | 'medium' | 'hard';
  type: TypeQuestName;
  peopleMinMax: number[];
}
