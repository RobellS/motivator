import axios from "axios";
import { useState,useContext } from "react";
import Quotes from "./Quotes";

function Background (){


const [image,setImage] = useState("")

    const getImage = () => {
       setImage({})
        axios.get('https://source.unsplash.com/800x600/?motivational')
        .then(res => {
            setImage(res.config.url)
            
        })
        .catch(err => {
            console.log(err)
        })
    }
return(
        <div>
            <Quotes />
            &nbsp;
            <div id="background">
            <button id="backgroundButton" onClick={getImage}>Click to get visuals</button>
            {image ? <img src={image}/> : null}
            </div>
        </div>


)

}

export default Background