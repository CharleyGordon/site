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

/***/ "./about-us/scripts/main.js":
/*!**********************************!*\
  !*** ./about-us/scripts/main.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _markup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup */ \"./about-us/scripts/markup.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./about-us/scripts/styles.js\");\n\n\n\nconst intersectionObserver = new IntersectionObserver(changeNavigation, {\n  rootMargin: \"-100px 0px\",\n});\n\nconst navElementsContainer = \"nav.links\";\n\nfunction labelSections(event) {\n  const sections = document.getElementsByTagName(\"section\");\n\n  let counter = 0;\n\n  for (let iteration = 0; iteration < sections.length; iteration++) {\n    const section = sections[iteration];\n    const firstHeader = section.querySelector(\"h1, h2, h3, h4, h5, h6\");\n    let headerId;\n\n    if (!firstHeader) continue;\n\n    counter++;\n\n    headerId = `header-${counter}`;\n    section.setAttribute(\"aria-labelledby\", headerId);\n    firstHeader.setAttribute(\"id\", headerId);\n  }\n}\n\nfunction preventFOUC(event) {\n  document.documentElement.style.visibility = \"visible\";\n}\n\nfunction setPaddingTop(event) {\n  const breakpoint = \"1024\";\n  const navBarRefference = \".nav-bar\";\n  const mobileNavigationRefference = \".mobile-navigation\";\n  const navBarHeightProperty = \"--nav-bar-space\";\n  const navBar = document.querySelector(navBarRefference);\n  const mobileNavigation = document.querySelector(mobileNavigationRefference);\n\n  const belowBreakpoint = document.body.getBoundingClientRect().width < 1024;\n\n  let navBarHeight;\n  let domRect;\n\n  if (!navBar) return;\n\n  domRect = belowBreakpoint\n    ? mobileNavigation.getBoundingClientRect()\n    : navBar.getBoundingClientRect();\n  navBarHeight = Math.ceil(domRect.height);\n\n  document.documentElement.style.setProperty(\n    navBarHeightProperty,\n    `${navBarHeight}px`\n  );\n}\n\nfunction navigateFromLogo(event) {\n  // navigate home while clicking oon logo\n  const logoRefference = \".logo\";\n  const homeAnchorRefference = `a[href=\"#home\"]`;\n  const logo = event.target.closest(logoRefference);\n  const homeAnchor = document.querySelector(homeAnchorRefference);\n\n  if (!event.target.closest(logoRefference)) return;\n\n  if (logo && homeAnchor) {\n    homeAnchor.click();\n  } else {\n    const main = document.querySelector(\"main\");\n    main.scrollIntoView();\n  }\n}\n\nfunction changeNavigation(entries) {\n  const targetClass = \"toggled\";\n  const navBarElement = _markup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].navBar;\n  entries.forEach((entry) => {\n    if (entry.isIntersecting) navBarElement.classList.add(targetClass);\n    else navBarElement.classList.remove(targetClass);\n  });\n}\n\nintersectionObserver.observe(_markup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].homeSection);\n\nfunction translateNavigation(event) {\n  const navBarElement = _markup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].navBar;\n  const navigationTogglerSelector = \".navigation-toggler\";\n  const navigationTranslateClass = \"translated\";\n\n  if (!event.target.closest(navigationTogglerSelector)) return;\n  navBarElement.classList.toggle(navigationTranslateClass);\n}\n\nfunction redirectOnMobile(event) {\n  // mobile navigation toggler\n  const navBarToggler = _markup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mobileNavigation.querySelector(\n    \".navigation-toggler\"\n  );\n  const closestAnchor = event.target.closest(\"a\");\n\n  if (!closestAnchor || !closestAnchor.closest(navElementsContainer)) return;\n  navBarToggler.click();\n}\n\nfunction hideNavigation(event) {\n  // hides navigation inside home-blog section\n  const url = event.target.URL;\n  let targetHash;\n\n  if (url) targetHash = url.toString().split(\"#\").at(-1);\n\n  const fullPostId = \"target-post\";\n\n  const pagesListRefference = \".pages.blog\";\n  const fullPostElement = document.getElementById(fullPostId);\n\n  const hiddenClass = \"hidden\";\n\n  const pagesList = document.querySelector(pagesListRefference);\n\n  const isTarget =\n    fullPostElement?.matches(\":target\") || targetHash === fullPostId;\n\n  if (!pagesList) return;\n\n  if (!isTarget) {\n    pagesList.classList.remove(hiddenClass);\n    return;\n  }\n\n  pagesList.classList.add(hiddenClass);\n}\n\nfunction toggleSidebar(event) {\n  // toggles blog sidebar on mobile/tablet\n  const triggerSelector = \".sidebar-trigger\";\n  const sidebar = document.querySelector(\".sidebar\");\n  const trigger = event.target.closest(triggerSelector);\n  const toggleClass = \"expanded\";\n\n  if (!trigger) return;\n  sidebar.classList.toggle(toggleClass);\n}\n\nfunction closeSidebar(event) {\n  // closes blog sidebar after clicking anchor\n  const toggleClass = \"expanded\";\n\n  const sidebarRefference = \".sidebar\";\n  const anchor = event.target.closest(\"a\");\n  const sidebar = document.querySelector(sidebarRefference);\n\n  const insideSidebar = anchor?.closest(sidebarRefference);\n\n  if (!insideSidebar) return;\n\n  sidebar.classList.remove(toggleClass);\n}\n\nfunction removeLabels(event) {\n  const togglingClass = \"signed\";\n  const inputElement = event.target;\n\n  const isInput =\n    inputElement.matches(`input:not([type=\"checkbox\"], [type=\"radio\"])`) ||\n    inputElement.matches(\"textarea\");\n\n  if (!isInput) return;\n  const labelElement = inputElement.closest(\"label\");\n\n  if (!inputElement.value || !Boolean(inputElement.value)) {\n    labelElement.classList.remove(togglingClass);\n    return;\n  }\n  labelElement.classList.add(togglingClass);\n}\n\nfunction customCheckbox(event) {\n  const customCheckboxRefference = \".custom-checkbox\";\n  const togglingClass = \"checked\";\n\n  let checkbox;\n\n  const customCheckbox = event.target.closest(customCheckboxRefference);\n\n  if (!customCheckbox) return;\n\n  checkbox = customCheckbox.querySelector(`input[type=\"checkbox\"]`);\n\n  if (!checkbox) return;\n\n  // click on checkbox for accesibility\n\n  checkbox.click();\n}\n\nfunction setCustomSelect(event) {\n  //sets height for custom select\n  const customSelectRefference = \".custom-select\";\n  const lineNumberProperty = \"--line-number\";\n  const customOptionRefference = \".custom-option\";\n\n  const customOptionElements = document.querySelectorAll(\n    customSelectRefference\n  );\n\n  if (!customOptionElements) return;\n\n  for (\n    let iteration = 0;\n    iteration < customOptionElements.length;\n    iteration++\n  ) {\n    const customOptionElement = customOptionElements[iteration];\n\n    const options = customOptionElement.querySelectorAll(\n      customOptionRefference\n    );\n\n    customOptionElement.style.setProperty(lineNumberProperty, options.length);\n  }\n}\n\nfunction customSelect(event) {\n  const customSelectRefference = \".custom-select\";\n  const checkedElementRefference = \"checked\";\n  const customOptionRefference = \".custom-option\";\n  const radio = event.target;\n  const customSelectElement = radio.closest(customSelectRefference);\n  const currentOptionElement = radio.closest(customOptionRefference);\n\n  if (!customSelectElement || !currentOptionElement) return;\n  const lastChecked = customSelectElement.querySelector(\n    `.${checkedElementRefference}`\n  );\n\n  if (lastChecked === currentOptionElement) return;\n\n  if (lastChecked) lastChecked.classList.remove(checkedElementRefference);\n\n  currentOptionElement.classList.add(checkedElementRefference);\n\n  // focus out\n\n  radio.blur();\n}\n\nfunction forceCustomSelect(event) {\n  const customSelectRefference = \".custom-select\";\n  const checkedElementRefference = \".checked\";\n  const radioRefference = `input[type=\"radio\"]`;\n  let checkedRadio;\n\n  const customSelectElement = document.querySelector(customSelectRefference);\n  const checkedElement = event.target.closest(checkedElementRefference);\n\n  if (!customSelectElement || !checkedElement) return;\n\n  checkedRadio = checkedElement.querySelector(radioRefference);\n\n  checkedRadio.blur();\n}\n\nfunction prepareGallery(event) {\n  const galleryRefference = \".gallery\";\n  const galleryImagesRefference = \".main > img, .left, .right\";\n  const hiddenImagesRefference = \".hidden-images img\";\n\n  // debugger;\n\n  const gallery = document.querySelector(galleryRefference);\n  const galleryImages = gallery?.querySelectorAll(galleryImagesRefference);\n  const hiddenImages = gallery?.querySelectorAll(hiddenImagesRefference);\n\n  if (!gallery || !galleryImages || !hiddenImages) return;\n\n  for (let iteration = 0; iteration < galleryImages.length; iteration++) {\n    galleryImages[iteration].src = hiddenImages[iteration].src;\n  }\n\n  // setting next and previous  image element. kinda like looped linkedlist\n}\n\nfunction gallery(event) {\n  const galleryRefference = \".gallery\";\n  const imagesSelector = \".main > img, .left, .right\";\n  const hiddenImagesRefference = \".hidden-images img\";\n  const previousControlRefference = \".previous\";\n  const nextControlRefference = \".next\";\n  let galleryImages;\n  let direction;\n  let matchElement;\n  let previousElement, nextElement;\n\n  const galleryElement = document.querySelector(galleryRefference);\n\n  if (!galleryElement) return;\n\n  const hiddenImages = Array.from(\n    galleryElement?.querySelectorAll(hiddenImagesRefference)\n  );\n\n  if (!hiddenImages) return;\n\n  galleryImages = Array.from(galleryElement.querySelectorAll(imagesSelector));\n\n  if (\n    !event.target.closest(previousControlRefference) &&\n    !event.target.closest(nextControlRefference)\n  )\n    return;\n\n  direction = event.target.closest(previousControlRefference) ? -1 : 1;\n\n  matchElement = hiddenImages.find(\n    // targeting 1st index because of center .main frame\n    (element) => element.src === galleryImages.at(1).src\n  );\n\n  if (direction > 0)\n    matchElement = matchElement.nextElementSibling || hiddenImages[0];\n\n  if (direction < 0)\n    matchElement = matchElement.previousElementSibling || hiddenImages.at(-1);\n\n  previousElement = matchElement?.previousElementSibling || hiddenImages.at(-1);\n  nextElement = matchElement?.nextElementSibling || hiddenImages[0];\n\n  if (!matchElement || !previousElement || !nextElement) return;\n\n  // change sources\n\n  galleryImages[0].src = previousElement.src;\n  galleryImages[1].src = matchElement.src;\n  galleryImages[2].src = nextElement.src;\n}\n\nfunction expandOpinions(event) {\n  const opinionWrapperRefference = \".opinion-wrapper\";\n  const opinionElementRefference = \".comments\";\n  const togglingClass = \"collapsed\";\n  const anchor = event.target.closest(\"a\");\n  const opinionWrapper = anchor?.closest(opinionWrapperRefference);\n  const opinionElement = opinionWrapper?.querySelector(\n    opinionElementRefference\n  );\n\n  if (!opinionWrapper || !opinionElement) return;\n  opinionElement.classList.toggle(togglingClass);\n}\n\nwindow.addEventListener(\"click\", (event) => {\n  navigateFromLogo(event);\n  translateNavigation(event);\n  redirectOnMobile(event);\n  toggleSidebar(event);\n  closeSidebar(event);\n  customCheckbox(event);\n  customSelect(event);\n  gallery(event);\n  expandOpinions(event);\n});\n\nwindow.addEventListener(\"dblclick\", (event) => {\n  forceCustomSelect(event);\n});\n\nwindow.addEventListener(\"change\", (event) => {\n  removeLabels(event);\n});\n\nwindow.addEventListener(\"hashchange\", (event) => {\n  hideNavigation(event);\n});\n\nwindow.addEventListener(\"load\", (event) => {\n  preventFOUC(event);\n  labelSections(event);\n  setPaddingTop(event);\n  hideNavigation(event);\n  prepareGallery(event);\n  setCustomSelect(event);\n});\n\n\n//# sourceURL=webpack:///./about-us/scripts/main.js?");

