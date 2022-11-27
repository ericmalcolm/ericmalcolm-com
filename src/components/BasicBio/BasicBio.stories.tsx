import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import basicBioData from './../../content/basicBioData.json';

import BasicBio from './BasicBio'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Components/BasicBio',
  component: BasicBio,
} as ComponentMeta<typeof BasicBio>;

const Template: ComponentStory<typeof BasicBio> = (args) => <BasicBio {...args} />;

export const Primary = Template.bind({});
Primary.args = {...basicBioData};

export const Secondary = Template.bind({});
Secondary.args = {
    name: "Not Eric Malcolm",
    mainDescription: "Some dude based in Michigan.",
    subDescription: "I help do things."
};

