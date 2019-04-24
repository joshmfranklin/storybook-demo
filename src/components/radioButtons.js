import React from 'react';
import './radioButtons.scss';

export default function RadioButtons () {
	return (
		<fieldset className="usa-fieldset radio-block">
			<legend className="usa-sr-only">Radio buttons</legend>
			<div className="usa-radio">
				<input id="radio1" type="radio" className="usa-radio__input" name="radio-test"/>
				<label htmlFor="radio1" className="usa-radio__label"><span>Radio 1</span></label>
			</div>
			<div className="usa-radio">
				<input id="radio2" type="radio" className="usa-radio__input" name="radio-test"/>
				<label htmlFor="radio2" className="usa-radio__label"><span>Radio 2</span></label>
			</div>
		</fieldset>
	)
}