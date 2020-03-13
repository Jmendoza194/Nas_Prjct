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
                <p className='supersmall-margin-up'>Mauno O Wakea is the highest peak in the Hawaiian islands standing 13,796 feet tall. The top of the mountain is considered the most sacred as it’s said to be the home of many Hawaiian deities. Native Hawaiians and Indigenous people have called this sacredness “a lived experience of oneness and connectedness with the natural and spiritual worlds.” However, an issue has arisen from the construction of the Thirty-Meter Telescope which was planned to be placed on the summit of Mauno O Wakea. Scientists have longed for this spot on the mountain as it lies far out from any landmass where there is less light pollution opposed to urban areas with dirtier atmospheres. Consequently, Native Hawaiians have protested the construction with human blockades which has led to the arrest of over 30 people. The construction of the Thirty-Meter Telescope has recently started on July 15, 2019, but “protests against construction on Mauna Kea have been going on for decades.” </p>
                <LinksList links={MaunaKeaLinks} name={MaunaKeaName}/>
            </div>
            <div className='links-container'>
                <h1 >Mapuche</h1>
                <p className='supersmall-margin-up'>There are just over 100,000 Mapuche in Argentina. As a country that highly esteems horticulture, the abuse and annihilation of their property is an assault on their way of life in general. By assaulting their territory and making laws preferring Neoliberalism, the Chilean government at the time looked to reduce the Mapuche culture and to lessen one's way of life is to strip away one's capacity. The power over the land, given to them through bargains and understandings, makes the locals remain as the main snag between the Chilean government and unlimited authority over the land. The denaturalization of the region was the initial phase in mistreating the individuals and working on the Mapuche personality. What's more, these individuals were given next to no portrayal in the Senate, and they stay one of the least fortunate, undereducated gatherings in Chile. The Chilean government wanted to impart the feeling of predominance over them so that after some time, individuals would think about the land and start to acknowledge the possibility of an outright administering power, therefore giving them free rule over the area. </p>
                <LinksList  links={MapucheLinks} name={MapucheName}/>
            </div>
        </div>
    )
}

export default HelpSection;