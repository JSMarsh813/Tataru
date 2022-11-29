const LikesDislikeListItems =({backgroundImage,textForLikeDislike}) => {

    return ( 
 
        <li className="flex">  
            <section className="bg-red-900 border-r-2 border-b-2  border-l-2 border-slate-900 rounded-lg shadow-lg shadow-cyan-300/50 m-4"
             style={{
                width:"60px",
                height:"60px", 
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderTop:"1px solid white"
            }}
                >  
            
            </section>

            <span className="ml-4 mt-8 text-yellowText text-xl"> {textForLikeDislike}</span>
        </li>
        )

         }

export default LikesDislikeListItems