import { Meta, Story } from '@storybook/html';
import docs from './docs.mdx';
import { createLabel, LabelProps } from './index';

export default {
  title: 'Examples/Label',
  argTypes: {
    firstName: { control: 'text' },
    lastName: { control: 'text' },
  },
  parameters: {
    docs: { page: docs },
    backgrounds: { disable: true },
  },
} as Meta;

const Template: Story<LabelProps> = createLabel;

export const Author = Template.bind({});
Author.args = {
  firstName: 'Dmitry',
  lastName: 'Balakin',
} as LabelProps;
