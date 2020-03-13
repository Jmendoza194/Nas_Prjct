import React from 'react';
import { Router, Link } from 'react-router-dom';
import '../../styles/help-styles.css';

const ButtonLink = ({ link, name }) =>{
    return(
        <div>
            <h3>{name}</h3>
           <a className='margin-up button' href={link}>Link </a>    
           
        </div>
    )
}

export default ButtonLink;