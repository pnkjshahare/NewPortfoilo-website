import React from "react";
import styled from "styled-components";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaRegClock,
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { Bio } from "../../data/constants";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 10px clamp(16px, 4vw, 64px) 90px;
`;

const Header = styled.div`
  display: grid;
  gap: 12px;
  width: 100%;
  max-width: 1440px;
  margin-bottom: 18px;
  justify-items: center;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  max-width: 920px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  line-height: 1.7;
  text-align: center;
`;

const Shell = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 22px;
  }
`;

const Tagline = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  color: ${({ theme }) => theme.text_primary};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const TagPill = styled.span`
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.tag_border};
  background: ${({ theme }) => theme.tag_bg};
  color: ${({ theme }) => theme.tag_text};
`;

const SectionBlock = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 18px;
`;

const RowTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.02em;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.a`
  min-height: 132px;
  padding: 18px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(10px);
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  display: flex;
  gap: 14px;
  align-items: flex-start;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.card_hover};
  }
`;

const ContactIcon = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.tag_bg};
  border: 1px solid ${({ theme }) => theme.tag_border};

  svg {
    width: 22px;
    height: 22px;
  }
`;

const ContactBody = styled.div`
  display: grid;
  gap: 6px;
  min-width: 0;
`;

const ContactLabel = styled.span`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const ContactValue = styled.span`
  color: ${({ theme }) => theme.text_primary};
  font-size: 15px;
  font-weight: 700;
  overflow-wrap: anywhere;
`;

const ContactHint = styled.span`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 13px;
  line-height: 1.5;
`;

const AvailabilityDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.success};
  margin-top: 6px;
  flex: 0 0 auto;
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileCard = styled.a`
  min-height: 220px;
  padding: 22px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(10px);
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  display: grid;
  gap: 14px;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.card_hover};
  }
`;

const ProfileTop = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const ProfileIcon = styled.span`
  width: 54px;
  height: 54px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.tag_bg};
  border: 1px solid ${({ theme }) => theme.tag_border};

  svg {
    width: 26px;
    height: 26px;
  }
`;

const ProfileCopy = styled.div`
  display: grid;
  gap: 4px;
  min-width: 0;
`;

const ProfileName = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;

const ProfileUser = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  overflow-wrap: anywhere;
`;

const Stats = styled.div`
  display: grid;
  gap: 10px;
`;

const StatLine = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 13px;
`;

const StatKey = styled.span`
  color: ${({ theme }) => theme.text_secondary};
`;

const StatValue = styled.span`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  text-align: right;
`;

const ProfileButton = styled.span`
  margin-top: auto;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 14px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.tag_border};
  background: ${({ theme }) => theme.tag_bg};
  color: ${({ theme }) => theme.tag_text};
  font-size: 13px;
  font-weight: 700;
`;

const CTAGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 18px;
  min-height: 56px;
  border-radius: 999px;
  color: ${({ theme }) => theme.button_text};
  text-decoration: none;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.02em;
  background: ${({ theme }) => theme.button};
  border: 1px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
  }
`;

