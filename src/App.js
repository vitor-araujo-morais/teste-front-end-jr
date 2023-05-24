import './App.css';
import HeaderSection1 from './components/header/section1/HeaderSection1.js'
import HeaderSection2 from './components/header/section2/HeaderSection2.js'

import BodySection1 from './components/body/section1/BodySection1'
import BodySection2 from './components/body/section2/BodySection2'
import BodySection3 from './components/body/section3/BodySection3'
import BodySection4 from './components/body/section4/BodySection4'
import BodySection5 from './components/body/section5/BodySection5'
import BodySection6 from './components/body/section6/BodySection6'
import BodySection7 from './components/body/section7/BodySection7'
import BodySection8 from './components/body/section8/BodySection8'
import BodySection9 from './components/body/section9/BodySection9'

import FooterSection1 from './components/footer/section1/FooterSection1'
import FooterSection2 from './components/footer/section2/FooterSection2'


import SeeAll from './components/insertComponents/SeeAll'

function App() {
  return (
    <div>
    <div className='disappear-400'><HeaderSection1/></div>
    <HeaderSection2/>

    <div className='disappear-650'><BodySection1/></div>
    <BodySection2/>
    <BodySection3/>
    <BodySection4/>
    <div className='disappear-650'><BodySection5/></div>
    <BodySection6/>
    <BodySection7/>

    <BodySection4/>
    <SeeAll/>
    <BodySection6/>

    <BodySection8/>
    <BodySection9/>

    <BodySection4/>
    <SeeAll/>
    <BodySection6/>

    <FooterSection1/>
    <FooterSection2/>


    </div>
  );
}

export default App;
