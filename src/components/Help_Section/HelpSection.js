import React from 'react';
import LinksList from './LinksList';
import '../../styles/grid-styles.css';
import '../../styles/help-styles.css'

const HelpSection = ({ MaunaKeaLinks,MapucheLinks, MapucheName, MaunaKeaName }) =>{
    return(
        <div className='Help-grid'>
            <div>
                <h1>Want to Help?</h1>
                <p>Help the cause: 
                    Native land being taken away by the government has been an everlasting issue.
                    If you want to help the cause of preserving Indigenous land, you should donate to land protectors, speak up and contact partners of those projects to step out, and attend solidarity events to show your support
                </p>
            </div>
            <div className='symbol_grid-container'>
                <div className='MaunaKea-Symbol'>
                    <img className='' src='https://cdn140.picsart.com/302471921265211.png' alt='Mauna Kea Symbol' />
                    <h3>Mauna Kea</h3>
                </div>
                <div className='Mapuche-symbol'>
                    <img className='' src='https://www.crwflags.com/fotw/images/x/xu).gif' alt='Mapuche Symbol'/>
                    <h3>Mapuche</h3>
                </div>
            </div>
            <div className='links-container'>
                <h1>Mauna Kea</h1>
                <p className='supersmall-margin-up'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <LinksList links={MaunaKeaLinks} name={MaunaKeaName}/>
            </div>
            <div className='links-container'>
                <h1 >Mapuche</h1>
                <p className='supersmall-margin-up'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <LinksList  links={MapucheLinks} name={MapucheName}/>
            </div>
        </div>
    )
}

export default HelpSection;