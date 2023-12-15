import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import Box from "../atoms/Box";
import perfilImage from "../assets/perfil.png.jpg";

const Frame = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-bottom: 20px;
  }
`;

const PerfilFrame = () => {
  return (
    <>
      <Box size="xl">
        <Frame>
          <img src={perfilImage} alt="" />
          <Text>
            <b>Nome:</b> Maycon Pinheiro Campos
          </Text>
          <Text>
            <b>Residência:</b> Curitiba - PR
          </Text>
          <Text>
            <b>Email:</b>mayconpinheirocampos@outlook.com
          </Text>
        </Frame>
      </Box>
    </>
  );
};

export default PerfilFrame;
