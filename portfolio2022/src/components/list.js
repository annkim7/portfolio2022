import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { updateList } from "../store.js"

function List() {
  
let dispatch = useDispatch();

axios.get('/list').then((result) => {
  dispatch(updateList(result.data));
}).catch(()=>{
  console.log('failure')
})

let list = useSelector((state) => { return state.list} )

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