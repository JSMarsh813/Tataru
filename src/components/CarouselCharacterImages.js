const CarouselCharacterImages =() => {

return (

    <div className="carousel pb-8" style={{margin:"auto", minHeight:"400px", maxWidth:"900px"}}>

    <div id="slide1" className="carousel-item relative w-full backdrop-brightness-75"
        style={{backgroundImage:`url(${"https://64.media.tumblr.com/b02752ec104571f7aa51d4e6546cffb0/tumblr_nt6kmljog71uopbaio1_1280.png"})`,minHeight:"700px", maxWidth:"900px", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center" }}>
    
    <p className="w-full text-3xl text-yellowText font-bold tracking-widest " 
       style={{textAlign:"center", lineHeight:"100px", 
       }}
       >Mining</p>
      
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

     
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
        
      </div>
    
    </div> 


    <div id="slide2" className="carousel-item relative w-full"
    style={{backgroundImage:`url(${"https://i.redd.it/68ivucn0vwdy.png"})`,minHeight:"700px", maxWidth:"900px", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center" }}>
     
    
     <p className="w-full text-3xl text-yellowText font-bold tracking-widest backdrop-brightness-75" 
       style={{textAlign:"center", lineHeight:"100px", 
       }}
       >Making Fashionable Clothes</p>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 


    <div id="slide3" className="carousel-item relative w-full "
    style={{backgroundImage:`url(${"https://64.media.tumblr.com/0176d59358c90b4d52bf43e7035b6777/tumblr_o5ne4fyA4b1tz6yg1o1_500.gif"})`,minHeight:"700px", maxWidth:"900px", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center" }}>
     
    
     <p className="w-full text-3xl text-yellowText font-bold tracking-widest backdrop-brightness-75" 
       style={{textAlign:"center", lineHeight:"100px", 
       }}
       >Juggling, Singing, Dancing</p>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 



    <div id="slide4" className="carousel-item relative w-full backdrop-brightness-75"
    style={{backgroundImage:`url(${"https://external-preview.redd.it/J7askS_Ikym-c7nbkMsmM4x9mQQey4hmQCbbZXdzihE.png?auto=webp&s=76bf0b76b42b15f3361b73ec5f8ab4ba7bde9ac6"})`,minHeight:"700px", maxWidth:"900px", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center" }}>
     
    
     <p className="w-full text-3xl text-yellowText font-bold tracking-widest " 
       style={{textAlign:"center", lineHeight:"100px", 
       }}
       >Chatting with Locals</p>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div> 


  </div>

)
}

export default CarouselCharacterImages