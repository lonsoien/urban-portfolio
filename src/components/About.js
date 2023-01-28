import Designer from '../images/Designer.jpg'; 

function About () {
    return (
        <>
        <h1 className='first-text'>ABOUT</h1>
        <div>
            <img alt='design' className='center' src={Designer}></img>
        </div>
        <footer>
            <h4>by Louise Bellingmo</h4>
        </footer>
    </>
  );
}

export default About; 