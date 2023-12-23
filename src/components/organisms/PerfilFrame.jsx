import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";

import perfilImage from "../assets/perfil.png.jpg";

const Frame = styled.div`
  border: 1px solid #eee;
  max-width: 700px;
  max-height: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  overflow: hidden;
  margin: auto;
  padding-bottom: 15px;

  img {
    max-width: 100%;
    margin-bottom: 20px;
  }
  p {
    border-bottom: 1px solid #eee;
    line-height: 1.5;
    margin: 0 10px;
    padding-bottom: 5px;
    width: 100%;
  }

  p:nth-last-child(1) {
    border: none;
  }
`;

const PerfilFrame = () => {
  return (
    <>
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
    </>
  );
};

export default PerfilFrame;
