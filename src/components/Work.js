import Environment from '../images/evironmentbox2.png'; 
import Kicks from '../images/kickscrew-mockup.png'; 
import examplesite from '../images/sneakers-product.png'; 

function Work () {
    return (
        <>
        <h1 className='first-text'>MY WORK</h1>
        <div>
            <img alt='design' className='center' src={Environment}></img>
        </div>
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

        <footer>
            <h4>by Louise Bellingmo</h4>
            <br></br>
        </footer>
    </>
  );
}

export default Work; 