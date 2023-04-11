
function Main(): JSX.Element {
  return (
    <main className="page-content">
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle page-content__subtitle">
            квесты в Санкт-Петербурге
          </h1>
          <h2 className="title title--size-m page-content__title">
            Выберите тематику
          </h2>
        </div>
        <div className="page-content__item">
          <form className="filter" action="#" method="get">
            <fieldset className="filter__section">
              <legend className="visually-hidden">Тематика</legend>
              <ul className="filter__list">
                <li className="filter__item">
                  <input type="radio" name="type" id="all" defaultChecked />
                  <label className="filter__label" htmlFor="all">
                    <svg
                      className="filter__icon"
                      width={26}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-all-quests" />
                    </svg>
                    <span className="filter__label-text">Все квесты</span>
                  </label>
                </li>
                <li className="filter__item">
                  <input type="radio" name="type" id="adventure" />
                  <label className="filter__label" htmlFor="adventure">
                    <svg
                      className="filter__icon"
                      width={36}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-adventure" />
                    </svg>
                    <span className="filter__label-text">Приключения</span>
                  </label>
                </li>
                <li className="filter__item">
                  <input type="radio" name="type" id="horror" />
                  <label className="filter__label" htmlFor="horror">
                    <svg
                      className="filter__icon"
                      width={30}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-horror" />
                    </svg>
                    <span className="filter__label-text">Ужасы</span>
                  </label>
                </li>
                <li className="filter__item">
                  <input type="radio" name="type" id="mystic" />
                  <label className="filter__label" htmlFor="mystic">
                    <svg
                      className="filter__icon"
                      width={30}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-mystic" />
                    </svg>
                    <span className="filter__label-text">Мистика</span>
                  </label>
                </li>
                <li className="filter__item">
                  <input type="radio" name="type" id="detective" />
                  <label className="filter__label" htmlFor="detective">
                    <svg
                      className="filter__icon"
                      width={40}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-detective" />
                    </svg>
                    <span className="filter__label-text">Детектив</span>
                  </label>
                </li>
                <li className="filter__item">
                  <input type="radio" name="type" id="sciFi" />
                  <label className="filter__label" htmlFor="sciFi">
                    <svg
                      className="filter__icon"
                      width={28}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-sci-fi" />
                    </svg>
                    <span className="filter__label-text">Sci-fi</span>
                  </label>
                </li>
              </ul>
            </fieldset>
            <fieldset className="filter__section">
              <legend className="visually-hidden">Сложность</legend>
              <ul className="filter__list">
                <li className="filter__item">
                  <input type="radio" name="level" id="any" defaultChecked />
                  <label className="filter__label" htmlFor="any">
                    <span className="filter__label-text">Любой</span>
                  </label>
                </li>
                <li className="filter__item">
                  <input type="radio" name="level" id="easy" />
                  <label className="filter__label" htmlFor="easy">
                    <span className="filter__label-text">Лёгкий</span>
                  </label>
                </li>
                <li className="filter__item">
                  <input type="radio" name="level" id="middle" />
                  <label className="filter__label" htmlFor="middle">
                    <span className="filter__label-text">Средний</span>
                  </label>
                </li>
                <li className="filter__item">
                  <input type="radio" name="level" id="hard" />
                  <label className="filter__label" htmlFor="hard">
                    <span className="filter__label-text">Сложный</span>
                  </label>
                </li>
              </ul>
            </fieldset>
          </form>
        </div>
        <h2 className="title visually-hidden">Выберите квест</h2>
        <div className="cards-grid">
          <div className="quest-card">
            <div className="quest-card__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/content/crypt/crypt-size-s.webp, img/content/crypt/crypt-size-s@2x.webp 2x"
                />
                <img
                  src="img/content/crypt/crypt-size-s.jpg"
                  srcSet="img/content/crypt/crypt-size-s@2x.jpg 2x"
                  width={344}
                  height={232}
                  alt="Мужчина в клетке в подземелье."
                />
              </picture>
            </div>
            <div className="quest-card__content">
              <div className="quest-card__info-wrapper">
                <a className="quest-card__link" href="quest.html">
                  Склеп
                </a>
              </div>
              <ul className="tags quest-card__tags">
                <li className="tags__item">
                  <svg width={11} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-person" />
                  </svg>
                  2–5&nbsp;чел
                </li>
                <li className="tags__item">
                  <svg width={14} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-level" />
                  </svg>
                  Сложный
                </li>
              </ul>
            </div>
          </div>
          <div className="quest-card">
            <div className="quest-card__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/content/maniac/maniac-size-s.webp, img/content/maniac/maniac-size-s@2x.webp 2x"
                />
                <img
                  src="img/content/maniac/maniac-size-s.jpg"
                  srcSet="img/content/maniac/maniac-size-s@2x.jpg 2x"
                  width={344}
                  height={232}
                  alt="Мужчина в маске в тёмном переходе."
                />
              </picture>
            </div>
            <div className="quest-card__content">
              <div className="quest-card__info-wrapper">
                <a className="quest-card__link" href="quest.html">
                  Маньяк
                </a>
              </div>
              <ul className="tags quest-card__tags">
                <li className="tags__item">
                  <svg width={11} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-person" />
                  </svg>
                  3–6&nbsp;чел
                </li>
                <li className="tags__item">
                  <svg width={14} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-level" />
                  </svg>
                  Средний
                </li>
              </ul>
            </div>
          </div>
          <div className="quest-card">
            <div className="quest-card__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/content/ritual/ritual-size-s.webp, img/content/ritual/ritual-size-s@2x.webp 2x"
                />
                <img
                  src="img/content/ritual/ritual-size-s.jpg"
                  srcSet="img/content/ritual/ritual-size-s@2x.jpg 2x"
                  width={344}
                  height={232}
                  alt="Череп и горящая свеча в тёмном помещении."
                />
              </picture>
            </div>
            <div className="quest-card__content">
              <div className="quest-card__info-wrapper">
                <a className="quest-card__link" href="quest.html">
                  Ритуал
                </a>
              </div>
              <ul className="tags quest-card__tags">
                <li className="tags__item">
                  <svg width={11} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-person" />
                  </svg>
                  3–5&nbsp;чел
                </li>
                <li className="tags__item">
                  <svg width={14} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-level" />
                  </svg>
                  Лёгкий
                </li>
              </ul>
            </div>
          </div>
          <div className="quest-card">
            <div className="quest-card__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/content/ghosts/ghosts-size-s.webp, img/content/ghosts/ghosts-size-s@2x.webp 2x"
                />
                <img
                  src="img/content/ghosts/ghosts-size-s.jpg"
                  srcSet="img/content/ghosts/ghosts-size-s@2x.jpg 2x"
                  width={344}
                  height={232}
                  alt="Силует девушки за стеклом."
                />
              </picture>
            </div>
            <div className="quest-card__content">
              <div className="quest-card__info-wrapper">
                <a className="quest-card__link" href="quest.html">
                  История призраков
                </a>
              </div>
              <ul className="tags quest-card__tags">
                <li className="tags__item">
                  <svg width={11} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-person" />
                  </svg>
                  5–6&nbsp;чел
                </li>
                <li className="tags__item">
                  <svg width={14} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-level" />
                  </svg>
                  Лёгкий
                </li>
              </ul>
            </div>
          </div>
          <div className="quest-card">
            <div className="quest-card__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/content/palace/palace-size-s.webp, img/content/palace/palace-size-s@2x.webp 2x"
                />
                <img
                  src="img/content/palace/palace-size-s.jpg"
                  srcSet="img/content/palace/palace-size-s@2x.jpg 2x"
                  width={344}
                  height={232}
                  alt="Замок на возвышенности."
                />
              </picture>
            </div>
            <div className="quest-card__content">
              <div className="quest-card__info-wrapper">
                <a className="quest-card__link" href="quest.html">
                  Тайны старого особняка
                </a>
              </div>
              <ul className="tags quest-card__tags">
                <li className="tags__item">
                  <svg width={11} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-person" />
                  </svg>
                  2–3&nbsp;чел
                </li>
                <li className="tags__item">
                  <svg width={14} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-level" />
                  </svg>
                  Лёгкий
                </li>
              </ul>
            </div>
          </div>
          <div className="quest-card">
            <div className="quest-card__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/content/hut/hut-size-s.webp, img/content/hut/hut-size-s@2x.webp 2x"
                />
                <img
                  src="img/content/hut/hut-size-s.jpg"
                  srcSet="img/content/hut/hut-size-s@2x.jpg 2x"
                  width={344}
                  height={232}
                  alt="Череп животного в руках девушки."
                />
              </picture>
            </div>
            <div className="quest-card__content">
              <div className="quest-card__info-wrapper">
                <a className="quest-card__link" href="quest.html">
                  Хижина в&nbsp;лесу
                </a>
              </div>
              <ul className="tags quest-card__tags">
                <li className="tags__item">
                  <svg width={11} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-person" />
                  </svg>
                  4–7&nbsp;чел
                </li>
                <li className="tags__item">
                  <svg width={14} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-level" />
                  </svg>
                  Средний
                </li>
              </ul>
            </div>
          </div>
          <div className="quest-card">
            <div className="quest-card__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/content/experiment/experiment-size-s.webp, img/content/experiment/experiment-size-s@2x.webp 2x"
                />
                <img
                  src="img/content/experiment/experiment-size-s.jpg"
                  srcSet="img/content/experiment/experiment-size-s@2x.jpg 2x"
                  width={344}
                  height={232}
                  alt="Производственный цех."
                />
              </picture>
            </div>
            <div className="quest-card__content">
              <div className="quest-card__info-wrapper">
                <a className="quest-card__link" href="quest.html">
                  Фатальный эксперимент
                </a>
              </div>
              <ul className="tags quest-card__tags">
                <li className="tags__item">
                  <svg width={11} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-person" />
                  </svg>
                  4–7&nbsp;чел
                </li>
                <li className="tags__item">
                  <svg width={14} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-level" />
                  </svg>
                  Сложный
                </li>
              </ul>
            </div>
          </div>
          <div className="quest-card">
            <div className="quest-card__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/content/metro/metro-size-s.webp, img/content/metro/metro-size-s@2x.webp 2x"
                />
                <img
                  src="img/content/metro/metro-size-s.jpg"
                  srcSet="img/content/metro/metro-size-s@2x.jpg 2x"
                  width={344}
                  height={232}
                  alt="Мужчина на фоне кирпичной стены."
                />
              </picture>
            </div>
            <div className="quest-card__content">
              <div className="quest-card__info-wrapper">
                <a className="quest-card__link" href="quest.html">
                  Метро 2033
                </a>
              </div>
              <ul className="tags quest-card__tags">
                <li className="tags__item">
                  <svg width={11} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-person" />
                  </svg>
                  6–8&nbsp;чел
                </li>
                <li className="tags__item">
                  <svg width={14} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-level" />
                  </svg>
                  Средний
                </li>
              </ul>
            </div>
          </div>
          <div className="quest-card">
            <div className="quest-card__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/content/loft/loft-size-s.webp, img/content/loft/loft-size-s@2x.webp 2x"
                />
                <img
                  src="img/content/loft/loft-size-s.jpg"
                  srcSet="img/content/loft/loft-size-s@2x.jpg 2x"
                  width={344}
                  height={232}
                  alt="Фотоапарат, очки и канцелярские предметы на фоне карты."
                />
              </picture>
            </div>
            <div className="quest-card__content">
              <div className="quest-card__info-wrapper">
                <a className="quest-card__link" href="quest.html">
                  Старый чердак
                </a>
              </div>
              <ul className="tags quest-card__tags">
                <li className="tags__item">
                  <svg width={11} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-person" />
                  </svg>
                  2–3&nbsp;чел
                </li>
                <li className="tags__item">
                  <svg width={14} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-level" />
                  </svg>
                  Лёгкий
                </li>
              </ul>
            </div>
          </div>
          <div className="quest-card">
            <div className="quest-card__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/content/frontier/frontier-size-s.webp, img/content/frontier/frontier-size-s@2x.webp 2x"
                />
                <img
                  src="img/content/frontier/frontier-size-s.jpg"
                  srcSet="img/content/frontier/frontier-size-s@2x.jpg 2x"
                  width={344}
                  height={232}
                  alt="Застрявшая машина с надписью Help на боку."
                />
              </picture>
            </div>
            <div className="quest-card__content">
              <div className="quest-card__info-wrapper">
                <a className="quest-card__link" href="quest.html">
                  Последний рубеж
                </a>
              </div>
              <ul className="tags quest-card__tags">
                <li className="tags__item">
                  <svg width={11} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-person" />
                  </svg>
                  4–7&nbsp;чел
                </li>
                <li className="tags__item">
                  <svg width={14} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-level" />
                  </svg>
                  Средний
                </li>
              </ul>
            </div>
          </div>
          <div className="quest-card">
            <div className="quest-card__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/content/mars/mars-size-s.webp, img/content/mars/mars-size-s@2x.webp 2x"
                />
                <img
                  src="img/content/mars/mars-size-s.jpg"
                  srcSet="img/content/mars/mars-size-s@2x.jpg 2x"
                  width={344}
                  height={232}
                  alt="Сюрреалистичное изображение человека."
                />
              </picture>
            </div>
            <div className="quest-card__content">
              <div className="quest-card__info-wrapper">
                <a className="quest-card__link" href="quest.html">
                  Марс-2056
                </a>
              </div>
              <ul className="tags quest-card__tags">
                <li className="tags__item">
                  <svg width={11} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-person" />
                  </svg>
                  2–4&nbsp;чел
                </li>
                <li className="tags__item">
                  <svg width={14} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-level" />
                  </svg>
                  Лёгкий
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
