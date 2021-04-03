import React from "react"; 

const Notfound = () => {
  return (
    <div id="Privacy" className="flex m-auto "> 
        
        <div className='flex flex-col text-center'>
            <h1 className="text-9xl font-bold">404</h1>
            <div className='card-body'>
              <h5 className='card-title text-3xl my-8'>
                <a href='/'>
                  <button className='btn btn-primary text-blue-600'>Go Back</button>
                </a>
              </h5>
            </div>
          </div>

    </div>
  );
};

export default Notfound;
