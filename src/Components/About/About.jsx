import React from "react";
import "./about.css";


function About () {
    return (
      <div className = "about-container" >
        <h1> About Me </h1> 
        <div className='social-media-icons'>
        <a
          class='social-icon-link-linkedin'
          href='https://www.linkedin.com/in/hirschfeldnic/'
          target='_blank'
          aria-label='LinkedIn'
        >
          <i class='fab fa-linkedin' /> Linkedin
        </a>
        <a
          class='social-icon-link-github'
          href='https://github.com/hirschfeldnic'
          target='_blank'
          aria-label='github'
        >
          <i class='fab fa-github' /> GitHub
        </a>
        <a
          class='social-icon-link-email'
          href='mailto:hirschfeld.nic@gmail.com'
          target='_blank'
          aria-label='email'
        >
          <i class='fas fa-envelope-square'></i> Email
        </a>
      </div>

        <p> My name is Nic Hirschfeld. I am currently working towards my masters in software engineering 
          at University of Calgary, with an expected graduation date of May 2023. Prior, I worked as a 
          process engineer for almost three years after I graduated from chemical engineering co-op program 
          at Dalhousie University with a bachelors degree in Chemical Engineering. I love designing, testing and problem 
          solving. Along with my love for engineering, I have also developed a passion for travel due to growing up as a 
          third culture kid. I love meeting new people and learning about new cultures! Please feel free to reach out 
          and we can connect!
        </p>
        </div>
    );
  }
  
  export default About;