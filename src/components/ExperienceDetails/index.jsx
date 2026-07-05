import { CloseRounded } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #000000a7;
display: flex;
align-items: top;
justify-content: center;
overflow-y: scroll;
transition: all 0.5s ease;
`;

const Wrapper = styled.div`
max-width: 800px;
width: 100%;
border-radius: 16px;
margin: 50px 12px;
height: min-content;
background-color: ${({ theme }) => theme.card};
color: ${({ theme }) => theme.text_primary};
padding: 20px;
display: flex;
flex-direction: column;
position: relative;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`;

const Meta = styled.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`;

const Summary = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin: 12px 6px 4px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

const SectionTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 16px 6px 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
    }
`;

const BulletList = styled.ul`
    margin: 0 6px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: ${({ theme }) => theme.text_primary};
`;

const Bullet = styled.li`
    font-size: 15px;
    line-height: 1.6;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 600px) {
        font-size: 13px;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 8px 6px 0 6px;
`;

const Tag = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    padding: 4px 8px;
    border-radius: 999px;
    background-color: ${({ theme }) => theme.primary + 20};
`;

const ExperienceDetails = ({ openModal, setOpenModal }) => {
    const experience = openModal?.experience;
    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, experience: null })}>
            <Container>
                <Wrapper>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, experience: null })}
                    />
                    <Image src={experience?.img} />
                    <Title>{experience?.role}</Title>
                    <Meta>{experience?.company}</Meta>
                    <Meta>{experience?.date}</Meta>
                    <Summary>{experience?.desc}</Summary>
                    {experience?.responsibilities?.length > 0 && (
                        <>
                            <SectionTitle>Responsibilities</SectionTitle>
                            <BulletList>
                                {experience.responsibilities.map((item, index) => (
                                    <Bullet key={`${experience.id}-responsibility-${index}`}>{item}</Bullet>
                                ))}
                            </BulletList>
                        </>
                    )}
                    {experience?.skills?.length > 0 && (
                        <>
                            <SectionTitle>Skills</SectionTitle>
                            <Tags>
                                {experience.skills.map((skill, index) => (
                                    <Tag key={`${experience.id}-skill-${index}`}>{skill}</Tag>
                                ))}
                            </Tags>
                        </>
                    )}
                </Wrapper>
            </Container>
        </Modal>
    )
}

export default ExperienceDetails