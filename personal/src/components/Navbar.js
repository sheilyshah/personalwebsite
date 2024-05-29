import {useState, useEffect, onUpdateActiveLink } from "react"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SocialIcon } from 'react-social-icons'

export const NavBar = () => { 
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled,  setScrolled] = useState(false) 
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
  
    const handleNavLinkClick = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      onUpdateActiveLink(id);
    };
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    };
  
    return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className = "navbar-togger-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link href="home" className={activeLink === 'home' ? 'active-navbar' : 'navbar'} onClick={() =>  handleNavLinkClick('home')}>home</Nav.Link>
            <Nav.Link href="resume" className={activeLink === 'resume' ? 'active-navbar' : 'navbar'} onClick={() =>  handleNavLinkClick('resume')}>resume</Nav.Link>
            <Nav.Link href="writing" className={activeLink === 'writing' ? 'active-navbar' : 'navbar'} onClick={() =>  handleNavLinkClick('writing')}>writing</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <SocialIcon network="linkedin" url="https://www.linkedin.com/in/sheilyshah/" />
                <SocialIcon network="instagram" url="https://www.instagram.com/sheils26/" />
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