/***/ }),

/***/ "./about-us/scripts/markup.js":
/*!************************************!*\
  !*** ./about-us/scripts/markup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _markup_mobile_navigation_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../markup/mobile-navigation.html */ \"./about-us/markup/mobile-navigation.html\");\n/* harmony import */ var _markup_nav_bar_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../markup/nav-bar.html */ \"./about-us/markup/nav-bar.html\");\n/* harmony import */ var _markup_home_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../markup/home.html */ \"./about-us/markup/home.html\");\n/* harmony import */ var _markup_about_us_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../markup/about-us.html */ \"./about-us/markup/about-us.html\");\n/* harmony import */ var _markup_footer_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../markup/footer.html */ \"./about-us/markup/footer.html\");\n\n\n\n\n\n\n\n\n\n// here go subsections\n\nconst parser = new DOMParser();\n\nfunction parseHtml(html, domParser = parser) {\n  const parsedValue = domParser.parseFromString(html, \"text/html\");\n  return parsedValue.querySelector(\"body > *\");\n}\n\nconst main = document.querySelector(\"main\");\n\nconst article = document.getElementById(\"main-sections\");\n\nconst pageElements = {\n  mobileNavigation: parseHtml(_markup_mobile_navigation_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n  navBar: parseHtml(_markup_nav_bar_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n  homeSection: parseHtml(_markup_home_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n  aboutUsSection: parseHtml(_markup_about_us_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n\n  footerElement: parseHtml(_markup_footer_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n};\n\ndocument.body.prepend(pageElements.mobileNavigation);\n\ndocument.body.prepend(pageElements.navBar);\n\ndocument.body.append(pageElements.footerElement);\n\narticle.append(pageElements.homeSection);\n\narticle.append(pageElements.aboutUsSection);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageElements);\n\n\n//# sourceURL=webpack:///./about-us/scripts/markup.js?");

