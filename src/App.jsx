import { useEffect, useState } from "react";

function App() {
  const titles = [
    "IT Student",
    "Frontend Developer",
    "React Learner",
    "Future Software Engineer",
  ];

  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      if (i < titles[titleIndex].length) {
        setText(titles[titleIndex].slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);

        setTimeout(() => {
          setText("");
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [titleIndex]);

  return (
    <>
      {/* Background Animation */}
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <h4 className="welcome">WELCOME TO MY WORLD ✨</h4>

        <h1>
          Hi, I'm <span className="name">Harini</span>
        </h1>

        <h2>{text}</h2>

        <p>
          Crafting beautiful digital experiences with creativity and code.
        </p>

        <div className="hero-buttons">
          <button>View Projects</button>
          <button className="secondary">Contact Me</button>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <h1>About Me</h1>

        <p>
          I am a 3rd year Information Technology student passionate about
          building modern websites, learning React, and exploring Data Science.
        </p>
      </section>

      {/* Skills */}
      <section className="section">
        <h1>My Skills</h1>

        <div className="skills">
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Git</div>
          <div className="skill-card">Python</div>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <h1>Featured Projects</h1>

        <div className="projects">
          <div className="card">
            <h2>Portfolio Website</h2>
            <p>Modern responsive React portfolio.</p>
          </div>

          <div className="card">
            <h2>Weather App</h2>
            <p>Live Weather Application using APIs.</p>
          </div>

          <div className="card">
            <h2>Student Portal</h2>
            <p>Student management system with CRUD.</p>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="ending">
        <h1>Thanks for Visiting ❤️</h1>

        <p>
          Every line of code is a step toward my dream of becoming a great
          software engineer.
        </p>

        <h3>See You Again 🚀</h3>
      </section>

      <style>{`
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:Poppins,sans-serif;
      }

      body{
        background:#050816;
        color:white;
        overflow-x:hidden;
      }

      .background{
        position:fixed;
        width:100%;
        height:100%;
        z-index:-1;
      }

      .background span{
        position:absolute;
        width:120px;
        height:120px;
        border-radius:50%;
        background:rgba(0,255,255,.1);
        animation:float 10s linear infinite;
      }

      .background span:nth-child(1){
        left:10%;
        top:20%;
      }

      .background span:nth-child(2){
        left:80%;
        top:15%;
      }

      .background span:nth-child(3){
        left:30%;
        top:70%;
      }

      .background span:nth-child(4){
        left:70%;
        top:80%;
      }

      .background span:nth-child(5){
        left:50%;
        top:40%;
      }

      @keyframes float{
        0%{
          transform:translateY(0) rotate(0deg);
        }

        50%{
          transform:translateY(-50px) rotate(180deg);
        }

        100%{
          transform:translateY(0) rotate(360deg);
        }
      }

      .hero{
        min-height:100vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        text-align:center;
        padding:20px;
      }

      .welcome{
        color:#00ffff;
        letter-spacing:3px;
        margin-bottom:20px;
      }

      .hero h1{
        font-size:4rem;
      }

      .name{
        background:linear-gradient(90deg,#00ffff,#ff00ff);
        -webkit-background-clip:text;
        color:transparent;
      }

      .hero h2{
        color:#00ffff;
        margin:20px 0;
        height:40px;
      }

      .hero p{
        width:70%;
        max-width:700px;
        margin-bottom:30px;
      }

      .hero-buttons button{
        padding:15px 30px;
        border:none;
        border-radius:30px;
        margin:10px;
        cursor:pointer;
        font-weight:bold;
      }

      .hero-buttons button:hover{
        transform:scale(1.1);
        transition:.3s;
      }

      .secondary{
        background:transparent;
        color:white;
        border:2px solid cyan;
      }

      .section{
        padding:100px 10%;
        text-align:center;
      }

      .section h1{
        margin-bottom:40px;
        font-size:3rem;
      }

      .skills{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
        gap:20px;
      }

      .skill-card{
        background:rgba(255,255,255,.05);
        backdrop-filter:blur(15px);
        padding:30px;
        border-radius:20px;
        transition:.5s;
      }

      .skill-card:hover{
        transform:translateY(-15px);
        box-shadow:0 0 20px cyan;
      }

      .projects{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
        gap:30px;
      }

      .card{
        background:rgba(255,255,255,.05);
        padding:30px;
        border-radius:20px;
        backdrop-filter:blur(15px);
        transition:.5s;
      }

      .card:hover{
        transform:rotate(2deg) scale(1.05);
        box-shadow:0 0 25px #00ffff;
      }

      .ending{
        text-align:center;
        padding:150px 20px;
        background:linear-gradient(
        180deg,
        #050816,
        #000000
        );
      }

      .ending h1{
        font-size:4rem;
        color:#00ffff;
        margin-bottom:20px;
      }

      .ending h3{
        margin-top:30px;
        color:#ff00ff;
      }

      @media(max-width:768px){
        .hero h1{
          font-size:2.5rem;
        }

        .ending h1{
          font-size:2rem;
        }
      }

      `}</style>
    </>
  );
}

export default App;
