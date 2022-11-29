import clickAhead from '../images/clickAhead.png'


const LargeDialog =({text}) => {

    return ( 
 <div className="flex">
            
        
        <div className="dialog-box
        border-4
        border-dialogOutline
        bg-dialogBackground
        rounded-lg
        my-auto
        mx-auto      
        -mt-80
        p-5
        text-black
        shadow-lg shadow-slate-900
        max-w-screen-md
        content-center
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

 /* https://stackoverflow.com/questions/71621526/how-to-shift-the-position-of-an-icon-from-left-to-right-in-tailwind-css*/

export default LargeDialog
