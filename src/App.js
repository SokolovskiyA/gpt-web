import './App.scss';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import google from './assets/google.png';
import slack from './assets/slack.png';
import atl from './assets/atlassian.png';
import drop from './assets/dropbox.png';
import shopify from './assets/shopify.png';
import { motion } from "framer-motion"
import WhatIsGPT from './Components/WhatIsGPT/WhatIsGPT';


function App() {
  let images = [google, slack, atl, drop, shopify]
  return (
    <div className="App">
      <div className="main-div">
        <Header />
        <Hero />
        <div className="links">
          {images.map(image => 
            <motion.a
              animate={{ x: [-1200, 0] }}
              transition={{ duration: 3 }}
            ><img className="links__image" src={image} alt="link logo"/></motion.a>
          )}
        </div>
        <WhatIsGPT />
      </div>
    </div>
  );
}

export default App;
