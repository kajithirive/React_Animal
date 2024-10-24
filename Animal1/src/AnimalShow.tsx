import { MouseEventHandler, useState } from "react";
import bird from "./assets/bird.svg";
import cat from "./assets/cat.svg"
import cow from "./assets/cow.svg"
import dog from "./assets/dog.svg"
import gator from "./assets/gator.svg"
import heart from "./assets/heart.svg"
import horse from "./assets/horse.svg"
import 'bulma/css/bulma.css'
const svgMap = {
  bird,
  cat, 
  cow,
  dog,
  gator,
  horse,
};


function AnimalShow ({ animal}: any) {
    const [clicks, SetClicks]= useState(0)

    const handleClick = () => {
        SetClicks(clicks + 1);
    }
    return (

      
    
  <div className="card-image">
    <figure className="image is-4by3">
    <div onClick={handleClick}>
        <img src={svgMap[animal]} alt="image" />
        <img style={{width: 10 + 10 * clicks + 'px'}} src={heart} alt='heart' />
    </div>
    </figure>
  </div>
    )
}
export default AnimalShow;