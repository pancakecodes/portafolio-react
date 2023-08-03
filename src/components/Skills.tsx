import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  AppDevelopment  from "../assets/img/app-development.png";
import Designer from "../assets/img/illustrator.png";
import Testing from "../assets/img/testing.png";
import UX from "../assets/img/ux.png";


const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                     <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>
                            I am a Full Stack Developer with a passion for creating beautiful, responsive websites and applications. I am proficient in HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and SQL. I am also familiar with Python, Java, and C#. I am a quick learner and I am always looking to expand my knowledge and skill set. I am currently working on a project using React and TypeScript.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={Designer} alt= "Designer"/>
                                <h5>Designer</h5>
                            </div>
                            <div className="item">
                                <img src={AppDevelopment} alt= "App Development"/>
                                <h5>App Development</h5>
                            </div>
                            <div className="item">
                                <img src={UX} alt="UX"/>
                                <h5>Ux/UI Designer</h5>
                            </div>
                            <div className="item">
                                <img src={Testing} alt= "Testing"/>
                                <h5>Testing</h5>
                            </div>
                            </Carousel>
                     </div>
                    </Col>
                </Row>
                </Container>
                <img className="background-image-left" src={"colorSharp"}/>
            </section>
                );};

export default Skills;