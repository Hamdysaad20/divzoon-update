import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

function services() {
  return (
    <div id="container" className="my-14  parent bg-gray-50 alldivcards">
      <h1 className="hover:scale-105 duration-500 md:mt-14 pt-24 mt-10  text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl  text-center ">
        Our Main Services
      </h1>

      <div
        id="child"
        className="py-7 pb-28 unselectable flex flex-row lg:overflow-hidden overflow-y-hidden overflow-scroll float:left;
 
 "
      >
        <div className="m-3">
          <div class="relative px-4  h-full mt-6">
            <div
              style={{ backgroundColor: '#C3D8F6' }}
              class=" bg-white divcard p-2 rounded-lg duration-500 hover:shadow-2xl my-7 pt-2"
            >
              <img
                src="/Serv1.png"
                className=" w-[260px] p-3  unselectable w-96 mb-3 object-cover display-block object-center overflow-hidden max-h-60 mx-auto "
              />

              <div class="flex items-baseline"></div>
              <h4 class="mt-1  text-2xl tracking-tight font-bold text-gray-800 sm:text-3xl text-center">
                Hire Dedicated Developers
              </h4>

              <div class="mt-4 text-center mb-9">
                <span class="t-5 mr-4  text-base text-gray-500  sm:text-lg    md:text-xl">
                  Creat your own team for yout software development project on
                  short term , long terom or permanent basis witj guaranteed
                  project delivery at affordable prices.
                </span>
              </div>
              <div className="text-center ">
                <Link href="/contactus">
                  <button className="  hover:text-black duration-500 mt-1 text-red-500 text-center h-12  md:w-32 w-full  font-medium ">
                    Sellect{' '}
                    <span className="ml-3">
                      <FontAwesomeIcon
                        className=" "
                        icon={faAngleRight}
                        size="1x"
                      />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="m-3 ">
          <div class="relative px-2 mt-6  h-full">
            <div
              style={{ backgroundColor: '#E6DDF4' }}
              class="relative   bg-white divcard p-4 rounded-lg duration-500 hover:shadow-2xl my-7 pt-2"
            >
              <img
                src="serv2.png"
                className=" w-[250px]  mb-12   object-cover object-center mx-auto p-2 "
              />

              <div class="flex items-baseline "></div>

              <h4 class="mt-1  text-2xl tracking-tight font-bold text-gray-800 sm:text-3xl text-center">
                Mobile Apps{' '}
              </h4>

              <div class="mt-4 text-center mb-9">
                <span class="t-5 mr-4  text-base text-gray-500  sm:text-lg    md:text-xl">
                  we build intuitive and engaging Android,iOS and cross-platform
                  apps for businesses, consumers and enterprises that end users
                  love and adapt to them very quickly.
                </span>
              </div>

              <div className="text-center">
                <Link href="/contactus">
                  <button className="  hover:text-black duration-500 mt-1 text-red-500 text-center h-12  md:w-32 w-full  font-medium ">
                    Sellect{' '}
                    <span className="ml-3">
                      <FontAwesomeIcon
                        className=" "
                        icon={faAngleRight}
                        size="1x"
                      />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="m-3 ">
          <div class="relative  px-4 mt-6  ">
            <div
              style={{ backgroundColor: '#CCCCFF' }}
              class=" bg-white divcard p-6 rounded-lg duration-500 hover:shadow-2xl my-7 pt-2"
            >
              <img
                src="serv3.png"
                className=" w-[300px] mb-12 object-cover mx-auto object-center   "
              />

              <div class="flex items-baseline"></div>

              <h4 class="mt-1  text-2xl tracking-tight font-bold text-gray-800 sm:text-3xl text-center">
                Ui/Ux Design
              </h4>

              <div class="mt-4 text-center mb-9">
                <span class="t-5 mr-4  text-base text-gray-500  sm:text-lg    md:text-xl">
                  Our web developers create custom web and web application
                  solutions. We deliver web presence to help you grow your
                  business using the best web technologies.
                </span>
              </div>
              <div className="text-center">
                <Link href="/contactus">
                  <button className="  hover:text-black duration-500 mt-1 text-red-500 text-center h-12  md:w-32 w-full  font-medium ">
                    Sellect{' '}
                    <span className="ml-3">
                      <FontAwesomeIcon
                        className=" "
                        icon={faAngleRight}
                        size="1x"
                      />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="m-3 ">
          <div class="relative px-4 mt-6 grid-cols-2  ">
            <div
              style={{ backgroundColor: '#C9E8DB' }}
              class="bg-white divcard p-6 rounded-lg duration-500 hover:shadow-2xl my-7 pt-2"
            >
              <div class="flex items-baseline">
                <img
                  src="/serv4.png"
                  className="object-cover mx-auto w-[300px] object-center   "
                />
              </div>
              <div>
                <h4 class="mt-1  text-2xl tracking-tight font-bold text-gray-800 sm:text-3xl text-center">
                  Web Development
                </h4>

                <div class="mt-4 text-center mb-9">
                  <span class="t-5 mr-4  text-base text-gray-500  sm:text-lg    md:text-xl">
                    Our web developers create custom web application solutions
                    we deliver web presence to help you grow your business using
                    the best web technologies
                  </span>
                </div>
              </div>

              <div className="text-center">
                <Link href="/contactus">
                  <button
                    id="box4"
                    className="hover:text-black duration-500 mt-3 text-red-500 text-center h-12  md:w-32 w-full  font-medium "
                  >
                    Sellect{' '}
                    <span className="ml-3">
                      <FontAwesomeIcon
                        className=" "
                        icon={faAngleRight}
                        size="1x"
                      />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default services;
