import Designer from '../images/Designer.jpg'; 

function Home () {
    return (
        <>
        <h1 className='first-text'>FRONTEND DEVELOPER</h1>
        <div>
            <img alt='design' className='center' src={Designer}></img>
        </div>
        <footer>
            <h4>by Louise Bellingmo</h4>
        </footer>
    </>
  );
}

export default Home; 