import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { faComputer, faPenNib, faCode } from "@fortawesome/free-solid-svg-icons";
import "react-multi-carousel/lib/styles.css";


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
                                <FontAwesomeIcon icon={faComputer} style={{ color: "#ffffff" }} />
                                <h5>Designer</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faPenNib} style={{ color: "#ffffff" }} />
                                <h5>FrontEnd Development</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faCode} style={{ color: "#ffffff" }} />
                                <h5>BackEnd Developer</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faCode} style={{ color: "#ffffff" }} />
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