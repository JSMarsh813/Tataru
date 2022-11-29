import clickAhead from '../images/clickAhead.png'

const SimpleDialog =({text}) => {

return ( 
<div>
            
        
<div className="border-4
        border-dialogOutline
        bg-dialogBackground
        rounded-lg
        my-auto
        mx-10       
        p-5
        text-black
        shadow-lg shadow-slate-900
        
                ">

                 <p >
                     {text}
                     
                   </p>
                   
        
                <div className="flex flex-col ">
          
                     <img className="self-end scale-75" src={clickAhead}/>

                 </div>

        </div>
</div>
    )
}


export default SimpleDialog
