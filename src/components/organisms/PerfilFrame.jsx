import React from "react";
import styled from "styled-components";

import perfilImage from "../assets/perfil_edited.jpg";

const Frame = styled.div`
  border: 1px solid #eee;
  max-width: 700px;
  max-height: 100%;
  border-radius: 5px;
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  overflow: hidden;
  margin: auto;

  img {
    margin: 0;
    max-width: 100%;
    border-radius: 5px;
  }
  p {
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
      </Frame>
    </>
  );
};

export default PerfilFrame;
