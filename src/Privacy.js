import React from "react";
import BottomLead from "./components/BottomLead";

 


const Privacy = ({appType, tagLine, description, mainActionText, extraActionText, sitename}) => {
  return (
    <div id="Privacy" className=""> 
          <div className="flex flex-col justify-center bg-blue-800 lg:pt-24 lg:pb-14 lg:bg-cover ">
      <p className="text-3xl font-bold leading-normal text-center text-white lg:text-3xl lg:pt-10"> PRIVACY POLICY</p>
      <p className="text-3xl font-bold leading-normal text-center text-white lg:text-3xl lg:pt-10"> of</p>
      <p className="text-3xl font-bold leading-normal text-center text-white lg:text-3xl lg:pt-10">  {sitename} and all related Websites.</p>
      <p className="pl-12 pr-12 text-xl leading-8 text-center text-white lg:text-gray-200 lg:font-medium">
      Last updated July 31st, 2020.
      </p>
      
      <div className="flex flex-col flex-wrap items-center justify-center text-center py-8 w-8/12 mx-auto">
          <p className="pl-12 pr-12 m-14 text-lg leading-8 text-center text-white lg:text-gray-200 lg:font-medium">
            BY VISITING THIS WEBSITE AND REQUESTING INFORMATION, PRODUCTS OR SERVICES THERON, YOU AGREE TO BE BOUND BY THE TERMS AND CONDITIONS OF THIS PRIVACY POLICY. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT PROVIDE ANY INFORMATION OR USE ANY OF THE SERVICES OR PRODUCTS OFFERED OR PROVIDED ON ANY OF THE WEBSITES REFERRED TO IN THIS PRIVACY POLICY.

            PLEASE NOTE: THIS PRIVACY POLICY CHANGES FROM TIME TO TIME AND CHANGES ARE EFFECTIVE UPON POSTING. PLEASE CHECK BACK FREQUENTLY FOR UPDATES AS IT IS YOUR SOLE RESPONSIBILITY TO BE AWARE OF CHANGES.
            </p>
            <p className="pl-12 pr-12 mx-14 text-lg leading-8 text-center text-white lg:text-gray-200 lg:font-medium">

            WE DO NOT PROVIDE NOTICES OF CHANGES IN ANY MANNER OTHER THAN BY POSTING THE CHANGES AT THIS WEB SITE.

            This policy describes the information collection, use, and dissemination practices of Viewpointclub.com, ("Viewpointclub.com") and applies to Viewpointclub.com collection, use, storage and disclosure of information by Viewpointclub.com on its (a) websites, including all its divisions,
            
            subsidiaries and related companies (collectively, the "Websites"), (b) on various Third Party websites, and (c) to Viewpointclub.comother information collection, including the purchase of customer lists from Third Parties. Viewpointclub.com is not responsible for the information collection or privacy practices of Third Party websites or applications.

            CALIFORNIA RESIDENTS PRIVACY RIGHTS

            Companies that collect personally identifiable information ("PII") from California residents and disclose such information to Third Parties (including affiliated entities) for marketing purposes must, in response to a request by a consumer, either (1) provide a list detailing the categories of information shared and the entities to which such information was provided, or (2) provide a mechanism by which a consumer may opt-out of having their information shared with Third Parties. We have elected the second option and you may request that your PII not be shared with Third Parties by sending your request, including your full name, email address and postal address to: contact@Viewpointclub.com.
          </p>
        </div>
        <p className="text-white text-center text-lg italic ">Thank you for visiting.</p>
      </div>
      </div>
  );
};

export default Privacy;
