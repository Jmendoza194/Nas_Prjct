import React from 'react';
import TableContents from './TableContents'
import Header from './Header'
import '../../styles/grid-styles.css'

class Home extends React.Component{
    constructor(){
        super()
        this.state={
            table: ['Nas', 'Can','Suck', 'My', 'Wee', 'Wee'],
            name:'Patrick is a cutie'
        }
    }

    render(){
        return(
            <div className='grid-container'>
                <Header name={this.state.name} />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WbMX_LoT_YA" 
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
                <TableContents content={this.state.table}/>
            </div>
        )
    }
}

export default Home;