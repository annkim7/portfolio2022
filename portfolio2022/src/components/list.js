import axios from 'axios';

function List() {
  return (
    <section className="list">
        <h2 className="main-title">List of my portfolio</h2>
        <div className="content">
          <div className="list-box">
            <ul>
              <li>Portfolio2021</li>
              <li>React, slider, motion</li>
              <li>리액트로 만든 2021 포트폴리오 사이트</li>
            </ul>
          </div>
        </div>

        <button onClick={()=>{
      axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
        console.log(결과.data)
      })
      .catch(()=>{
        console.log('실패함')
      })
    }}>버튼</button>
    </section>
  );
}


export default List;
