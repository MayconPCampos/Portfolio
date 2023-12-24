import Card, { CardMedia, CardBody } from "./ProjectsCard";
import projectImage from "../assets/project1.jpg";
import Icon from "../atoms/Icon";

import siteLink from "../assets/visit-site.svg";
import gitLink from "../assets/github.svg";

export default {
  title: "Components/organisms/Card",
  component: Card,
};

export const WithMedia = {
  render: () => (
    <Card>
      <CardMedia image={projectImage}></CardMedia>
      <CardBody>
        <a href="#">
          <Icon>
            <img src={siteLink} alt="" />
          </Icon>
        </a>
        <a href="#">
          <Icon>
            <img src={gitLink} alt="" />
          </Icon>
        </a>
      </CardBody>
    </Card>
  ),
};
