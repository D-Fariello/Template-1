import React from "react";
import SkillsSection from "../components/SkillsSection";
import Projects from "../components/Projects";
import Links from "../components/Links";
import Image from "../components/Image";

const Home = () => {
  return (
    <main className="mainDiv">
      <section id="home">
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
            A front-end developer is responsible for creating the visual and
            interactive elements of websites and applications, ensuring they are
            responsive, user-friendly, and compatible across all devices and
            browsers.
          </p>
          <p className="jobDescription">
            Using technologies like HTML, CSS, and JavaScript, they transform
            design concepts into dynamic, functional web pages. I bring a strong
            focus on creating seamless, engaging user experiences by leveraging
            responsive design, performance optimization, and dynamic interfaces.
          </p>
          <p className="jobDescription">
            My attention to detail ensures that every web application I develop
            is not only visually appealing but also fast, accessible, and
            intuitive, delivering high-quality solutions tailored to meet
            specific business needs.
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
          <Links />
        </div>
      </section>
      <Image />

      {/* Project Section */}
      <section id="projects">
        <Projects />
      </section>
    </main>
  );
};

export default Home;
