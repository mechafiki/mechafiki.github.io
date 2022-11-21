// react function component
import React from 'react';

// importing the css file
import '../styles/Section2.scss';

//creating the function component
function Section2() {
    return (
        <div className='Section Section2'>
          <div className='Section-title'>
            Education
          </div>
          <div className='Ligne'></div>
          <div className='Section-content Section2-content'>
            <div className='Section2-content-item'>
              <div className='Section2-content-item-title'>
                Master's Degree in Data Science & Business Intelligence
              </div>
              <div className='Section2-content-item-subtitle'>
                Faculty of Sciences and Techniques | Marrakech, Morocco
              </div>
              <div className='Section2-content-item-date'>
                2021 - Present
              </div>
            </div>
            <div className='Section2-content-item'>
              <div className='Section2-content-item-title'>
                Bachelor of Software Engineering
              </div>
              <div className='Section2-content-item-subtitle'>
                Faculty of Sciences | Agadir, Morocco
              </div>
              <div className='Section2-content-item-date'>
                2021
              </div>
            </div>
            <div className='Section2-content-item'>
              <div className='Section2-content-item-title'>
                General Studies Diploma in Computer Sciences
              </div>
              <div className='Section2-content-item-subtitle'>
                Faculty of Sciences | Agadir, Morocco
              </div>
              <div className='Section2-content-item-date'>
                2020
              </div>
            </div>
            <div className='Section2-content-item'>
              <div className='Section2-content-item-title'>
                High School Degree in Mathematics
              </div>
              <div className='Section2-content-item-subtitle'>
                Attanmia High School | Laayoune, Morocco
              </div>
              <div className='Section2-content-item-date'>
                2017
              </div>
            </div>
        </div>
        </div>
    );
}

//exporting the function component
export default Section2;
