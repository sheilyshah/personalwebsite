import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Resume } from './components/Resume';
import { Writing } from './components/Writing';

function App() {
  useEffect(() => {
    // Function to handle smooth scrolling
    const smoothScroll = (target, duration) => {
      const targetElement = document.querySelector(target);
      if (!targetElement) return; // Check if the target element exists
    
      const targetPosition = targetElement.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      let startTime = null; 
    
      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
    
      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };
    
      requestAnimationFrame(animation);
    };
    
    // Smooth scroll function triggered by clicking on navbar links
    const navbarLinks = document.querySelectorAll('.nav-link');
    navbarLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        console.log(targetId)
        smoothScroll(targetId, 1000); // You can adjust the duration as needed
      });
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner id="home"/>
      <Resume id="resume"/>
      <Writing id="writing" />
    </div>
  );
}

export default App;
