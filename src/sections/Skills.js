// react function component
import React from 'react';
import python from '../assets/svg/python.svg';
import java from '../assets/svg/java.svg'
import r from '../assets/svg/r.svg'
import mysql from '../assets/svg/mysql.svg'
import javascript from '../assets/svg/javascript.svg'
import powerbi from '../assets/svg/powerbi.svg'

// importing the css file
import '../styles/Section3.scss';

//creating the function component
function Section3() {
    return(
        <div className='Section Section3'>
          <div className='Section-title'>
            Skills
          </div>
          <div className='Ligne'></div>
          <div className='Section3-content'>
            <div className='Skill'> 
              <div className='Skill-content'>
                <img src={python} className='Skill-img' alt='python' width={60} height={60}/>
              </div>
              <div className='Skill-title'>
                Python
              </div>
            </div> 
            <div className='Skill'>
              <div className='Skill-content'>
                <img src={java} className='Skill-img' alt='java' width={60} height={60}/>
              </div>
              <div className='Skill-title'>
                Java
              </div>
            </div>
            <div className='Skill'>
              <div className='Skill-content'>
                <img src={r} className='Skill-img' alt='r' width={60} height={60}/>
                </div>
              <div className='Skill-title'>
                R
              </div>
            </div>
            <div className='Skill'>
              <div className='Skill-content'>
                <img src={mysql} className='Skill-img' alt='r' width={60} height={60}/>
                </div>
              <div className='Skill-title'>
                MySQL
              </div>
            </div>
            <div className='Skill'>
              <div className='Skill-content'>
                <img src={javascript} className='Skill-img' alt='r' width={60} height={60}/>
                </div>
              <div className='Skill-title'>
                JavaScript
              </div>
            </div>
            <div className='Skill'>
              <div className='Skill-content'>
                <img src={powerbi} className='Skill-img' alt='r' width={60} height={60}/>
                </div>
              <div className='Skill-title'>
                PowerBI
              </div>
            </div>
          </div> 
      </div> 
    );
}

//exporting the function component
export default Section3;
