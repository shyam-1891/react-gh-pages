// import './App.css';
// <!--====== CSS ======-->
import './assets/css/font-awesome.min.css';
import './assets/css/animate.css';
import './assets/css/bootstrap.min.css';
import './assets/css/default.css';
import './assets/css/style.css';
import './assets/css/custom.css'

// <!--====== Components ======-->
// import Training from './components/Training';
// import bookdata from './data/bookdata';
// import Bookcompo from './components/Bookdata/Bookcompo';
import Texttool from './components/Texttool/Texttool';
import Tictactoe from './components/Tictactoe/Tictactoe';
// import News from './components/News/News';


function App() {
  return (
    <div className="App">
        <Texttool demo="this is prop demo" />
        
        <Tictactoe />

        {/* <News /> */}
        {/* <Bookcompo bookdata={bookdata} test={'Hello'}/> */}        
        {/* <Training /> */}          
    </div>
  );
}

export default App;
