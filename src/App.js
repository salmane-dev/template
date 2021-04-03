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
import BottomLead from './components/BottomLead';
import Footer from './components/Footer';
import Unsubscribe from './Unsubscribe';
import Privacy from './Privacy';
import Notfound from './Notfound';

import logo from "./assets/logo.png";
import Rectangle_3 from './assets/growing-money.png';
import Rectangle_4 from './assets/online-shopping.png'; 
import Rectangle_5 from './assets/Rectangle_5.png';
import Rectangle_6 from './assets/action.png'; 
import Rectangle_7 from './assets/action.png'; 
const data = require('./data.json'); 
 


function App() {
 

  return (
    
    <Router>
    <div className="box-border">
   


      <div className="flex flex-col min-h-screen">
        
        <Navbar logo={logo}/>
        <Switch>
              <Route exact path="/">
                  <Hero 
                    appType={data.hero.appType}
                    tagLine={data.hero.tagLine}
                    description={data.hero.description}
                    mainActionText={data.hero.mainActionText}
                    extraActionText={data.hero.extraActionText}
                    primarycolor={data.hero.primarycolor}
                  />
                  
                  
                  <div id="faq" className="pt-10 mb-20 text-4xl font-semibold text-center text-blue-800 lg:font-bold">Welcome to {data.hero.sitename} ! </div>
                  
                  <Step
                    title={data.step1.title}
                    heading={'You\'ve found '+ data.hero.sitename + data.step1.heading}
                    description={data.step1.description}
                    img={data.step1.img}
                    alternate={data.step1.alternate}
                    />
                    <Step
                    title={data.step2.title}
                    heading={data.step2.heading}
                    description={data.step2.description}
                    img={data.step2.img}
                    alternate={data.step2.alternate}
                    /> 
                    
                    <BottomLead 
                      actionText={data.bottomLead.actionText}
                      description={data.bottomLead.description}
                      mainActionText={data.bottomLead.mainActionText}
                      extraActionText={data.bottomLead.extraActionText}
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
              <Notfound sitename={data.hero.sitename}/>
            </Route>

        </Switch>

        <Footer sitename={data.hero.sitename}/>
      </div>
    </div>
    
    <style dangerouslySetInnerHTML={{__html: `
      .bg-orange-600 { background-color:  `+data.hero.primarycolor+` }
      .bg-orange-700:hover, .bg-orange-600:hover { background-color:  `+data.hero.primarycolorhover+` }
      .bg-action2 {background-image: url(`+data.hero.action_bg+`)}
      .bg-hero2 {background-image: url(`+data.hero.hero_bg+`)}
      .bg-unsubscribe {background-image: url(`+data.hero.unsubscripbe_bg+`)}
    `}} />


  </Router>
  );
}

export default App;
