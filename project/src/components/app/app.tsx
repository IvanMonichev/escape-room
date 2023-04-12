import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../constant';
import Main from '../../pages/main/main';
import Layout from '../layout/layout';
import Booking from '../../pages/booking/booking';
import Contacts from '../../pages/contacts/contacts';
import Login from '../../pages/login/login';
import MyQuests from '../../pages/my-quests/my-quests';
import Quest from '../../pages/quest/quest';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getQuests } from '../../store/site-data/selectors';


function App(): JSX.Element {

  // eslint-disable-next-line no-console
  console.log(useAppSelector(getQuests));

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={AppRoute.Booking} element={<Booking />} />
          <Route path={AppRoute.Contacts} element={<Contacts />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.MyQuests} element={<MyQuests />} />
          <Route path={AppRoute.Quest} element={<Quest />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
