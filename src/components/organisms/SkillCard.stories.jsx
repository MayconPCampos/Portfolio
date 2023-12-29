import Text from "../atoms/Text";
import SkillCard from "./SkillCard";
import reactImg from "../assets/react.svg";
import StoriesBackground from "../atoms/Background";

export default {
  title: "components/Organisms/SkillCard",
  component: SkillCard,
};

export const Usage = {
  render: () => (
    <>
      <StoriesBackground>
        <SkillCard>
          <img src={reactImg} alt=""></img>
          <Text type="bright">Tech</Text>
        </SkillCard>
      </StoriesBackground>
    </>
  ),
};
