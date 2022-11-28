import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Billboard from './Billboard';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
	title: 'Components/Billboard',
	component: Billboard,
} as ComponentMeta<typeof Billboard>;

const Template: ComponentStory<typeof Billboard> = () => <Billboard />;

export const Default = Template.bind({});
Default.args = {};
