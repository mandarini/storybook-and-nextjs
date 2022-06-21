import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Reliib } from './reliib';

export default {
  component: Reliib,
  title: 'Reliib',
} as ComponentMeta<typeof Reliib>;

const Template: ComponentStory<typeof Reliib> = (args) => <Reliib {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
