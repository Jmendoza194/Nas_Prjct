import React from 'react';
import Home from './home_page/Home';
import '../styles/util-styles.css';

class App extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className='full_container'>
                <Home />
            </div>
        )
    }
}

export default App;