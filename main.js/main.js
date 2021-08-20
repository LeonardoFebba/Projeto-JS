/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Modules/accordion-animacao.js":
/*!******************************************!*\
  !*** ./js/Modules/accordion-animacao.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n  const accordionList = document.querySelectorAll('.faq-lista dt');\n  const activeClass = 'ativo';\n  accordionList[0].classList.add(activeClass);\n  accordionList[0].nextElementSibling.classList.add(activeClass);\n  function activeAccordion() {\n    this.classList.toggle(activeClass);\n    this.nextElementSibling.classList.toggle(activeClass);\n  }\n\n  accordionList.forEach((item) => {\n    item.addEventListener('click', activeAccordion);\n  });\n}\n\n\n//# sourceURL=webpack://projeto/./js/Modules/accordion-animacao.js?");

/***/ }),

/***/ "./js/Modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/Modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animaNumeros)\n/* harmony export */ });\n/* eslint-disable no-param-reassign */\n/* eslint-disable no-use-before-define */\n/* eslint-disable no-undef */\nfunction animaNumeros() {\n  const numeros = document.querySelectorAll('[data-numero]');\n  numeros.forEach((event) => {\n    const total = +event.innerText;\n    const incremento = Math.floor(total / 100);\n    let start = 0;\n    const timer = setInterval(() => {\n      start += incremento;\n      event.innerText = start;\n      if (start > total) {\n        event.innerHTML = total;\n        clearInterval(timer);\n      }\n    }, 100);\n  });\n\n  function handleMutation(mutation) {\n    if (!mutation[0].target.classList.contains('ativo')) {\n      obeserver.disconnect();\n      initAnima();\n    }\n  }\n  const obeserverTarget = document.querySelector('.numeros');\n  const obeserver = new MutationObserver(handleMutation);\n  obeserver.observe(obeserverTarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://projeto/./js/Modules/anima-numeros.js?");

/***/ }),

/***/ "./js/Modules/animacao-scroll.js":
/*!***************************************!*\
  !*** ./js/Modules/animacao-scroll.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\n  const sections = document.querySelectorAll('.js-scroll');\n\n  if (sections.length) {\n    const windowMetade = window.innerHeight * 0.6;\n    function animaScroll() {\n      sections.forEach((sections) => {\n        const sectionTop = sections.getBoundingClientRect().top;\n        const sectionVisible = sectionTop - windowMetade < 0;\n        if (sectionVisible) {\n          sections.classList.add('ativo');\n        } else if (sections.classList.contains('ativo')) {\n          sections.classList.add('ativo');\n        }\n      });\n    }\n\n    window.addEventListener('scroll', animaScroll);\n  }\n}\n\n\n//# sourceURL=webpack://projeto/./js/Modules/animacao-scroll.js?");

/***/ }),

/***/ "./js/Modules/animacao-tab.js":
/*!************************************!*\
  !*** ./js/Modules/animacao-tab.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\n  const tabMenu = document.querySelectorAll('.js-tabmenu li');\n  const tabContent = document.querySelectorAll('.js-tabcontent section');\n  const activeClass = 'ativo';\n  tabContent[0].classList.add(activeClass);\n\n  if (tabMenu.length && tabContent.length) {\n    function activeTab(index) {\n      tabContent.forEach((content) => {\n        content.classList.remove(activeClass);\n      });\n      tabContent[index].classList.add(activeClass);\n    }\n\n    tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener('click', () => {\n        activeTab(index);\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack://projeto/./js/Modules/animacao-tab.js?");

/***/ }),

/***/ "./js/Modules/dropdown.js":
/*!********************************!*\
  !*** ./js/Modules/dropdown.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\nfunction initDropdownMenu() {\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]');\n\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.toggle('active');\n    outsideClick(this, ['touchstart', 'click'], () => {\n      this.classList.remove('active');\n    });\n  }\n\n  dropdownMenus.forEach((item) => {\n    ['touchsatar', 'click'].forEach((userEvent) => {\n      item.addEventListener(userEvent, handleClick);\n    });\n  });\n\n  function outsideClick(element, events, callback) {\n    const html = document.documentElement;\n    const outside = 'data-outside';\n\n    if (!element.hasAttribute(outside)) {\n      events.forEach((userEvent) => {\n        html.addEventListener(userEvent, handleOutsideClick);\n      });\n      element.setAttribute(outside, '');\n    }\n    function handleOutsideClick(event) {\n      if (!element.contains(event.target)) {\n        element.removeAttribute(outside);\n        events.forEach((userEvent) => {\n          html.removeEventListener(userEvent, handleOutsideClick);\n        });\n\n        callback();\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://projeto/./js/Modules/dropdown.js?");

/***/ }),

