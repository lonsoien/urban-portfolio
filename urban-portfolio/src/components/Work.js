import Environment from '../images/evironmentbox2.png'; 
import Kicks from '../images/kickscrew-mockup.png'; 
import examplesite from '../images/sneakers-product.png'; 
import houseofcode from '../images/houseofcode-mockup.png';
import scss from '../images/scss-mockup2.png';
import huldra from '../images/prosjekthuldrablog_mockup.png';
import bellingmo from "../images/bellingmoweb-mockup.png";

function Work () {
    return (
        <>
        <h1 className='first-text'>MY WORK</h1>
        <div>
            <img alt='design' className='center' src={bellingmo}></img>
        </div>
        <h2 className='center'>Bellingmo Webdesign</h2>
        <br></br>
        <div className='info-text'>
        <p>
            Bellingmo Webdesign is a webdesign freelance website.  
        </p>
        </div>
        <div className="center">
        <a href="https://bellingmowebdesign.com/home" target="blank"><button className="view">View Live</button></a>
        &nbsp;&nbsp;
        <a href="https://github.com/lonsoien/postbellingmowebdesign" target="blank"><button className="view">View Code</button></a>
        <br></br>
        </div>


        <div>
            <img alt='design' className='center' src={huldra}></img>
        </div>
        <h2 className='center'>Huldrablog</h2>
        <br></br>
        <div className='info-text'>
        <p>
            Huldrablog is a lifestyle & nature blog by Louise Bellingmo. 
            The project is made with React and headless CMS Sanity.ios. 
        </p>
        </div>
        <div className="center">
        <a href="https://huldrablog.netlify.app" target="blank"><button className="view">View Live</button></a>
        &nbsp;&nbsp;
        <a href="https://github.com/lonsoien/huldrablog" target="blank"><button className="view">View Code</button></a>
        <br></br>
        </div>
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
            and collabrations. (This page has later been created with Wordpress.)
        </p>
        </div>
        <div className="center">
        <a href="https://evironmentbox.no/" target="blank"><button className="view">View Live</button></a>
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
         SCSS Bootstrap lesson project for understanding CSS frameworks. Main focus on styling with scss and bootstrap library.
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
        <br/>
    </>
  );
}

export default Work; 