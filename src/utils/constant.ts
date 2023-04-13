import { TypesQuest } from '../types/types';

export const URL_MARKER_DEFAULT = 'img/svg/pin-default.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

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
  Quest = '/quest',
  NotFound = '/404'
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

export enum Type {
  Adventure = 'adventure',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi'
}

export const localizedTypes = {
  [Type.Adventure]: 'Приключения',
  [Type.Horror]: 'Ужасы',
  [Type.Mystic]: 'Мистика',
  [Type.Detective]:'Детектив',
  [Type.SciFi]: 'Sci-Fi'
};

export enum HttpCode {
  NotFound = 404,
  NoAuth = 401,
}
