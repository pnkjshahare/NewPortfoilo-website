import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { Bio } from "../../data/constants";

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 40px clamp(16px, 4vw, 64px);
`;

const Card = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 28px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(10px);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 22px;
`;

const Title = styled.div`
  font-size: 34px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Desc = styled.div`
  margin-top: 8px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileTile = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 82px;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.card_hover};
  }
`;

const IconWrap = styled.span`
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: ${({ theme }) => theme.tag_bg};
  color: ${({ theme }) => theme.primary};
  font-size: 20px;
`;

const TileText = styled.span`
  display: grid;
  gap: 4px;
  min-width: 0;
`;

const Label = styled.span`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 13px;
  font-weight: 500;
`;

const Value = styled.span`
  color: ${({ theme }) => theme.text_primary};
  font-size: 15px;
  font-weight: 600;
  overflow-wrap: anywhere;
`;

const profiles = [
  {
    label: "GitHub",
    value: "pnkjshahare",
    href: Bio.github,
    icon: FaGithub,
  },
  {
    label: "LeetCode",
    value: "shahare_pnkj",
    href: Bio.leetcode,
    icon: SiLeetcode,
  },
  {
    label: "GeeksforGeeks",
    value: "pankajsa6tmk",
    href: Bio.gfg,
    icon: SiGeeksforgeeks,
  },
];

const CodingProfiles = () => {
  return (
    <Container id="coding">
      <Card>
        <Header>
          <Title>Coding Profiles</Title>
          <Desc>Problem solving, open-source, and competitive programming profiles.</Desc>
        </Header>
        <ProfileGrid>
          {profiles.map(({ label, value, href, icon: Icon }) => (
            <ProfileTile href={href} target="_blank" rel="noreferrer" key={label}>
              <IconWrap>
                <Icon />
              </IconWrap>
              <TileText>
                <Label>{label}</Label>
                <Value>{value}</Value>
              </TileText>
            </ProfileTile>
          ))}
        </ProfileGrid>
      </Card>
    </Container>
  );
};

export default CodingProfiles;