/***/ }),

/***/ "./about-us/scripts/styles.js":
/*!************************************!*\
  !*** ./about-us/scripts/styles.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./about-us/styles/main.scss\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack:///./about-us/scripts/styles.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./about-us/styles/main.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./about-us/styles/main.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/facebook.svg */ \"./about-us/images/facebook.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/tweeter.svg */ \"./about-us/images/tweeter.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/instagram.svg */ \"./about-us/images/instagram.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/linkedin.svg */ \"./about-us/images/linkedin.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hamburger.svg */ \"./about-us/images/hamburger.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/anchor-arrow.svg */ \"./about-us/images/anchor-arrow.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/calendar.svg */ \"./about-us/images/calendar.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.contact-request,\n.contact-info,\nform {\n  display: grid;\n}\n\n.contact-request {\n  margin-inline: auto;\n  max-width: 95vw;\n  gap: 1rem;\n  align-items: start;\n}\n@media (min-width: 1020px) {\n  .contact-request {\n    max-width: min(70vw, 1200px);\n  }\n}\n@media (min-width: 800px) {\n  .contact-request {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n.title {\n  font-size: 2rem;\n}\n\n.contact-info,\nform {\n  gap: 1rem;\n}\n\n.wrapper {\n  display: flex;\n  align-items: center;\n  gap: 1ch;\n}\n\n.description {\n  font-weight: 500;\n}\n\n.phone-numbers {\n  display: grid;\n  font-weight: 700;\n  color: hsl(32, 39%, 76%);\n}\n\nform {\n  margin-block-start: 1rem;\n}\n\nform label {\n  position: relative;\n  display: grid;\n  align-items: center;\n  --spacing: 2ch;\n  padding: var(--spacing);\n  border: 0.5px solid hsl(156, 6%, 33%);\n  border-radius: 0.25vmax;\n  overflow: hidden;\n}\n\nform [required] ~ .description::after {\n  content: \" *\";\n}\n\nlabel.custom {\n  padding: 0;\n}\n\nlabel .description {\n  position: absolute;\n  left: var(--spacing, 2ch);\n  z-index: 1;\n  font-style: oblique;\n}\n\nlabel:is(:focus-within, .signed) .description {\n  visibility: hidden;\n}\n\nlabel:focus-within {\n  outline: 2px solid hsl(32, 39%, 76%);\n  border: none;\n}\n\nlabel :is(input, textarea) {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  font-size: inherit;\n  font-weight: inherit;\n  text-indent: var(--spacing);\n  border: none;\n  caret-color: hsl(32, 39%, 76%);\n}\n\nselect {\n  position: absolute;\n  visibility: hidden;\n  pointer-events: none;\n}\n\n.message {\n  height: 20ch;\n}\n\n.message .description {\n  align-self: start;\n  padding-block-start: calc(var(--spacing) / 2);\n  translate: 0 25%;\n}\n\n.message textarea {\n  font-weight: 500;\n  padding-block: var(--spacing);\n  overflow: auto;\n}\n\ninput:focus {\n  outline: none;\n}\n\ntextarea {\n  resize: none;\n}\n\nbutton[type=submit].button {\n  padding-block: 1.2ch;\n  font-size: 1.4rem;\n  color: hsl(0, 0%, 98%);\n  background-color: hsl(156, 6%, 33%);\n  transition: 0.5s;\n}\nbutton[type=submit].button:is(:hover, :focus-within) {\n  background-color: hsl(32, 39%, 76%);\n  color: hsl(156, 6%, 33%);\n}\n\n@media (min-width: 1020px) {\n  .nav-bar,\n  .nav-bar ul {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr;\n  }\n}\n\n.nav-bar {\n  display: grid;\n  align-items: center;\n  text-align: center;\n  box-shadow: 0 4px 4px -2px hsl(156, 6%, 33%);\n  font-weight: 700;\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  transition: background-color 0.5s, translate 0.5s;\n  color: hsl(156, 6%, 33%);\n  background-color: hsl(0, 0%, 98%);\n}\n@media (max-width: 1020px) {\n  .nav-bar {\n    grid-template-rows: 1fr auto;\n  }\n}\n@media (max-width: 1020px) and (orientation: landscape) {\n  .nav-bar {\n    height: fit-content;\n  }\n}\n@media (min-width: 1020px) {\n  .nav-bar {\n    --middle-column: 3fr;\n    grid-template-columns: 1fr var(--middle-column) 1fr;\n    height: auto;\n    grid-template-rows: auto;\n  }\n}\n@media (min-width: 1020px) and (min-width: 1800px) {\n  .nav-bar {\n    --middle-column: 2fr;\n  }\n}\n@media (min-width: 1020px) {\n  .nav-bar {\n    position: sticky;\n  }\n}\n@media (min-width: 1020px) {\n  .nav-bar.translated {\n    translate: -100%;\n  }\n}\n.nav-bar :is(.logo, a, .contact, .links) {\n  padding-inline: 0;\n  padding-block: 1.5rem;\n  transition: 0.5s;\n}\n.nav-bar :is(.logo, .contact) {\n  padding-inline: 1.5rem;\n}\n.nav-bar:not(.toggled) :is(.logo, a, .contact, .links) {\n  padding-block: 0.8rem;\n}\n.nav-bar .contact {\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  align-self: end;\n}\n@media (min-width: 1020px) {\n  .nav-bar .contact {\n    display: grid;\n    align-self: start;\n    text-align: right;\n  }\n}\n.nav-bar nav {\n  display: grid;\n  align-items: center;\n}\n@media (max-width: 1020px) {\n  .nav-bar nav {\n    margin-block-start: 2rem;\n  }\n}\n.nav-bar .logo {\n  transition: 0.5s;\n  filter: invert(1) grayscale(100%);\n  cursor: pointer;\n}\n@media (max-width: 1020px) {\n  .nav-bar .logo {\n    display: none;\n  }\n}\n@media (max-width: 1020px) and (orientation: landscape) {\n  .nav-bar .links {\n    margin-block-start: 6rem;\n  }\n}\n.nav-bar .links ul {\n  gap: 2rem;\n  display: grid;\n  align-items: center;\n}\n@media (max-width: 1020px) and (orientation: landscape) {\n  .nav-bar .links ul {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 1020px) and (orientation: landscape) {\n  .nav-bar .links ul {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n}\n@media (max-width: 1280px) {\n  .nav-bar .links ul {\n    font-size: 1rem;\n  }\n}\n@media (min-width: 1020px) {\n  .nav-bar .links ul {\n    gap: 0;\n  }\n}\n.nav-bar .links a:is(:hover, :focus-within) {\n  outline: none;\n  text-decoration: underline;\n}\n\n.toggled {\n  background-color: hsl(0, 0%, 13%);\n  color: hsl(0, 0%, 98%);\n}\n.toggled .logo {\n  filter: invert(0);\n}\n\n.nav-bar.translated {\n  translate: 0% -100%;\n}\n@media (min-width: 1020px) {\n  .nav-bar.translated {\n    translate: 0;\n  }\n}\n\nfooter:not(.author) {\n  display: grid;\n  gap: min(2rem, 2vh);\n  grid-template-rows: 3fr 1fr;\n  margin-block-start: 5vh;\n  padding-block-start: 5vh;\n  background-color: hsl(0, 0%, 13%);\n}\n@media (min-width: 1020px) {\n  footer:not(.author) {\n    margin-block-start: 10vh;\n    padding-block-start: 10vh;\n  }\n}\nfooter:not(.author) .links,\nfooter:not(.author) .wrapper {\n  margin-inline: auto;\n  max-width: 95vw;\n}\n@media (min-width: 1020px) {\n  footer:not(.author) .links,\n  footer:not(.author) .wrapper {\n    max-width: min(70vw, 1200px);\n  }\n}\nfooter:not(.author) .links {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-items: baseline;\n}\n@media (min-width: 600px) {\n  footer:not(.author) .links {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\nfooter:not(.author) .links > * {\n  margin-block-end: 1rem;\n}\nfooter:not(.author) .links .logo {\n  grid-column: 1/-1;\n  justify-self: center;\n}\n@media (min-width: 1020px) {\n  footer:not(.author) .links .logo {\n    grid-column: 1;\n    justify-self: start;\n  }\n}\nfooter:not(.author) .links .heading {\n  font-weight: 700;\n  display: block;\n  margin-block-end: min(2vh, 2rem);\n  font-size: 1.4rem;\n  color: hsl(0, 0%, 98%);\n}\n@media (max-width: 1020px) {\n  footer:not(.author) .links .contact {\n    grid-column: span 2;\n    justify-self: center;\n    text-align: center;\n  }\n}\nfooter:not(.author) links a {\n  transition: color 0.5s;\n}\nfooter:not(.author) .links a:is(:hover, :focus-within) {\n  color: hsl(32, 39%, 76%);\n}\nfooter:not(.author) .links img {\n  translate: 0 -25%;\n}\nfooter:not(.author) .copyright {\n  display: flex;\n  background-color: black;\n}\nfooter:not(.author) .copyright .wrapper {\n  display: flex;\n  width: min(1200px, 70vw);\n  place-self: center;\n  align-items: center;\n}\n@media (max-width: 1020px) {\n  footer:not(.author) .copyright .wrapper {\n    flex-direction: column;\n    gap: min(2vh, 2rem);\n    justify-content: center;\n    text-align: center;\n  }\n}\nfooter:not(.author) .copyright .media {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  gap: 1rem;\n  margin-inline: auto;\n}\n@media (min-width: 800px) {\n  footer:not(.author) .copyright .media {\n    margin-inline-start: auto;\n  }\n}\n@media (min-width: 1020px) {\n  footer:not(.author) .copyright .media {\n    margin-inline-end: 0;\n  }\n}\nfooter:not(.author) .media a {\n  width: min(6vw, 2rem);\n  aspect-ratio: 1;\n}\nfooter:not(.author) .media .facebook {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\nfooter:not(.author) .media .tweeter {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\nfooter:not(.author) .media .instagram {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\nfooter:not(.author) .media .linkedin {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n}\n\n.nav-bar.translated ~ .mobile-navigation {\n  box-shadow: 0 4px 4px -2px hsl(156, 6%, 33%);\n}\n\n.mobile-navigation {\n  display: flex;\n  align-items: center;\n  width: 100vw;\n  position: sticky;\n  top: 0;\n  background-color: hsl(0, 0%, 98%);\n  z-index: 2;\n  transition: 0.5s;\n}\n@media (min-width: 1020px) {\n  .mobile-navigation {\n    display: none;\n  }\n}\n.mobile-navigation .navigation-toggler,\n.mobile-navigation .logo {\n  padding-inline: 1rem;\n}\n.mobile-navigation .navigation-toggler {\n  margin-inline-start: auto;\n  margin-inline-end: 1rem;\n  padding: 0;\n  cursor: pointer;\n  filter: invert(0.5);\n  transition: outline 0.5s;\n}\n.mobile-navigation .navigation-toggler::before {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n  display: block;\n  width: 3ch;\n  height: 3ch;\n}\n.mobile-navigation .logo {\n  transition: 0.5s;\n  padding-block: 1rem;\n  cursor: pointer;\n}\n\n.nav-bar:not(.toggled) ~ .mobile-navigation .logo {\n  filter: invert(1);\n  padding-block: 0.5rem;\n}\n\n.nav-bar.toggled ~ .mobile-navigation {\n  background-color: hsl(0, 0%, 13%);\n  filter: invert(0);\n}\n\n.nav-bar:not(.translated) ~ .mobile-navigation .navigation-toggler {\n  outline: 1px solid hsl(0, 0%, 98%);\n  outline-offset: 3px;\n}\n\n.about-us {\n  margin-inline: auto;\n  max-width: 95vw;\n  margin-block: 2rem 4rem;\n}\n@media (min-width: 1020px) {\n  .about-us {\n    max-width: min(70vw, 1200px);\n  }\n}\n@media (min-width: 1800px) {\n  .about-us .wrapper {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr;\n  }\n}\n.about-us .wrapper .special-image {\n  display: none;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n@media (min-width: 1800px) {\n  .about-us .wrapper .special-image {\n    display: block;\n  }\n}\n.about-us .reasons {\n  display: grid;\n  gap: 2rem;\n}\n.about-us .reason {\n  display: grid;\n  gap: 1rem;\n  position: relative;\n}\n@media (min-width: 600px) {\n  .about-us .reason {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr;\n    grid-template-columns: 92px 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .about-us .reason .text {\n    text-align: center;\n  }\n}\n.about-us .reason img {\n  width: 35%;\n  aspect-ratio: 1;\n  place-self: center;\n  padding: 1rem;\n  border-radius: 1vmax;\n  background-color: hsl(32, 39%, 76%);\n}\n@media (min-width: 600px) {\n  .about-us .reason img {\n    width: 100%;\n  }\n}\n.about-us hr {\n  height: 1px;\n}\n@media (max-width: 600px) {\n  .about-us hr:last-of-type {\n    margin-block-end: 2rem;\n  }\n}\n.about-us .button {\n  font-weight: 700;\n}\n@media (max-width: 600px) {\n  .about-us .button {\n    margin-inline: auto;\n    margin-block-start: -2rem;\n  }\n}\n.about-us .button:not(:hover, :focus-within) {\n  background-color: hsl(156, 6%, 33%);\n  color: hsl(0, 0%, 98%);\n}\n.about-us .button:is(:hover, :focus) {\n  background-color: hsl(32, 39%, 76%);\n  color: hsl(156, 6%, 33%);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  font-size: 16px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  line-height: 3ch;\n  color: hsl(180, 2%, 33%);\n  scroll-behavior: smooth;\n  scroll-padding-top: var(--nav-bar-space, 10vh);\n}\n\nbody {\n  overflow-anchor: none;\n}\n\na {\n  text-decoration: none;\n  color: currentColor;\n  transition: color 0.5s;\n}\n\na:is(:hover, :focus-within, :active) {\n  color: hsl(32, 39%, 76%);\n}\n\n:is(a, textarea, button, summary):focus-within {\n  outline: 2px solid hsl(32, 39%, 76%);\n}\n\n@media (max-width: 600px) {\n  table {\n    max-width: 100vw;\n    display: block;\n    overflow: scroll;\n  }\n}\n\ntable thead {\n  background-color: hsl(156, 6%, 33%);\n  color: hsl(0, 0%, 98%);\n}\n\ntable :is(td, th) {\n  padding-inline: 0.5ch;\n  padding-block: 0.5ch;\n}\n@media (max-width: 600px) {\n  table :is(td, th) {\n    vertical-align: baseline;\n  }\n}\n\ntable th {\n  padding-block: 1ch;\n  text-align: start;\n}\n\ntable :not(thead) tr:nth-of-type(odd):not(:hover, :focus-within) {\n  background-color: rgba(156, 158, 165, 0.1);\n}\n\ntable tr {\n  transition: 0.5s;\n}\n\ntable tr:is(:hover, :focus-within) {\n  background-color: hsl(228, 5%, 63%);\n  color: hsl(0, 0%, 98%);\n  cursor: pointer;\n}\n\ntable td {\n  font-weight: 700;\n}\n\ntable td.end {\n  text-align: end;\n}\n\n.read-more:is(:hover, :focus-within)::after {\n  display: inline-block;\n  animation: shake 1s infinite;\n  color: inherit;\n}\n\n.read-more {\n  display: flex;\n  font-weight: 600;\n  width: fit-content;\n  gap: 0.5ch;\n}\n\n.read-more::after {\n  content: \" \" url(${___CSS_LOADER_URL_REPLACEMENT_5___});\n}\n\n.read-more:not(:hover, :focus-within)::after {\n  filter: invert(100%);\n}\n\nul {\n  list-style: none;\n}\n\nul,\nol {\n  list-style-position: inside;\n}\n\nul.styled,\nol.styled {\n  --translate: 2ch;\n  max-width: calc(100% - var(--translate));\n  translate: var(--translate);\n  list-style-position: outside;\n}\n\nhr {\n  height: 100%;\n  border: 1px solid hsl(0, 0%, 90%);\n}\n\nimg {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: cover;\n}\n\nimg.overlap {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  z-index: -1;\n}\n\nhtml,\nbody {\n  width: 100%;\n  min-height: 100vh;\n}\n\nbody {\n  font-size: 1.1rem;\n}\n\narticle,\nsection {\n  display: grid;\n  gap: 5vh;\n}\n\narticle {\n  position: relative;\n}\n\nsection {\n  padding: 2rem;\n  z-index: 1;\n}\n@media (max-width: 600px) {\n  section {\n    padding: 0.8rem;\n  }\n}\n\ndetails {\n  color: hsl(156, 6%, 33%);\n}\n\ndetails summary {\n  font-weight: 700;\n  font-size: 1.4rem;\n  pointer-events: none;\n}\n\ndetails > * {\n  display: block;\n}\n\ndetails summary::marker {\n  content: \"\";\n}\n\n.button {\n  width: fit-content;\n  padding: 0.5rem 2rem;\n  border-radius: 0.25vmax;\n  background-color: hsl(0, 0%, 98%);\n  color: hsl(156, 6%, 33%);\n  transition: 0.5s;\n}\n\n.button:is(:hover, :focus-within) {\n  background-color: hsl(156, 6%, 33%);\n  color: hsl(32, 39%, 76%);\n}\n\nbutton[type=submit] {\n  border: none;\n  cursor: pointer;\n}\n\n.shy {\n  font-weight: 600;\n  text-transform: uppercase;\n  color: hsl(32, 39%, 76%);\n}\n\n.hero {\n  font-size: 1.9rem;\n  max-width: 25ch;\n  line-height: 2.5rem;\n  font-weight: 900;\n  text-transform: capitalize;\n  color: hsl(156, 6%, 33%);\n}\n\n.hero.small {\n  font-size: 1.52rem;\n  line-height: 2ch;\n}\n\n.center-text {\n  text-align: center;\n}\n\ntime {\n  color: hsl(0, 0%, 77%);\n}\n\ntime::before {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) \" \";\n}\n\ntextarea {\n  font: initial;\n}\n\n.navigation-indicator {\n  margin-block-start: 1rem;\n}\n\n.contents {\n  display: contents;\n}\n\n.custom-checkbox {\n  position: relative;\n  width: 2.5ch;\n  aspect-ratio: 1;\n  border: 1px solid hsl(156, 6%, 33%);\n  border-radius: 0.25vmax;\n  cursor: pointer;\n  z-index: 0;\n  overflow: hidden;\n}\n@media (max-width: 800px) {\n  .custom-checkbox {\n    width: max(4ch, 60px);\n  }\n}\n.custom-checkbox > * {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.custom-checkbox input {\n  visibility: hidden;\n}\n.custom-checkbox .pseudo-checkbox {\n  z-index: 1;\n  transition: background-color 0.25s;\n}\n.custom-checkbox:is(:hover, :focus-within) .pseudo-checkbox,\n.custom-checkbox input:checked ~ .pseudo-checkbox {\n  background-color: hsl(32, 39%, 76%);\n}\n\n@keyframes shake {\n  0% {\n    translate: 25%;\n  }\n  50% {\n    translate: 50%;\n  }\n  100% {\n    translate: 10%;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./about-us/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./about-us/markup/about-us.html":
