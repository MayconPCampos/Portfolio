import SkillBar from "./SkillBar";
import StoriesBackground from "../atoms/Background";
import ProgressBar from "../atoms/ProgressBar";
import Text from "../atoms/Text";

export default {
  title: "components/Organisms/SkillBar",
  component: SkillBar,
};

export const Usage = {
  render: () => (
    <>
      <StoriesBackground>
        <Text type="bright">Tech</Text>
        <ProgressBar progress={50} />
      </StoriesBackground>
    </>
  ),
};
