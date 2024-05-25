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
                setScrolled(true)
            } else { 
                setScrolled(false)
            }
        } 

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll); 
    
    }, [])

    const onUpdateActiveLink = (value) => { 
        setActiveLink(value); 
    }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className = "navbar-togger-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar' : 'navbar'} onClick={() =>  onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar' : 'navbar'} onClick={() =>  onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#dance" className={activeLink === 'dance' ? 'active-navbar' : 'navbar'} onClick={() =>  onUpdateActiveLink('dance')}>Dance</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <SocialIcon network="linkedin" url="https://www.linkedin.com/in/sheilyshah/" />
                <SocialIcon network="instagram" url="https://www.instagram.com/sheils26/" />
            </div>
            <button className="form" onClick={() => console.log('connect')}>
                <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
