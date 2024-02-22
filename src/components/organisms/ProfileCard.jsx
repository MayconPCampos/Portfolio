import React from "react";
import styled from "styled-components";
import gitHubSvg from "../../assets/images/github.svg";
import emailSvg from "../../assets/images/envelope-regular.svg";
import backgroundImage from "../../assets/images/pic1.jpg";

const ProfileContainer = styled.div`
  max-width: 80%;
  max-height: 80%;
  margin: auto;
  margin-bottom: 70px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
  }

  @media screen and (max-width: 1199px) {
    margin-top: 100px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(51, 67, 214, 0.226);
    border-radius: 4px;
  }

  img {
    margin: 0;
    max-width: 100%;
    border-radius: 4px;
  }
`;

const LinksContainer = styled.div`
  background-color: rgb(36, 61, 116);
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const IconLink = styled.a`
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 5px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;

  &:hover {
    width: 37px;
    height: 37px;
  }

  img {
    width: 18px;
  }
`;
const ProfileCard = () => {
  return (
    <>
      <ProfileContainer>
        <img src={backgroundImage} alt="" />
        <LinksContainer>
          <IconLink
            href="https://github.com/MayconPCampos"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gitHubSvg} alt="github icon"></img>
          </IconLink>
          <IconLink href="#contact">
            <img src={emailSvg} alt="email icon"></img>
          </IconLink>
        </LinksContainer>
      </ProfileContainer>
    </>
  );
};

export default ProfileCard;