/*!***************************************!*\
  !*** ./about-us/markup/about-us.html ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/global.svg */ \"./about-us/images/global.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/special.svg */ \"./about-us/images/special.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/sheet.svg */ \"./about-us/images/sheet.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/experience.svg */ \"./about-us/images/experience.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar code = \"<section id=\\\"about-us\\\" class=\\\"about-us\\\">\\n  <div class=\\\"question\\\">\\n    <span class=\\\"shy\\\">Co nas wyróżnia?</span>\\n    <h1 class=\\\"hero\\\">More than 50M+ people are happy with us</h1>\\n  </div>\\n  <div class=\\\"wrapper\\\">\\n    <div class=\\\"reasons\\\">\\n      <div class=\\\"reason\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"net image\\\" />\\n        <span class=\\\"text\\\">\\n          <h2>Usługa skupu nieruchomości od osób przebywających za granicą</h2>\\n          <p>\\n            Specjalizujemy się w obsłudze sprzedaży nieruchomości dla\\n            cudzoziemców i osób za granicą, zapewniając kompleksową pomoc w\\n            transakcjach.\\n          </p>\\n        </span>\\n      </div>\\n      <hr />\\n      <div class=\\\"reason\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"\\\" />\\n        <span class=\\\"text\\\">\\n          <h2>\\n            Profesjonalna obsługa ofert sprzedaży nieruchomości w Polsce przez\\n            osoby mieszkające za granicą\\n          </h2>\\n          <p>\\n            Jesteśmy ekspertami w zarządzaniu ryzykiem, kosztorysach i\\n            przewidywaniu trendów rynkowych, zapewniając maksymalizację wartości\\n            nieruchomości w szybkiej sprzedaży. Jako uczciwa firma oferujemy\\n            bezstresową obsługę i korzystne warunki.\\n          </p>\\n        </span>\\n      </div>\\n      <hr />\\n      <div class=\\\"reason\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"sheet image\\\" />\\n        <span class=\\\"text\\\">\\n          <h2>Zasada jednego telefonu</h2>\\n          <p>\\n            Nasza agencja nieruchomości oferuje kompleksową obsługę transakcji,\\n            obejmującą składanie dokumentów i uporządkowanie sytuacji prawnej.\\n            Dzięki zasadzie jednego telefonu zapewniamy wygodę i oszczędność\\n            czasu naszym klientom.\\n          </p>\\n        </span>\\n      </div>\\n      <hr />\\n\\n      <a href=\\\"#\\\" class=\\\"button\\\">Skontaktuj się z nami</a>\\n    </div>\\n    <img\\n      src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"\\n      alt=\\\"experience\\\"\\n      class=\\\"special-image\\\"\\n    />\\n  </div>\\n</section>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./about-us/markup/about-us.html?");

