import type { Meta, StoryObj } from '@storybook/react';
import ContentTemplate from "@/stories/organisms/ContentTemplate";
import ActionsAdvocateIcon from "@/stories/atoms/icons/ActionsAdvocateIcon";
import ActionsGetInvolvedIcon from "@/stories/atoms/icons/ActionsGetInvolvedIcon";
import ActionsGetInformedIcon from "@/stories/atoms/icons/ActionsGetInformedIcon";
import ActionsRaiseMoneyIcon from "@/stories/atoms/icons/ActionsRaiseMoneyIcon";
import Button from "@/stories/atoms/Button";

const actionIcons = { ActionsAdvocateIcon, ActionsGetInvolvedIcon, ActionsGetInformedIcon, ActionsRaiseMoneyIcon };

const meta = {
  title: 'Organisms/Content Template',
  component: ContentTemplate,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: Object.keys(actionIcons),
      mapping: actionIcons,
      control: {
        type: 'select',
        labels: {
          ActionsAdvocateIcon: 'Advocate',
          ActionsGetInvolvedIcon: 'Get Involved',
          ActionsGetInformedIcon: 'Get Informed',
          ActionsRaiseMoneyIcon: 'Raise Money',
        }
      }
    }
  }
} satisfies Meta<typeof ContentTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {
  args: {
    icon: ActionsAdvocateIcon,
    caption: "caption",
    heading: "Lorem Content Template",
    subheading: "Lorem Subheading",
    body: "This is a description for the content template component. Use this component whenever a generic heading / description / button arrangement is required.",
    children: (
      <>
        <Button style="primary" title="button" />
        <Button style="secondary" title="button" />
      </>
    )
  }
};
