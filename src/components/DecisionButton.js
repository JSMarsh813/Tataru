import { useState } from 'react';

const buttonColor={color:'white'}
const buttonBackground={backgroundColor:'Grey'}


const DecisionButton =({text}) => {

    const [isHover, setIsHover] = useState(false);
    
    const handleMouseEnter = () => {
       setIsHover(true);
    };
    const handleMouseLeave = () => {
       setIsHover(false);
    };
    
    const boxStyle = {
        background: isHover ? 'linear-gradient(#747474, #4d4b4c, #747474)' : 'linear-gradient(#656565, #393939, #656565)'
    
    };
    const buttonShadows ={
        borderBottom: '4px solid black',
        borderRight: '1px solid black',
        borderLeft: '1px solid black',
        borderTop: '3px solid #bababa',
        boxShadow: '5px 2px 9px #656565'
    }

    function popUp() {
        let triggerImage=document.querySelector("#popUpImage")

        if (triggerImage.classList.contains("hidden"))
        {
             triggerImage.classList.remove("hidden")}

        else {triggerImage.classList.add("hidden")
        }
              console.log(triggerImage.classList)
    }

    //         if (triggerImage.style.display="none")
    //     {
    //          triggerImage.style.display="block"}

    //     else {triggerImage.style.display="none"
    //     }
    //           console.log(triggerImage.style)
    //   }

    return ( 

   
        <button 
                className="
                px-16 py-1 rounded-full text-base text-white popup" 

                style={{...boxStyle,...buttonShadows}}                
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}

                onClick={(e) => e.target.innerHTML!="Accept"&& popUp()}>
                    
              
            {text}
            
            </button>

    )
}

export default DecisionButton