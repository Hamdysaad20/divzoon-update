import Footer from "../components/footer"
import Pricing from "../components/pricing"
import Alarm from '../components/alarm'
import Title from '../components/title'
import Head from 'next/head'
import HeaderDivzoon from './../components/headerDivzoon';

import CallToAction from "../components/callToAction"
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: 'pricingp' },
  { name: 'Contact Us', href: '/contactus' },
]  
function pricingp() {
    return (
    
    <div>
                         <div className=" "><Alarm/></div>
     <Head>
     <Title/>  
          <link rel="shortcut icon" href="/divicobg.ico" />
     </Head>


     <HeaderDivzoon
  H1headerGray=" Choose what works with  you ! "
  pheader="Web and Mobile Software Development Services, with fixed price!"
  imageSrc="/pric.png"


/> 
            <Pricing/>
            <CallToAction/>

            <Footer/>
        </div>
    )
}

export default pricingp
