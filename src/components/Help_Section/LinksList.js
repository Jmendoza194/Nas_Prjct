import React from 'react';
import ButtonLink from './ButtonLink';
import '../../styles/util-styles.css';
import '../../styles/grid-styles.css';
import '../../styles/help-styles.css';

const LinksList = ({ links, name }) =>{
    const renderedList =  links.map((link, index) =>{
        return <ButtonLink link={link} name={name[index]}/>
    })
    return(
        <div className='button_grid-container super-margin-up'>
            {renderedList}
        </div>
    )
}

export default LinksList;