import { Container } from "@mui/material";
import { useEffect } from "react";
import anime from "animejs";

export function Header() {
  useEffect(() => {
    anime({
      targets: ".kal-header",
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 500,
      easing: "easeOutQuad", 
    })
  }, []);

  return (
    <header>
      <Container maxWidth="lg">
        <p className="kal-header" style={{
          padding:'15px',
          fontSize:'10pt',
          color:'var(--teal)',
        }}>This website was lovingly made using <b style={{
          color:'black'
        }}>React, AnimeJS, MUI,</b> and <b style={{
          color:'black'
        }}>Vercel</b></p>
      </Container>
    </header>
  );
}