/***/ }),

/***/ "./about-us/markup/footer.html":
/*!*************************************!*\
  !*** ./about-us/markup/footer.html ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/brand.svg */ \"./about-us/images/brand.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<footer>\\n  <div class=\\\"links\\\">\\n    <img class=\\\"logo\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" />\\n    <div class=\\\"column\\\">\\n      <span class=\\\"heading\\\">About us</span>\\n      <ul>\\n        <li><a href=\\\"#\\\">About us</a></li>\\n        <li><a href=\\\"#\\\">Testimonials</a></li>\\n        <li><a href=\\\"#\\\">Services</a></li>\\n        <li><a href=\\\"#\\\">Our experts</a></li>\\n        <li><a href=\\\"#\\\">Latest</a></li>\\n        <li><a href=\\\"#\\\">News</a></li>\\n        <li><a href=\\\"#\\\">Contact</a></li>\\n      </ul>\\n    </div>\\n    <div class=\\\"column\\\">\\n      <span class=\\\"heading\\\"> Our services </span>\\n      <ul>\\n        <li><a href=\\\"#\\\">Competition</a></li>\\n        <li><a href=\\\"#\\\">Dispute support</a></li>\\n        <li><a href=\\\"#\\\">Energy and climate</a></li>\\n        <li><a href=\\\"#\\\">IP valuation</a></li>\\n        <li><a href=\\\"#\\\">Life sciences</a></li>\\n        <li><a href=\\\"#\\\">Trade and markets</a></li>\\n      </ul>\\n    </div>\\n    <div class=\\\"column contact\\\">\\n      <span class=\\\"heading\\\"> Contact us </span>\\n      <ul>\\n        <li class=\\\"location\\\"><span>Klara Södra 1, 111 52 Stockholm</span></li>\\n        <li class=\\\"phone\\\">\\n          <span>+4 509 120 6705 </span>\\n          <span>(454) 954 4803</span>\\n        </li>\\n        <li class=\\\"mail\\\">\\n          <a href=\\\"mailto:onatrix@support.com\\\">onatrix@support.com</a>\\n        </li>\\n      </ul>\\n    </div>\\n  </div>\\n  <div class=\\\"copyright\\\">\\n    <div class=\\\"wrapper\\\">\\n      <span class=\\\"text\\\"\\n        >© 2020 Onatrix. All Rights Reserved. Designed by ThemeMu</span\\n      >\\n      <ul class=\\\"media\\\">\\n        <li><a class=\\\"facebook\\\" href=\\\"#\\\"></a></li>\\n        <li><a class=\\\"tweeter\\\" href=\\\"#\\\"></a></li>\\n        <li><a class=\\\"instagram\\\" href=\\\"#\\\"></a></li>\\n        <li><a class=\\\"linkedin\\\" href=\\\"#\\\"></a></li>\\n      </ul>\\n    </div>\\n  </div>\\n</footer>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./about-us/markup/footer.html?");

