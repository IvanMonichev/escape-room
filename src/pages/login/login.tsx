import { FormEvent } from 'react';
import { toast } from 'react-toastify';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { loginUser } from '../../store/action';
import { UserAuth } from '../../types/types';
import { InvalidMessage, VALID_EMAIL_REGEXP, VALID_PASSWORD_REGEXP } from '../../utils/constant';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;

    const formData = new FormData(form) as Iterable<[UserAuth]>;
    const data = Object.fromEntries(formData) as UserAuth;

    if (!data.email.match(VALID_EMAIL_REGEXP)) {
      toast.warn(InvalidMessage.Email);
      return;
    }

    if (!data.password.match(VALID_PASSWORD_REGEXP)) {
      toast.warn(InvalidMessage.Password);
      return;
    }

    dispatch(loginUser(data));
  };

  return (
    <main className='decorated-page login'>
      <div className='decorated-page__decor' aria-hidden='true'>
        <picture>
          <source
            type='image/webp'
            srcSet='img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x'
          />
          <img
            src='img/content/maniac/maniac-size-m.jpg'
            srcSet='img/content/maniac/maniac-size-m@2x.jpg 2x'
            width='1366'
            height='768'
            alt=''
          />
        </picture>
      </div>
      <div className='container container--size-l'>
        <div className='login__form'>
          <form
            className='login-form'
            action='https://echo.htmlacademy.ru/'
            method='post'
            onSubmit={handleFormSubmit}
          >
            <div className='login-form__inner-wrapper'>
              <h1 className='title title--size-s login-form__title'>Вход</h1>
              <div className='login-form__inputs'>
                <div className='custom-input login-form__input'>
                  <label className='custom-input__label' htmlFor='email'>
                    E&nbsp;&ndash;&nbsp;mail
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Адрес электронной почты'
                    required
                  />
                </div>
                <div className='custom-input login-form__input'>
                  <label className='custom-input__label' htmlFor='password'>
                    Пароль
                  </label>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Пароль'
                    required
                  />
                </div>
              </div>
              <button className='btn btn--accent btn--general login-form__submit' type='submit'>
                Войти
              </button>
            </div>
            <label className='custom-checkbox login-form__checkbox'>
              <input type='checkbox' id='id-order-agreement' name='user-agreement' required />
              <span className='custom-checkbox__icon'>
                <svg width='20' height='17' aria-hidden='true'>
                  <use xlinkHref='#icon-tick'></use>
                </svg>
              </span>
              <span className='custom-checkbox__label'>
                Я&nbsp;согласен с
                <a className='link link--active-silver link--underlined' href='login#'>
                  правилами обработки персональных данных
                </a>
                &nbsp;и пользовательским соглашением
              </span>
            </label>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
