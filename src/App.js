import './App.css';

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch, 
  Link,
  HashRouter
} from "react-router-dom";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Step from './components/Step';
import Contact from './components/Contact'
import Footer from './components/Footer';
import Unsubscribe from './Unsubscribe';
import Privacy from './Privacy';
import Notfound from './Notfound'; 
const data = require('./data.json'); 



function App() {
 

  return (
    
    <Router>
    <div className="box-border">

      <div className="flex flex-col min-h-screen">
        
        <Navbar 
        sitename={data.hero.sitename} 
        logo={data.hero.logo}/>
        <Switch>
              <Route exact path="/">
                  <Hero 
                    tagLine={data.hero.tagLine}
                    description={data.hero.description}
                    mainActionText={data.hero.mainActionText}
                    extraActionText={data.hero.extraActionText}
                    primarycolor={data.hero.primarycolor}
                  />
                  
                  <div id="faq" className="pt-10 mb-20 text-4xl font-semibold text-center text-blue-800 lg:font-bold">Welcome to {data.hero.sitename} ! </div>
                  
                  <Step 
                    heading={'You\'ve found '+ data.hero.sitename + data.step1.heading}
                    description={data.step1.description}
                    img={data.step1.img}
                    alternate={data.step1.alternate}
                    />
                    <Step 
                    heading={data.step2.heading}
                    description={data.step2.description}
                    img={data.step2.img}
                    alternate={data.step2.alternate}
                    /> 
                    
                    <Contact 
                      actionText={data.Contact.actionText}
                      description={data.Contact.description}
                      mainActionText={data.Contact.mainActionText}
                      extraActionText={data.Contact.extraActionText}
                      sitename={data.hero.sitename}
                      primarycolor={data.hero.primarycolor}
                    />
            </Route>
              
            <Route exact path="/Privacy" >
              <Privacy sitename={data.hero.sitename}/>
            </Route>

            <Route exact path="/Unsubscribe" >
              <Unsubscribe sitename={data.hero.sitename}/>
            </Route>

            <Route>
              <Notfound />
            </Route>

        </Switch>

        <Footer sitename={data.hero.sitename}/>
      </div>
    </div>
    
    <style dangerouslySetInnerHTML={{__html: `
      .bg-orange-600 { background-color:  `+data.hero.primarycolor+` }
      .bg-orange-700:hover, .bg-orange-600:hover { background-color:  `+data.hero.primarycolorhover+` }
      .menu_item:hover { color:  `+data.hero.primarycolorhover+` }
      .bg-action2 {background-image: url(`+data.hero.action_bg+`)}
      .bg-hero2 {background-image: url(`+data.hero.hero_bg+`)}
      .bg-unsubscribe {background-image: url(`+data.hero.unsubscripbe_bg+`)}
      
       `}} />

     
       
 

  </Router>
  );
}

export default App;