/***/ }),

/***/ "./about-us/markup/home.html":
/*!***********************************!*\
  !*** ./about-us/markup/home.html ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/meeting.webp */ \"./about-us/images/meeting.webp\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<section\\n  id=\\\"home\\\"\\n  class=\\\"home\\\"\\n  style=\\\"visibility: hidden; position: absolute; height: 5rem\\\"\\n>\\n  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" class=\\\"overlap\\\" />\\n  <div class=\\\"hero-section\\\">\\n    <p>Usługi</p>\\n  </div>\\n  <div class=\\\"blank-section\\\"></div>\\n</section>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./about-us/markup/home.html?");

/***/ }),

/***/ "./about-us/markup/mobile-navigation.html":
/*!************************************************!*\
  !*** ./about-us/markup/mobile-navigation.html ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/brand.svg */ \"./about-us/images/brand.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<div class=\\\"mobile-navigation\\\">\\n  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" class=\\\"logo\\\" />\\n  <a class=\\\"navigation-toggler\\\"></a>\\n</div>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./about-us/markup/mobile-navigation.html?");

/***/ }),

/***/ "./about-us/markup/nav-bar.html":
/*!**************************************!*\
  !*** ./about-us/markup/nav-bar.html ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/brand.svg */ \"./about-us/images/brand.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<div class=\\\"nav-bar translated\\\">\\n  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"logo\\\" class=\\\"logo\\\" />\\n\\n  <nav class=\\\"links\\\">\\n    <ul>\\n      <li><a href=\\\"./index.html\\\">Główna</a></li>\\n      <li><a href=\\\"./services.html\\\">Usługi</a></li>\\n      <li><a href=\\\"#about-us\\\">O nas</a></li>\\n      <li><a href=\\\"./guides.html\\\">Poradnik</a></li>\\n      <li><a href=\\\"./opinions.html\\\">Opinie</a></li>\\n      <li><a href=\\\"./contact.html\\\">Kontakt</a></li>\\n    </ul>\\n  </nav>\\n  <span class=\\\"contact\\\">\\n    <span>Call us for any question</span>\\n    <span class=\\\"phone\\\">+4 509 120 6705</span>\\n  </span>\\n</div>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./about-us/markup/nav-bar.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./about-us/styles/main.scss":
