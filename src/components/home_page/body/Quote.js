import React from 'react';
import '../../../styles/home-styles.css';
import '../../../styles/util-styles.css';
import '../../../styles/grid-styles.css';
const Quote = ({ quote }) =>{
    return(
        <div className='super-margin-up intro_grid-container'>
            <div className='quote'>
                <h1>{quote}</h1>
                <h2>-Plenty Coups, principal chief of the Mountain Crows of the Crow Nation</h2>
            </div>
            <div className='background-info_grid'>
                <div className='background_item-1'>
                    <h3 className='subTitle'>Consequences of US expansion</h3>
                    <p className='quote-paragraph'>
                        The expansion of the United States that encroached upon Native American land occurred faster than many
                        policymakers had predicted which placed new territories and tribes  under federal jurisdiction. Even to
                        this day, many of the tribes still face problems regarding their land.
                    </p>
                </div>
                <div className='background_item-2'>
                    <h3 clasName='subTitle'>Indian Removal</h3>
                    <p className='quote-paragraph'>
                        Indian removal was a forced migration in the 19th century whereby Native Americans were forced by the United
                        States government to leave their ancestral homelands.Indian removal was a consequence of actions first by 
                        European settlers to North America in the colonial period, then by the United States government and its citizens
                        until the mid-20th century.
                    </p>
                </div>
                <div className='background_item-3 '>
                    <div className='go-home-pic'></div>
                    
                </div>
            </div>
        </div>
    )
}

export default Quote;