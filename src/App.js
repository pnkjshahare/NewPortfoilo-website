import { useState } from "react";
import { ThemeModeProvider } from "./utils/ThemeContext.js";
import { MarketProvider } from "./utils/MarketContext.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import HeroBgAnimation from "./components/HeroBgAnimation";
import Skills from "./components/Skills/index.js";
import Projects from "./components/Projects/index.js";
import Contact from "./components/Contact/index.js";
import Footer from "./components/Footer/index.js";
import Experience from "./components/Experience/index.js";
import Education from "./components/Education/index.js";
import ProjectDetails from "./components/ProjectDetails/index.jsx";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  padding-top: 80px;
  overflow-x: hidden;
  position: relative;
  transition: background-color 0.3s ease;
`;

const FixedChartBackground = styled.div`
  position: fixed;
  inset: 80px 0 0 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const ContentLayer = styled.div`
  position: relative;
  z-index: 1;
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeModeProvider>
      <MarketProvider>
        <Router>
          <Navbar />
          <Body>
            <FixedChartBackground>
              <HeroBgAnimation />
            </FixedChartBackground>
            <ContentLayer>
              <HeroSection />
              <Experience />
              <Skills />
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
              <Education />
              <Contact />
              <Footer />
              {openModal.state && (
                <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
              )}
            </ContentLayer>
          </Body>
        </Router>
      </MarketProvider>
    </ThemeModeProvider>
  );
}

export default App;
