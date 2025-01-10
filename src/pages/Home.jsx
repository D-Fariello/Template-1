import React from "react";

const Home = () => {
  return (
    <main className="mainDiv">
      <section>
        <h1>Dalila</h1>
        <h2 className="lastName">Fariello</h2>
        <div className="photo">
          <img
            className="aboutMeImage"
            src="/images/Dalila.avif"
            alt="Dalila's photo"
          />
        </div>

        <div className="jobInformation">
          <h3 className="jobTitle">Front End Developer</h3>
          <p className="jobDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            beatae cumque voluptatem sequi deleniti sed harum maiores tenetur
            totam quae natus aliquid veritatis, provident reiciendis cupiditate
            amet molestias quam similique!
          </p>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          <div className="skillsDiv">
            <ul className="skillsList">
              <li className="buttonsList">JavaScript</li>
              <li className="buttonsList">React</li>
              <li className="buttonsList">HTML</li>
              <li className="buttonsList">CSS</li>
            </ul>
            <ul className="skillsList">
              <li className="buttonsList">Redux</li>
              <li className="buttonsList">GtiHub</li>
              <li className="buttonsList">Leadership</li>
              <li className="buttonsList">Jira</li>
            </ul>
          </div>
        </div>

        <div className="aboutMe">
          <h3>About Me</h3>
          <p className="aboutMeParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            beatae cumque voluptatem sequi deleniti sed harum maiores tenetur
            totam quae natus aliquid veritatis, provident reiciendis cupiditate
            amet molestias quam similique!
          </p>
        </div>

        <div className="links">
          <h2>Links</h2>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/dalilafariello">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/dalilafariello">GitHub</a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Projects</h3>
        <div className="projects">{/* Aggiungi qui i tuoi progetti */}</div>
        <div className="cards">{/* Aggiungi qui le card per i progetti */}</div>
      </section>
    </main>
  );
};

export default Home;
