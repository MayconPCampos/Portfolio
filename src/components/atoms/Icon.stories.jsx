import Icon from "./Icon";
import githubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import StoriesBackground from "./Background";

export default {
  title: "Components/Atoms/Icon",
  component: Icon,
};

export const Linkedin = {
  render: () => (
    <StoriesBackground>
      <Icon>
        <img src={LinkedinIcon} alt="" />
      </Icon>
    </StoriesBackground>
  ),
};

export const GitHub = {
  render: () => (
    <StoriesBackground>
      <Icon>
        <img src={githubIcon} alt="" />
      </Icon>
    </StoriesBackground>
  ),
};
