import { Routes, Route } from 'react-router-dom';
import './App.css';
import './style/style.scss';
import Header from './components/header.js';
import Home from './components/home.js';
import List from './components/list.js';
import Test from './components/test.js';

function App() {
  return (
    <div className="App">
      <Header/>

      <div className="wrap">
        <div className="year">
          <span className="year-btn">2022</span>
        </div>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/list" element={ <List/> } />
          <Route path="/test" element={ <Test/> } />
        </Routes>

        
      </div>
    </div>
  );
}



export default App;
