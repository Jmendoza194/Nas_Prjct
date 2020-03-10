import React from 'react';
import '../../styles/home-styles.css'

const Header = ({ name }) =>{
    return(
        <div className='header_container'>
            <div className='background_pic'>
                <div className='title_container'>
                    <h1 className='title'>The Plunder of Native American Soil</h1>
                </div>
            </div>
            
        </div>
    )
}

export default Header;