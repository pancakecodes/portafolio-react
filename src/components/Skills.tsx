import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AppDevelopment from "../assets/img/app-development.png";
import Designer from "../assets/img/illustrator.png";
import Testing from "../assets/img/testing.png";
import UX from "../assets/img/ux.png";

const Skills: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselStyles: React.CSSProperties = {
    display: "block",
    maxWidth: "100%",
    height: "auto",
  };

  return (
    <section className="skills" id="skills">
    <Container>
      <Row>
        <Col>
          <div className="skill-bx">
            <h2>Skills</h2>
            <p>
              I am a Full Stack Developer with a passion for creating
              beautiful, responsive websites and applications. I am proficient
              in HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and
              SQL. I am also familiar with Python, Java, and C#. I am a quick
              learner and I am always looking to expand my knowledge and skill
              set. I am currently working on a project using React and
              TypeScript.
            </p>
            <div
              id="carouselExampleControls"
              className="carousel slide skill-slider"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={Designer}
                    className=" w-25"
                    alt="Designer"
                  />
                  <h5>Designer</h5>
                </div>
                <div className="carousel-item">
                  <img
                    src={AppDevelopment}
                    className=" w-25"
                    alt="App Development"
                  />
                  <h5>App Development</h5>
                </div>
                <div className="carousel-item">
                  <img src={UX} className=" w-25" alt="UX" />
                  <h5>Ux/UI Designer</h5>
                </div>
                <div className="carousel-item">
                  <img
                    src={Testing}
                    className=" w-25"
                    alt="Testing"
                  />
                  <h5>Testing</h5>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <img
      className="background-image-left"
      src={"colorSharp"}
      alt="Background"
    />
  </section>
);
};


export default Skills;
