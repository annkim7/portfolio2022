// import { useSelector } from "react-redux";
import axios from 'axios';
import {useState, useEffect} from 'react';

function List() {
  
// let a = useSelector((state) => { return state } )
let [list, setList] = useState([]);

useEffect(()=>{
  axios.get('http://localhost:8080/list').then((결과) => {
       setList(결과.data)
       console.log(결과.data)
  }).catch(()=>{
       console.log('실패')
  })
}, [])



  return (
    <section className="list">
        <h2 className="main-title">List of my portfolio</h2>
        <div className="content">
          <div className="list-box">
            <ul>
              {/* <li>Portfolio2021</li>
              <li>React, slider, motion</li>
              <li>리액트로 만든 2021 포트폴리오 사이트</li> */}
              <li>{list[0]?.title}</li>
            </ul>
          </div>
        </div>
        {/* <span>{a.testA[0]?.title}</span> */}
        {/* <button onClick={()=>{
      axios.get('/list').then((결과)=>{
        console.log(결과.data)
      })
      .catch(()=>{
        console.log('실패함')
      })
    }}>버튼</button> */}
    </section>
  );


}


export default List;
