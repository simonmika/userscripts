
// ==UserScript==
// @namespace    https://openuserjs.org/users/smika
// @name         CircleCI Display Mode
// @description  Display Mode for the CircleCI Dashboard.
// @copyright    2019, Simon Mika (simonmika.com)
// @license      MIT
// @version      1.0.0
// @include      https://circleci.com/gh/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

// ==OpenUserJS==
// @author       smika
// ==OpenUserJS==

(function() {
    'use strict';
    console.log("CircleCI Display Mode enabled")
    remove()
    setInterval(() => {
        location.reload()
        remove()
    }, 5 * 60 * 1000)
})();
function remove() {
    succeedOnce(() => { document.querySelector('aside.app-aside').remove() })
    succeedOnce(() => { document.querySelector('nav.aside-left-nav').remove() })
    succeedOnce(() => { document.querySelector('div.top').remove() })
    succeedOnce(() => { document.querySelector('header.main-head').remove() })
    succeedOnce(() => { document.querySelector('div.above-main-content').remove() })
}
function succeedOnce(apply) {
	let timerId = setInterval(() => {
		apply()
		clearInterval(timerId)
	}, 2000)
}
