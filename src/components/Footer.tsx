import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import logo from '../assets/img/logo-no-background.png';
import FooterImg from '../assets/img/wallpaperflare.com_wallpaper.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6} className="text-left">
            <img className="logo" src={logo} alt="logo" />
            <p>© 2023 - All Rights Reserved</p>
          </Col>
          <Col sm={6} className="text-right">
            <div className="social-icons">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-end">
          <Col xs={12} md={6} xl={5}>
            <img src={FooterImg} alt="FooterImg" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
