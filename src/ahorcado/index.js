import React from 'react';
import './ahorcado.css'

function Ahorcadopicture({errors}) {
    let errorCount=errors
    let parts={
        rope:false,
        head:false,
        chest:false,
        lefthand:false,
        righthand:false,
        leftFeet:false,
        rightFeet:false
    }
    for(const property in parts){
        if(errorCount>0){
        parts[property]=true
        errorCount--
        }else{
            break
        }
    }
    return (
        <div>
            <div className='gallow'>
                <div className='secondStick'></div>
                <div className='firstStick'></div>
                <div className='base'></div>
                <div className='floor'></div>
                <div className='body'>
                    {parts.rope && <div className='rope'></div>}
                    {parts.head && <div className='head'></div>}
                    {parts.chest && <div className='chest'></div>}
                    {parts.lefthand && <div className='leftHand'></div>}
                    {parts.righthand && <div className='rightHand'></div>}
                    {parts.leftFeet&& <div className='leftFeet'></div>}
                    {parts.rightFeet && <div className='rightFeet'></div>}
                </div>
            </div>
        </div>
    );
  
}

export default Ahorcadopicture;
