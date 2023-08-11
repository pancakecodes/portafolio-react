import React from "react";
import { Col, Container, Nav, Row, Tab} from "react-bootstrap";
import ProjectsCard from "./ProjectsCard";
import image1 from '../assets/img/project01.png';
import image2 from '../assets/img/crudstudent.png';
import image3 from '../assets/img/crudemployee.png';
import image4 from '../assets/img/lolitaweb.png';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'PokeDex App',
      description: 'This is a project that I created using React and TypeScript. It is a PokeDex app that allows you to search for Pokemon and view their stats. It also allows you to filter Pokemon by type. I used the PokeAPI to get the data for the Pokemon. I used React Bootstrap for the styling. I used TypeScript for the type checking.',
      image: `${image1}`,
      link: 'https://pokedex-react-rho-five.vercel.app/?vercelToolbarCode=342lDgqzYengYGB',
      github: 'https://github.com/pancakecodes/pokedex-react'
    },
    {
      title: 'Gestion Estudiantes',
      description: 'This is a project that I created using .net core and React.',
      image: `${image2}`,
      link: 'https://github.com/pancakecodes/crudEstudiante',
      github: 'https://github.com/pancakecodes/crudEstudiante'
    },
    {
      title: 'Gestion Empleado',
      description: 'This is a project that I created using Angular',
      image: `${image3}`,
      link: 'https://github.com/pancakecodes/crud-employee',
      github: 'https://github.com/pancakecodes/crud-employee'
    },
    {
      title: 'Lolita Website',
      description: 'This is a project that I created in base of a design that I found in the internet.',
      image: `${image4}`,
      link: 'https://github.com/pancakecodes/lolitawebsite',
      github: 'https://github.com/pancakecodes/lolitawebsite'
    }
  ];

  return (
    <section className="project" id="project">
    <Container>
      <Row>
        <Col>
          <h2>Projects</h2>
          <p>Here are some of my projects</p>
          <Tab.Container id="project" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab Three</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {projects.map((project, index) => (
                    <ProjectsCard
                      key={index}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                    />
                  ))}
                </Row>
              </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
                  id consectetur debitis magni. Exercitationem, quidem. Doloribus a
                  dolores quasi, doloremque repellat consectetur alias, atque natus
                  nulla molestias, perferendis sed nemo.
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
                  hic, quod quibusdam temporibus enim et quas esse fugit veniam
                  voluptate officia aut odit! Illum consequuntur quam vel similique,
                  itaque iusto.
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={"colorSharp"}/>
    </section>
  );
};

export default Projects;
