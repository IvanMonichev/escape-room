import { TypesQuest } from './types/types';

export const types = [
  'all-quests',
  'adventure',
  'horror',
  'mystic',
  'detective',
  'sci-fi'
] as const;

export enum AppRoute {
  Root = '/',
  Booking = '/Booking',
  Contacts = '/contacts',
  Login = '/login',
  MyQuests = '/my-quests',
  Quest = '/quest'
}

export enum StoreSlice {
  SiteData = 'SITE_DATA',
  SiteProcess = 'SITE_PROCESS',
}

export const typesQuests: TypesQuest[] = [
  {
    name: 'all-quests',
    title: 'Все квесты'
  },
  {
    name: 'adventure',
    title: 'Приключения'
  },
  {
    name: 'horror',
    title: 'Ужасы'
  },
  {
    name: 'mystic',
    title: 'Мистика'
  },
  {
    name: 'detective',
    title: 'Детектив'
  },
  {
    name: 'sci-fi',
    title: 'Sci-Fi'
  },
];

export enum ApiRoute {
  Quests = '/quest'
}

export enum Level {
  Any = 'Любой',
  Easy = 'Лёгкий',
  Medium = 'Средний',
  Hard = 'Сложный'
}

export const localizedLevels = {
  easy: 'лёгкий',
  medium: 'средний',
  hard: 'сложный'
};
