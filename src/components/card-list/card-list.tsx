import { useAppSelector } from '../../hooks/useAppSelector';
import { getIsQuestsLoading, selectQuests } from '../../store/site-data/selectors';
import Spinner from '../spinner/spinner';
import Card from '../card/card';


function CardList(): JSX.Element {
  const quests = useAppSelector(selectQuests);
  const isQuestsLoading = useAppSelector(getIsQuestsLoading);


  if (isQuestsLoading) {
    return <Spinner />;
  }

  return (
    <div className="cards-grid">
      {quests.map((quest) => (
        <Card
          key={quest.id}
          {...quest}
        />
      ))}
    </div>
  );
}

export default CardList;
