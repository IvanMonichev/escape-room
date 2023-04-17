import { TypesQuest } from '../types/types';

export const URL_MARKER_DEFAULT = '/img/svg/pin-default.svg';
export const URL_MARKER_ACTIVE = '/img/svg/pin-active.svg';

export const VALID_EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const VALID_PASSWORD_REGEXP = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
export const VALID_PHONE_REGEXP = /^\+?7(9\d{9})$/;

export const MIN_COUNT_NAME = 1;
export const MAX_COUNT_NAME = 15;

export const enum InvalidMessage {
  Email = 'Электронная почта должна быть корректного формата',
  Password = 'Пароль должен состоять хотя бы из одной буквы и цифры',
  Name = 'Имя должно быть от 1 до 15 символов',
  Phone = 'Телефон должен быть формата +7 (000) 000-00-00 (Ру-формат)',
}

export const types = ['all-quests', 'adventures', 'horror', 'mystic', 'detective', 'sci-fi'] as const;

export enum AppRoute {
  Root = '/',
  Booking = '/booking',
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
    name: 'adventures',
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
  Logout = '/logout',
  Booking = '/booking',
  Reservation = '/reservation'
}

export enum Level {
  Any = 'Любой',
}

export const localizedLevels = {
  easy: 'лёгкий',
  medium: 'средний',
  hard: 'сложный',
};

export enum Type {
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
}

export const localizedTypes = {
  [Type.Adventures]: 'Приключения',
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