/*!***********************************!*\
  !*** ./about-us/styles/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./about-us/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./about-us/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./about-us/images/anchor-arrow.svg":
/*!******************************************!*\
  !*** ./about-us/images/anchor-arrow.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0d7167cde0b06c4d8220.svg\";\n\n//# sourceURL=webpack:///./about-us/images/anchor-arrow.svg?");

/***/ }),

/***/ "./about-us/images/brand.svg":
/*!***********************************!*\
  !*** ./about-us/images/brand.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c597cb5955a71b8454e8.svg\";\n\n//# sourceURL=webpack:///./about-us/images/brand.svg?");

/***/ }),

/***/ "./about-us/images/calendar.svg":
/*!**************************************!*\
  !*** ./about-us/images/calendar.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"50a7f5af88cbf285dad9.svg\";\n\n//# sourceURL=webpack:///./about-us/images/calendar.svg?");

/***/ }),

/***/ "./about-us/images/experience.svg":
/*!****************************************!*\
  !*** ./about-us/images/experience.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1f535558c66f421b813f.svg\";\n\n//# sourceURL=webpack:///./about-us/images/experience.svg?");

/***/ }),

/***/ "./about-us/images/facebook.svg":
/*!**************************************!*\
  !*** ./about-us/images/facebook.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"45b46026fc7ab9a2be43.svg\";\n\n//# sourceURL=webpack:///./about-us/images/facebook.svg?");

/***/ }),

