// ==UserScript==
// @namespace    https://openuserjs.org/users/smika
// @name         ZenHub Board Display Mode
// @description  Display Mode for the ZenHub Board.
// @copyright    2019, Simon Mika (simonmika.com)
// @license      MIT
// @version      1.0.0
// @include      https://app.zenhub.com/workspaces/*/boards?repos=*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

// ==OpenUserJS==
// @author       smika
// ==OpenUserJS==

(function() {
	'use strict';

	// remove borders and menus once
	succeedOnce(() => { document.querySelector('div.zhc-sidebar').remove() })
	succeedOnce(() => { document.querySelector('div.zhc-pipeline.zhc-pipeline--add-placeholder').remove() })
	succeedOnce(() => { document.querySelector('div.zhc-board__menu').remove() })
	succeedOnce(() => { document.querySelector('div.zhc-topbar').remove() })
})();

function succeedOnce(apply) {
	let timerId = setInterval(() => {
		apply()
		clearInterval(timerId)
	}, 2000)
}
