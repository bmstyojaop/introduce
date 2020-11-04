import React from 'react';
import './assets/styles/style.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Header,About, FirstView, Warks, Portfolio, Guerrilla} from './components/index'



const App = () => {
    return (
        <Router>
            <Header/>
            <main className="MainSection">
                <Route exact path='/' component={FirstView}/>
                <Route path='/Warks' component={Warks}/>
                <Route path='/Portfolio' component={Portfolio}/>
                <Route path='/Guerrilla' component={Guerrilla}/>
                <Route path='/About' component={About}/>
            </main>
        </Router>
            
    )
}

export default App;