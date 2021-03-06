import React from 'react'

const Step = ({heading, description, img, alternate}) => {
    const row = "lg:items-center lg:flex lg:flex-row lg:justify-end min-h-28 mb-14" ;
    const rowReverse = "lg:items-center lg:flex lg:flex-row-reverse lg:justify-center min-h-28 mb-8";

    return (
        <div className={ alternate? row : rowReverse}>
          
          <div className="lg:w-2/5 lg:h-4/6 lg:-ml-20 lg:-mt-10lg:flex lg:flex-col lg:justify-center lg:items-start min-h-48 ">
              <p className="p-5 text-lg font-normal text-center text-blue-800 lg:pb-4 lg:text-xl lg:leading-loose lg:pl-0 lg:font-normal lg:text-left">{heading}</p>
              <p className="p-5 pb-0 pl-10 pr-10 text-3xl leading-10 text-center text-gray-400 lg:w-5/6 lg:pb-0 lg:text-3xl lg:text-left lg:p-0 lg:pl-0 lg:pr-0">{description}</p>
          </div>
          <div className="ml-10 lg:ml-0 lg:w-3/6 min-h-60 ">
              <img className=" lg:-mt-24 mb-12 mx-auto lg:-mb-20 py-24 w-2/4" src={img} alt="hero"/>
          </div>
            
        </div>
    )
}

export default Step
