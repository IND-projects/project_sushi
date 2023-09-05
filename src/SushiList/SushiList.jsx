import './SushiList.scss'
import { SushiCard } from '../SushiCard/SushiCard';
import '../../node_modules/bootstrap/scss/bootstrap.scss'

export const SushiList = ({ sushis }) => {
  console.log(sushis)

  return (
    <div className='row g-4 justify-content-center'>
      {
        sushis.map(sushi => (
          <SushiCard sushi={sushi} key={sushi.id} />
        ))
      }
    </div>
  );
};