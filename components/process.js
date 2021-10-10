import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faObjectGroup } from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";


function process() {
    return (
        <div className="text-center md:text-left mt-20 pt-10 sm:motion-safe:hover:animate-none">
          
            <h1 className="  text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
            We Simplify Software Development Process
            </h1>
            <div className="flex md:text-left text-center flex-col md:flex-row mt-10  px-5">
                <div className="  flex-1 max-w-lg mr-2 mt-8 transform motion-safe:hover:scale-110 duration-500">
               <div > <FontAwesomeIcon icon={faSearch} size="4x" color=" #ef4444"></FontAwesomeIcon> </div> 
<h1 className=" mt-8 mb-6  text-1x tracking-tight font-extrabold text-gray-900 sm:text-3xl">
Discover
</h1>
<p className=" pt-1 mr-4  text-base text-gray-500  sm:text-lg    md:text-xl">
We shape brands through exploration, applying in-depth research to challenge assumptions at every turn. 
</p>

                </div>
                <div className="flex-1 max-w-lg mr-2 mt-8 transform motion-safe:hover:scale-110 duration-500">
             <div>  <FontAwesomeIcon icon={faObjectGroup} size="4x" color="#f59e0b"></FontAwesomeIcon></div>  
             <h1 className="mt-8 mb-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl">
             Design
</h1>
<p className=" pt-1 mr-4  text-base text-gray-500  sm:text-lg    md:text-xl">
Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users.
</p>
                </div>
                <div className="flex-1 max-w-lg mr-2 mt-8 transform motion-safe:hover:scale-110 duration-500">
                <div> <FontAwesomeIcon icon={faFileCode} size="4x" color="#10b981"></FontAwesomeIcon> </div> 
                <h1 className=" mt-8 mb-6  text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl">
                Build
</h1>
<p className=" pt-1 mr-4  text-base text-gray-500  sm:text-lg    md:text-xl">
Using modern technologies, we build with efficiency and skill, creating flexible and scalable business-driven solutions.
</p>
                </div>
                <div className="flex-1 max-w-lg mt-8 transform motion-safe:hover:scale-110 duration-500">
                <div> <FontAwesomeIcon icon={faClipboardCheck} size="4x" color="#3b82f6"></FontAwesomeIcon> </div> 
                <h1 className="mt-8 mb-6  text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl">
                Deliver
</h1>
<p className=" pt-1 mr-4  text-base text-gray-500  sm:text-lg    md:text-xl">
We take an iterative approach to both our work and our practice, always looking for ways to improve what we do.
</p>
                </div>

            </div>
        </div>
    )
}

export default process
