import { StoreSlice } from '../../constant';
import { LevelName, TypeName } from '../../types/types';
import { State } from '../../types/state';

export const getType = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): TypeName => SITE_PROCESS.type;
export const getLevel = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): LevelName => SITE_PROCESS.level;
