import React from 'react';
import TableContents from './TableContents';
import Header from './Header';
import Quote from './Intro/Quote';
import VideoList from './Videos/VideoList';
import HelpSection from '../Help_Section/HelpSection';

import '../../styles/grid-styles.css';
import '../../styles/util-styles.css';



class Home extends React.Component{
    constructor(){
        super()
        this.state={
            table: ['Background', 'Videos','Help The Cause', 'Contact Us'],
            name:'Patrick is a cutie',
            icons: ['More Info', 'Videos', 'How to Help'],
            iconPics:['https://cdn1.iconfinder.com/data/icons/education-set-4/512/information-512.png',
                      'https://cdn4.iconfinder.com/data/icons/web-interface-6/12/player-circle-512.png',
                      'https://cdn4.iconfinder.com/data/icons/vectory-symbols/40/help_1-512.png'],
            vidName:['We Are Mauna Kea', 'Kū Haʻaheo','No Video', 'No Video'],
            vidDescription:['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
            videos:['https://www.youtube.com/embed/A2w8TWpSfgQ','https://www.youtube.com/embed/WbMX_LoT_YA','',''],
            MaunaKeaName:['Mauna Kea Legal Defense Fund','Mauna Kea Protection Fund','Mauna Kea ‘Ohana Fund'],
            MapucheName:['?a','b','c'],
            MaunaKeaLinks:['https://org.salsalabs.com/o/2699/p/salsa/donation/common/public/?donate_page_KEY=7145',
                            'https://7genfund.abilafundraisingonline.com/hpmaunakea',
                            'https://www.protectmaunakea.net/mauna-kea-ohana-fund'],
            MapucheLinks:['a','b','c']
            
        }
    }

    render(){
        return(
            <div className='full_container'>
                <Header name={this.state.name} />
                <Quote quote={' “The ground on which we stand is sacred ground. It is the blood of our ancestors.”'} icons={this.state.icons} iconPics={this.state.iconPics}/>
                <VideoList vids={this.state.videos} vidName={this.state.vidName} vidDescription={this.state.vidDescription} />
                <HelpSection MaunaKeaLinks={this.state.MaunaKeaLinks} MapucheLinks={this.state.MapucheLinks} MaunaKeaName={this.state.MaunaKeaName} MapucheName={this.state.MapucheName} />
            </div>
        )
    }
}

export default Home;