const emailAddress = "shaharepnkj@gmail.com";
const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  emailAddress,
)}`;

const contacts = [
  {
    label: "Email",
    value: emailAddress,
    hint: "Best for collaboration and interview opportunities.",
    href: emailComposeUrl,
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    value: "pankaj-shahare",
    hint: "Professional network and direct connection.",
    href: Bio.linkedin,
    icon: FaLinkedin,
  },
  {
    label: "Location",
    value: "Pune, Maharashtra, India",
    hint: "Open to Relocation (Bengaluru, Hyderabad, Mumbai)",
    href: "#contact",
    icon: FaMapMarkerAlt,
  },
  {
    label: "Availability",
    value: "Open to Opportunities",
    hint: "Backend • Distributed Systems • FinTech",
    href: "#contact",
    icon: FaRegClock,
    availability: true,
  },
];

const profiles = [
  {
    label: "GitHub",
    username: "pnkjshahare",
    href: Bio.github,
    icon: FaGithub,
    stats: [
      ["Repos", "35+ repositories"],
      ["Focus", "Backend / Open Source"],
      ["Stacks", "Java · Golang"],
    ],
  },
  {
    label: "LeetCode",
    username: "shahare_pnkj",
    href: Bio.leetcode,
    icon: SiLeetcode,
    stats: [
      ["Solved", "1000+ Problems"],
      ["Rating", "Contest Rating"],
      ["Streak", "Current Streak"],
      ["Rate", "Acceptance Rate"],
    ],
  },
  {
    label: "GeeksforGeeks",
    username: "pankajsa6tmk",
    href: Bio.gfg,
    icon: SiGeeksforgeeks,
    stats: [
      ["Profile", "Problem Solver"],
      ["Focus", "DSA Enthusiast"],
      ["Topics", "Algorithms"],
    ],
  },
];

const Contact = () => {
  return (
    <Container id="contact">
      <Header>
        <Title>Connect & Coding Profiles</Title>
        <Subtitle>
          Let&apos;s build scalable backend systems and solve challenging
          engineering problems together.
        </Subtitle>
      </Header>

      <Shell>
        <Tagline style={{ marginBottom: 18 }}>
          <TagPill>Backend Engineer</TagPill>
          <TagPill>Low-Latency Systems</TagPill>
          <TagPill>Distributed Systems</TagPill>
          <TagPill>FinTech</TagPill>
        </Tagline>

        <SectionBlock>
          <RowTitle>Connect</RowTitle>
          <ContactGrid>
            {contacts.map(
              ({ label, value, hint, href, icon: Icon, availability }) => (
                <ContactCard
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  key={label}
                >
                  <ContactIcon>
                    <Icon />
                  </ContactIcon>
                  <ContactBody>
                    <ContactLabel>{label}</ContactLabel>
                    <ContactValue>
                      {availability ? (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <AvailabilityDot />
                          {value}
                        </span>
                      ) : (
                        value
                      )}
                    </ContactValue>
                    <ContactHint>{hint}</ContactHint>
                  </ContactBody>
                </ContactCard>
              ),
            )}
          </ContactGrid>
        </SectionBlock>

        <SectionBlock>
          <RowTitle>Coding Profiles</RowTitle>
          <ProfileGrid>
            {profiles.map(({ label, username, href, icon: Icon, stats }) => (
              <ProfileCard
                href={href}
                target="_blank"
                rel="noreferrer"
                key={label}
              >
                <ProfileTop>
                  <ProfileIcon>
                    <Icon />
                  </ProfileIcon>
                  <ProfileCopy>
                    <ProfileName>{label}</ProfileName>
                    <ProfileUser>{username}</ProfileUser>
                  </ProfileCopy>
                </ProfileTop>
                <Stats>
                  {stats.map(([key, value]) => (
                    <StatLine key={`${label}-${key}`}>
                      <StatKey>{key}</StatKey>
                      <StatValue>{value}</StatValue>
                    </StatLine>
                  ))}
                </Stats>
                <ProfileButton>
                  View Profile <FiArrowUpRight />
                </ProfileButton>
              </ProfileCard>
            ))}
          </ProfileGrid>
        </SectionBlock>

        <SectionBlock>
          <RowTitle>Actions</RowTitle>
          <CTAGroup>
            <CTAButton href={Bio.resume} target="_blank" rel="noreferrer">
              <FiDownload /> Download Resume
            </CTAButton>
            <CTAButton href={emailComposeUrl} target="_blank" rel="noreferrer">
              <FaEnvelope /> Send Email
            </CTAButton>
            <CTAButton href={Bio.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin /> Connect on LinkedIn
            </CTAButton>
          </CTAGroup>
        </SectionBlock>
      </Shell>
    </Container>
  );
};

export default Contact;
