

const HorizontalWithImageBullets= ({url,phrase})=> {
return(

   <li style={
{ backgroundImage: `url(${url})`,
backgroundRepeat:"no-repeat",
backgroundSize:"40px",
paddingLeft:"50px",
paddingBottom:"20px",
display: "inline-block",
paddingRight:"20px"
}}> 


<span className="text-yellowText text-xl">{phrase}</span>

</li>
)
}

HorizontalWithImageBullets.defaultProps={
    url:"https://play-lh.googleusercontent.com/r6Z-qfbWPQM3XyTj4fybfyhuxpFwYR2KiE7nNHu-h7OZAEeyI16javrTUhPoy5Rho-kp"
}

export default HorizontalWithImageBullets