import React from "react";

const Footer = ({logo}) => {
  const year = new Date().getFullYear()

  return (
    <div className="flex flex-row flex-wrap items-center justify-around px-10 py-4">
      
      <div className="mt-2 text-lg text-blue-800 lg:mt-0">
      All rights reserved &copy; {year} Yourwensite.com 
      </div>
    </div>
  );
};

export default Footer;
