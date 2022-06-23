import { useSelector } from "react-redux";
import axios from 'axios';
// import {useState, useEffect} from 'react';
import { useDispatch } from "react-redux"
import { setList } from "../store.js"

function List() {
  
// let [list, setList] = useState([]);
let dispatch = useDispatch();

axios.get('/list').then((결과) => {
    dispatch(setList(결과.data));
    // console.log(결과.data)
  }).catch(()=>{
  console.log('실패')
})

let list = useSelector((state) => { return state.list } )

// useEffect(()=>{
//   axios.get('/list').then((결과) => {
//       console.log(결과.data)
//   }).catch(()=>{
//     console.log('실패')
//   })
// }, [])


  return (
    <section className="list">
        <h2 className="main-title">List of my portfolio</h2>
        <div className="content">
          <div className="list-box">
            <ul>
              <li className="head">
                <b>title</b>
                <span>keyword</span>
                <p>description</p>
              </li>
              {
                list.map(function(a, i){
                  return(
                    <li onClick={()=>window.open(`${list[i].link}`,'_blank')} key={i}>
                      <b>{list[i].title}</b>
                      <span>{list[i].keyword}</span>
                      <p>{list[i].description}</p>
                    </li>
                  )
                })
              }
              
            </ul>
          </div>
        </div>
    </section>
  );


}


export default List;