import Text from "../atoms/Text";
import SkillCard from "./SkillCard";
import reactImg from "../assets/react.svg";

export default {
  title: "components/Organisms/SkillCard",
  component: SkillCard,
};

export const Usage = {
  render: () => (
    <>
      <SkillCard>
        <img src={reactImg} alt=""></img>
        <Text type="bright">Tech</Text>
      </SkillCard>
    </>
  ),
};
