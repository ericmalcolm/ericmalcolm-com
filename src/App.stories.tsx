import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import App from './App'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Components/App',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    name: "Eric Malcolm",
    mainDescription: "Front-End Developer / Architect specializing in UX and Accessibility, based in Michigan.",
    subDescription: "I help architect and develop solutions to create usable, human-friendly and accessible websites, interfaces, and apps."
};

export const Secondary = Template.bind({});
Secondary.args = {
    name: "Not Eric Malcolm",
    mainDescription: "Some dude based in Michigan.",
    subDescription: "I help do things."
};

