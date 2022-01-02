
import Image from 'next/image'

function team() {

  return (
        <div>
           
      <section className="relative py-20 overflow-hidden bg-white">
        <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
          <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full  md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50" />
        </span>

        
        <span className="absolute bottom-0 left-0"> </span>
        <div className=" relative px-16 mx-auto max-w-7xl">
          <p className="font-medium tracking-wide text-red-500 uppercase">OUR TEAM</p>
          <h2 className="relative max-w-lg mt-5 mb-10 text-4xl font-semibold leading-tight lg:text-5xl">An incredible team of <br />amazing individuals</h2>
          <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center col-span-1">
              <div className="hover:scale-105 duration-300  relative p-5">
                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-100" />
                <Image className="relative z-20 w-full rounded-full"  height="200" width="200"  src="/ava/2.jpg" />
              </div>
              <div className="mt-3 space-y-2 text-center">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3>Hamdy Saad</h3>
                  <p className="text-blue-600">FullStack Developer</p>
                </div>

              </div>
            </div>
            <div className="flex flex-col items-center justify-center col-span-1">
              <div className="hover:scale-105 duration-300  relative p-5">
                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-yellow-100" />
                <Image className="relative z-20 w-full rounded-full" height="200" width="200" src="/ava/1.jpg" />
              </div>
              <div className="mt-3 space-y-2 text-center">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3>Mostafa Hassan</h3>
                  <p className="text-blue-600">Android Developer</p>
                </div>

              </div>
            </div>
            <div className="flex flex-col items-center justify-center col-span-1">
              <div className="hover:scale-105 duration-300  relative p-5">
                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-red-200" />
                <Image className="relative z-20 w-full rounded-full" height="200" width="200" src="/ava/3.jpg" />
              </div>
              <div className="mt-3 space-y-2 text-center">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3>Esraa Afifi</h3>
                  <p className="text-blue-600">Flutter Developer</p>
                </div>

              </div>
            </div>
            <div className="flex flex-col items-center justify-center col-span-1">
              <div className="hover:scale-105 duration-300  relative p-5">
                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-100" />
                <Image className="relative z-20 w-full rounded-full" height="200" width="200" src="/ava/4.jpg" />
              </div>
              <div className="mt-3 space-y-2 text-center">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3>Tony Misbah</h3>
                  <p className="text-blue-600">Designer & 3D Artist</p>
                </div>

              </div>
            </div>
            <div className="flex flex-col items-center justify-center col-span-1">
              <div className="hover:scale-105 duration-300  relative p-5">
                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-purple-200" />
                <Image className="relative z-20 w-full rounded-full" height="200" width="200" src="/ava/5.jpg" />
              </div>
              <div className="mt-3 space-y-2 text-center">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3> Dina Alamoury</h3>
                  <p className="text-blue-600">Frontend Developer</p>
                </div>

              </div>
            </div>
            <div className="flex flex-col items-center justify-center col-span-1">
              <div className="hover:scale-105 duration-300  relative p-5">
                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-100" />
                <Image className="relative z-20 w-full rounded-full" height="200" width="200" src="/ava/6.jpg" />
              </div>
              <div className="mt-3 space-y-2 text-center">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3>Hatem Ali</h3>
                  <p className="text-blue-600">Frontend Developer</p>
                </div>

              </div>
            </div>
            <div className=" flex flex-col items-center justify-center col-span-1">
              <div className=" hover:scale-105 duration-300 relative p-5">
                <div className=" absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-100" />
                <Image className="relative z-20 w-full rounded-full" height="200" width="200" src="/ava/7.jpg" />
              </div>
              <div className="mt-3 space-y-2 text-center">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3>Jonathan  Richards</h3>
                  <p className="text-blue-600">Sales Manager</p>
                </div>

              </div>
            </div>
            <div className="flex flex-col items-center justify-center col-span-1">
              <div className=" relative p-5">
                <div className="  absolute z-10 w-full h-full  -mt-5 -ml-5 rounded-full rounded-tr-none  bg-gray-200" />
                <img className="animate-ping p-6 sm:12 md:p-11 relative z-20 w-full rounded-full"height="200" width="200" src="/plus-1.png" />

              </div>
              <div className="mt-3 space-y-2 text-center">
                <div className="space-y-1 text-lg  font-medium leading-6">
                  <h1 className="text-red-600 hover:text-black duration-300 text-3xl pb-7">Join Us</h1>
                </div>
               
              </div>
            </div>
          </div>
              

        
        </div>


      </section>
        </div>
    )
}

export default team