/***/ "./about-us/images/global.svg":
/*!************************************!*\
  !*** ./about-us/images/global.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3e487733cb480d72c793.svg\";\n\n//# sourceURL=webpack:///./about-us/images/global.svg?");

/***/ }),

/***/ "./about-us/images/hamburger.svg":
/*!***************************************!*\
  !*** ./about-us/images/hamburger.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f2c2bd3141c34b4f50a1.svg\";\n\n//# sourceURL=webpack:///./about-us/images/hamburger.svg?");

/***/ }),

/***/ "./about-us/images/instagram.svg":
/*!***************************************!*\
  !*** ./about-us/images/instagram.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0fb3e2e01d3f12aa00a3.svg\";\n\n//# sourceURL=webpack:///./about-us/images/instagram.svg?");

/***/ }),

/***/ "./about-us/images/linkedin.svg":
/*!**************************************!*\
  !*** ./about-us/images/linkedin.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ca31d5985241e43bc33.svg\";\n\n//# sourceURL=webpack:///./about-us/images/linkedin.svg?");

/***/ }),

/***/ "./about-us/images/meeting.webp":
/*!**************************************!*\
  !*** ./about-us/images/meeting.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bf8c4ede9a066f681dc5.webp\";\n\n//# sourceURL=webpack:///./about-us/images/meeting.webp?");

/***/ }),

/***/ "./about-us/images/sheet.svg":
/*!***********************************!*\
  !*** ./about-us/images/sheet.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"491085ca21f085a7c0ac.svg\";\n\n//# sourceURL=webpack:///./about-us/images/sheet.svg?");

/***/ }),

/***/ "./about-us/images/special.svg":
/*!*************************************!*\
  !*** ./about-us/images/special.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"46c58442f30a9d66b122.svg\";\n\n//# sourceURL=webpack:///./about-us/images/special.svg?");

/***/ }),

/***/ "./about-us/images/tweeter.svg":
/*!*************************************!*\
  !*** ./about-us/images/tweeter.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6a03f300f23e8d2ed631.svg\";\n\n//# sourceURL=webpack:///./about-us/images/tweeter.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./about-us/scripts/main.js");
/******/ 	
/******/ })()
;