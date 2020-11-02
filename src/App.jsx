import React from 'react';
import './assets/styles/style.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Header, FirstView, Warks, Portfolio, Guerrilla} from './components/index'



const App = () => {
    return (
        <Router>
            <Header/>
            <main>
                <section className ="MainSection">
                    <Route exact path='/' component={FirstView}/>
                    <Route path='/Warks' component={Warks}/>
                    <Route path='/Portfolio' component={Portfolio}/>
                    <Route path='/Guerrilla' component={Guerrilla}/>
                </section>
            </main>
        </Router>
            
    )
}

export default App;