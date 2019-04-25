import React from 'react';
import {storiesOf} from '@storybook/react';
import RadioButtons from './radioButtons'

export const data = [
	{
		option: "Mother",
		id: "mother",
		group: "relative-type",
		value: "mother"
	},
	{
		option: "Father",
		id: "father",
		group: "relative-type",
		value: "father"
	},
	{
		option: "Sister",
		id: "sister",
		group: "relative-type",
		value: "sister"
	}
]

storiesOf('Form controls', module)
	.add('Radio buttons', () => <RadioButtons data={data}/>)