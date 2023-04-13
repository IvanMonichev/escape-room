import { Level, types } from '../utils/constant';

export type TypeName = typeof types[number];
export type TypeApiName = Exclude<TypeName, 'all-quests'>
export type LevelName = keyof typeof Level;

export type TypesQuest = {
  name: TypeName;
  title: string;
}


export type QuestCard = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: 'easy' | 'medium' | 'hard';
  type: TypeApiName;
  peopleMinMax: number[];
}

export type QuestView = QuestCard & {
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

