import Footer from '../components/footer'
import Headercomp from '../components/Headercomp'
import Section2 from '../components/section2'
import Services from '../components/services'
import Sliderbrands from '../components/sliderbrands'
import Alarm from '../components/alarm'
import Team from '../components/team'
import Processver2 from './../components/processver2';
import CallToAction from '../components/callToAction'
import Form from '../components/form'
import * as React from 'react';
function index() {
  return (

    <div>

<main>
<div className=" "><Alarm/></div>
<div className=""><Headercomp/></div>
<div className="bg-gray-50"><Sliderbrands/></div>

<div className=" sec2c"><Section2/></div>
<div className=" "><Services/></div>
<div className=" sec2c "><Processver2/></div>

<Form/>
<Team />

<CallToAction/>


<div className=" "><Footer/></div>

<div className='bg-red-500 absolute z-50 right-8 bottom-3'>

</div>
</main>
  </div>
    
  )
}

export default index


      
