import Icon from "./Icon";
import githubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";

export default {
  title: "Components/Atoms/Icon",
  component: Icon,
};

export const Linkedin = {
  render: () => (
    <Icon>
      <img src={LinkedinIcon} alt="" />
    </Icon>
  ),
};

export const GitHub = {
  render: () => (
    <Icon>
      <img src={githubIcon} alt="" />
    </Icon>
  ),
};
