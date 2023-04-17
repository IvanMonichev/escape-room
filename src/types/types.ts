import { AuthorizationStatus, Level, types } from '../utils/constant';

export type TypeName = (typeof types)[number];
export type TypeApiName = Exclude<TypeName, 'all-quests'>;
export type LevelName = keyof typeof Level;

export type TypesQuest = {
  name: TypeName;
  title: string;
};

export type QuestCard = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: 'easy' | 'medium' | 'hard';
  type: TypeApiName;
  peopleMinMax: number[];
};

export type QuestView = QuestCard & {
  description: string;
  coverImg: string;
  coverImgWebp: string;
};

export type Offer = {
  id: string;
  location: LocationQuest;
  slots: Slots;
};

export type Slots = {
  today: Time[];
  tomorrow: Time[];
};

export type Time = {
  time: string;
  isAvailable: boolean;
};

export type LocationQuest = {
  address: string;
  coords: number[];
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type User = {
  email: string;
  token: string;
};

export type UserAuth = Pick<User, 'email'> & { password: string };

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  token: User['token'];
  bookingUrl: string;
};

export type Booking = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
  questId: string;
};

export type Reservation = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: LocationQuest;
  quest: QuestCard;
};
