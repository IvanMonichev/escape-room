import { Link, useNavigate } from 'react-router-dom';

import styles from './not-found.module.css';

import { AppRoute } from '../../utils/constant';

function NotFound(): JSX.Element {
  const navigate = useNavigate();

  return (
    <main className='decorated-page'>
      <div className='decorated-page__decor' aria-hidden='true'>
        <img src='./img/content/palace/palace-size-m@2x.jpg' width='1366' height='768' alt='' />
      </div>
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h2 className='size-s'>404 | Страница не найдена</h2>
          <div className={styles.buttonsContainer}>
            <button className='btn btn--general btn--accent' type='button' onClick={() => navigate(-1)}>
              Назад
            </button>
            <Link className='btn btn--general btn--accent' type='button' to={AppRoute.Root}>
              На главную
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
