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
                <li><b>Appreciate</b><span>기획안, 디자인 시안에 대한 높은 이해도를 기반으로 필요시에 기획서, 디자인 없이 전체적 구성에 맞춰 추가하거나 수정 가능</span></li>
                <li><b>Skilled</b><span>SCSS, Javascript(vue, react, node, jquery)등을 통한 요구에 맞춘 실제 서비스 개발 구현 능력</span></li>
                <li><b>Communication</b><span>같은 프로젝트에서 다른 역할로 함께 협업하는 동료뿐만 아니라 다른 프로젝트에서 같은 역할을 하는 다른 동료와의 원활한 소통</span></li>
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
