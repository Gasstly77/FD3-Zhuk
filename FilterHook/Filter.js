import React, { useState } from 'react';


import Controls from './Controls/Controls';
import List from './List/List';


const Filter = (props) => {

  const [wordsList, setWords] = useState(props.wordsList);

  const apply = (isSort,filter) => {
    let newWordsList=props.wordsList.slice();
    if ( filter )
      newWordsList=newWordsList.filter(w=>w.includes(filter));
    if ( isSort )
      newWordsList.sort();
    setWords(newWordsList);
  }

    return (
      <div>
        <Controls apply={apply}/>
        <List wordsList={wordsList}/>
      </div >
    );

  }

export default Filter;
