import React from 'react'
import MainNavDaisy from "../components/MainNavDaisy";
import LargeDialog from '../components/LargeDialog';
import captured from '../images/captured.jpg'
import snow from '../images/snow.jpg'

function AboutTataru(){

    return (
<div className="content bg-slate-800" >
    <MainNavDaisy/>    



    <img src="https://assets.gamepur.com/wp-content/uploads/2022/04/12145609/finalfantasyxiv_newfoundAdventure_hero.jpg"
     style={{margin:"auto",
            maxHeight:"300px",
            }}/>     
  
      <div className="mb-10 sectionContainer pt-10">

            <div style={{backgroundImage:`url(${"https://pbs.twimg.com/media/ELUeIOgWsAAp_1k.jpg"
            })`,
                  backgroundRepeat: 'no-repeat',
                  minHeight: '800px',
                  maxWidth:'100%',
                  backgroundPosition: 'center',
                                    }}>      
            </div> 

             <LargeDialog text= {"We first meet Tataru Taru at the base of operations for the Scions of the seventh dawn, where she worked as a secretary and coinkeeper. She used her considerable social acumen to build relationships and increase its influence. As the organization slowly but surely grew into an association of like-minded and gifted souls, she was instrumental in seeking out potential members blessed with the Echo."}> 
         
          </LargeDialog>
         
      </div>
  
      <div className="mb-10 sectionContainer">
     
            <div style={{backgroundImage:`url(${captured})`,
                  backgroundRepeat: 'no-repeat',
                  minHeight: '800px',
                  maxWidth:'120%',
                  backgroundPosition: 'center',
                                    }}>      
            </div> 

             <LargeDialog text ={"When the Garlean Empire attacked the base, she was among those Livia sas Junius captured and was taken to Castrum Centri. The Warrior of Light and Biggs and Wedge rescued Tataru, along with the other captured leaders of the Scions, and she resumed her duties at the Waking Sands."}>
     
             </LargeDialog>

      </div>     

      <div className="mb-10 sectionContainer">

            <div style={{backgroundImage:`url(${"https://64.media.tumblr.com/b02752ec104571f7aa51d4e6546cffb0/tumblr_nt6kmljog71uopbaio1_1280.png"})`,
                  backgroundRepeat: 'no-repeat',
                  minHeight: '800px',
                  maxWidth:'100%',
                  backgroundPosition: 'center',
                                    }}>      
            </div> 
            <LargeDialog text={"When the Scions moved their headquarters to the Rising Stones, located in the outpost of Revenant's Toll, Tataru accompanied them, continuing her duties at the new location. She took on the profession of a miner to do her share in helping to pay for the rising costs of funding the Scions."}>

            </LargeDialog>

      </div>



      <div className="mb-10 sectionContainer">

         <div style={{backgroundImage:`url(${"https://live.staticflickr.com/5743/23341952244_fee6f6e115_c.jpg"})`,
         backgroundRepeat: 'no-repeat',
         backgroundSize:'contain',
         minHeight: '600px',
         maxWidth:'100%',
         backgroundPosition: 'top',
                        }}>   
         </div>

         <LargeDialog text={"Becoming frustrated at her self-perceived uselessness, she took a leave of absence to train to be an Arcanist. She proved to be poorly adept for combat, and after a brief moment of despondence, resolved to create good-luck-charms for the rest of the Scions to help protect them."}></LargeDialog>

</div>

<div className="mb-10 sectionContainer">

<div style={{backgroundImage:`url(${snow})`,

backgroundRepeat: 'no-repeat',
backgroundSize:'contain',
minHeight: '900px',
minHeight: '550px',
maxWidth:'100%',
backgroundPosition: 'top',
               }}>   
</div>

<LargeDialog text={"This project caused her to miss the banquet in Ul'dah, during which the majority of the other Scions were seemingly killed. Rescued from the traitorous Crystal Braves by Yugiri Mistwalker, Tataru was the only Scion able to meet up with the Warrior of Light and Alphinaud Leveilleur when they sought shelter at Camp Dragonhead. "}></LargeDialog>
</div>



</div>

    )
}

export default AboutTataru