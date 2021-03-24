import React from 'react'

const Step = ({title, heading, description, img, alternate}) => {
    const row = "lg:items-center lg:flex lg:flex-row lg:justify-end";
    const rowReverse = "lg:items-center lg:flex lg:flex-row-reverse lg:justify-center";

    return (
        <div className={alternate?row : rowReverse+" min-h-28 mb-14"}>
          
          <div className="lg:w-2/6 lg:h-4/6 lg:-ml-20 lg:-mt-10lg:flex lg:flex-col lg:justify-center lg:items-start min-h-48 ">
            
            {/* <p className="pb-5 text-2xl font-semibold text-center text-orange-400 lg:pb-0 lg:-mb-3 lg:text-lg lg:font-bold lg:text-left">{title}</p> */}
            <p className="p-5 text-lg font-normal leading-relaxed text-center text-blue-800 lg:pb-4 lg:text-xl lg:pl-0 lg:font-normal lg:text-left">{heading}</p>
            <p className="p-5 pb-0 pl-10 pr-10 text-2xl leading-10 text-center text-gray-400 lg:w-5/6 lg:pb-0 lg:text-lg lg:text-left lg:p-0 lg:pl-0 lg:pr-0">{description}</p>
          </div>
          <div className="ml-10 lg:ml-0 lg:w-3/6 min-h-60 ">
            <img className=" lg:-mt-24 mb-12 mx-auto lg:-mb-20 py-24" src={img} alt=""/>
            
          </div>
           
           
        </div>
    )
}

export default Step
