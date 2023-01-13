import React from 'react';
import project1 from '../Assets/MoreThanAGame.png'
import project2 from '../Assets/SneakersPeak.png'
export default function Projects() {
    const projectsArray = [
        {
            title:"More Than A Game",
            desc:"project 1",
            img: project1,
            github:"",
            deployed:""
        },
        {
            title:"SneakersPeak",
            desc:"project 2",
            img: project2,
            github:"",
            deployed:""
        },
    ] 
  return (
    <div>
      <h1 class="projects-header">Projects</h1>
     {projectsArray.map(project =>(
        <div className="card" style= {{width: "18rem"}}>
        <img src={project.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.desc}</p>
          <a href={project.github} className="btn btn-primary">Github Repo</a>
        </div>
      </div>
     ))}
    </div>
  );
}