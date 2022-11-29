import React from 'react'
import MainNavDaisy from "../components/MainNavDaisy";
import LandingPageIntro from '../components/LandingPageIntro';

function LandingPage(){

    return (
       <div className="content bg-slate-800 relative">
         

         <MainNavDaisy/>



            <LandingPageIntro/>

       
       </div>

    )
}

export default LandingPage