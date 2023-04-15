import { State } from '../../types/state';
import { User } from '../../types/types';
import { AuthorizationStatus, StoreSlice } from '../../utils/constant';

export const getAuthorizationStatus = ({
  [StoreSlice.UserProcess]: USER_PROCESS,
}: State): AuthorizationStatus => USER_PROCESS.authorizationStatus;
export const getIsAuthorized = ({ [StoreSlice.UserProcess]: USER_PROCESS }: State): boolean =>
  USER_PROCESS.authorizationStatus === AuthorizationStatus.Auth;
export const getToken = ({ [StoreSlice.UserProcess]: USER_PROCESS }: State): User['token'] =>
  USER_PROCESS.token;
