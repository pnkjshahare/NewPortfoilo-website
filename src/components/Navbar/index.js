import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  NavLogo,
  LogoVideo,
  NavItems,
  MobileIcon,
  MobileMenu,
  MobileLink,
  ThemeToggleButton,
  NavActions,
} from "./NavbarStyledComponent";
import { FaBars } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import BullBlue from "../../images/BullBlue.mp4";
import BullRed from "../../images/BullRed.mp4";
import { useThemeMode } from "../../utils/ThemeContext.js";
import { useMarketTrend } from "../../utils/MarketContext.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { mode, toggleMode } = useThemeMode();
  const { trend } = useMarketTrend();
  const bullClip = trend === "down" ? BullRed : BullBlue;
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/" aria-label="Portfolio home">
          <LogoVideo key={bullClip} src={bullClip} autoPlay loop muted playsInline $trend={trend} />
        </NavLogo>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <NavActions>
          <ThemeToggleButton
            onClick={toggleMode}
            aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {mode === "dark" ? <FiSun /> : <FiMoon />}
          </ThemeToggleButton>
          <MobileIcon>
            <FaBars
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </MobileIcon>
        </NavActions>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>

            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <MobileLink
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </MobileLink>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
