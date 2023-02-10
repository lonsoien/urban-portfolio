import Louise from '../images/louie-sort.jpg';

function About () {
    return (
        <>
        <h1 className='first-text'>ABOUT</h1>
        <section className="profile">
        <div>
            <img style={{borderRadius: "10%", width: "300px"}} alt='profile' src={Louise}></img>
        </div>
        <br></br>
        <p className="item">
            My name is Louise and im currently living in Oslo. 
            <br></br>
            <br></br>
            I am a graduate from Noroff School of Technology and Digital Media. 
            <br></br>
            This is a field of great interest, and im im very passionate about what I do. 
            <br></br>
            Even tho my main focus is programming code I also love digital design. 
            <br></br>
            To create good UI and UX design is something I wish to envolve more in.
            <br></br> 
            I am skilled with the Adobe package like Adobe XD, and Photoshop. 
        </p>
        <ul className="item2">
            <p>My skills:</p>
            <p>HTML, CSS, Javascript</p>
            <p>SASS, Bootstrap</p>
            <p>React, Next.js</p>
            <p>REST API</p>
            <p>CMS, Wordpress</p>
            <p>Adobe XD, Photoshop</p>
            <p>UI Design, UX Design</p>
        </ul>
        </section>
        <footer>
            <h4>by Louise Bellingmo</h4>
        </footer>
    </>
  );
}

export default About; 

// Tailwind