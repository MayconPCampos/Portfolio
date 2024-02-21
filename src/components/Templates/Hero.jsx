import React, { useState, useEffect } from "react";
import styled from "styled-components";
import backgroundImg from "../../assets/images/bg1.avif";
import MenuBar from "../organisms/NavBar";
import Title from "../atoms/Title";

const HeroBackground = styled.div`
  background: url(${backgroundImg});
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-position-x: center;
  background-position-y: -200px;
  background-size: cover cover;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .hidden {
    opacity: 0;
  }
`;

const BackgroundOverlay = styled.div`
  background-color: rgba(26, 30, 35, 0.85);
  background-size: cover;
  background-attachment: fixed;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px;
  text-align: center;
  width: 100%;
  opacity: 1;
  transition: opacity 0.6s;
  padding-bottom: 40px;

  button {
    margin-top: 15px;
  }
`;

const Name = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  margin-bottom: 0;
  font-size: 0.9rem;
  letter-spacing: 3px;

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const HeroSubtitle = styled.p`
  margin-top: 10px;
  margin-bottom: 0px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  color: #fff;
  font-weight: 100;
  font-size: 1rem;
  letter-spacing: 2px;

  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

const Hero = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // opacity effect on loading page
  if (!isPageLoaded) {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 500);
  }

  const handleScroll = () => {
    // set the scroll Y position to create hidden effect in the hero content component
    setScrollOffset(window.scrollY);

    // get the hero start Y position on the screen to change the menubar background color
    let heroPositionY = document.querySelector("#home").offsetHeight;
    setIsScrolling(
      window.scrollY >= heroPositionY - 70 && window.innerWidth > 768
    );

    // parallax effect in hero (-200 to positioning the image on center of the screen)
    let heroTopPosition = document
      .querySelector("#home")
      .getBoundingClientRect().top;

    let newBackgroundPositionY = heroTopPosition * 0.5 - 200 + "px";
    document.querySelector(".hero-background").style.backgroundPositionY =
      newBackgroundPositionY;

    //parallax effect in Hero background overlay
    document.querySelector(
      ".hero-background-overlay"
    ).style.backgroundPositionY = newBackgroundPositionY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="home">
      <MenuBar
        isHeroLoaded={isPageLoaded}
        isBackgroundVisible={isScrolling}
        isHomePage={true}
      />
      <HeroBackground className="hero-background">
        <BackgroundOverlay className="hero-background-overlay" />
        <HeroContent
          style={{
            transform: `translateY(${scrollOffset * 0.5}px)`,
          }}
          className={
            (scrollOffset > 120 ? "hidden" : "") ||
            (!isPageLoaded ? "hidden" : "")
          }
        >
          <Name type="white">Maycon P. Campos</Name>
          <Title>
            <h1>
              Software <span>Developer</span>
            </h1>
          </Title>
          <HeroSubtitle>Programmer & technology enthusiast</HeroSubtitle>
        </HeroContent>
      </HeroBackground>
    </div>
  );
};

export default Hero;
