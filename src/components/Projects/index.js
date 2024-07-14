import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects.Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'React app' ?
            <ToggleButton active value="React app" onClick={() => setToggle('React app')}>REACT APP'S</ToggleButton>
            :
            <ToggleButton value="React app" onClick={() => setToggle('React app')}>REACT APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'Javascript project' ?
            <ToggleButton active value="Javascript project" onClick={() => setToggle('Javascript project')}>JAVASCRIPT PROJECT'S</ToggleButton>
            :
            <ToggleButton value="Javascript project" onClick={() => setToggle('Javascript project')}>JAVASCRIPT PROJECT'S</ToggleButton>
          }
        
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects