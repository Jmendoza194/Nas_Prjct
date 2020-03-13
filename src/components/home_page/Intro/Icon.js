import React from 'react';
import { FaVideo } from "react-icons/fa";
import '../../../styles/home-styles.css';
import '../../../styles/grid-styles.css';

const Icon = ({ name, pic, num }) =>{
    return(
        <div className={`icon-item icon_item-${num}`}>
            <div className='pic' >
                <img className='icon' src={pic} />
            </div>
            <h3>{name}</h3>
            
        </div>
    )
}

export default Icon;