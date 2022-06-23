import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchItems, itemsSelector } from "./item.js";

function Test() {

    const dispatch = useDispatch();
    const { items } = useSelector(itemsSelector);
    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    const renderItems = () => {
        return items.map((i) => <li> {i.name} </li>);
      };

    return (
        <div>
        hi items be here
        <ul>{renderItems()}</ul>
      </div>
    )


  }

  
  export default Test;