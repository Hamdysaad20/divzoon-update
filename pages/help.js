import HeaderDivzoon from './../components/headerDivzoon';
import Title from '../components/Title'

import Footer from '../components/footer'

function help() {
    return (
     
     <div>
<Title/>
           <HeaderDivzoon
  H1headerGray="Are You Stuck ?  get help "
  pheader="Contact us on Support email , so we could help you find what you need within under 48 hours "
  imageSrc="/Saly-11.png"


/> 


<section className="w-full px-8 py-16 bg-gray-50 xl:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
              <p className="font-medium text-5xl tracking-tight   sm:text-6xl md:text-8xl text-red-700 uppercase">Ask any Quation</p>

            </div>
            <div className="w-full mt-16 md:mt-0 md:w-2/5">
              <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                <h3 className="mb-6 text-2xl font-medium text-center">Contact With Support</h3>
                <form netlify 
                name="contact-form"
                data-netlify="true"
                action="https://formsubmit.co/support@divzoon.com" method="POST" />
                <input required type="email" name="email" className="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-red-700 focus:outline-none"  id="email" placeholder="Email address" />
                <textarea required type="email" name="email" className="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-red-700 focus:outline-none"  id="email" placeholder="How can we help ?" />

                  <button  type="submit" className="w-full px-3 py-4 duration-500 hover:bg-black font-medium text-white bg-red-700 rounded-lg" value="Send">Send</button>
              
               <form/>
                <p className="w-full mt-4 text-sm text-center text-gray-500">Or click here  <a href="mailto:support@divzoon.com" className="text-blue-500 underline">support@divzoon.com </a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
<Footer/> 
        </div>
    )
}

export default help
