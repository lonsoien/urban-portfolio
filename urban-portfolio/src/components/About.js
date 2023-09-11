
import profile from '../images/louise_onsøien_bilde.jpg'

function About () {
    return (
        <>
        <h1 className='first-text'>ABOUT</h1>
        <section className="profile">
        <div className="selfie">
            <img className="theimage" alt='profile' src={profile}></img>
        </div>
        <p className="item">
            My name is Louise and im a frontend developer. 
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
            <br/>
            Lately ive been working with my own projects and envolved in React and Sanity.ios. 
            <br></br>
            <br></br>
            So who am I?
            <br></br>
            Im a bubbely person who loves to envolve and learn new things.
             <br></br>
             I am easy to get along with, love to work with other people and in teams, but 
             also have the need to lock my self inside my own "bubble" to get into that creative mindset.
             I work hard, are organized and like to have a detailed overview on my projects.
             <br></br>
             <br></br>
             I currently started my freelance business Bellingmo Webdesign, please take a look. 
             <br/>
             <a href="https://bellingmowebdesign.com" target="blank" style={{color: "black"}}> Click Here.</a>
            </p>

        <ul className="item2">
            <p>MY SKILLS:</p>
            <p>HTML, CSS, Javascript</p>
            <p>SASS, Bootstrap</p>
            <p>React, Next.js</p>
            <p>REST API</p>
            <p>Sanity.ios</p>
            <p>CMS, Wordpress</p>
            <p>Adobe XD, Photoshop</p>
            <p>UI Design, UX Design</p>
        </ul>
        </section>
        <footer>
            <h4>by Louise Bellingmo</h4>
        </footer>
        <br/>
    </>
  );
}

export default About; 

// Tailwind