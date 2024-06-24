import { Container } from "@mui/material";
import { useEffect } from "react";
import anime from "animejs";

export function Header() {
  useEffect(() => {
    anime({
      targets: ".header-items",
      translateY: [-100, 0],
      duration: 1200,
      easing: "spring(1, 80, 10, 0)", // adjusted easing for better visual effect
      delay: anime.stagger(150),
    });
  }, []);


  function animateRoot() {
    anime({
      targets: document.body,
        backgroundColor: "#2f323a",
      duration: 750,
      easing: "easeOutQuad(1, 0.75, 0, 1)",
    })
  }

  return (
    <header>
      <Container maxWidth="lg">
        <ul className="desktop">
          <li className="header-items">
            <button 
            onClick={animateRoot}
            className="invisible">
              <h2
                style={{
                  lineHeight: "0.8",
                  textAlign: "left",
                }}
                className="highlight"
              >
                Muhammad
                <br />
                Haikal
              </h2>
            </button>
          </li>
          <li
            className="header-items"
            style={{
              textAlign: "left",
            }}
          >
            <p>ID-Jakarta/</p>
            <p>MY-Selangor</p>
          </li>
          <li
            className="header-items"
            style={{
              textAlign: "left",
            }}
          >
            <p>Poke me</p>
            <div
              style={{
                display: "flex",
                width: "100px",
                justifyContent: "space-between",
              }}
            >
              <div className="item">
                <p>LinkedIn</p>
                <div className="line" />
              </div>
              <div className="item">
                <p>Email</p>
                <div className="line" />
              </div>
            </div>
          </li>
          <li
            className="header-items"
            style={{
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <div>
              <div className="item">
                <p>About me & purpose of this web</p>
                <div className="line" />
              </div>
            </div>
            <div className="item">
              <p>Stuff I co-/created</p>
              <div className="line" />
            </div>
            <div className="item">
              <p>My Spotify Playlist</p>
              <div className="line" />
            </div>
          </li>
        </ul>
      </Container>
    </header>
  );
}
