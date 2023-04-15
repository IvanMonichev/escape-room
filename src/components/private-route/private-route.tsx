import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks/useAppSelector';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../utils/constant';
import Spinner from '../spinner/spinner';

type PrivateRouteProps = {
  children: JSX.Element;
  restrictedFor: AuthorizationStatus;
  redirectTo: AppRoute;
};

function PrivateRoute({ children, restrictedFor, redirectTo }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }
  return authorizationStatus !== restrictedFor ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute;
