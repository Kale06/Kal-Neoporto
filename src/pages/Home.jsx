import { Container } from "@mui/material";
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
            <p>About Me</p>
        </div>
        <div id="righty" className="containerItem">
        <Frame>
            <h1>Howdy,</h1>
            <h1>I'm Haikal.</h1>
        </Frame>
        </div>
      </Container>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default Home;