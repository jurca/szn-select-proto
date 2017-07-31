// https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement
(function () {
	'use strict'

	document.createElement('szn-select');

	document.onreadystatechange = function () {
		if (document.readyState === 'interactive') {
			init()
		}
	}

	function init() {
		var sznSelects = document.querySelectorAll('szn-select')
		for (var i = 0, length = sznSelects.length; i < length; i++) {
			initElement(sznSelects[i])
		}
	}

	function initElement(sznSelect) {
		var ui = sznSelect.querySelector('[data-szn-select-element="ui"]')
		ui.innerHTML = '<div data-szn-select-element="duh">Are you there?\n</div>'
		sznSelect.setAttribute('data-szn-select-ready', '')
	}
}())
