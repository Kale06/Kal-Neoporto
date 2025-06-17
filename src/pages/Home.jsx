import { Container, Divider } from "@mui/material";
import "../App.css";
import { useEffect } from "react";
import anime from "animejs";
import { Frame } from "../components/Frame";
import { Barrier } from "../components/barrier";
import { Line } from "../components/Line";
import { ItemContainer } from "../components/ItemContainer";

function Home() {
  useEffect(() => {
    document.title = "Kal";
    anime({
      targets: document.body,
      backgroundColor: "#000000",
      duration: 1000,
      easing: "easeOutQuad(1, 0.75, 0, 1)",
    });
    anime({
        targets:".line",
        width:"100%",
        duration: 800,
        delay: anime.stagger(150),
        easing: "easeOutQuad(1, 0.75, 0, 1)",
    })
  }, []);


  return (
    <div>
      <Container style={{
        display:"flex"
      }} maxWidth="lg">
        <div id="lefty" className="containerItem">
            <p>Current status</p>
            <h3>Open to work</h3>
            <Barrier />
            <p>Currently situated at</p>
            <h3>Jakarta</h3>
        </div>
        <div id="righty" className="containerItem">
        <Frame>
            <h1>Howdy.👋</h1>
            <Barrier />
            <p>
                I'm Muhammad Haikal, a fresh graduate Information
                Technology student from Universiti Utara Malaysia.
                My field of concentration is Software Engineering
                and I mostly dabble in Java, Javascript/Typescript,
                and Bash. But currently I'm trying to dabble more on
                Rust and Ansible for future work/hobbies/projects.
            </p>
            <Barrier />
            <Divider component="li" variant="fullwidth" />
            <h1>Work</h1>
            <ItemContainer>
              <img src="/img/BASFLogo.png" />
              <h3>IT and Digitalization Intern</h3>
              <h4>BASF Asia Pacific Service Centre Sdn Bhd</h4>
              <div className="sub-details">
                <p className="sub">Aug 2024 - Apr 2025</p>
                <p className="sub">Kuala Lumpur, Malaysia</p>
              </div>
            </ItemContainer>
            <Divider component="li" variant="fullwidth" />
            <h1>Projects</h1>
            <Divider component="li" variant="fullwidth" />
            <h1>Tools</h1>
        </Frame>
        </div>
      </Container>
      <div className="line-container">
        <Line backgroundColor="red" height="60px"/>
        <Line backgroundColor="blue" height="50px"/>
        <Line backgroundColor="yellow" height="20px"/>
        <Line backgroundColor="green" height="10px"/>
      </div>
    </div>
  );
}

export default Home;