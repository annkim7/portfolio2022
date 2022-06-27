import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { updateList } from "../store.js"

function Home() {

let [tab, setTab] = useState(0);

let dispatch = useDispatch();

axios.get('/career').then((result) => {
  dispatch(updateList(result.data));
}).catch(()=>{
  console.log('failure')
})

let list = useSelector((state) => { return state.list} )

    return (
        <>
        <section className="skill-area">
          <h2 className="main-title">Skills</h2>
          <div className="content">
              <ul className="box-list">
                <li><b>Appreciate</b><span>기획안, 디자인 시안에 대한 높은 이해도를 기반으로 필요시에 기획서, 디자인 없이 전체적 구성에 맞춰 추가하거나 수정 가능</span></li>
                <li><b>Skilled</b><span>SCSS, Javascript(vue, react, node, jquery)등을 통한 요구에 맞춘 실제 서비스 개발 구현 능력</span></li>
                <li><b>Communication</b><span>같은 프로젝트에서 다른 역할로 함께 협업하는 동료뿐만 아니라 다른 프로젝트에서 같은 역할을 하는 다른 동료와의 원활한 소통</span></li>
              </ul>
          </div>
        </section>
        <section className="history-area">
          <h2 className="main-title">History</h2>
          <div className="content">
              <div className="full-box">
                <article className="chart-box">
                  <ul className="x-axis">{ Xaxis() }</ul>
                  <ul className="y-axis">
                    <li>2020</li>
                    <li>2021</li>
                    <li>2022</li>
                  </ul>
                  <ul className="chart-list">
                    <li onClick={()=>setTab(0)}>CSS</li>
                    <li onClick={()=>setTab(1)}>JQuery, Vanilla</li>
                    <li onClick={()=>setTab(2)}>Vue, React, Node</li>
                  </ul>
                </article>
                <Tab tab={tab}></Tab>
              </div>
          </div>
        </section>
      </>
    );

    function Xaxis(){
      var array = [];
      for(var i = 0; i<10; i++){
        array.push(<li key={i}></li>);
      }
      return array;
    }

    function Tab(props){
      return(
        <div className="career-box">
          <h2 className="sub-title">{list[props.tab]?.name}</h2>
          <div className="career">
            {list[props.tab]?.content}
          </div>
        </div>
      )
    }

  }

  
  export default Home;