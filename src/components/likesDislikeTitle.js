import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const LikesDislikesTitle =({icon,title}) => {

    return ( 

<div className="border-r-2 border b-2 border-slate-600 
bg-gradient-to-b from-[#434c5e] to-[#16191f]
shadow-lg 
flex
relative
">

  
<FontAwesomeIcon icon={icon} size="2xl" color="gold" className="basis-2/6 absolute left-5 top-3
    animate-pulse" />

    
     <h2 className="text-yellowText font-black text-3xl
     font-serif font-thin
     text-center 
     m-3
     basis-4/6
     pl-6
       "> {title}</h2>
        
 </div>

)
}

export default LikesDislikesTitle