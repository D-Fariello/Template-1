import React from "react";
import SkillsSection from "../components/SkillsSection";

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

        {/* Skills List  */}
        <SkillsSection />

        {/* About Me Div */}
        <div className="aboutMe">
          <h3>About Me</h3>
          <p className="aboutMeParagraph">
            I am a passionate front-end developer and lifelong learner who
            thrives on creating engaging web experiences.
          </p>
          <p className="aboutMeParagraph">
            Fluent in Italian, Spanish, English, and French, I love connecting
            with people from diverse cultures and continuously expanding my
            horizons.
          </p>
          <p className="aboutMeParagraph">
            A travel enthusiast and dog lover, I enjoy exploring new places,
            embracing different languages, and enriching my perspective through
            learning and collaboration.
          </p>
          <p className="aboutMeParagraph">
            In my free time, I indulge in my love for theater, staying active at
            the gym, and discovering new cuisines—because great food is an
            adventure in itself!
          </p>
        </div>
      </section>

      {/* Project Section */}

      <section>
        <h3>Projects</h3>
        <div className="projects">{/* Aggiungi qui i tuoi progetti */}</div>
        <div className="cards">{/* Aggiungi qui le card per i progetti */}</div>
      </section>
    </main>
  );
};

export default Home;
