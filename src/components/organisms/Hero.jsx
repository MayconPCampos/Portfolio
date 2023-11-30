import React from "react";
import Box from "../atoms/Box";
import Text from "../atoms/Text";
import styled from "styled-components";
import heroImage from "../assets/me.jpg";

const HeroContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

const HeroHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeroBrand = styled.p`
  color: #fff;
`;

const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 220px;
    border-radius: 30px;
    margin-top: 15px;
  }
`;

const Hero = () => {
  return (
    <Box size="xl">
      <HeroContainer>
        <HeroHeading>
          <HeroBrand>img here</HeroBrand>
          <Text type="tiny">
            Desenvolvedor<br></br>front end
          </Text>
        </HeroHeading>
        <HeroInfo>
          <img src={heroImage} alt="" />
          <Text type="big">Curitiba - PR</Text>
          <Text type="tiny">© 2023</Text>
          <ul>
            <li>Github</li>
            <li>Site</li>
            <li>Instagram</li>
          </ul>
        </HeroInfo>
        <button>Contato</button>
      </HeroContainer>
    </Box>
  );
};

export default Hero;
