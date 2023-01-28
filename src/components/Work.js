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
        <footer>
            <h4>by Louise Bellingmo</h4>
        </footer>
    </>
  );
}

export default Work; 