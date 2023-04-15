import { Link, NavLink, useLocation } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { logoutUser } from '../../store/action';
import { getIsAuthorized } from '../../store/user-process/selectors';
import { AppRoute } from '../../utils/constant';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation() as { pathname: AppRoute };
  const isAuthorized = useAppSelector(getIsAuthorized);
  const isActiveLink = ({ isActive }: { isActive: boolean }) => (isActive ? 'link active' : 'link');

  const getCorrectUrl = isAuthorized ? AppRoute.Root : AppRoute.Login;
  const getCorrectStyle = isAuthorized ? 'btn--accent' : '';
  const getCorrectContent = isAuthorized ? 'Выйти' : 'Вход';

  const handleLogoutClick = () => {
    if (isAuthorized) {
      dispatch(logoutUser());
    }
  };

  return (
    <header className='header'>
      <div className='container container--size-l'>
        <span className='logo header__logo'>
          <svg width={134} height={52} aria-hidden='true'>
            <use xlinkHref='#logo' />
          </svg>
        </span>
        <nav className='main-nav header__main-nav'>
          <ul className='main-nav__list'>
            <li className='main-nav__item'>
              <NavLink className={isActiveLink} to='/' end>
                Квесты
              </NavLink>
            </li>
            <li className='main-nav__item'>
              <NavLink className={isActiveLink} to='/contacts'>
                Контакты
              </NavLink>
            </li>
            <li className='main-nav__item'>
              <NavLink className={isActiveLink} to='/my-quests'>
                Мои бронирования
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className='header__side-nav'>
          {pathname !== AppRoute.Login && (
            <Link className={`btn ${getCorrectStyle} header__side-item`} to={getCorrectUrl} onClick={handleLogoutClick}>
              {getCorrectContent}
            </Link>
          )}
          <a className='link header__side-item header__phone-link' href='tel:88003335599'>
            8 (000) 111-11-11
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
