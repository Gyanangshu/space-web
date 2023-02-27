import React from 'react'
// import css 
import "./number.css";
// import component 
import Countup from './Countup';
 
const Number = () => {
    return (
        <div className='number__section'>
            <div className='number__container'> 
                <div className='number__container-box'>
                    <p className="numbers p__poppins"><Countup end={10000} start={2000} timer={50} style={{color:"#50C878"}}/></p>
                    <p className='milestones p__poppins'>Amassed followers across the galaxy</p>
                </div>
                <div className='number__container-box'>
                    <p className="numbers p__poppins"><Countup end={700} start={100} timer={50}/></p>
                    <p className='milestones p__poppins'>Bespoke designs created</p>
                </div>
                <div className='number__container-box'>
                    <p className="numbers p__poppins"><span className='percent_countup'><Countup end={2860} start={200} timer={50}/>%</span></p>
                    <p className='milestones p__poppins'>Increase in organic revenue generated </p>
                </div>
                <div className='number__container-box'>
                    <p className="numbers p__poppins"><Countup end={85} start={1} timer={100}/></p>
                    <p className='milestones p__poppins'>Successfully completed missions</p>
                </div>
            </div>

        </div>
    )
}

export default Number
