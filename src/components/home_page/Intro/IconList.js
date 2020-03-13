import React from 'react';
import Icon from './Icon';


const IconList = ({ categories, icons }) =>{

    const renderList = categories.map((elem, index) => {
        return <Icon name={elem} pic={icons[index]} num={index+1}/>
    })

    return(
        <div className={`icon-container`}>
            {renderList}
        </div>
    )
}

export default IconList;