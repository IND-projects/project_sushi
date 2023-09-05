import { SushiList } from './SushiList/SushiList';
import '../node_modules/bootstrap/scss/bootstrap.scss'
import './App.scss';
import { Header } from './Header/Header';

import { DataReseive } from './DataReceive/DataReceive';
// const data = DataReseive();
// import SushisFromServer from './test.json' //DataReseive 

export const App = () => {
  console.log(DataReseive())
  return (
    <div className='bg-secondary-subtle'>
      <Header />
      <div className="container-lg text-center mt-1">
        <p className='title mb-0 text-dark'>Our catalog</p>
        <SushiList sushis={DataReseive()} /> 
        {/* DataReseive */}
      </div>
    </div>
  );
}