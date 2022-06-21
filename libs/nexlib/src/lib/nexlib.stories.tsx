import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Nexlib } from './nexlib';

export default {
  component: Nexlib,
  title: 'Nexlib',
} as ComponentMeta<typeof Nexlib>;

const Template: ComponentStory<typeof Nexlib> = (args) => <Nexlib {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
