// ==UserScript==
// @namespace    https://openuserjs.org/users/smika
// @name         ZenHub Board Wide
// @description  Make ZenHub Board look better.
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
	// change cards regularly
	let timerId = setInterval(() => {
		// width: 100%;
		document.querySelector('div.zh-workspace__container.zhu-flex--column > div > div').style['max-width'] = '100vw'
		document.querySelectorAll('div.zhc-pipelines > div > div').forEach(element => { element.style = 'flex-grow: 1' })
		document.querySelectorAll('div.zhc-pipeline-body > div').forEach(element => { element.style.width = '100%' })
		document.querySelectorAll('div.zhc-pipeline-body > div > div').forEach(element => { element.style.width = '100%' })
		document.querySelectorAll('div.zhc-pipeline-body > div > div > div').forEach(element => { element.style.width = '100%'; element.style['max-width'] = 'none' })
		document.querySelectorAll('div.zhc-pipeline-body > div > div > div > div').forEach(element => { element.style.width = '100%' })
		document.querySelectorAll('div.zhc-pipeline-body > div > div > div > div > div').forEach(element => { element.style['max-width'] = 'none' })
		// adapt height
		document.querySelectorAll('div.zhc-issue-cards__cell').forEach(element => { 
			element.style.height = 'unset'
			element.style.position = 'relative'
			element.style.top = 'unset'
			element.style.let = 'unset'
		})
		// move filter by epic button
		document.querySelectorAll('div.zhc-issue-card__epic-filter').forEach(element => { element.style.position = 'absolute'; element.style.right = '3em'; element.style.top = '-.5px' })
		document.querySelectorAll('div.zhc-issue-card__epic-filter button').forEach(element => { element.style['background-color'] = 'rgb(62, 75, 158)'; element.style.color = 'white'; element.style.padding = '0 4px'; element.style['z-index'] = '10' })
		document.querySelectorAll('div.zhc-issue-card__epic-filter button > div > span').forEach(element => { element.innerHTML = 'Epic'; element.style['background-color'] = 'rgb(62, 75, 158)'; element.style.color = 'white' })
		document.querySelectorAll('div > div.zhc-issue-card__main').forEach(element => { if (element.firstElementChild && element.firstElementChild.className == 'zhc-issue-card__epic-filter') { element.style.position = 'absolute'; element.style.right = '0'; element.style.top = '0'; element.style.width = "100%"; element.style['z-index'] = "100" } })
		// remove epic label
		document.querySelectorAll('span.zhc-label').forEach(element => {
			if (element.innerHTML == 'Epic') {
				if (element.parentElement.childElementCount == 1 && element.parentElement.parentElement)
					element.parentElement.parentElement.remove()
				else
					element.remove()
			} 
		})
		// move estimate badge
		document.querySelectorAll('span.zhc-badge.zhc-badge--estimate').forEach(element => { element.style.position = 'absolute'; element.style.right = '1em'; element.style.top = '2.2em' })

	}, 2000)
})();

background-color: ;
color: rgb(255, 255, 255);