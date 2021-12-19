import Footer from '../components/footer'
import Title from '../components/title'
import Services from '../components/services'
import Processver2 from './../components/processver2';
import Head from 'next/head'
import Alarm from '../components/alarm'
import HeaderDivzoon from './../components/headerDivzoon';



function services() {
    return (
        <div>
                  <Alarm/>  

<HeaderDivzoon
  H1headerGray=" Software Development Services "
  pheader="Web and Mobile Software Development Services, so you can make your websites achieve the most and increase the conversions!"
  imageSrc="/hr.png"


/> 
        <Services/>  
         <Processver2/>
<Footer/>



             
        </div>
    )
}

export default services
