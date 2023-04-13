import { combineReducers } from '@reduxjs/toolkit';
import { StoreSlice } from '../utils/constant';
import { siteData } from './site-data/site-data';
import { siteProcess } from './site-process/site-process';

export const rootReducer = combineReducers({
  [StoreSlice.SiteData]: siteData.reducer,
  [StoreSlice.SiteProcess]: siteProcess.reducer
});
