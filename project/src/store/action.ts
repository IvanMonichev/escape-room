import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Quest } from '../types/types';
import { ApiRoute } from '../constant';

type Extra = {
  api: AxiosInstance;
}

export const Action = {
  FETCH_QUESTS: 'quests/fetch'
};

export const fetchQuests = createAsyncThunk<Quest[], undefined, { extra: Extra }>(
  Action.FETCH_QUESTS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Quest[]>(ApiRoute.Quests);

    return data;
  }
);
