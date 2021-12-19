
function callToAction() {
    return (
        <div>
                  <section className="px-2 pt-32 bg-white md:px-0">
        <div className=" items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
            <span className="block">Level Up Your <span className="block mt-1 text-red-700 lg:inline lg:mt-0">Website Pages</span></span>
          </h1>
          <p className="w-full mx-auto text-base text-left text-gray-500 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
          Upgrade your existing website and make it responsive with 2022 designs!
          </p>
          <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
          

            <a href="/contactus" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-red-700 rounded-md md:mb-0 hover:bg-red-900 md:w-auto">
              Try It Now
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1={5} y1={12} x2={19} y2={12} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
              Learn More
            </a>
          </div>
        </div>
        <div className="  items-center max-w-6xl px-5 mx-auto mt-10 text-center">
          <img src="/Cover.png" />
        </div>
      </section>
        </div>
    )
}

export default callToAction
    