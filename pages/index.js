import Head from 'next/head'
import { Fragment } from 'react'
import Footer from '../components/footer'
import Headercomp from '../components/Headercomp'
import Ourwork from '../components/ourwork'
import Process from '../components/process'
import Section2 from '../components/section2'
import Services from '../components/services'
import Sliderbrands from '../components/sliderbrands'
import Technologys from '../components/technologys'
import Alarm from '../components/alarm'


export default function Home() {
  return (

    <Fragment>

    <div>
            <Head>
        <title>Divzoon</title>
        <link rel="icon" href="/divicobg.ico" />
      </Head>
    </div>
    <div className=" "><Alarm/></div>

    <div className=""><Headercomp/></div>
    <div className="bg-gray-50"><Sliderbrands/></div>
    <div className=" sec2c"><Section2/></div>
    <div className=" "><Services/></div>
    <div className=" sec2c"><Process/></div>
    <div className=" sec2c"><Technologys/></div>
    <div className=" sec2c"><Ourwork/></div>
   
   
    <div className=" "><Footer/></div>






    </Fragment>

    
  )
}
