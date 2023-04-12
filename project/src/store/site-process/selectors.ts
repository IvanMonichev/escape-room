import { StoreSlice } from '../../constant';
import { TypeName } from '../../types/types';
import { State } from '../../types/state';


export const getType = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): TypeName => SITE_PROCESS.type;
