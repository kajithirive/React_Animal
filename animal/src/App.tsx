import 'bulma/css/bulma.css'
import './App.css'

import Card from "./card";
import Alexa from "../public/alexa.png";
import cortana from "../public/cortana.png";
import siri from "../public/siri.png";

function App () {
  return (
    <>
      <div className="card">
        <section className="section">
        <br/><div className='elementstyle'>Profile Cards!</div>
        <br/>
          <div className="colums" style={{display: "flex"}}>
            <div className="column is-3">
              <div><Card image={Alexa} imageName="Alexa" content="Alexa content" /></div>
            </div>
            <div className="column is-3">
              <div><Card image={cortana} imageName="cortana" content="cortana content" /></div>
            </div>
            <div className="column is-3">
              <div><Card image={siri} imageName="siri" content="siri content" /></div>
            </div>
          </div>
        </section>
      </div>
    </>

  )
}
export default App; 