import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import Box from "../atoms/Box";
import perfilImage from "../assets/perfil.png.jpg";

const Frame = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    margin-bottom: 20px;
  }
  p {
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;
    line-height: 1.5;
  }

  p:nth-last-child(1) {
    border: none;
  }
`;

const PerfilFrame = () => {
  return (
    <>
      <Box size="lg">
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
