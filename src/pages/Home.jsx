import { Container, Divider } from "@mui/material";
import "../App.css";
import { useEffect } from "react";
import anime from "animejs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { MdBook, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineQuestionMark } from "react-icons/md";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Frame } from "../components/Frame";
import { Barrier } from "../components/barrier";

function Home() {
  useEffect(() => {
    document.title = "Kal";
    anime({
      targets: document.body,
      backgroundColor: "#000000",
      duration: 1000,
      easing: "easeOutQuad(1, 0.75, 0, 1)",
    })
  }, []);


  return (
    <div>
      <Container style={{
        display:"flex"
      }} maxWidth="lg">
        <div id="lefty" className="containerItem">
            <h4>Current status</h4>
            <h3>Open to work</h3>
            <p>About Me</p>
        </div>
        <div id="righty" className="containerItem">
        <Frame>
            <h1>Howdy</h1>
            <h1>there stranger.</h1>
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
            <Divider component="li" variant="fullwidth" />
            <h1>Projects</h1>
            <Divider component="li" variant="fullwidth" />
            <h1>Tools</h1>
        </Frame>
        </div>
      </Container>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default Home;