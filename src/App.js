import './App.css';
import Training from './components/Training';
import bookdata from './data/bookdata';
// import Bookcompo from './components/Bookdata/Bookcompo';
import Formcompo from './components/Form/formcompo';
import Tictactoe from './components/Tictactoe/Tictactoe';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tictactoe />

        {/* <Bookcompo bookdata={bookdata} test={'Hello'}/> */}

        <Formcompo bookdata={bookdata}/>
        {/* <Training /> */}

      </header>      
    </div>
  );
}

export default App;
