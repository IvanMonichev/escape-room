import { useAppSelector } from '../../hooks/useAppSelector';
import { getIsQuestsLoading, getQuests } from '../../store/site-data/selectors';
import Spinner from '../spinner/spinner';
import Card from '../card/card';


function CardList(): JSX.Element {
  const quests = useAppSelector(getQuests);
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
