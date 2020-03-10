import React from 'react';
import TableContents from './TableContents'
import Header from './Header'
import Quote from './body/Quote'
import '../../styles/grid-styles.css';
import '../../styles/util-styles.css';

class Home extends React.Component{
    constructor(){
        super()
        this.state={
            table: ['Background', 'Videos','Help The Cause', 'Contact Us'],
            name:'Patrick is a cutie',
        }
    }

    render(){
        return(
            <div className='full_container'>
                <Header name={this.state.name} />
                <Quote quote={' “The ground on which we stand is sacred ground. It is the blood of our ancestors.”'}/>
                <div className='grid-container margin-up'>
                    <TableContents content={this.state.table}/>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/WbMX_LoT_YA" 
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                </div>
                
            </div>
        )
    }
}

export default Home;