import React from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail
} from "lucide-react";

import { profile, skills, projects } from "./portfolioData";
import "./App.css";

function App() {
  return (
    <main>

      {/* NAVIGATION */}
      <nav className="navbar">
        <h2>H<span>.</span></h2>

        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">

        <p className="top-text">PORTFOLIO / 2026</p>

        <h1>
          Hello.<br />
          I am <span>Harini.</span>
        </h1>

        <div className="hero-bottom">
          <ArrowDownRight size={50} />

          <p>
            BSc IT STUDENT<br />
            ASPIRING DEVELOPER<br />
            CREATIVE THINKER
          </p>
        </div>

        <p className="hero-caption">
          CURIOUS MIND. CREATIVE BUILDER.
          <br />
          ALWAYS LEARNING.
        </p>

      </section>

      {/* ABOUT SECTION */}
      <section className="about section" id="about">

        <p className="label">01 / ABOUT ME</p>

        <h2>
          Learning today.
          <br />
          <span>Building tomorrow.</span>
        </h2>

        <div className="about-content">

          <div className="circle">
            SHOW<br />YOUR<br />CREATIVITY
          </div>

          <div>
            <h3>19</h3>

            <p>{profile.bio}</p>

            <p>
              I believe every small step can lead
              to something meaningful.
              I enjoy exploring new technologies
              and creating new things.
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills section" id="skills">

        <p className="label">02 / MY SKILLS</p>

        <h2>
          Curiosity is
          <br />
          <span>my superpower.</span>
        </h2>

        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <span>0{index + 1}</span>
            <h3>{skill}</h3>
            <ArrowUpRight />
          </div>
        ))}

      </section>

      {/* PROJECTS SECTION */}
      <section className="work section" id="work">

        <p className="label">03 / MY WORK</p>

        <h2>
          Ideas into
          <br />
          <span>experiences.</span>
        </h2>

        <div className="project-container">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-image">
                {project.symbol}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

            </div>
          ))}

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="contact section" id="contact">

        <p className="label">04 / CONTACT</p>

        <h2>
          Let's make
          <br />
          something great.
        </h2>

        <a href={`mailto:${profile.email}`}>
          <Mail /> {profile.email}
        </a>

        <div className="social-links">
          <a href={profile.github}>
            <Github /> Github
          </a>

          <a href={profile.linkedin}>
            <Linkedin /> LinkedIn
          </a>
        </div>

      </section>

      {/* FINAL VIDEO STYLE TEXT */}
      <footer>

        <div className="moving-text">
          INVEST IN YOURSELF!! ✳ INVEST IN YOURSELF!! ✳
          INVEST IN YOURSELF!! ✳
        </div>

        <p>© 2026 HARINI | MADE WITH REACT</p>

      </footer>

    </main>
  );
}

export default App;