/***/ "./js/Modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/Modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/Modules/anima-numeros.js\");\n\n\nfunction initFetchAnimais() {\n  async function fetchLuminarias(url) {\n    const pageResponse = await fetch(url);\n    const luminariasJSON = await pageResponse.json();\n    const numerosGrid = document.querySelector('.numeros-grid');\n    luminariasJSON.forEach((element) => {\n      const divLuminaria = createLuminaria(element);\n      numerosGrid.appendChild(divLuminaria);\n    });\n    (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n  }\n\n  function createLuminaria(lumi) {\n    const div = document.createElement('div');\n    div.classList.add('numero-luminaria');\n    div.innerHTML = `<h3>${lumi.desenho}</h3><span data-numero>${lumi.total}</span>`;\n    return div;\n  }\n\n  fetchLuminarias('./js/luminariasapi.json');\n}\n\n\n//# sourceURL=webpack://projeto/./js/Modules/fetch-animais.js?");

/***/ }),

/***/ "./js/Modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/Modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitCoin)\n/* harmony export */ });\nfunction initFetchBitCoin() {\n  fetch('https://blockchain.info/ticker')\n    .then((response) => response.json())\n    .then((btc) => {\n      const btcPreco = document.querySelector('.btc-preco');\n      btcPreco.innerText = (100 / btc.BRL.sell).toFixed(4);\n    });\n  // https://blockchain.info/ticker\n}\n\n\n//# sourceURL=webpack://projeto/./js/Modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/Modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/Modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  const funcionamento = document.querySelector('[data-semana]');\n  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);\n  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horarioAgora = dataAgora.getHours();\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\n  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);\n\n  if (horarioAberto && semanaAberto) {\n    funcionamento.classList.add('aberto');\n  }\n}\n\n// const agora = new Date();\n// const futuro = new Date('Dec 31 2021 23:59');\n\n// agora.getDate() // Dia\n// agora.getDay() // Dia da semana 0 a 5 sendo 5 sexta (friday)\n// agora.getMonth() // Número dia mês\n// agora.getFullYear() // Ano\n// agora.getHours() // Horas\n// agora.getMinutes() // Minutos\n// agora.getTime() //ms desde 1970\n// agora.getUTCHours() - 3 //Brasília\n\n// function contador(tempo){\n//     return tempo / (24 * 60 * 60 * 1000);\n// }\n\n// const diasFuturo = contador(futuro.getTime());\n// const diasAgora = contador(agora.getTime());\n\n// console.log(Math.round(diasFuturo - diasAgora));\n\n\n//# sourceURL=webpack://projeto/./js/Modules/funcionamento.js?");

/***/ }),

/***/ "./js/Modules/mobile-menu.js":
/*!***********************************!*\
  !*** ./js/Modules/mobile-menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\nfunction initMenuMobile() {\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\n  const menuList = document.querySelector('[data-menu=\"list\"]');\n\n  function openMenu() {\n    menuButton.classList.toggle('active');\n    menuList.classList.toggle('active');\n  }\n\n  menuButton.addEventListener('click', openMenu);\n}\n\n\n//# sourceURL=webpack://projeto/./js/Modules/mobile-menu.js?");

/***/ }),

/***/ "./js/Modules/modal.js":
/*!*****************************!*\
  !*** ./js/Modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"');\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"');\n  const containerModal = document.querySelector('[data-modal=\"container\"');\n\n  if (botaoAbrir && botaoFechar && containerModal) {\n    function toggleModal(event) {\n      event.preventDefault();\n      containerModal.classList.toggle('ativo');\n    }\n\n    function cliqueForaModal(event) {\n      if (event.target === this) {\n        toggleModal(event);\n      }\n    }\n\n    botaoAbrir.addEventListener('click', toggleModal);\n    botaoFechar.addEventListener('click', toggleModal);\n    containerModal.addEventListener('click', cliqueForaModal);\n  }\n}\n\n\n//# sourceURL=webpack://projeto/./js/Modules/modal.js?");

/***/ }),

