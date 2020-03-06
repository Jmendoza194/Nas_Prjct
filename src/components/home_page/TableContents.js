import React from 'react';
import { Link } from 'react-router';

const TableContents = ({ content }) =>{

    const renderList = content.map((elem)=>{
        return (
            <div>{elem}</div>
        )
    })

        return(
            <div>
                {renderList}
            </div>
        )
    
}

export default TableContents;