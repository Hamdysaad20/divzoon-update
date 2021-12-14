import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

import { faSearch } from "@fortawesome/free-solid-svg-icons";

function processver2() {
    return (
        
  
        <div className=" mb-20 max-w-6xl mx-auto">
<h1 className="animate-bounce duration-500 md:mb-20  text-center text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
            We Simplify Software Development Process
            </h1>        
          <div className="grid grid-cols-4  gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
            <div className="hover:shadow-lg duration-700 relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
              <div className="p-3 hover:scale-105 shadow-indigo-500/50   text-white bg-blue-700 rounded-full">
              <FontAwesomeIcon  icon={faSearch} size="2x" color="#00000"></FontAwesomeIcon> 
              </div>
              <h4 className="text-xl font-medium text-gray-700">Discover</h4>
              <p className="text-base text-center text-gray-500">We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.</p>
            </div>
            <div className="flex flex-col shadow-indigo-500/50  hover:shadow-lg duration-500 items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <div className="p-3 hover:scale-105  text-white bg-green-700 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 9l3 3l-3 3" /><line x1={13} y1={15} x2={16} y2={15} /><rect x={3} y={4} width={18} height={16} rx={2} /></svg>
              </div>
              <h4 className="text-xl font-medium text-gray-700"> Developemnt </h4>
              <p className="text-base text-center text-gray-500">Our design approach is to simplify.Using modern technologies, we build with efficiency and skill, creating flexible and scalable business solutions.</p>
            </div>
            <div className="flex flex-col hover:shadow-lg shadow-indigo-500/50 duration-500 items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">

              <div className="hover:scale-105 F p-3 text-white bg-red-700 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" /><line x1={12} y1={12} x2={20} y2="7.5" /><line x1={12} y1={12} x2={12} y2={21} /><line x1={12} y1={12} x2={4} y2="7.5" /><line x1={16} y1="5.25" x2={8} y2="9.75" /></svg>
              </div>
              <h4 className="text-xl font-medium text-gray-700">Deliver</h4>
              <p className="text-base text-center text-gray-500">We deliver your project just in time We take an iterative approach to both our work and our practice.</p>
            </div>
            </div>

        </div>
      
  
    
    )
}

export default processver2
