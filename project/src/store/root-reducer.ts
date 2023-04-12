import { combineReducers } from '@reduxjs/toolkit';
import { StoreSlice } from '../constant';
import { siteData } from './site-data/site-data';

export const rootReducer = combineReducers({
  [StoreSlice.SiteData]: siteData.reducer,
});
