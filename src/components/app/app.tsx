import React from 'react';
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';

import Booking from '../../pages/booking/booking';
import Contacts from '../../pages/contacts/contacts';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import MyQuests from '../../pages/my-quests/my-quests';
import Quest from '../../pages/quest/quest';
import { AppRoute, AuthorizationStatus } from '../../utils/constant';
import history from '../../utils/history';
import Layout from '../layout/layout';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Main />} />
          <Route
            path={AppRoute.Booking}
            element={
              <PrivateRoute restrictedFor={AuthorizationStatus.NoAuth} redirectTo={AppRoute.Login}>
                <Booking />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Contacts} element={<Contacts />} />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute restrictedFor={AuthorizationStatus.Auth} redirectTo={AppRoute.Root}>
                <Login />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.MyQuests}
            element={
              <PrivateRoute restrictedFor={AuthorizationStatus.NoAuth} redirectTo={AppRoute.Login}>
                <MyQuests />
              </PrivateRoute>
            }
          />
          <Route path={`${AppRoute.Quest}/:id`} element={<Quest />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
