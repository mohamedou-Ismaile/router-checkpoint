import React from 'react'
import {Route,Switch} from 'react-router-dom';
import App from './App';
import MovieCard from './components/MovieCard';

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import {v4 as uuidv4} from 'uuid';

import MovieDetail from './components/MovieDetail';
const RoutingComponents = () => {
    const movies =[
        {
            id : uuidv4() ,
            title : "Game of thrones",
            description : "HBO serie it has 8 seasons",
            tariler : "https://www.youtube.com/embed/rlR4PJn8b8I"
           

        },
        {
            id : uuidv4() ,
            title : "La casa del papel",
            description : "a spanish serie powered by NetFlix ",
            tariler : "https://www.youtube.com/embed/To_kVMMu-Ls"

        },
        {
            id : uuidv4() ,
            title : "Peeky Blinders",
            description : "is an epic following of a gangster family of Irish Traveller",
            tariler : "https://www.youtube.com/embed/Ruyl8_PT_y8"
          

        },
        {
            id : uuidv4() ,
            title : "Vikings",
            description : "The Vikings were raiders, pirates, traders, explorers, and colonizers during the 9th to 11th century",
            tariler : "https://www.youtube.com/embed/9GgxinPwAGc"
          

        }
    ]
    
    return (
        <div className="App">
            <Header />
            <Switch>
          <Route path="/" exact render ={(props)=><App {...props} movies={movies}></App>}></Route> 
          <Route path="/MovieCard" exact render ={(props)=><MovieCard {...props} movies={movies}></MovieCard>} ></Route>
          <Route path="/Details/:id" exact render ={(props)=><MovieDetail {...props} movies={movies}></MovieDetail>}></Route>
          
            </Switch>
            <Footer />
        </div>
    )
}

export default RoutingComponents
