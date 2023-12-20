import Card, { CardMedia, CardBody } from "./ProjectsCard";
import Title from "../atoms/Title";
import projectImage from "../assets/project1.jpg";

export default {
  title: "Components/organisms/Card",
  component: Card,
};

export const WithMedia = {
  render: () => (
    <Card>
      <CardMedia image={projectImage}></CardMedia>
      <CardBody>
        <Title>
          <h4>
            Meu <span>site</span>
          </h4>
        </Title>
      </CardBody>
    </Card>
  ),
};
