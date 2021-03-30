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

import logo from "./assets/logo.png";
import Rectangle_3 from './assets/growing-money.png';
import Rectangle_4 from './assets/online-shopping.png';
import Rectangle_5 from './assets/Rectangle_5.png';

  
function App() {
  const data = {
    hero:{
      appType: 'landing page',
      tagLine: 'Welcome to Yourwebsite.com ',
      description: 'best money-saving offers on the Web',
      mainActionText: 'Contact us',
      extraActionText: 'Unsubscribe',
    },
    step1: {
      title: 'Create an account',
      heading: 'You\'ve found Yoursite.com dedicated to finding the best money-saving offers on the Web and delivering them directly to you, the consumer.      Business profiles contain comprehensive information on contacts, products, services, trade experience and technology.',
      //description: 'An account is created with your email and a desired password',
      img: Rectangle_3,
      alternate: false,
    },
    step2: {
      title: 'Explore while shopping',
      heading: 'We strive to provide the highest quality and lowest prices available to our customers, \n   resulting in one of the best satisfaction ratings in the industry.    If you\'re not already receiving our money-saving offers and web-only specials,contact us today.',
      description: ' ',
      img: Rectangle_4,
      alternate: true,
    },
    bottomLead: {
      actionText: 'Join us now.',
      description: 'To receive our exclusive e-mail offers from Yourwebsite.com name companies, please complete the form bellow.',
      mainActionText: 'Submit',
      extraActionText: '',
    },
  }
  return (
    
    <Router>
    <div className="box-border">
      <div className="flex flex-col">
        
        <Navbar logo={logo}/>
        <Switch>
            <Route exact path="/">
              
        <Hero 
          appType={data.hero.appType}
          tagLine={data.hero.tagLine}
          description={data.hero.description}
          mainActionText={data.hero.mainActionText}
          extraActionText={data.hero.extraActionText}
        />
        
        {/* <div id="divider" className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto "></div> */}
        
        <div id="faq" className="pt-10 mb-20 text-4xl font-semibold text-center text-blue-800 lg:font-bold">Welcome to Yourwebsite.com ! </div>
        
        <Step
          title={data.step1.title}
          heading={data.step1.heading}
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
          />
 
            </Route>
            
            <Route exact path="/Privacy" >
              <Privacy/>
            </Route>

            <Route exact path="/Unsubscribe" >
              <Unsubscribe/>
            </Route>
        </Switch>

          <Footer logo={logo}/>
      </div>
    </div>
  </Router>
  );
}

export default App;
