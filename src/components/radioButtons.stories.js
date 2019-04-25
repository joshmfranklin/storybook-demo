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
	.add('Radio buttons', () => <RadioButtons data={data}/>,
		{ info: { 
			text: `
**When to use**
- When applicants need to select only one option out of a set of mutually exclusive choices.
- When the number of available options can fit onto a mobile screen.

**When to consider something different**
- Consider checkboxes if applicants need to select more than one option or if there is only one item to select.
- Consider a dropdown if you don’t have enough space to list out all available options.
- If applicants should be able to select zero of the options.

**Guidance**
- Applicants should be able to tap on or click on either the text label or the radio button to select or deselect an option.
- Use caution if you decide to set a default value. Setting a default value can discourage applicants from making conscious decisions, seem pushy, or alienate applicants who don’t fit into your assumptions. If you are unsure, leave nothing selected by default.
			`}
		}
	)