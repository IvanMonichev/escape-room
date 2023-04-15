import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import type { History } from 'history';

import Token from '../services/Token';
import { QuestCard, QuestView, User, UserAuth } from '../types/types';
import { ApiRoute, AppRoute, HttpCode } from '../utils/constant';

type Extra = {
  api: AxiosInstance;
  history: History;
};

export const Action = {
  FETCH_QUESTS: 'quests/fetch',
  FETCH_QUEST: 'quest/fetch',
  LOGIN_USER: 'user/login',
};

export const fetchQuests = createAsyncThunk<QuestCard[], undefined, { extra: Extra }>(
  Action.FETCH_QUESTS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<QuestCard[]>(ApiRoute.Quests);

    return data;
  }
);

export const fetchQuest = createAsyncThunk<QuestView, QuestView['id'], { extra: Extra }>(
  Action.FETCH_QUEST,
  async (id, { extra }) => {
    const { api, history } = extra;

    try {
      const { data } = await api.get<QuestView>(`${ApiRoute.Quests}/${id}`);
      return data;
    } catch (err) {
      const axiosError = err as AxiosError;

      if (axiosError.response?.status === HttpCode.NotFound) {
        history.push(AppRoute.NotFound);
      }

      return Promise.reject(err);
    }
  }
);

export const loginUser = createAsyncThunk<void, UserAuth, { extra: Extra }>(
  Action.LOGIN_USER,
  async ({ email, password }, { extra }) => {
    const { api, history } = extra;
    const { data } = await api.post<User>(ApiRoute.Login, { email, password });
    const { token } = data;

    Token.save(token);
    history.push(AppRoute.Root);
  }
);
