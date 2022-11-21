import React from 'react';
import '../styles/ProjectCard.scss';

function ProjectCard({title,img,desc}){
    return(
        <div className='Card'>
            <img src={img} className='Proj-img' alt={title} />
            <div className='Proj-Title'>{title}</div>
            <div className='Proj-Desc'>{desc}</div>
        </div>
    );
}


export default ProjectCard