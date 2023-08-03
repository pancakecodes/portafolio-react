import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import  HeadderImg  from "../assets/img/mano-m-f1.png";

const Banner: React.FC = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const toRotate = useMemo(() => ["FullStack Developer", "Web Developer", "UI/UX Designer"], []);

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((preDelta) => preDelta / 2);
    }

    if (!isDeleting && text === fullText) {
      setDelta(period);
      setIsDeleting(true);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum((preLoopNum) => preLoopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, text, toRotate]);

  useEffect(() => {
    const ticker = setInterval(tick, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, tick]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi I'm pancakecodes `}<span className="wrap">{text}</span></h1>
            <p>My passion is to create beautiful, responsive websites and applications.</p>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect <ArrowRightCircle size={25}/></span></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={ HeadderImg} alt="Headder Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
