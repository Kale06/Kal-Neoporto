import { Container, Divider, Grid } from "@mui/material";
import "../App.css";
import { useEffect } from "react";
import anime from "animejs";
import { Frame } from "../components/Frame";
import { Barrier } from "../components/Barrier";
import { Line } from "../components/Line";
import { ItemContainer } from "../components/ItemContainer";
import { MdLaunch } from "react-icons/md";

function Home() {
  useEffect(() => {
    document.title = "Kal";
    anime({
      targets: document.body,
      background: "linear-gradient(to bottom, black 0%,rgb(107, 108, 160) 100%)",
      duration: 1000,
      easing: "easeOutQuad(1, 0.75, 0, 1)",
    });
    anime({
        targets:".line",
        width:"100%",
        duration: 800,
        delay: anime.stagger(150),
        easing: "easeOutQuad(1, 0.75, 0, 1)",
    });
    anime({
      targets:[".frame", "#lefty"],
        opacity: "100%",
        duration: 800,
        delay: anime.stagger(150),
        easing: "easeOutQuad(1, 0.75, 0, 1)",
    });
  }, []);


  return (
    <div>
      <Container className="kal-container" maxWidth="lg">
        <div className="possing-container">
          <div id="lefty" className="containerItem">
              <p>Current status</p>
              <div style={{display:"flex", alignItems:"center"}}>
                <div style={{
                  height:"10px",
                  width:"10px",
                  margin:"0 5px",
                  borderRadius: "100%",
                  backgroundColor:"red"
                }} />
                <h3>Currently Employed</h3>
              </div>
              <Barrier />
              <p>Currently situated at</p>
              <h3>Jakarta, Indonesia</h3>
          </div>
          <div id="righty" className="containerItem">
          <Frame>
              <h1>Howdy.👋</h1>
              <Barrier />
              <p>
                  I'm Muhammad Haikal, an Indonesian fresh graduate Information
                  Technology student from Universiti Utara Malaysia.
                  My field of concentration is Software Engineering
                  and I mostly dabble in Java, Javascript/Typescript,
                  and Bash. But currently I'm trying to study more on
                  Rust and Ansible for future work/hobbies/projects.
              </p>
              <Barrier />
              <Divider component="li" variant="fullwidth" />
              <h1>Work</h1>
              <ItemContainer>
                <div style={{
                  alignItems:"start"
                }} className="sub-details">
                  <img src="/img/BASFLogo.png" />
                  <a target="blank" href="https://www.basf.com">
                    <MdLaunch />
                  </a>
                </div>
                <h3>IT and Digitalization Intern</h3>
                <h4>BASF Asia Pacific Service Centre Sdn Bhd</h4>
                <div className="sub-details">
                  <p className="sub">Aug 2024 - Apr 2025</p>
                  <p className="sub">Kuala Lumpur, Malaysia</p>
                </div>
              </ItemContainer>
              <Divider component="li" variant="fullwidth" />
              <h1>Projects/ Personal Works</h1>
              <Barrier />
                <Grid style={{
                  justifyContent:"space-around"
                }} container>
                  <Grid xs={15} md={5.8}>
                    <ItemContainer>
                      <h4>Project - DevOps</h4>
                      <div 
                      style={{
                        alignItems:"start"
                      }}
                      className="sub-details">
                        <h3>Simple-RTMP</h3>
                        <a target="blank" href="https://hub.docker.com/repository/docker/kale0602/simple-rtmp/">
                          <MdLaunch />
                        </a>
                      </div>
                      <p className="sub">
                          Individual Personal Project
                      </p>
                    </ItemContainer>
                  </Grid>
                  <Grid xs={15} md={5.8}>
                    <ItemContainer>
                      <h4>Project - DevOps</h4>
                      <div 
                      style={{
                        alignItems:"start"
                      }}
                      className="sub-details">
                        <h3>Java Web Application Image on Alpine Linux</h3>
                        <a target="blank" href="https://github.com/Kale06/java-web-container">
                          <MdLaunch />
                        </a>
                      </div>
                      <p className="sub">
                          Individual Personal Project
                      </p>
                    </ItemContainer>
                  </Grid>
                  <Grid xs={15} md={5.8}>
                    <ItemContainer>
                      <h4>Project - Web Development</h4>
                      <div 
                      style={{
                        alignItems:"start"
                      }}
                      className="sub-details">
                        <h3>SPARES</h3>
                        <a target="blank" href="https://github.com/Kale06/TOSh-based-FYP-management-system">
                          <MdLaunch />
                        </a>
                      </div>
                      <p className="sub">
                          Final Year Project - Individual
                      </p>
                    </ItemContainer>
                  </Grid>
                  <Grid xs={15} md={5.8}>
                    <ItemContainer>
                      <h4>Publication</h4>
                      <div 
                      style={{
                        alignItems:"start"
                      }}
                      className="sub-details">
                        <h3>
                          Designing and Developing a Web-Based Final Year Project Management System Using the Theory of Shame
                        </h3>
                        <a target="blank" href="https://link.springer.com/chapter/10.1007/978-3-031-91485-0_20">
                          <MdLaunch />
                        </a>
                      </div>
                      <p className="sub">
                          Co-writer with: Ahmad Hanis Mohd Shabli and Suwannit Chareen Chit.
                      </p>
                    </ItemContainer>
                  </Grid>
                  <Grid xs={15} md={5.8}>
                    <ItemContainer>
                      <h4>Project - Web Development</h4>
                      <div 
                      style={{
                        alignItems:"start"
                      }}
                      className="sub-details">
                        <h3>Contact Site</h3>
                        <a target="blank" href="https://github.com/Kale06/Kal-Neoporto">
                          <MdLaunch />
                        </a>
                      </div>
                      <p className="sub">
                          Individual Personal Project
                      </p>
                    </ItemContainer>
                  </Grid>
                </Grid>
              <Divider component="li" variant="fullwidth" />
              <h1>Additional Information</h1>
              <h2>Certifications</h2>
              <ItemContainer>
                <h3>International English Language Test System (IELTS)</h3>
                <p className="sub">Band - 7</p>
              </ItemContainer>
              <h2>Awards and Achievements</h2>
              <ItemContainer>
                <div className="sub-details">
                  <h3>BASF Internal Output S/4 Hackathon Champions</h3>
                </div>
                <p className="sub">BASF Asia Pacific Service Centre Sdn Bhd</p>
              </ItemContainer>
              <ItemContainer>
                <div className="sub-details">
                  <h3>Innovate - IT 2024 Deputy Dean of Student's Choice of Final Year Project Award</h3>
                  <a target="blank" href="https://soc.uum.edu.my/news-events/news-soc/842-innovate-it-2024">
                    <MdLaunch />
                  </a>
                </div>
                <p className="sub">Universiti Utara malaysia</p>
              </ItemContainer>
              <ItemContainer>
                <div className="sub-details">
                  <h3>NeRACA Catch the Flag top 5 Finalist</h3>
                  <a target="blank" href="https://soc.uum.edu.my/news-events/events/749-northern-region-rawsec-cybersecurity-awareness-tour-neraca">
                      <MdLaunch />
                  </a>
                </div>
                <p className="sub">Region Wide - rawSEC Malaysian Cybersecurity Community</p>
              </ItemContainer>
              <ItemContainer>
                <div className="sub-details">
                  <h3>InTECH-21 Top 10 Runner ups</h3>
                  <a target="blank" href="https://mohe.gov.my/en/broadcast/activities/intech-21-mahasiswa-cipta-produk-digital-tingkat-hasil-pmks">
                      <MdLaunch />
                  </a>
                </div>
                <p className="sub">Ministry of Higher Education Malaysia and Universiti Malaya</p>
              </ItemContainer>
              <Divider component="li" variant="fullwidth" />
              <h1>Tools</h1>
              <Barrier />
              <Grid 
                style={{
                    justifyContent:"space-around"
                  }} 
              container>
                <Grid item xs={12} md={3.8}>
                  <ItemContainer>
                    <h3>Front-End</h3>
                    <p>
                      React, Flutter, jQuery, Angular, Vanilla.
                    </p>
                  </ItemContainer>
                </Grid>
                <Grid item xs={12} md={3.8}>
                  <ItemContainer>
                    <h3>Back-End</h3>
                    <p>
                      Spring Boot, ExpressJS, Laravel, Apache NiFi, Kafka.
                    </p>
                  </ItemContainer>
                </Grid>
                <Grid item xs={12} md={3.8}>
                  <ItemContainer>
                    <h3>Database</h3>
                    <p>
                      PostgreSQL, MySQL, SQLite, Cassandra.
                    </p>
                  </ItemContainer>
                </Grid>
                <Grid item xs={12} md={3.8}>
                  <ItemContainer>
                    <h3>Testing</h3>
                    <p>
                      Selenium, JUnit, JMeter, K6, Cypress, Playwright, Cucumber, Manual Testing.
                    </p>
                  </ItemContainer>
                </Grid>
                <Grid item xs={12} md={3.8}>
                  <ItemContainer>
                    <h3>Deployment</h3>
                    <p>
                      Docker, Azure Pipelines, Ansible, GitHub Actions, Vercel.
                    </p>
                  </ItemContainer>
                </Grid>
                <Grid item xs={12} md={3.8}>
                  <ItemContainer>
                    <h3>Forensics/Monitoring</h3>
                    <p>
                      Datadog, Ghidra.
                    </p>
                  </ItemContainer>
                </Grid>
                <Grid item xs={12} md={3.8}>
                  <ItemContainer>
                    <h3>Documentation</h3>
                    <p>
                      Markdown, Confluence, Excel, Word.
                    </p>
                  </ItemContainer>
                </Grid>
                <Grid item xs={12} md={3.8}>
                  <ItemContainer>
                    <h3>Version Control System</h3>
                    <p>
                      Git.
                    </p>
                  </ItemContainer>
                </Grid>
                <Grid item xs={12} md={3.8}>
                  <ItemContainer>
                    <h3>Programming Language</h3>
                    <p>
                      Java, Javascript/Typescript, Groovy, PHP, SQL, Python, Dart, Bash, Rust, HTML, CSS.
                    </p>
                  </ItemContainer>
                </Grid>
              </Grid>
          </Frame>
          </div>
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
