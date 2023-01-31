import Environment from '../images/evironmentbox2.png'; 

function Work () {
    return (
        <>
        <h1 className='first-text'>MY WORK</h1>
        <div>
            <img alt='design' className='center' src={Environment}></img>
        </div>
        <div className='info-text'>
        <p>
            Final Exam project for a real world client.
            Environmentbox AS is a company that creates innovative storage 
            solutions for communities and businesses. 
        </p>
        </div>
        <div className="center">
        <a href="https://evironmentbox.netlify.app/" target="blank"><button className="view">View Live</button></a>
        &nbsp;&nbsp;
        <a href="https://github.com/Noroff-FEU-Assignments/project-exam-2-lonsoien" target="blank"><button className="view">View Code</button></a>
        <br></br>
        </div>

        <div>
            <img alt='design' className='center' src={Environment}></img>
        </div>
        <div className='info-text'>
        <p>
            Final Exam project for a real world client.
            Environmentbox AS is a company that creates innovative storage 
            solutions for communities and businesses. 
        </p>
        </div>

        <div className="center">
        <a href="https://evironmentbox.netlify.app/" target="blank"><button className="view">View Live</button></a>
        &nbsp;&nbsp;
        <a href="https://github.com/Noroff-FEU-Assignments/project-exam-2-lonsoien" target="blank"><button className="view">View Code</button></a>
        <br></br>
        </div>
        
        <footer>
            <h4>by Louise Bellingmo</h4>
        </footer>
    </>
  );
}

export default Work; 