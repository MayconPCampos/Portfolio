import Box from "../atoms/Box";
import Text from "../atoms/Text";
import TechCard from "./TechCard";
import reactImg from "../assets/react.svg";
import styled from "styled-components";

const Container = styled.div`
  background-color: #333;
`;

export default {
  title: "components/Organisms/TechCard",
  component: TechCard,
};

export const Usage = {
  render: () => (
    <Container>
      <TechCard>
        <Box size="sm">
          <img src={reactImg}></img>
          <Text type="number">6 meses</Text>
        </Box>
        <Text type="bright">Tech</Text>
      </TechCard>
    </Container>
  ),
};
