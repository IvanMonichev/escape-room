import { TypesQuest } from '../types/types';

export const URL_MARKER_DEFAULT = 'img/svg/pin-default.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const VALID_EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const VALID_PASSWORD_REGEXP = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
export const INVALID_PASSWORD_TOOLTIP = 'Пароль должен состоять хотя бы из одной буквы и цифры';

export const enum InvalidMessage {
  Email = 'Электронная почта должа быть корректного формата',
  Password = 'Пароль должен состоять хотя бы из одной буквы и цифры',
}

export const types = [
  'all-quests',
  'adventure',
  'horror',
  'mystic',
  'detective',
  'sci-fi',
] as const;

export enum AppRoute {
  Root = '/',
  Booking = '/Booking',
  Contacts = '/contacts',
  Login = '/login',
  MyQuests = '/my-quests',
  Quest = '/quest',
  NotFound = '/404',
}

export enum StoreSlice {
  SiteData = 'SITE_DATA',
  SiteProcess = 'SITE_PROCESS',
  UserProcess = 'USER_PROCESS',
}

export const typesQuests: TypesQuest[] = [
  {
    name: 'all-quests',
    title: 'Все квесты',
  },
  {
    name: 'adventure',
    title: 'Приключения',
  },
  {
    name: 'horror',
    title: 'Ужасы',
  },
  {
    name: 'mystic',
    title: 'Мистика',
  },
  {
    name: 'detective',
    title: 'Детектив',
  },
  {
    name: 'sci-fi',
    title: 'Sci-Fi',
  },
];

export enum ApiRoute {
  Quests = '/quest',
  Login = '/login',
}

export enum Level {
  Any = 'Любой',
  Easy = 'Лёгкий',
  Medium = 'Средний',
  Hard = 'Сложный',
}

export const localizedLevels = {
  easy: 'лёгкий',
  medium: 'средний',
  hard: 'сложный',
};

export enum Type {
  Adventure = 'adventure',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
}

export const localizedTypes = {
  [Type.Adventure]: 'Приключения',
  [Type.Horror]: 'Ужасы',
  [Type.Mystic]: 'Мистика',
  [Type.Detective]: 'Детектив',
  [Type.SciFi]: 'Sci-Fi',
};

export enum HttpCode {
  NotFound = 404,
  NoAuth = 401,
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
