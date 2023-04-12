import { types } from '../constant';

export type TypeName = typeof types[number];
export type TypeApiName = Exclude<TypeName, 'all-quests'>

export type TypesQuest = {
  name: TypeName;
  title: string;
}

export type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: 'easy' | 'medium' | 'hard';
  type: TypeApiName;
  peopleMinMax: number[];
}


