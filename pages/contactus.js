import Footer from '../components/footer'
import Head from 'next/head';
import Alarm from '../components/alarm'
import ContHeader from '../components/contHeader'
import Form from '../components/form'
import Title from '../components/Title'



function contactus() {
    return (
       
       <div className="">
           
          <Head>
          <link rel="shortcut icon" href="/divicobg.ico" />
          <Title tit="Contact Us"  /> 
     </Head>
               <div className=" "><Alarm/></div>

<ContHeader/>
<Form/>
<Footer/>
   </div>
             
     
    )
}

export default contactus
