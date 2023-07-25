import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import logo from '../assets/img/logo-no-background.png';



const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                    <img className='logo' src={logo} alt='logo'/>
                        <p>© 2023 - All Rights Reserved</p>
                    </Col>
                    <Col sm={6}>
                        <FontAwesomeIcon icon={faGithub}  />

                        <FontAwesomeIcon icon={faLinkedin} />

                        <FontAwesomeIcon icon={faTwitter}  />                   
                                        </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;