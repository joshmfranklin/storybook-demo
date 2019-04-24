import React from 'react';
import {storiesOf} from '@storybook/react';
import RadioButtons from './radioButtons'

storiesOf('Form controls', module)
	.add('Radio buttons', () => <RadioButtons/>)