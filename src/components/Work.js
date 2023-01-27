import Menu from './Menu';
import Designer from '../images/Designer.jpg'; 

function Work () {
    return (
        <>
        <Menu />
        <h1 className='first-text'>MY WORK</h1>
        <div>
            <img alt='design' className='center' src={Designer}></img>
        </div>
        <footer>
            <h4>by Louise Bellingmo</h4>
        </footer>
    </>
  );
}

export default Work; 