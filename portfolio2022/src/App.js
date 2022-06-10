import './App.css';
import './style/style.scss';
import Header from './components/header.js';

function App() {
  return (
    <div className="App">
      <Header/>

      <div className="wrap">
        <div class="year">
          <span class="year-btn">2022</span>
        </div>
        <section>
          <h2 class="main-title">Skills</h2>
          <div class="content">
              <ul class="box-list">
                <li><b>Layout Design</b><span>주어진 디자인 시안 없이 전체 스타일을 해치지 않는 범위 내에서의 비슷한 스타일의 버튼, 검색바 등 디자인뿐만 아니라 </span></li>
                <li><b>Skilled</b><span>주어진 디자인 시안 없이 전체 스타일을 해치지 않는 범위 내에서의 비슷한 스타일의 버튼, 검색바 등 디자인뿐만 아니라</span></li>
                <li><b>Communication</b><span>주어진 디자인 시안 없이 전체 스타일을 해치지 않는 범위 내에서의 비슷한 스타일의 버튼, 검색바 등 디자인뿐만 아니라</span></li>
              </ul>
          </div>
        </section>
        <section>
          <h2 class="main-title">History</h2>
          <div class="content">
            
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
