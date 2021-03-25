import React from "react";

const BottomLead = ({actionText, description, mainActionText, extraActionText}) => {
  return (
    <div id="contact" className="flex flex-col p-4 justify-center h-screen bg-blue-800 lg:pt-24 lg:pb-14 lg:bg-cover lg:h-full lg:bg-action">
      <p className="p-5 text-5xl font-bold leading-normal text-center text-white lg:text-4xl lg:pt-10">{actionText}</p>
      <p className="pl-12 pr-12 text-2xl leading-8 text-center text-gray-200 lg:text-gray-200 lg:font-medium">{description}</p>
      
      <div className="flex flex-col flex-wrap items-center justify-center ">
         
          <form class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-2 mt-8 ">
        <div class=" w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-white text-xl font-bold mb-2" for="grid-first-name">
            First Name
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"></input>
          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div class=" w-1/2 px-3">
          <label class="block uppercase tracking-wide text-white text-xl font-bold mb-2" for="grid-last-name">
            Last Name
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"></input>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-white text-xl font-bold mb-2" for="grid-password">
            E-mail
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"  placeholder="Doe@email.com"></input>
          {/* <p class="text-gray-200 text-xs italic">Some tips - as long as needed</p> */}
        </div>
      </div>
        
      </form>
      </div>

      <div className="flex flex-col flex-wrap items-center justify-center w-full h-48 pt-5 lg:flex-row lg:pt-1">
             
        <button className="pt-3 pb-3 pl-14 pr-14 mt-1 text-2xl font-semibold text-center text-white transition-all bg-orange-600 shadow-2xl lg:mt-0 rounded-xl hover:bg-orange-700 focus:outline-none ring-2 ring-orange-600 " >
          {mainActionText}
        </button>
        


      </div>
        <p className="pl-12 pr-12 text-2xl mb-12 leading-8 text-center text-white lg:text-white lg:font-medium">
        Thank you for visiting. If you have any questions or comments,
         please visit our Privacy Policy page or write to <a href="mailto:support@Yourwebsite.com">support@Yourwebsite.com</a>  
        </p>
    </div>
  );
};

export default BottomLead;
