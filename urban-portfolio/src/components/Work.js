import Environment from '../images/evironmentbox2.png'; 
import Kicks from '../images/kickscrew-mockup.png'; 
import examplesite from '../images/sneakers-product.png'; 
import houseofcode from '../images/houseofcode-mockup.png';
import scss from '../images/scss-mockup2.png';

function Work () {
    return (
        <>
        <h1 className='first-text'>MY WORK</h1>
        <div>
            <img alt='design' className='center' src={Environment}></img>
        </div>
        <h2 className='center'>Environmentbox AS</h2>
        <br></br>
        <div className='info-text'>
        <p>
            This is my Final Exam project at Noroff, where I chose to work for a real world client.
            Environmentbox AS is a company that creates innovative storage 
            solutions for communities and businesses. 
            The goal was to design, plan and create a new website for a client. 
            The client can log in to an admin page, and add their own posts for their oncoming projects 
            and collabrations.
        </p>
        </div>
        <div className="center">
        <a href="https://evironmentbox.netlify.app/" target="blank"><button className="view">View Live</button></a>
        &nbsp;&nbsp;
        <a href="https://github.com/Noroff-FEU-Assignments/project-exam-2-lonsoien" target="blank"><button className="view">View Code</button></a>
        <br></br>
        </div>

        <div>
            <img alt='design' className='center' src={Kicks}></img>
            <h2 className='center'>Kicks Crew</h2>
            <br></br>
        </div>
        <div className='info-text'>
        <p>
         This is a Semester Project I called Kicks Crew.
         The goal was to create a ecommerce site with a given Strapi API from Noroff.
         For this project I created a sneakers website with ecommerce solutions and much focus on design.
         (sadly the site is no longer hosted and unavailable to view live).
         <br></br>
         Here is an example of product site.
        </p>
        </div>
        <div>
            <img alt='design' className='center' src={examplesite}></img>
        </div>
        &nbsp;&nbsp;

        <div className="center">
        <a href="none" target="blank"><button className="view">View Live</button></a>
        &nbsp;&nbsp;
        <a href="https://github.com/lonsoien/Semester2-project" target="blank"><button className="view">View Code</button></a>
        <br></br>
        </div>

        <div>
            <img alt='design' className='center' src={houseofcode}></img>
        </div>
        <h2 className='center'>House of Code</h2>
            <br></br>
        <div className='info-text'>
        <p>
         House of Code is a website created by 5 students included myself for a group project.
         The goal was to create a Frontend Agency website to showcase us as developers and designers.
         Here each group member had different roles and tasks to develop. I was the lead UI Designer 
         for this project, and had the responsibility for content, logo, images and the visual aspects. 
        </p>
        </div>

        <div className="center">
        <a href="https://houseofcode.netlify.app/index.html" target="blank"><button className="view">View Live</button></a>
        &nbsp;&nbsp;
        <a href="https://github.com/HouseOf-Code/HouseOfCode" target="blank"><button className="view">View Code</button></a>
        <br></br>
        </div>

        <div>
            <img alt='design' className='center' src={scss}></img>
        </div>
        <h2 className='center'>Scss Prototype</h2>
            <br></br>
        <div className='info-text'>
        <p>
         SCSS Bootstrap lesson project for understanding CSS frameworks. Main focus on styling with scss and bootstrap libary.
        </p>
        </div>

        <div className="center">
        <a href="https://scss-prototype.netlify.app" target="blank"><button className="view">View Live</button></a>
        &nbsp;&nbsp;
        <a href="https://github.com/lonsoien/scss-build-prototype" target="blank"><button className="view">View Code</button></a>
        <br></br>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <div className='info-text'>
        <p>
            More projects will be added soon from previous projects. Stay tuned! 
        </p>
        </div>

        <footer>
            <h4>by Louise Bellingmo</h4>
            <br></br>
        </footer>
    </>
  );
}

export default Work; 