import { Container, Divider, Grid } from "@mui/material";
import "./App.css";
import { Layout } from "./Layout";
import { Kohead } from "./components/Kohead";
import { useEffect } from "react";
import anime from "animejs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineQuestionMark } from "react-icons/md";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  useEffect(() => {
    document.title = "Kal";
    anime({
      targets: document.body,
      backgroundColor: "#f1d9d9",
      duration: 1000,
      easing: "easeOutQuad(1, 0.75, 0, 1)",
    })
    anime({
      targets: ".kohead-div",
      translateY: [180, 0],
      duration: 750,
      easing: "easeOutQuad(1, 0.75, 0, 1)",
    })
    anime({
      targets: "h1",
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: "spring(1, 80, 10, 0)", // adjusted easing for better visual effect
      delay: anime.stagger(150),
    });
    anime({
      targets: ".kal-grid",
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: 'easeOutCubic',
      delay: anime.stagger(150),

    })
  }, []);


  return (
    <>
      <Container maxWidth="lg">
        <Layout>
          <div>
            <div>
              <h1 className="highlight">Kal</h1>
            </div>
            <div style={{
              padding: '10px'
            }} className="kal-grid">
              <Divider>
                <FaLocationDot />
              </Divider>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <p>ID - Tangerang </p>
                </Grid>
                <Grid item xs={12} md={6}>
                  <p>MY - Selangor</p>
                </Grid>
              </Grid>
            </div>
            <div style={{
              padding: '10px'
            }} className="kal-grid">
              <Divider><MdOutlineQuestionMark /> </Divider>
              <p style={{
                maxWidth: '500px'
              }}>IT Student concentrating in Software Engineering, I like twiddling with computers, listen to metal music, and scrounging through teh interwebz. Aspiring to work as a System Architect, DevOps, Cloud Engineer, or Software Engineer.</p>
            </div>
            <div style={{
              padding: '10px'
            }} className="kal-grid">
              <Divider>
                <h4>Poke me</h4>
              </Divider>
              <p style={{
                fontSize: '10pt'
              }}>(As in metaphorically, not in a literal sense, you get what I'm trying to say. ....Right?)</p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                margin: '15px 0',
              }}>
                <button name="linkedin" onClick={
                  () => {
                    window.open("https://www.linkedin.com/in/kaaal/")
                  }
                } className="invisible">
                  <FaLinkedin size={40} />
                </button>
                <button onClick={() => { window.open("https://github.com/Kale06") }} className="invisible">
                  <FaGithubAlt size={40} />
                </button>
                <button onClick={() => { window.open("mailto:muhammad.haikal100602@gmail.com") }} className="invisible">
                  <MdEmail size={40} />
                </button>
              </div>

            </div>
          </div>
        </Layout>
        <Kohead />
      </Container>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
