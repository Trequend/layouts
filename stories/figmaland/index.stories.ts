import { Meta, Story } from '@storybook/html';
import docs from './docs.mdx';
import { createPage, FigmalandProps } from './index';

export default {
  title: 'Layouts/Figmaland',
  argTypes: {
    tagline: { control: 'text' },
    info: { control: 'text' },
    shortInfo: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { page: docs },
    backgrounds: { disable: true },
  },
} as Meta;

const Template: Story<FigmalandProps> = createPage;

export const Landing = Template.bind({});
Landing.args = {
  tagline: 'The best products start with Figma',
  info: 'Most calendars are designed for teams. Slate is designed for freelancers',
  shortInfo: 'Most calendars are designed for teams.',
} as FigmalandProps;
