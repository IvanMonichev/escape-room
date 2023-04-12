
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

}

export const typesQuests = [
  'horror',
  'mystic',
  'detective',
  'adventures',
  'sci-fi'
] as const;

export enum ApiRoute {
  Quests = '/quest'
}
