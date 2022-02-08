import React from 'react';
import './css.css'
const word = ({word , letters}) => {
  return (
  <>
    <section className='wordContainer'>
        {
            [].map.call(
                word,(letter,index)=>
                <div key = {index} className='letter' style={{'borderBottom':`solid 1px ${letter===' ' ? 'transparent' :'black'}`}}>{
                    letters.map((digit)=>{
                        if (digit===letter) {
                            return letter
                        }else{
                            return ''
                        }
                    })
                }
                </div>
            )
        }
    </section>
  </>
  )
};

export default word;
