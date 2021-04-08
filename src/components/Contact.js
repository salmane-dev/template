import React from "react";

const Contact = ({actionText, description, mainActionText, sitename,primarycolor}) => {
  return (
    <div className="flex flex-col p-4 justify-center bg-blue-800 lg:pt-24 lg:pb-14  bg-cover lg:h-full bg-action2 sm:bg-cover  lg:bg-cover  sm:bg-cover">
      <p id="contact" className="p-5 text-5xl font-bold leading-normal text-center text-white lg:text-4xl lg:pt-10">{actionText}</p>
      <p className="pl-12 pr-12 text-2xl leading-8 text-center text-gray-200 lg:text-gray-200 lg:font-medium">{description}</p>
      
      <div className="flex flex-col flex-wrap items-center justify-center ">
         
              <form className="w-full max-w-lg">
                  <div className="flex flex-wrap -mx-3 mb-2 mt-8 ">
                    <div className=" w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-white text-xl font-bold mb-2" for="grid-first-name">
                        First Name
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"></input>
                      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className=" w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-white text-xl font-bold mb-2" for="grid-last-name">
                        Last Name
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"></input>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-white text-xl font-bold mb-2" for="grid-password">
                        E-mail
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"  placeholder="Doe@email.com" required></input>
                    </div>
                  </div>
                    
                  <div className="flex flex-col flex-wrap items-center justify-center w-full h-24 py-5 mb-8 lg:flex-row lg:pt-1">
                    <input type="submit" value={mainActionText} className="pt-3 pb-3 pl-14 pr-14 mt-1 text-2xl font-semibold text-center text-white transition-all shadow-2xl bg-orange-600 lg:mt-0 rounded-xl hover:bg-orange-700 focus:outline-none ring-2 ring-orange-600 " ></input>
                  </div>
            </form>
      </div>

        <p className="pl-12 pr-12 text-2xl mb-4 leading-8 text-center text-white lg:text-white lg:font-medium">
        Thank you for visiting. If you have any questions or comments,
         please visit our Privacy Policy page or write to <a href={"mailto:support@"+ sitename}>support@{ sitename}</a>  
        </p>

        <div className="text-right">
          <a href="#top" className="text-3xl text-white font-semibold mr-4 py-2 px-5 transition-all rounded-full  hover:bg-orange-700 focus:outline-none ring-4 ring-orange-600 bg-orange-600">
              &#8593;
          </a>
        </div>
    </div>
  );
};

export default Contact;
