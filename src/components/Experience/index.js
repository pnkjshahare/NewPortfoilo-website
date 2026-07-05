
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';
import ExperienceDetails from '../ExperienceDetails';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    width: 100%;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1440px;
    padding: 80px clamp(16px, 4vw, 64px);
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
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

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const ExperienceGrid = styled.div`
    width: 100%;
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 24px;
    align-items: start;
    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
function Experience() {
    const [openModal, setOpenModal] = useState({ state: false, experience: null });
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>
                    My work experience as a software engineer and working on different companies and projects.
                </Desc>
                <ExperienceGrid>
                    {experiences.map((experience) => (
                        <ExperienceCard
                            experience={experience}
                            key={experience.id}
                            onClick={(selectedExperience) => setOpenModal({ state: true, experience: selectedExperience })}
                        />
                    ))}
                </ExperienceGrid>
            </Wrapper>
            {openModal.state && (
                <ExperienceDetails openModal={openModal} setOpenModal={setOpenModal} />
            )}
        </Container>
    )
}

export default Experience
