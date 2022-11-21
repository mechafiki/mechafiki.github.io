// react function component
import React from 'react';
import mfood from '../assets/proj-imgs/meilleurfood.png'
import md from '../assets/proj-imgs/md.png'
import twoth from '../assets/proj-imgs/2048.png'

// importing the css file
import '../styles/ProjectCard.scss';
import ProjectCard from './ProjectCard';

//creating the function component
function Section4() {
    return(
        <div className='Section Section4'>
        <div className='Section-title'>
            Projects
        </div>
        <div className='Ligne'></div>
        <div className='Projs-Container'>
            <div className='Projs'>
            <ProjectCard 
                title={'2048 AI'} 
                img={twoth} 
                desc={'An AI made to beat the famous 2048 game .'}
                />
            <ProjectCard 
                title={'MonDiabetes'} 
                img={md}
                desc={'A mobile application for diabetes monitoring developed by me & my teammate Ouijdan Addou using React Native and Firebase.'}
            />
            <ProjectCard 
                title={'MeilleurFood'} 
                img={mfood} 
                desc={'A web application for managing a snack / restaurant using the phpMyAdmin administration tool for mySQL.'}
                />
            </div>
        </div>
      </div>
    );
}

export default Section4;
