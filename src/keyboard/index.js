import React from 'react';
import './css.css'
const Keyboard = ({letter,wordArray,tries}) => {
  const board=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
  function trigger(element){
    letter(element.target.textContent)

  }
  function letterExistInWord(entry){
    let letterExist=false
    wordArray.forEach(element => {
      tries.forEach(letterFromTry => {
        if (element===letterFromTry) {
          if (element===entry) {
            letterExist=true
          }
        }
      });
    });
    return letterExist
  }
  return (
    <>
      <section className='keyboardContainer'>
        {board.map((letter,index)=>{
          if (letterExistInWord(letter)) {
            return (<button key={index} className='letterOk'>{letter}</button>)
          }else if(tries.includes(letter)){
            return (<button key={index} className='letterError'>{letter}</button>)
          }else{
            return (<button key={index} className='letter' onClick={trigger}>{letter}</button>)
          }
          
            
        })}
      </section>
    </>
  );
};

export default Keyboard;
