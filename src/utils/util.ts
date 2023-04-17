import { LocalizedDay } from './constant';

export const splitDate = (value: string): string[] => value.split('-');

export const localizeDay = (value: string) => {
  switch (value) {
    case 'today':
      return LocalizedDay.Today;
    case 'tomorrow':
      return LocalizedDay.Tomorrow;
  }
};
