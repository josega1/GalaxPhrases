import { useState } from 'react';
import phrases from './assets/phrases.json'
import { getRandomNumber } from './utils/getRandom'
import Phrase from './components/Phrase/Phrase';
import Button from './components/Button/Button';

import './App.css';


const backgraund = ['/galaxia3.jpg', '/galaxia4.jpg', '/galaxia1.jpg', '/galaxia2.jpg'];

function App() {
  const getRandomPhrase = () => phrases[getRandomNumber(phrases.length - 1)];
  const getRandomBackgraund = () => backgraund[getRandomNumber(backgraund.length -1)];

  const [phraseObject, setphraseObject] = useState(getRandomPhrase());
  
  const [backgraunds, setbackgraunds] = useState(getRandomBackgraund());
  
  const changePhrase = () => {
    let newPhrase = getRandomPhrase();
    while(newPhrase.phrase === phraseObject.phrase){
      newPhrase = getRandomPhrase();
    }
    setphraseObject(newPhrase);
  };
 

  const changeBackgraund = () => {
    let newBackgraund = getRandomBackgraund();
    while(newBackgraund === backgraunds){
      newBackgraund = getRandomBackgraund();
    }
    setbackgraunds(newBackgraund);
  }
  const handlerClick = () => {
    changeBackgraund();
    changePhrase();
  }

  return (
    <>
      <div className='container_app' style={{backgroundImage: `url("${backgraunds}")` }}>
        <h1 className = 'animate__fadeInDown'>GalaxPhrases</h1>
        <Phrase phrase={phraseObject.phrase} />
        <p className='animate__fadeInUpBig'>
          Author: <mark>{phraseObject.author}</mark>
        </p>

        <div className='btn_container'>
          <Button handlerClick={handlerClick}/>
        </div>
      </div>
     
    </>
  )
}

export default App;
