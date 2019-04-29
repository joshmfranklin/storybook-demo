import React from 'react';
import './radioButtons.scss';

export class RadioButtonsInline extends React.Component {
	render() {
		return (
			<fieldset className="usa-fieldset radio-block">
				<legend>Provide relative type</legend>
				<div className="radioInline">
					{this.props.data.map((data) =>
						<div className="usa-radio">
							<input id={data.id} type="radio" className="usa-radio__input" name={data.group} value={data.value} disabled={this.props.disabled}/>
							<label htmlFor={data.id} className="usa-radio__label"><span>{data.option}</span></label>
						</div>
					)}
				</div>
			</fieldset>
		)
	}
}

export default RadioButtonsInline