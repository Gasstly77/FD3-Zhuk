import React, { useState, useEffect } from 'react';

import '../List/filter.css';

const Controls = (props) => {

    const [filter, setFilter]=useState("");
    const [isSort, setsortClicked] = useState(false)

    useEffect (() =>{
      if (props.apply)
        props.apply(isSort,filter);
          },
      [isSort,filter]
    );

    const checkboxChanged = (eo) => {
      setsortClicked(eo.target.checked);
    }

    const textChanged = (eo) => {
      setFilter(eo.target.value);
    }

    const reset = () => {
      setFilter(""); 
      setsortClicked(false);
    }

    return (
      <div className='Filter_Elements'>
                <input type='checkbox' checked={isSort} onChange={checkboxChanged} />
                <input type='text' value={filter} onChange={textChanged} />
                <input type='button'  value='сбросить' onClick={reset} />
      </div >
    );

  }

export default Controls;