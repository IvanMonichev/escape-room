import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchQuest } from '../../store/action';
import { getIsQuestLoading, getQuest } from '../../store/site-data/selectors';
import { localizedLevels, localizedTypes } from '../../utils/constant';

function Quest(): JSX.Element | null {
  const params = useParams();
  const dispatch = useAppDispatch();
  const isQuestLoading = useAppSelector(getIsQuestLoading);
  const quest = useAppSelector(getQuest);

  useEffect(() => {
    const { id } = params;
    if (id) {
      dispatch(fetchQuest(id));
    }
  }, [params, dispatch]);

  if (isQuestLoading) {
    return <Spinner />;
  }

  if (!quest) {
    return null;
  }

  // eslint-disable-next-line no-console
  console.log(quest);

  const { title, type, coverImg, coverImgWebp, level, description } = quest;


  return (
    <main className="decorated-page quest-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet={coverImgWebp}
          />
          <img
            src={coverImg}
            width={1366}
            height={768}
            alt={title}
          />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="quest-page__content">
          <h1 className="title title--size-l title--uppercase quest-page__title">
            {title}
          </h1>
          <p className="subtitle quest-page__subtitle">
            <span className="visually-hidden">Жанр:</span>{localizedTypes[type]}
          </p>
          <ul className="tags tags--size-l quest-page__tags">
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
              {localizedLevels[level]}
            </li>
          </ul>
          <p className="quest-page__description">
            {description}
          </p>
          <a
            className="btn btn--accent btn--cta quest-page__btn"
            href="booking.html"
          >
            Забронировать
          </a>
        </div>
      </div>
    </main>
  );
}

export default Quest;
