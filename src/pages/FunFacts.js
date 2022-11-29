import React from 'react'
import MainNavDaisy from "../components/MainNavDaisy"
import LikeDislikeSection from '../components/LikeDislikeSection'
import HorizontalWithImageBullets from '../components/HorizontalWithImageBullets'
import CarouselCharacterImages from '../components/CarouselCharacterImages'

function FunFacts(){

    return (

    <div className="content bg-slate-800">

        <MainNavDaisy/>   
            

        <img src="https://ffxiv.gamerescape.com/w/images/thumb/2/28/101179.png/800px-101179.png" style={{margin:"auto",maxHeight:"300px"}}/>

     
        
        <h2 className="text-slate-100 font-black text-center text-3xl  drop-shadow-xl mt-2 font-medium"> Personality</h2>
     
        <ul style={{listStyleImage: "none",
     
                    }} className="ml-10 my-4">
   

             <HorizontalWithImageBullets phrase={"Keen judge of character"}/>

              <HorizontalWithImageBullets phrase={"always willing to help with boundless enthusiasm and a smile"}/>

             <HorizontalWithImageBullets phrase={"Willing to use blackmail"}/>

             <HorizontalWithImageBullets phrase={"Can be mischievous"}/>

             <HorizontalWithImageBullets phrase={"Talented artisan"}/>

             <HorizontalWithImageBullets phrase={"Shrewd businesswoman"}/>
  
</ul >
     

<img src="https://pbs.twimg.com/media/FGDlXdhXIAAwKAw?format=jpg&name=small"
        style={{margin:"auto",maxHeight:"300px",paddingBottom:"20px"}}/>


      <h2 className="text-slate-100 font-black text-center text-3xl  drop-shadow-xl mb-5 font-medium"> Hobbies </h2>

     <CarouselCharacterImages/>

  

<LikeDislikeSection/>

    
    </div>



    )
}

export default FunFacts