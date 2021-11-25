import Image from 'next/image'

function cuimg() {
    return (
        <div className="hidden sm:inline-block">
                    <div
                      
                    className=" h-[760px]  mt-10 md:mt-12 lg:mt-17  lg:p-24">  
                    <img src="/dfd.png"  alt="me" layout="fill" objectFit="cover"  />
                      </div>

        </div>
    )
}

export default cuimg
