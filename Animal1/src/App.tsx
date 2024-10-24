import { useState } from "react";
import AnimalShow from "./AnimalShow";


function getRandAnimal() {
  const animals: string[] = ['cow', 'cat', 'dog', 'bird', 'gator', 'horse'];
  const obj = animals[Math.floor(Math.random() * animals.length)];
  return obj;
}


function App () {
  const [animals, setAnimal] = useState([]);

  const handleClick = () => {
    setAnimal([...animals, getRandAnimal()]);
  };
  const animap = animals.map((animal, i) => {
    return <AnimalShow animal={animal}/>
  })
  return (
    <div>
      <button onClick={handleClick}> Add Animal</button>
      <div>Animals to Show: {animap}</div>
    </div>
  )

}
export default App;