/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export default function Example() {
    function myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
    return (

        
    <div style={{display:'block'}} id="myDIV" className="bg-red-500" >
      <div  className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-red-800">
              <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden text"> 25% off for you first project</span>
              <span className="hidden md:inline">Big news! We offers you 25% off for you first project
</span>
            </p>
          </div>
          <Link href="/services">
            <button
              
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </button>
            </Link>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">

          </div>
          <div 
                  
 className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button 
            onClick={myFunction}  
             type="button"
              className=" ml-2 flex p-2 rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span     className="sr-only ">Dismiss</span>
              <XIcon className=" h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )

  
}
