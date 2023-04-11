import React from 'react';

import './filter.css';

const List = props => {

    return (
        <div className='Filter_List'>{props.wordsList.join('\n')}</div>
    );
}

export default List;











