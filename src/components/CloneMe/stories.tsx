import { Meta, StoryFn } from "@storybook/react";
import { CloneMe, CloneMeProps } from ".";

export default {
  title: "CloneME",
  component: CloneMe,
} as Meta<typeof CloneMe>;

export const Template: StoryFn<CloneMeProps> = (args) => {
  return (
    <div>
      <CloneMe {...args} />
    </div>
  );
};
