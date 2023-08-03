import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo-no-background.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';





const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value: string) => {
      setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img className='logo' src={logo} alt='logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <span className="navbar-toggler-icon"></span>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills"  className={activeLink === 'skills'? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects"  className={activeLink === 'projects'? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icons ">
                  

            <FontAwesomeIcon icon={faGithub} color='white' />

            <FontAwesomeIcon icon={faLinkedin} color='white'/>

            <FontAwesomeIcon icon={faTwitter}  color='white'/>
  
</div>
                    <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </span>
                    
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavBar;