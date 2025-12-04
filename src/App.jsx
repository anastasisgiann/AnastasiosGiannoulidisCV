
import { useState } from "react";
import { Courses } from "./Courses";
import Course from './components/Course';
import Header from './components/Header';
import ProjectButton from "./components/ProjectButton";
import { PROJECTS } from "./projects";


function App() {
  const [selectedProject, setSelectedProject] = useState();

  let buttonContent = <p>Please select a Project!</p>

  if(selectedProject){
    buttonContent = (
      <div id="tab-content">
            <img src={PROJECTS[selectedProject].image}></img>
            <div><h3>{PROJECTS[selectedProject].title}</h3>
            <p>{PROJECTS[selectedProject].description}</p>
            <h3>{PROJECTS[selectedProject].techt}</h3>
            <p>{PROJECTS[selectedProject].tech}</p>
            </div>
          </div>
    ) 
  };

  function handleProjects(selectedButton){
    setSelectedProject(selectedButton)
  };
  return (
    <div>
      <Header />
      <main>
        <section id="courses">
          <h2>Online Courses</h2>
          <ul>
            {Courses.map((courseitem) => (
              <Course {...courseitem}/>
            ))}
          </ul>
        </section>
        <section id="projects">
          <h2>PROJECTS</h2>
          <menu>
            <ProjectButton 
            isSelected={selectedProject === 'wedding'}
            onSelect={()=> handleProjects('wedding')}>Wedding Invitation</ProjectButton>
            <ProjectButton 
            isSelected={selectedProject === 'OurGymSKG'}
            onSelect={()=> handleProjects('OurGymSKG')}>OurGymSKG</ProjectButton>
            <ProjectButton 
            isSelected={selectedProject === 'CV'}
            onSelect={()=> handleProjects('CV')}>My CV</ProjectButton>
          </menu>
         {buttonContent} 
        </section>
      </main>
      
    </div>
  );
}

export default App;
