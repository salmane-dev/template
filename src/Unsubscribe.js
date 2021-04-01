import React from "react";
import BottomLead from "./components/BottomLead";

 


const Unsubscribe = ({appType, tagLine, description, mainActionText, extraActionText, sitename}) => {
  return (
    <div id="Unsubscribe" className=""> 
          <div className="flex flex-col justify-center h-screen bg-blue-800 lg:pt-24 lg:pb-14 lg:bg-cover lg:h-full bg-unsubscribe">
      <p className="p-5 text-5xl font-bold leading-normal text-center text-white lg:text-4xl lg:pt-10"> UNSUBSCRIBE</p>
      <p className="pl-12 pr-12 text-xl leading-8 text-center text-white lg:font-medium">
        If at any time you'd like to unsubscribe from our mailing list, please enter your email address below.
      </p>
      
      <div className="flex flex-col flex-wrap items-center justify-center p-8 ">
         
          <form className="w-full max-w-lg">
     
                  <div className="flex flex-wrap -mx-3 ">
                    <div className="w-full px-1">
                      <label className="block uppercase tracking-wide text-white text-xl font-bold mb-2" for="grid-password">
                        E-mail
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"  placeholder="Doe@email.com"></input>
                    </div>
                  </div>
                  <div className="flex flex-col flex-wrap items-center justify-center w-full h-24 pt-3 lg:flex-row ">
                    <button className="py-2 px-10 text-xl font-semibold text-center text-white transition-all bg-orange-600 shadow-2xl lg:mt-0 rounded-xl hover:bg-orange-700 focus:outline-none ring-2 ring-orange-600 " >
                    Unsubscribe
                    </button>
                  </div>
          </form>
          
          <p className="pl-12 pr-12 mt-14 text-xl leading-8 text-center text-white lg:font-medium">
              If you have any questions or comments, please visit our Privacy Policy page or write to <a href={"mailto:support@"+ sitename}>support@{ sitename}</a> 
          </p>
      </div>

        <p className="text-white text-center text-lg italic ">Thank you for visiting.</p>
          
      </div>
      </div>
  );
};

export default Unsubscribe;
