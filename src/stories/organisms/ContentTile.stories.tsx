import type { Meta, StoryObj } from '@storybook/react';
import ActionsAdvocateIcon from "@/stories/atoms/icons/ActionsAdvocateIcon";
import ActionsGetInvolvedIcon from "@/stories/atoms/icons/ActionsGetInvolvedIcon";
import ActionsGetInformedIcon from "@/stories/atoms/icons/ActionsGetInformedIcon";
import ActionsRaiseMoneyIcon from "@/stories/atoms/icons/ActionsRaiseMoneyIcon";
import Button from "@/stories/atoms/Button";
import ContentTile from "@/stories/organisms/ContentTile";

const actionIcons = { ActionsAdvocateIcon, ActionsGetInvolvedIcon, ActionsGetInformedIcon, ActionsRaiseMoneyIcon };

const meta = {
  title: 'Organisms/Content Tile',
  component: ContentTile,
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
} satisfies Meta<typeof ContentTile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {
  args: {
    src: 'https://picsum.photos/720/600',
    alt: "Image description",
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
