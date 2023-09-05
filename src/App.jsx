import { SushiList } from './SushiList/SushiList';
import '../node_modules/bootstrap/scss/bootstrap.scss'
import './App.scss';

// import { DataReseive } from './DataReceive/DataReceive';
import SushisFromServer from './test.json' //DataReseive 

// export sushi = axios.create(url); //5001
// const array = sushi.get(breakpoint)

export const App = () => {
  return (
    <div className='bg-secondary-subtle'>
      <div className="header text-center">
        <img 
          src="https://d3d7qmccklvqbw.cloudfront.net/wp-content/uploads/2019/10/26113822/sushi-header-image-allyoucaneat.jpg" 
          alt="sushi-header" 
          className="img-fluid mx-auto d-block img-header" 
        />
        <p className='title mb-0 text-white'>Sushi from IND</p>
      </div>
      <div className="container-lg text-center mt-1">
        <p className='title mb-0 text-dark'>Our catalog</p>
        <SushiList sushis={SushisFromServer} />
      </div>
    </div>
  );
}



// <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>