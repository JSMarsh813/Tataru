
import LikesDislikeListItems from '../components/LikesDislikeListItems'
import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faHeartCircleMinus } from '@fortawesome/free-solid-svg-icons'

import LikesDislikesTitle from './likesDislikeTitle'

const LikesDislikeSection =({}) => {

    return ( 


<section className="containerLikeDislikes 
 mx-10 md:flex">

<section className="likes flex-1">
  
       
    <LikesDislikesTitle icon={faHeartCirclePlus} title="Likes"/>
        

{/* <h2>https://stackoverflow.com/questions/69276276/why-tailwind-list-style-type-is-not-working</h2> */}
      <ul>          
              
        <LikesDislikeListItems backgroundImage="https://i.imgur.com/j5RbUNG.png"
        textForLikeDislike="Mark XIV Thermocoil Boilmaster"/>

        <LikesDislikeListItems backgroundImage="https://external-preview.redd.it/J7askS_Ikym-c7nbkMsmM4x9mQQey4hmQCbbZXdzihE.png?auto=webp&s=76bf0b76b42b15f3361b73ec5f8ab4ba7bde9ac6"
        textForLikeDislike="Gossiping in bars"/>

<LikesDislikeListItems backgroundImage="https://onlinestore-img.finalfantasyxiv.com/onlinestore/item/cec83df80f727f6d2014e311fcef62f7495aeb0160f56d5f2b4a050c2f5e24ab/0067/a8d2ff2a69ebda456f52a0ea460ff6a58fe07a7d56775111777fef17fc977705_sub2_list.jpg"
        textForLikeDislike="Making fashionable clothes for friends"/>
      
     
     <LikesDislikeListItems backgroundImage="https://i.kym-cdn.com/photos/images/original/002/056/647/de6.gif"
        textForLikeDislike="Learning new skills"/>
             
        </ul>

     </section>


 <section className="dislikes flex-1">

     <LikesDislikesTitle icon={faHeartCircleMinus} title="Dislikes"/>

           
  
<LikesDislikeListItems backgroundImage="https://gnova.net/wp-content/uploads/2019/03/e597114c5473edae40f259a45abe138f4d2a46e6_6.png"
        textForLikeDislike="Reckless spending"/>

<LikesDislikeListItems backgroundImage="https://static.wikia.nocookie.net/finalfantasy/images/1/16/FFXIV_Nero_GI.png/"
        textForLikeDislike="Nero"/>

<LikesDislikeListItems backgroundImage="https://riikorinkoko.files.wordpress.com/2015/06/2015-06-20-heavensward-story-3-0-49.jpg"
        textForLikeDislike="Not being stronger"/>

<LikesDislikeListItems backgroundImage="https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2013/07/FFXIV_Carbuncle-2.jpg"
        textForLikeDislike="Failing at being an arcanist"/>

    </section>

</section>

    )
}

export default LikesDislikeSection