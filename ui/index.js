const _ = require('lodash')
const React = require('react')
const ReactDOM = require('react-dom')
const { SketchPicker } = require('react-color')

const _handleChange = (color) => {
	const body = {
		color: parseInt('0x' + color.hex.slice(1))
	}
	window.fetch('/color', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	})
}

const handleChange = _.debounce(_handleChange, 200)

const view = <SketchPicker onChange={handleChange} />;

const element = document.createElement('div')
document.body.appendChild(element)
ReactDOM.render(view, element);
