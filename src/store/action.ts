import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import type { History } from 'history';

import Token from '../services/Token';
import { Booking, Offer, QuestCard, QuestView, User, UserAuth } from '../types/types';
import { ApiRoute, AppRoute, HttpCode } from '../utils/constant';

type Extra = {
  api: AxiosInstance;
  history: History;
};

export const Action = {
  FETCH_QUESTS: 'quests/fetch',
  FETCH_QUEST: 'quest/fetch',
  FETCH_OFFERS: 'offers/fetch',
  LOGIN_USER: 'user/login',
  LOGOUT_USER: 'user/logout',
  FETCH_USER_STATUS: 'user/fetch-status',
  POST_BOOKING: 'booking/post',
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

export const fetchOffers = createAsyncThunk<Offer[], Offer['id'], { extra: Extra }>(
  Action.FETCH_OFFERS,
  async (id, { extra }) => {
    const { api, history } = extra;

    try {
      const { data } = await api.get<Offer[]>(`${ApiRoute.Quests}/${id}${ApiRoute.Booking}`);
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

export const postBooking = createAsyncThunk<void, Booking, { extra: Extra }>(
  Action.POST_BOOKING,
  async ({ questId, date, time, contactPerson, phone, withChildren, placeId, peopleCount }, { extra }) => {
    const { api } = extra;

    try {
      await api.post<undefined>(`${ApiRoute.Quests}/${questId}${ApiRoute.Booking}`, {
        date,
        time,
        contactPerson,
        phone,
        withChildren,
        placeId,
        peopleCount,
      });
    } catch (err) {

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

export const fetchUserStatus = createAsyncThunk<User['token'], undefined, { extra: Extra }>(
  Action.FETCH_USER_STATUS,
  async (_, { extra }) => {
    const { api } = extra;

    try {
      const { data } = await api.get<User>(ApiRoute.Login);
      return data.token;
    } catch (err) {
      const axiosError = err as AxiosError;

      if (axiosError.response?.status === HttpCode.NoAuth) {
        Token.drop();
      }

      return Promise.reject(err);
    }
  }
);

export const logoutUser = createAsyncThunk<void, undefined, { extra: Extra }>(
  Action.LOGOUT_USER,
  async (_, { extra }) => {
    const { api } = extra;
    await api.delete(ApiRoute.Logout);

    Token.drop();
  }
);