/***/ "./js/Modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/Modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSmoothScroll)\n/* harmony export */ });\nfunction initSmoothScroll() {\n  const linkInterno = document.querySelectorAll('.js-menu a[href^=\"#\"]');\n\n  function smoothScroll(event) {\n    const href = event.currentTarget.getAttribute('href');\n    const section = document.querySelector(href);\n    event.preventDefault();\n    section.scrollIntoView({\n      behavior: 'smooth',\n      block: 'start',\n    });\n  }\n\n  linkInterno.forEach((link) => {\n    link.addEventListener('click', smoothScroll);\n  });\n}\n\n\n//# sourceURL=webpack://projeto/./js/Modules/scroll-suave.js?");

/***/ }),

/***/ "./js/Modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/Modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  const tooltips = document.querySelectorAll('[data-tooltip]');\n\n  function onMouseOver(event) {\n    const tooltipBox = criarTooltipBox(this);\n\n    onMouseMove.tooltipBox = tooltipBox;\n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n    this.addEventListener('mouseleave', onMouseLeave);\n    this.addEventListener('mousemove', onMouseMove);\n  }\n\n  tooltips.forEach((item) => {\n    item.addEventListener('mouseover', onMouseOver);\n  });\n\n  const onMouseLeave = {\n    tooltipBox: '',\n    element: '',\n    handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener('mouseleave', onMouseLeave);\n      this.element.removeEventListener('mousemove', onMouseMove);\n    },\n  };\n\n  const onMouseMove = {\n    handleEvent(event) {\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\n    },\n  };\n\n  function criarTooltipBox(element) {\n    const tooltipBox = document.createElement('div');\n    const text = element.getAttribute('aria-label');\n    tooltipBox.classList.add('tooltip');\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n}\n\n\n//# sourceURL=webpack://projeto/./js/Modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/scroll-suave.js */ \"./js/Modules/scroll-suave.js\");\n/* harmony import */ var _Modules_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/animacao-scroll.js */ \"./js/Modules/animacao-scroll.js\");\n/* harmony import */ var _Modules_accordion_animacao_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/accordion-animacao.js */ \"./js/Modules/accordion-animacao.js\");\n/* harmony import */ var _Modules_animacao_tab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/animacao-tab.js */ \"./js/Modules/animacao-tab.js\");\n/* harmony import */ var _Modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modules/modal.js */ \"./js/Modules/modal.js\");\n/* harmony import */ var _Modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modules/tooltip.js */ \"./js/Modules/tooltip.js\");\n/* harmony import */ var _Modules_dropdown_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modules/dropdown.js */ \"./js/Modules/dropdown.js\");\n/* harmony import */ var _Modules_mobile_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modules/mobile-menu.js */ \"./js/Modules/mobile-menu.js\");\n/* harmony import */ var _Modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modules/funcionamento.js */ \"./js/Modules/funcionamento.js\");\n/* harmony import */ var _Modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Modules/fetch-animais.js */ \"./js/Modules/fetch-animais.js\");\n/* harmony import */ var _Modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Modules/fetch-bitcoin.js */ \"./js/Modules/fetch-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_Modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_Modules_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_Modules_accordion_animacao_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_Modules_animacao_tab_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_Modules_modal_js__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_Modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_Modules_dropdown_js__WEBPACK_IMPORTED_MODULE_6__.default)();\n(0,_Modules_mobile_menu_js__WEBPACK_IMPORTED_MODULE_7__.default)();\n(0,_Modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__.default)();\n(0,_Modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__.default)();\n(0,_Modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__.default)();\n\n// $('nav').hide();\n// const diferenca = _.difference(['Pera','Uva', 'Maca'], ['Pera', 'Maca', 'Morango']);\n// console.log(diferenca)\n\n\n//# sourceURL=webpack://projeto/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;