import tataruQuest from "../images/tataruQuest.png"
import DecisionButton from "../components/DecisionButton"
import CharacterSelectionBackground from "../images/CharacterSelectionBackground.png"
import { Link } from "react-router-dom";


const boxStyle = {
    background: 'linear-gradient(#656565, #393939, #656565)'

};
const buttonShadows ={
    borderBottom: '4px solid black',
    borderRight: '1px solid black',
    borderLeft: '1px solid black',
    borderTop: '3px solid #bababa',
    boxShadow: '5px 2px 9px #656565'
}

const LandingPageIntro =() => {

    return ( 

    <div className="relative"
         style={{backgroundImage:`url(${CharacterSelectionBackground})`,
         backgroundRepeat: 'no-repeat',
         backgroundSize: 'cover',
         maxWidth:'100%',
         backgroundPosition: 'center',
                           }}>      
     
         
<div className="w-96 h-96 absolute rounded-full hidden
md:top-1/4 md:right-1/4 md:left-1/4" 

id="popUpImage"

style={{marginLeft:"20%",
  marginRight:"20%",
  marginTop:"1%"}}>


<img src="https://i.kym-cdn.com/photos/images/original/001/231/998/169.gif" 

className="rounded-full relative mt-9"/>

<div className="bg-slate-900 rounded-full inline-block pr-2 py-2"
   style={{...boxStyle,...buttonShadows}}   >     

<p className="text-slate-100 font-thin ml-4"> Are you sure? Click decline again to close </p>
</div>

</div>



        <img className="mx-auto" src={tataruQuest}/>

        <div className="border-4 border-blue-800 w-full 
       ">
  
            <section             
            className="flex absolute top-3/4 left-auto w-screen justify-center sm:gap-32">
       
                <div  className="flex-center">
                <Link to="/AboutTataru"> <DecisionButton text="Accept"/> </Link>
                </div>      
               

                <div className="flex-center ml-4">
                     <DecisionButton name="decline" id="decline" text="Decline"/>
                 </div>

      

            </section>

            
        </div>
              
              
    </div>
        )
}


export default LandingPageIntro