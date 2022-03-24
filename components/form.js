function form() {
  return (
    <div>
      <section className="w-full px-8 py-16 bg-gray-50 xl:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
              <p className="font-medium text-red-700 uppercase">
                Building Businesses
              </p>
              <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                Changing The Way People Do Business.
              </h2>
              <p className="text-xl text-gray-600 md:pr-16">
                Learn how to engage with your visitors and teach them about your
                mission. We're revolutionizing the way customers and businesses
                interact.
              </p>
            </div>
            <div className="w-full mt-16 md:mt-0 md:w-2/5">
              <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                <h3 className="mb-6 text-2xl font-medium text-center">
                  Contact With E-Mail
                </h3>
                <h3 className="mb-6 text-lg text-red-600 font-medium text-center">
                  support@divzoon.com
                </h3>
                <p className="w-full mt-4 text-sm text-center text-gray-500">
                  tell us how can we help you.
                  <a href="/help" className="text-blue-500 underline">
                    Help?{' '}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default form;
