import { Container } from "@mui/material";
import "./App.css";
import { Layout } from "./Layout";
import { Kohead } from "./components/Kohead";
import { useEffect } from "react";
import anime from "animejs";

function App() {
  useEffect(() => {
    document.title = "Kal Docs";
    anime({
      targets: ".kohead-div",
      translateY: [180, 0],
      duration: 750,
      easing: "easeOutQuad(1, 0.75, 0, 1)",
    })
  },[]);

  return (
    <>
      <Container maxWidth="lg">
        <Layout>
          <div>
            <p>Test</p>
          </div>
        </Layout>
        <Kohead />
      </Container>
    </>
  );
}

export default App;
