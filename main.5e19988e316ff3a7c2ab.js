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

/***/ "./home/scripts/accordeon.js":
/*!***********************************!*\
  !*** ./home/scripts/accordeon.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction smoothHeightTransition(event) {\n  // height transition for FAQ details\n  event.preventDefault();\n  const elementTransitionClass = \"hidden\";\n  const transitionElementRefference = \"p\";\n  const targetElementRefference = \".faq summary\";\n  const faqDetailsRefference = \".faq .question\";\n  const faqDetails = event.target.closest(faqDetailsRefference);\n\n  const targetElement = event.target.closest(targetElementRefference);\n\n  let summary, computedPadding;\n\n  let open = false;\n\n  let targetHeight;\n\n  if (!faqDetails || !targetElement) return;\n\n  if (faqDetails.hasAttribute(\"open\")) open = true;\n\n  computedPadding = getComputedStyle(faqDetails).padding.split(\" \").at(0);\n\n  if (open) {\n    // close if open\n    // get summary height\n    summary = faqDetails.querySelector(\"summary\");\n    const elementToHide = faqDetails.querySelector(transitionElementRefference);\n    elementToHide.classList.add(elementTransitionClass);\n    elementToHide.ontransitionend = () => {\n      faqDetails.removeAttribute(\"open\");\n      elementToHide.classList.remove(elementTransitionClass);\n    };\n    // get collapsed height\n    targetHeight =\n      faqDetails.dataset.collapsedHeight ||\n      Math.floor(summary.getBoundingClientRect().height);\n    // do not add computed padding\n    faqDetails.style.height = `calc(${targetHeight}px )`;\n    return;\n  }\n\n  // set collapsed height attribute\n  if (!faqDetails.dataset.collapsedHeight) {\n    const collapsedHeight = faqDetails.getBoundingClientRect().height;\n    faqDetails.dataset.collapsedHeight = collapsedHeight;\n  }\n\n  faqDetails.setAttribute(\"open\", \"true\");\n  targetHeight =\n    faqDetails.dataset.expandedHeight ||\n    Math.floor(faqDetails.getBoundingClientRect().height);\n  faqDetails.dataset.expandedHeight = targetHeight;\n  faqDetails.removeAttribute(\"open\");\n  faqDetails.setAttribute(\"open\", \"true\");\n  faqDetails.style.height = `calc(${targetHeight}px + ${computedPadding})`;\n}\n\nfunction prepareForSmoothTransition(event) {\n  const faqDetailsRefference = \".faq .question\";\n\n  const faqDetails = document.querySelectorAll(faqDetailsRefference);\n\n  for (let iteration = 0; iteration < faqDetails.length; iteration++) {\n    const faqDetail = faqDetails[iteration];\n\n    // make sure details are closed\n    faqDetail.removeAttribute(\"open\");\n\n    // revert height changes\n    faqDetail.style.height = \"auto\";\n\n    const collapsedHeight = Math.ceil(faqDetail.getBoundingClientRect().height);\n    // expand details\n    faqDetail.setAttribute(\"open\", \"true\");\n    const expandedHeight = Math.ceil(faqDetail.getBoundingClientRect().height);\n    // close\n    faqDetail.removeAttribute(\"open\");\n\n    faqDetail.style.height = `${collapsedHeight}px`;\n    faqDetail.dataset.collapsedHeight = collapsedHeight;\n    faqDetail.dataset.expandedHeight = expandedHeight;\n  }\n}\n\nconst accordeon = {\n  smoothHeightTransition,\n  prepareForSmoothTransition,\n};\n\nconst faqSection = document.querySelector(\"section.faq\");\n\nfaqSection?.addEventListener(\"click\", smoothHeightTransition);\n\nwindow.addEventListener(\"load\", (event) => {\n  prepareForSmoothTransition(event);\n});\n\nwindow.addEventListener(\"resize\", (event) => {\n  prepareForSmoothTransition(event);\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n\n//# sourceURL=webpack:///./home/scripts/accordeon.js?");

/***/ }),

/***/ "./home/scripts/main.js":
/*!******************************!*\
  !*** ./home/scripts/main.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _markup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup */ \"./home/scripts/markup.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./home/scripts/styles.js\");\n/* harmony import */ var _accordeon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordeon */ \"./home/scripts/accordeon.js\");\n\n\n\n\n\nconst intersectionObserver = new IntersectionObserver(changeNavigation, {\n  rootMargin: \"-100px 0px\",\n});\n\nconst navElementsContainer = \"nav.links\";\n\nfunction preventFOUC(event) {\n  document.documentElement.style.visibility = \"visible\";\n}\n\nfunction setPaddingTop(event) {\n  const breakpoint = \"1024\";\n  const navBarRefference = \".nav-bar\";\n  const mobileNavigationRefference = \".mobile-navigation\";\n  const navBarHeightProperty = \"--nav-bar-space\";\n  const navBar = document.querySelector(navBarRefference);\n  const mobileNavigation = document.querySelector(mobileNavigationRefference);\n\n  const belowBreakpoint = document.body.getBoundingClientRect().width < 1024;\n\n  let navBarHeight;\n  let domRect;\n\n  if (!navBar) return;\n\n  domRect = belowBreakpoint\n    ? mobileNavigation.getBoundingClientRect()\n    : navBar.getBoundingClientRect();\n  navBarHeight = Math.ceil(domRect.height);\n\n  document.documentElement.style.setProperty(\n    navBarHeightProperty,\n    `${navBarHeight}px`\n  );\n}\n\nfunction navigateFromLogo(event) {\n  // navigate home while clicking oon logo\n  const logoRefference = \".logo\";\n  const homeAnchorRefference = `a[href=\"#home\"]`;\n  const logo = event.target.closest(logoRefference);\n  const homeAnchor = document.querySelector(homeAnchorRefference);\n\n  if (logo && homeAnchor) homeAnchor.click();\n  if (logo && !homeAnchor) {\n    const main = document.querySelector(\"main\");\n    main.scrollIntoView();\n  }\n}\n\nfunction changeNavigation(entries) {\n  const targetClass = \"toggled\";\n  const navBarElement = _markup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].navBar;\n  entries.forEach((entry) => {\n    if (entry.isIntersecting) navBarElement.classList.add(targetClass);\n    else navBarElement.classList.remove(targetClass);\n  });\n}\n\nintersectionObserver.observe(_markup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].homeSection);\n\nfunction translateNavigation(event) {\n  const navBarElement = _markup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].navBar;\n  const navigationTogglerSelector = \".navigation-toggler\";\n  const navigationTranslateClass = \"translated\";\n\n  if (!event.target.closest(navigationTogglerSelector)) return;\n  navBarElement.classList.toggle(navigationTranslateClass);\n}\n\nfunction redirectOnMobile(event) {\n  // mobile navigation toggler\n  const navBarToggler = _markup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mobileNavigation.querySelector(\n    \".navigation-toggler\"\n  );\n  const closestAnchor = event.target.closest(\"a\");\n\n  if (!closestAnchor || !closestAnchor.closest(navElementsContainer)) return;\n  navBarToggler.click();\n}\n\nfunction hideNavigation(event) {\n  // hides navigation inside home-blog section\n  const url = event.target.URL;\n  let targetHash;\n\n  if (url) targetHash = url.toString().split(\"#\").at(-1);\n\n  const fullPostId = \"target-post\";\n\n  const pagesListRefference = \".pages.blog\";\n  const fullPostElement = document.getElementById(fullPostId);\n\n  const hiddenClass = \"hidden\";\n\n  const pagesList = document.querySelector(pagesListRefference);\n\n  const isTarget =\n    fullPostElement?.matches(\":target\") || targetHash === fullPostId;\n\n  if (!pagesList) return;\n\n  if (!isTarget) {\n    pagesList.classList.remove(hiddenClass);\n    return;\n  }\n\n  pagesList.classList.add(hiddenClass);\n}\n\nfunction toggleSidebar(event) {\n  // toggles blog sidebar on mobile/tablet\n  const triggerSelector = \".sidebar-trigger\";\n  const sidebar = document.querySelector(\".sidebar\");\n  const trigger = event.target.closest(triggerSelector);\n  const toggleClass = \"expanded\";\n\n  if (!trigger) return;\n  sidebar.classList.toggle(toggleClass);\n}\n\nfunction closeSidebar(event) {\n  // closes blog sidebar after clicking anchor\n  const toggleClass = \"expanded\";\n\n  const sidebarRefference = \".sidebar\";\n  const anchor = event.target.closest(\"a\");\n  const sidebar = document.querySelector(sidebarRefference);\n\n  const insideSidebar = anchor?.closest(sidebarRefference);\n\n  if (!insideSidebar) return;\n\n  sidebar.classList.remove(toggleClass);\n}\n\nfunction removeLabels(event) {\n  const togglingClass = \"signed\";\n  const inputElement = event.target;\n\n  const isInput =\n    inputElement.matches(`input:not([type=\"checkbox\"], [type=\"radio\"])`) ||\n    inputElement.matches(\"textarea\");\n\n  if (!isInput) return;\n  const labelElement = inputElement.closest(\"label\");\n\n  if (!inputElement.value || !Boolean(inputElement.value)) {\n    labelElement.classList.remove(togglingClass);\n    return;\n  }\n  labelElement.classList.add(togglingClass);\n}\n\nfunction customCheckbox(event) {\n  const customCheckboxRefference = \".custom-checkbox\";\n  const togglingClass = \"checked\";\n\n  let checkbox;\n\n  const customCheckbox = event.target.closest(customCheckboxRefference);\n\n  if (!customCheckbox) return;\n\n  checkbox = customCheckbox.querySelector(`input[type=\"checkbox\"]`);\n\n  if (!checkbox) return;\n\n  // click on checkbox for accesibility\n\n  checkbox.click();\n}\n\nfunction setCustomSelect(event) {\n  //sets height for custom select\n  const customSelectRefference = \".custom-select\";\n  const lineNumberProperty = \"--line-number\";\n  const customOptionRefference = \".custom-option\";\n\n  const customOptionElements = document.querySelectorAll(\n    customSelectRefference\n  );\n\n  if (!customOptionElements) return;\n\n  for (\n    let iteration = 0;\n    iteration < customOptionElements.length;\n    iteration++\n  ) {\n    const customOptionElement = customOptionElements[iteration];\n\n    const options = customOptionElement.querySelectorAll(\n      customOptionRefference\n    );\n\n    customOptionElement.style.setProperty(lineNumberProperty, options.length);\n  }\n}\n\nfunction customSelect(event) {\n  const customSelectRefference = \".custom-select\";\n  const checkedElementRefference = \"checked\";\n  const customOptionRefference = \".custom-option\";\n  const radio = event.target;\n  const customSelectElement = radio.closest(customSelectRefference);\n  const currentOptionElement = radio.closest(customOptionRefference);\n\n  if (!customSelectElement || !currentOptionElement) return;\n  const lastChecked = customSelectElement.querySelector(\n    `.${checkedElementRefference}`\n  );\n\n  if (lastChecked === currentOptionElement) return;\n\n  if (lastChecked) lastChecked.classList.remove(checkedElementRefference);\n\n  currentOptionElement.classList.add(checkedElementRefference);\n\n  // focus out\n\n  radio.blur();\n}\n\nfunction forceCustomSelect(event) {\n  const customSelectRefference = \".custom-select\";\n  const checkedElementRefference = \".checked\";\n  const radioRefference = `input[type=\"radio\"]`;\n  let checkedRadio;\n\n  const customSelectElement = document.querySelector(customSelectRefference);\n  const checkedElement = event.target.closest(checkedElementRefference);\n\n  if (!customSelectElement || !checkedElement) return;\n\n  checkedRadio = checkedElement.querySelector(radioRefference);\n\n  checkedRadio.blur();\n}\n\nfunction prepareGallery(event) {\n  const galleryRefference = \".gallery\";\n  const galleryImagesRefference = \".main > img, .left, .right\";\n  const hiddenImagesRefference = \".hidden-images img\";\n\n  const gallery = document.querySelector(galleryRefference);\n  const galleryImages = gallery?.querySelectorAll(galleryImagesRefference);\n  const hiddenImages = gallery?.querySelectorAll(hiddenImagesRefference);\n\n  if (!gallery || !galleryImages || !hiddenImages) return;\n\n  for (let iteration = 0; iteration < galleryImages.length; iteration++) {\n    galleryImages[iteration].src = hiddenImages[iteration].src;\n  }\n\n  // setting next and previous  image element. kinda like looped linkedlist\n}\n\nfunction gallery(event) {\n  const galleryRefference = \".gallery\";\n  const imagesSelector = \".main > img, .left, .right\";\n  const hiddenImagesRefference = \".hidden-images img\";\n  const previousControlRefference = \".previous\";\n  const nextControlRefference = \".next\";\n  let galleryImages;\n  let direction;\n  let matchElement;\n  let previousElement, nextElement;\n\n  const galleryElement = document.querySelector(galleryRefference);\n\n  if (!galleryElement) return;\n\n  const hiddenImages = Array.from(\n    galleryElement?.querySelectorAll(hiddenImagesRefference)\n  );\n\n  if (!hiddenImages) return;\n\n  galleryImages = Array.from(galleryElement.querySelectorAll(imagesSelector));\n\n  if (\n    !event.target.closest(previousControlRefference) &&\n    !event.target.closest(nextControlRefference)\n  )\n    return;\n\n  direction = event.target.closest(previousControlRefference) ? -1 : 1;\n\n  matchElement = hiddenImages.find(\n    // targeting 1st index because of center .main frame\n    (element) => element.src === galleryImages.at(1).src\n  );\n\n  if (direction > 0)\n    matchElement = matchElement.nextElementSibling || hiddenImages[0];\n\n  if (direction < 0)\n    matchElement = matchElement.previousElementSibling || hiddenImages.at(-1);\n\n  previousElement = matchElement?.previousElementSibling || hiddenImages.at(-1);\n  nextElement = matchElement?.nextElementSibling || hiddenImages[0];\n\n  if (!matchElement || !previousElement || !nextElement) return;\n\n  // change sources\n\n  galleryImages[0].src = previousElement.src;\n  galleryImages[1].src = matchElement.src;\n  galleryImages[2].src = nextElement.src;\n}\n\nfunction expandOpinions(event) {\n  const opinionWrapperRefference = \".opinion-wrapper\";\n  const opinionElementRefference = \".comments\";\n  const togglingClass = \"collapsed\";\n  const anchor = event.target.closest(\"a\");\n  const opinionWrapper = anchor?.closest(opinionWrapperRefference);\n  const opinionElement = opinionWrapper?.querySelector(\n    opinionElementRefference\n  );\n\n  if (!opinionWrapper || !opinionElement) return;\n  opinionElement.classList.toggle(togglingClass);\n}\n\nwindow.onclick = (event) => {\n  navigateFromLogo(event);\n  translateNavigation(event);\n  redirectOnMobile(event);\n  toggleSidebar(event);\n  closeSidebar(event);\n  customCheckbox(event);\n  customSelect(event);\n  gallery(event);\n  expandOpinions(event);\n};\n\nwindow.ondblclick = (event) => {\n  forceCustomSelect(event);\n};\n\nwindow.onchange = (event) => {\n  removeLabels(event);\n};\n\nwindow.onhashchange = (event) => {\n  hideNavigation(event);\n};\n\nwindow.onload = (event) => {\n  preventFOUC(event);\n  setPaddingTop(event);\n  hideNavigation(event);\n  prepareGallery(event);\n  setCustomSelect(event);\n};\n\n\n//# sourceURL=webpack:///./home/scripts/main.js?");

/***/ }),

/***/ "./home/scripts/markup.js":
/*!********************************!*\
  !*** ./home/scripts/markup.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _markup_mobile_navigation_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../markup/mobile-navigation.html */ \"./home/markup/mobile-navigation.html\");\n/* harmony import */ var _markup_nav_bar_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../markup/nav-bar.html */ \"./home/markup/nav-bar.html\");\n/* harmony import */ var _markup_home_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../markup/home.html */ \"./home/markup/home.html\");\n/* harmony import */ var _markup_partners_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../markup/partners.html */ \"./home/markup/partners.html\");\n/* harmony import */ var _markup_call_to_action_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../markup/call-to-action.html */ \"./home/markup/call-to-action.html\");\n/* harmony import */ var _markup_consultancy_cases_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../markup/consultancy-cases.html */ \"./home/markup/consultancy-cases.html\");\n/* harmony import */ var _markup_why_us_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../markup/why-us.html */ \"./home/markup/why-us.html\");\n/* harmony import */ var _markup_testimonial_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../markup/testimonial.html */ \"./home/markup/testimonial.html\");\n/* harmony import */ var _markup_blog_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../markup/blog.html */ \"./home/markup/blog.html\");\n/* harmony import */ var _markup_work_with_us_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../markup/work-with-us.html */ \"./home/markup/work-with-us.html\");\n/* harmony import */ var _markup_footer_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../markup/footer.html */ \"./home/markup/footer.html\");\n/* harmony import */ var _markup_faq_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../markup/faq.html */ \"./home/markup/faq.html\");\n/* harmony import */ var _markup_home_case_study_html__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../markup/home-case-study.html */ \"./home/markup/home-case-study.html\");\n/* harmony import */ var _markup_home_services_html__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../markup/home-services.html */ \"./home/markup/home-services.html\");\n/* harmony import */ var _markup_home_gallery_html__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../markup/home-gallery.html */ \"./home/markup/home-gallery.html\");\n/* harmony import */ var _markup_home_consultancy_cases_html__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../markup/home-consultancy-cases.html */ \"./home/markup/home-consultancy-cases.html\");\n/* harmony import */ var _markup_testimonial_opinions_html__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../markup/testimonial-opinions.html */ \"./home/markup/testimonial-opinions.html\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// here go subsections\n\n\n\n\n\n\n\n\n// here go subsections\n\nconst parser = new DOMParser();\n\nfunction parseHtml(html, domParser = parser) {\n  const parsedValue = domParser.parseFromString(html, \"text/html\");\n  return parsedValue.querySelector(\"body > *\");\n}\n\nconst main = document.querySelector(\"main\");\n\nconst article = document.getElementById(\"main-sections\");\n\nconst subsectionsArticle = document.querySelector(\".subsections\");\n\nconst pageElements = {\n  mobileNavigation: parseHtml(_markup_mobile_navigation_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n  navBar: parseHtml(_markup_nav_bar_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n  homeSection: parseHtml(_markup_home_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n  partnersSection: parseHtml(_markup_partners_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n  callToActionSection: parseHtml(_markup_call_to_action_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n  consultancyCasesSection: parseHtml(_markup_consultancy_cases_html__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n  whyUsSection: parseHtml(_markup_why_us_html__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n  testimonialSection: parseHtml(_markup_testimonial_html__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n\n  blogSection: parseHtml(_markup_blog_html__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n  workWithUsSection: parseHtml(_markup_work_with_us_html__WEBPACK_IMPORTED_MODULE_9__[\"default\"]),\n  footerElement: parseHtml(_markup_footer_html__WEBPACK_IMPORTED_MODULE_10__[\"default\"]),\n\n  subsections: {\n    faqSubsection: parseHtml(_markup_faq_html__WEBPACK_IMPORTED_MODULE_11__[\"default\"]),\n    caseStudySubsection: parseHtml(_markup_home_case_study_html__WEBPACK_IMPORTED_MODULE_12__[\"default\"]),\n    homeServicesSubsection: parseHtml(_markup_home_services_html__WEBPACK_IMPORTED_MODULE_13__[\"default\"]),\n    homeGallerySubsection: parseHtml(_markup_home_gallery_html__WEBPACK_IMPORTED_MODULE_14__[\"default\"]),\n    homeConsultancyCasesSubsection: parseHtml(_markup_home_consultancy_cases_html__WEBPACK_IMPORTED_MODULE_15__[\"default\"]),\n    testimonialOpinionsSubsection: parseHtml(_markup_testimonial_opinions_html__WEBPACK_IMPORTED_MODULE_16__[\"default\"]),\n  },\n};\n\ndocument.body.prepend(pageElements.mobileNavigation);\n\ndocument.body.prepend(pageElements.navBar);\n\ndocument.body.append(pageElements.footerElement);\n\narticle.append(pageElements.homeSection);\n\narticle.append(pageElements.partnersSection);\n\narticle.append(pageElements.callToActionSection);\n\narticle.append(pageElements.consultancyCasesSection);\n\narticle.append(pageElements.whyUsSection);\n\narticle.append(pageElements.testimonialSection);\n\narticle.append(pageElements.subsections.testimonialOpinionsSubsection);\n\narticle.append(pageElements.subsections.faqSubsection);\n\narticle.append(pageElements.blogSection);\n\narticle.append(pageElements.workWithUsSection);\n\n// appending subSections\n\nsubsectionsArticle.append(pageElements.subsections.caseStudySubsection);\nsubsectionsArticle.append(pageElements.subsections.homeServicesSubsection);\nsubsectionsArticle.append(pageElements.subsections.homeGallerySubsection);\nsubsectionsArticle.append(\n  pageElements.subsections.homeConsultancyCasesSubsection\n);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageElements);\n\n\n//# sourceURL=webpack:///./home/scripts/markup.js?");

/***/ }),

/***/ "./home/scripts/styles.js":
/*!********************************!*\
  !*** ./home/scripts/styles.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./home/styles/main.scss\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack:///./home/scripts/styles.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./home/styles/main.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./home/styles/main.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/facebook.svg */ \"./home/images/facebook.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/tweeter.svg */ \"./home/images/tweeter.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/instagram.svg */ \"./home/images/instagram.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/linkedin.svg */ \"./home/images/linkedin.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hamburger.svg */ \"./home/images/hamburger.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/expand-arrow.svg */ \"./home/images/expand-arrow.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/order-arrow.svg */ \"./home/images/order-arrow.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/arrow.svg */ \"./home/images/arrow.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../images/play-button.svg */ \"./home/images/play-button.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../images/folder.svg */ \"./home/images/folder.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../images/anchor-arrow.svg */ \"./home/images/anchor-arrow.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../images/meeting.jpg */ \"./home/images/meeting.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../images/quote-small.svg */ \"./home/images/quote-small.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../images/quote.svg */ \"./home/images/quote.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../images/rating.svg */ \"./home/images/rating.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../images/overlap-image-2.svg */ \"./home/images/overlap-image-2.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../images/overlap-background-image.svg */ \"./home/images/overlap-background-image.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../images/work-with-su-background.svg */ \"./home/images/work-with-su-background.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../images/calendar.svg */ \"./home/images/calendar.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);\nvar ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);\nvar ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);\nvar ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.contact-request,\n.contact-info,\nform {\n  display: grid;\n}\n\n.contact-request {\n  margin-inline: auto;\n  max-width: 95vw;\n  gap: 1rem;\n  align-items: start;\n}\n@media (min-width: 1020px) {\n  .contact-request {\n    max-width: min(70vw, 1200px);\n  }\n}\n@media (min-width: 800px) {\n  .contact-request {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n.title {\n  font-size: 2rem;\n}\n\n.contact-info,\nform {\n  gap: 1rem;\n}\n\n.wrapper {\n  display: flex;\n  align-items: center;\n  gap: 1ch;\n}\n\n.description {\n  font-weight: 500;\n}\n\n.phone-numbers {\n  display: grid;\n  font-weight: 700;\n  color: hsl(32, 39%, 76%);\n}\n\nform {\n  margin-block-start: 1rem;\n}\n\nform label {\n  position: relative;\n  display: grid;\n  align-items: center;\n  --spacing: 2ch;\n  padding: var(--spacing);\n  border: 0.5px solid hsl(156, 6%, 33%);\n  border-radius: 0.25vmax;\n  overflow: hidden;\n}\n\nform [required] ~ .description::after {\n  content: \" *\";\n}\n\nlabel.custom {\n  padding: 0;\n}\n\nlabel .description {\n  position: absolute;\n  left: var(--spacing, 2ch);\n  z-index: 1;\n  font-style: oblique;\n}\n\nlabel:is(:focus-within, .signed) .description {\n  visibility: hidden;\n}\n\nlabel:focus-within {\n  outline: 2px solid hsl(32, 39%, 76%);\n  border: none;\n}\n\nlabel :is(input, textarea) {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  font-size: inherit;\n  font-weight: inherit;\n  text-indent: var(--spacing);\n  border: none;\n  caret-color: hsl(32, 39%, 76%);\n}\n\nselect {\n  position: absolute;\n  visibility: hidden;\n  pointer-events: none;\n}\n\n.message {\n  height: 20ch;\n}\n\n.message .description {\n  align-self: start;\n  padding-block-start: calc(var(--spacing) / 2);\n  translate: 0 25%;\n}\n\n.message textarea {\n  font-weight: 500;\n  padding-block: var(--spacing);\n  overflow: auto;\n}\n\ninput:focus {\n  outline: none;\n}\n\ntextarea {\n  resize: none;\n}\n\nbutton[type=submit].button {\n  padding-block: 1.2ch;\n  font-size: 1.4rem;\n  color: hsl(0, 0%, 98%);\n  background-color: hsl(156, 6%, 33%);\n  transition: 0.5s;\n}\nbutton[type=submit].button:is(:hover, :focus-within) {\n  background-color: hsl(32, 39%, 76%);\n  color: hsl(156, 6%, 33%);\n}\n\n@media (min-width: 1020px) {\n  .nav-bar,\n  .nav-bar ul {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr;\n  }\n}\n\n.nav-bar {\n  display: grid;\n  align-items: center;\n  text-align: center;\n  box-shadow: 0 4px 4px -2px hsl(156, 6%, 33%);\n  font-weight: 700;\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  transition: background-color 0.5s, translate 0.5s;\n  color: hsl(156, 6%, 33%);\n  background-color: hsl(0, 0%, 98%);\n}\n@media (max-width: 1020px) {\n  .nav-bar {\n    grid-template-rows: 1fr auto;\n  }\n}\n@media (max-width: 1020px) and (orientation: landscape) {\n  .nav-bar {\n    height: fit-content;\n  }\n}\n@media (min-width: 1020px) {\n  .nav-bar {\n    --middle-column: 3fr;\n    grid-template-columns: 1fr var(--middle-column) 1fr;\n    height: auto;\n    grid-template-rows: auto;\n  }\n}\n@media (min-width: 1020px) and (min-width: 1800px) {\n  .nav-bar {\n    --middle-column: 2fr;\n  }\n}\n@media (min-width: 1020px) {\n  .nav-bar {\n    position: sticky;\n  }\n}\n@media (min-width: 1020px) {\n  .nav-bar.translated {\n    translate: -100%;\n  }\n}\n.nav-bar :is(.logo, a, .contact, .links) {\n  padding-inline: 0;\n  padding-block: 1.5rem;\n  transition: 0.5s;\n}\n.nav-bar :is(.logo, .contact) {\n  padding-inline: 1.5rem;\n}\n.nav-bar:not(.toggled) :is(.logo, a, .contact, .links) {\n  padding-block: 0.8rem;\n}\n.nav-bar .contact {\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  align-self: end;\n}\n@media (min-width: 1020px) {\n  .nav-bar .contact {\n    display: grid;\n    align-self: start;\n    text-align: right;\n  }\n}\n.nav-bar nav {\n  display: grid;\n  align-items: center;\n}\n@media (max-width: 1020px) {\n  .nav-bar nav {\n    margin-block-start: 2rem;\n  }\n}\n.nav-bar .logo {\n  transition: 0.5s;\n  filter: invert(1) grayscale(100%);\n  cursor: pointer;\n}\n@media (max-width: 1020px) {\n  .nav-bar .logo {\n    display: none;\n  }\n}\n@media (max-width: 1020px) and (orientation: landscape) {\n  .nav-bar .links {\n    margin-block-start: 6rem;\n  }\n}\n.nav-bar .links ul {\n  gap: 2rem;\n  display: grid;\n  align-items: center;\n}\n@media (max-width: 1020px) and (orientation: landscape) {\n  .nav-bar .links ul {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 1020px) and (orientation: landscape) {\n  .nav-bar .links ul {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n}\n@media (max-width: 1280px) {\n  .nav-bar .links ul {\n    font-size: 1rem;\n  }\n}\n@media (min-width: 1020px) {\n  .nav-bar .links ul {\n    gap: 0;\n  }\n}\n.nav-bar .links a:is(:hover, :focus-within) {\n  outline: none;\n  text-decoration: underline;\n}\n\n.toggled {\n  background-color: hsl(0, 0%, 13%);\n  color: hsl(0, 0%, 98%);\n}\n.toggled .logo {\n  filter: invert(0);\n}\n\n.nav-bar.translated {\n  translate: 0% -100%;\n}\n@media (min-width: 1020px) {\n  .nav-bar.translated {\n    translate: 0;\n  }\n}\n\nfooter:not(.author) {\n  display: grid;\n  gap: min(2rem, 2vh);\n  grid-template-rows: 3fr 1fr;\n  margin-block-start: 5vh;\n  padding-block-start: 5vh;\n  background-color: hsl(0, 0%, 13%);\n}\n@media (min-width: 1020px) {\n  footer:not(.author) {\n    margin-block-start: 10vh;\n    padding-block-start: 10vh;\n  }\n}\nfooter:not(.author) .links,\nfooter:not(.author) .wrapper {\n  margin-inline: auto;\n  max-width: 95vw;\n}\n@media (min-width: 1020px) {\n  footer:not(.author) .links,\n  footer:not(.author) .wrapper {\n    max-width: min(70vw, 1200px);\n  }\n}\nfooter:not(.author) .links {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-items: baseline;\n}\n@media (min-width: 600px) {\n  footer:not(.author) .links {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\nfooter:not(.author) .links > * {\n  margin-block-end: 1rem;\n}\nfooter:not(.author) .links .logo {\n  grid-column: 1/-1;\n  justify-self: center;\n}\n@media (min-width: 1020px) {\n  footer:not(.author) .links .logo {\n    grid-column: 1;\n    justify-self: start;\n  }\n}\nfooter:not(.author) .links .heading {\n  font-weight: 700;\n  display: block;\n  margin-block-end: min(2vh, 2rem);\n  font-size: 1.4rem;\n  color: hsl(0, 0%, 98%);\n}\n@media (max-width: 1020px) {\n  footer:not(.author) .links .contact {\n    grid-column: span 2;\n    justify-self: center;\n    text-align: center;\n  }\n}\nfooter:not(.author) links a {\n  transition: color 0.5s;\n}\nfooter:not(.author) .links a:is(:hover, :focus-within) {\n  color: hsl(32, 39%, 76%);\n}\nfooter:not(.author) .links img {\n  translate: 0 -25%;\n}\nfooter:not(.author) .copyright {\n  display: flex;\n  background-color: black;\n}\nfooter:not(.author) .copyright .wrapper {\n  display: flex;\n  width: min(1200px, 70vw);\n  place-self: center;\n  align-items: center;\n}\n@media (max-width: 1020px) {\n  footer:not(.author) .copyright .wrapper {\n    flex-direction: column;\n    gap: min(2vh, 2rem);\n    justify-content: center;\n    text-align: center;\n  }\n}\nfooter:not(.author) .copyright .media {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  gap: 1rem;\n  margin-inline: auto;\n}\n@media (min-width: 800px) {\n  footer:not(.author) .copyright .media {\n    margin-inline-start: auto;\n  }\n}\n@media (min-width: 1020px) {\n  footer:not(.author) .copyright .media {\n    margin-inline-end: 0;\n  }\n}\nfooter:not(.author) .media a {\n  width: min(6vw, 2rem);\n  aspect-ratio: 1;\n}\nfooter:not(.author) .media .facebook {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\nfooter:not(.author) .media .tweeter {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\nfooter:not(.author) .media .instagram {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\nfooter:not(.author) .media .linkedin {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n}\n\n.partners {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  width: 100%;\n  justify-items: center;\n  row-gap: 0.5rem;\n  margin-block-end: -5vh;\n}\n@media (min-width: 500px) {\n  .partners {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 1500px) {\n  .partners {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr;\n    justify-items: center;\n    background-color: hsl(0, 0%, 98%);\n  }\n}\n\n.media {\n  --facebook-color: hsl(220, 46%, 48%);\n  --instagram-color: hsl(326, 57%, 48%);\n  --tweeter-color: hsl(203, 89%, 53%);\n}\n.media a {\n  transition: filter 0.5s;\n}\n.media a:is(:hover, :focus-within) {\n  filter: drop-shadow(-1px -1px 0.5px var(--media-color, hsl(156, 6%, 33%)));\n}\n.media a.facebook {\n  --media-color: var(--facebook-color);\n}\n.media a.tweeter {\n  --media-color: var(--tweeter-color);\n}\n.media a.instagram {\n  --media-color: var(--instagram-color);\n}\n\n.nav-bar.translated ~ .mobile-navigation {\n  box-shadow: 0 4px 4px -2px hsl(156, 6%, 33%);\n}\n\n.mobile-navigation {\n  display: flex;\n  align-items: center;\n  width: 100vw;\n  position: sticky;\n  top: 0;\n  background-color: hsl(0, 0%, 98%);\n  z-index: 2;\n  transition: 0.5s;\n}\n@media (min-width: 1020px) {\n  .mobile-navigation {\n    display: none;\n  }\n}\n.mobile-navigation .navigation-toggler,\n.mobile-navigation .logo {\n  padding-inline: 1rem;\n}\n.mobile-navigation .navigation-toggler {\n  margin-inline-start: auto;\n  margin-inline-end: 1rem;\n  padding: 0;\n  cursor: pointer;\n  filter: invert(0.5);\n  transition: outline 0.5s;\n}\n.mobile-navigation .navigation-toggler::before {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n  display: block;\n  width: 3ch;\n  height: 3ch;\n}\n.mobile-navigation .logo {\n  transition: 0.5s;\n  padding-block: 1rem;\n  cursor: pointer;\n}\n\n.nav-bar:not(.toggled) ~ .mobile-navigation .logo {\n  filter: invert(1);\n  padding-block: 0.5rem;\n}\n\n.nav-bar.toggled ~ .mobile-navigation {\n  background-color: hsl(0, 0%, 13%);\n  filter: invert(0);\n}\n\n.nav-bar:not(.translated) ~ .mobile-navigation .navigation-toggler {\n  outline: 1px solid hsl(0, 0%, 98%);\n  outline-offset: 3px;\n}\n\n.custom-select {\n  display: grid;\n  position: relative;\n  font-weight: 700;\n  --single-line: 4ch;\n  line-height: var(--single-line);\n  --line-number: 2;\n  height: calc(var(--line-number) * var(--single-line));\n  text-indent: 2ch;\n  transition: height 0.5s;\n}\n.custom-select::after {\n  position: absolute;\n  width: 2ch;\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_5___});\n  right: 2ch;\n}\n.custom-select:not(:focus-within) {\n  height: var(--single-line);\n  overflow: hidden;\n}\n.custom-select .custom-option {\n  position: relative;\n}\n.custom-select .custom-option:is(:hover, :focus) {\n  background-color: hsl(156, 6%, 33%);\n  color: hsl(0, 0%, 98%);\n}\n.custom-select .custom-option.checked {\n  order: -1;\n}\n.custom-select input {\n  position: absolute;\n  inset: 0;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.comment {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n@media (min-width: 600px) {\n  .comment {\n    display: grid;\n    grid-template-columns: auto 4fr;\n    gap: 2ch;\n    padding: 2ch;\n    text-align: start;\n  }\n}\n.comment .title {\n  font-weight: 700;\n  display: block;\n}\n@media (max-width: 600px) {\n  .comment .title {\n    margin-block-start: 1ch;\n  }\n}\n.comment:last-of-type hr {\n  display: none;\n}\n.comment img {\n  place-self: start;\n  width: 100%;\n  max-width: 120px;\n  aspect-ratio: 1;\n  object-fit: cover;\n  margin-inline: auto;\n  border-radius: 50%;\n}\n.comment hr {\n  grid-column: 1/-1;\n}\n.comment .reply {\n  font-weight: 700;\n  color: hsl(32, 39%, 76%);\n}\n\n.title {\n  font-weight: 500;\n  font-size: var(--size, 2ch);\n}\n\n.wrapper {\n  display: grid;\n  margin-inline: auto;\n  max-width: 95vw;\n  gap: 2rem;\n}\n@media (min-width: 1020px) {\n  .wrapper {\n    max-width: min(70vw, 1200px);\n  }\n}\n\n.section-heading {\n  display: grid;\n  justify-content: center;\n  text-align: center;\n}\n\n.navigation-indicator,\n.navigation-indicator li {\n  display: flex;\n}\n\n.navigation-indicator {\n  align-items: center;\n  margin-inline: auto;\n}\n\n.navigation-indicator a {\n  display: block;\n}\n\n.navigation-indicator li:not(.last)::after {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_6___});\n  margin-inline: 2ch;\n}\n\n.navigation-indicator .last {\n  font-weight: 600;\n  cursor: pointer;\n  color: hsl(32, 39%, 76%);\n}\n\n.work {\n  display: grid;\n  position: relative;\n  gap: min(2rem, 2vh);\n  background-color: hsl(0, 0%, 98%);\n}\n\n.work .open-work {\n  justify-self: end;\n}\n@media (min-width: 1020px) {\n  .work .open-work {\n    justify-self: start;\n  }\n}\n\n.open-work::before {\n  transition: filter 0.5s;\n}\n\n.open-work:is(:hover, :focus-within)::before {\n  filter: invert(1);\n}\n\n.work .open-work::before {\n  display: grid;\n  font-weight: 700;\n  place-items: center;\n  width: 4ch;\n  aspect-ratio: 1;\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_7___});\n  background-color: hsl(156, 6%, 33%);\n  border-radius: 50%;\n}\n\n.work * {\n  text-align: center;\n}\n@media (min-width: 1020px) {\n  .work * {\n    text-align: left;\n  }\n}\n\n.work .description {\n  justify-self: center;\n}\n@media (min-width: 1020px) {\n  .work .description {\n    justify-self: start;\n  }\n}\n\n.work h3 {\n  font-size: 1.3rem;\n  color: hsl(156, 6%, 33%);\n}\n\n.work .details {\n  display: grid;\n  gap: min(1.5rem, 3vh);\n}\n\n.work summary {\n  pointer-events: none;\n  color: hsl(228, 5%, 63%);\n}\n\n.work summary::marker {\n  content: \"\";\n}\n\n.work p {\n  width: min(40ch, 100%);\n}\n\n.work .info {\n  font-weight: 700;\n  color: hsl(180, 2%, 33%);\n}\n\n.blog {\n  background-color: white;\n}\n.blog .wrapper,\n.blog .section-heading {\n  display: grid;\n}\n.blog .wrapper {\n  margin-inline: auto;\n  max-width: 95vw;\n  gap: min(2rem, 2vh);\n}\n@media (min-width: 1020px) {\n  .blog .wrapper {\n    max-width: min(70vw, 1200px);\n  }\n}\n.blog .section-heading {\n  gap: min(2rem, 2vh);\n  justify-items: center;\n  text-align: center;\n  margin-block-end: min(2rem, 2vh);\n}\n.blog .news,\n.blog .article {\n  display: grid;\n}\n@media (min-width: 1020px) {\n  .blog .article {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr;\n  }\n}\n.blog .news {\n  gap: 1rem;\n}\n@media (min-width: 600px) {\n  .blog .news {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr;\n  }\n}\n.blog .article {\n  row-gap: 1rem;\n}\n.blog .article .text {\n  display: grid;\n  gap: min(2rem, 2vh);\n  padding: 0.5rem;\n  background-color: hsl(0, 0%, 98%);\n}\n.blog .article .heading {\n  font-weight: 900;\n  font-size: 1.235rem;\n  line-height: 2rem;\n}\n.blog .article img {\n  width: 100%;\n  height: 100%;\n}\n\nsection.call-to-action {\n  position: relative;\n  padding: 5vh;\n}\n@media (max-width: 360px) {\n  section.call-to-action {\n    padding-inline: 0;\n  }\n}\nsection.call-to-action .overlap {\n  filter: grayscale(1) invert(20%);\n}\nsection.call-to-action .wrapper {\n  display: grid;\n  margin-inline: auto;\n  max-width: 95vw;\n}\n@media (min-width: 1020px) {\n  section.call-to-action .wrapper {\n    max-width: min(70vw, 1200px);\n  }\n}\n@media (min-width: 1020px) {\n  section.call-to-action .wrapper {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\nsection.call-to-action .video-section {\n  display: grid;\n  gap: 2rem;\n  grid-column: 2;\n}\n@media (max-width: 360px) {\n  section.call-to-action .video-section > * {\n    margin-inline-start: -1ch;\n  }\n}\nsection.call-to-action .video-section .hero,\nsection.call-to-action .video-button span {\n  color: white;\n}\nsection.call-to-action .video-section p {\n  color: hsl(0, 0%, 98%);\n}\nsection.call-to-action .video-button {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  font-weight: 600;\n  gap: 1rem;\n  width: fit-content;\n  grid-auto-columns: auto 1fr;\n  align-items: center;\n  color: hsl(0, 0%, 98%);\n}\nsection.call-to-action .play-button {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  gap: 1rem;\n  align-items: center;\n  transition: color, filter 0.5s;\n}\nsection.call-to-action .play-button:is(:hover, :focus-within) {\n  filter: drop-shadow(0 0 2px hsl(156, 6%, 33%));\n}\nsection.call-to-action .play-button::before {\n  content: \"\";\n  display: block;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});\n  width: 109px;\n  aspect-ratio: 1;\n}\n\n.consultancy-cases {\n  overflow-x: hidden;\n  padding: 0;\n}\n.consultancy-cases .wrapper,\n.consultancy-cases .work {\n  padding: 2rem;\n}\n.consultancy-cases .wrapper {\n  margin-inline: auto;\n  max-width: 95vw;\n  display: grid;\n  gap: 2rem;\n}\n@media (min-width: 1020px) {\n  .consultancy-cases .wrapper {\n    max-width: min(70vw, 1200px);\n  }\n}\n@media (min-width: 1020px) {\n  .consultancy-cases .wrapper {\n    width: min(70vw, 1200px);\n  }\n}\n.consultancy-cases nav ul {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: center;\n  justify-content: center;\n  color: hsl(228, 5%, 63%);\n}\n@media (min-width: 1020px) {\n  .consultancy-cases nav ul {\n    gap: 3rem;\n  }\n}\n.consultancy-cases nav .button {\n  transition: color 0.5s;\n}\n@media (min-width: 1020px) {\n  .consultancy-cases nav .view-all {\n    margin-inline-start: auto;\n  }\n}\n.consultancy-cases nav .view-all {\n  display: grid;\n  font-weight: 700;\n}\n.consultancy-cases nav .button:not(:hover, :focus-within) {\n  background-color: inherit;\n}\n.consultancy-cases nav .button.view-all:not(:hover, :focus-within) {\n  background-color: hsl(32, 39%, 76%);\n}\n.consultancy-cases nav .button:not(.view-all) {\n  padding: 0;\n}\n.consultancy-cases nav .button:not(.view-all) {\n  padding: 0;\n  background-color: unset;\n}\n.consultancy-cases .works {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(40ch, 1fr));\n  width: 100vw;\n  background-color: hsl(0, 0%, 77%);\n}\n@media (min-width: 1020px) {\n  .consultancy-cases .works {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1800px) {\n  .consultancy-cases .works {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n.consultancy-cases .work-section:not(.reversed) .work::before {\n  position: absolute;\n  align-self: center;\n  clip-path: polygon(100% 0, 0 50%, 100% 100%);\n  width: 2vw;\n  aspect-ratio: 1;\n  background-color: hsl(0, 0%, 98%);\n  content: \"\";\n  left: 0;\n  translate: -100%;\n}\n@media (max-width: 1020px) {\n  .consultancy-cases .work-section:not(.reversed) .work::before {\n    rotate: 90deg;\n    place-self: start center;\n    width: min(4vw, 2rem);\n  }\n}\n.consultancy-cases .work-section {\n  display: grid;\n  grid-column: span 2;\n}\n@media (min-width: 1020px) {\n  .consultancy-cases .work-section {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr;\n  }\n}\n.consultancy-cases .work-section > * {\n  max-width: 100vw;\n}\n.consultancy-cases .work-section.reversed .work {\n  order: -1;\n}\n.consultancy-cases .work-section img {\n  height: 100%;\n}\n.consultancy-cases .image-wrapper {\n  display: grid;\n}\n.consultancy-cases .image-wrapper img {\n  width: 100%;\n}\n.consultancy-cases .work-section .image-wrapper {\n  position: relative;\n}\n.consultancy-cases .work-section:is(.reversed) .image-wrapper::before {\n  position: absolute;\n  align-self: center;\n  clip-path: polygon(100% 0, 0 50%, 100% 100%);\n  width: 2vw;\n  aspect-ratio: 1;\n  background-color: hsl(0, 0%, 98%);\n  content: \"\";\n  rotate: 180deg;\n}\n@media (max-width: 1020px) {\n  .consultancy-cases .work-section:is(.reversed) .image-wrapper::before {\n    top: 0%;\n    width: min(4vw, 2rem);\n    rotate: 270deg;\n    place-self: start center;\n  }\n}\n@media (max-width: 1020px) {\n  .consultancy-cases .work-section:not(.reversed) .image-wrapper::before {\n    position: absolute;\n    align-self: center;\n    clip-path: polygon(100% 0, 0 50%, 100% 100%);\n    width: 2vw;\n    aspect-ratio: 1;\n    background-color: hsl(0, 0%, 98%);\n    content: \"\";\n    width: min(4vw, 2rem);\n    top: 100%;\n    rotate: 90deg;\n    place-self: end center;\n    translate: 0 -100%;\n  }\n}\n\n.blog-grid .options {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 1rem;\n}\n@media (min-width: 1020px) {\n  .blog-grid .options {\n    gap: 2rem;\n  }\n}\n.blog-grid .options li {\n  text-align: center;\n}\n.blog-grid .options .option {\n  font-weight: 700;\n  border-radius: 0.25vmax;\n  display: block;\n  padding: 0.4rem 0.8rem;\n  background-color: hsl(32, 39%, 76%);\n  color: hsl(156, 6%, 33%);\n}\n@media (min-width: 800px) {\n  .blog-grid .options .option {\n    padding: 0.8rem 2rem;\n  }\n}\n.blog-grid .option:is(:hover, :focus-within) {\n  background-color: hsl(156, 6%, 33%);\n  color: hsl(32, 39%, 76%);\n}\n.blog-grid .option.selected:not(:hover, :focus-within) {\n  background-color: hsl(156, 6%, 33%);\n  color: hsl(0, 0%, 98%);\n}\n.blog-grid .cases {\n  display: grid;\n  gap: 1rem;\n  padding-block: 2rem;\n}\n@media (min-width: 800px) {\n  .blog-grid .cases {\n    grid-template-columns: repeat(2, 1fr);\n    padding-inline: 2rem;\n  }\n}\n.blog-grid .case .description {\n  display: grid;\n  max-width: 40ch;\n  --size: 2ch;\n  padding: calc(var(--size) / 2);\n}\n.blog-grid .case img {\n  width: 100%;\n  aspect-ratio: 16/9;\n}\n.blog-grid .description .category {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  align-items: center;\n  grid-auto-columns: auto 1fr;\n  gap: calc(var(--size) / 2);\n}\n.blog-grid .description .category::before {\n  display: grid;\n  align-items: center;\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_9___});\n}\n\n.offers {\n  gap: 0;\n  padding: 0;\n}\n.offers .section-heading {\n  margin-block-end: 4rem;\n}\n.offers .case-option {\n  display: grid;\n  gap: 1rem;\n}\n@media (min-width: 800px) {\n  .offers .case-option {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr;\n    gap: 0;\n  }\n}\n.offers .case-option > img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media (min-width: 800px) {\n  .offers .case-option:nth-of-type(odd) .work {\n    order: -1;\n  }\n}\n.offers .case-option .work {\n  padding: 2rem 2rem;\n}\n@media (min-width: 800px) {\n  .offers .case-option .work {\n    padding: 10%;\n  }\n}\n@media (max-width: 800px) {\n  .offers .work :is(.hero, p) {\n    justify-self: center;\n  }\n}\n@media (min-width: 1020px) {\n  .offers .work .shy {\n    margin-block-end: -1rem;\n  }\n}\n\n.overflow-gallery {\n  overflow: hidden;\n}\n.overflow-gallery > *:not(.galery) {\n  margin-inline: auto;\n  max-width: 95vw;\n}\n@media (min-width: 1020px) {\n  .overflow-gallery > *:not(.galery) {\n    max-width: min(70vw, 1200px);\n  }\n}\n.overflow-gallery .hero {\n  text-align: center;\n}\n.overflow-gallery .gallery {\n  margin-inline: auto;\n  display: flex;\n  position: relative;\n  width: 80vw;\n}\n@media (min-width: 800px) {\n  .overflow-gallery .gallery {\n    width: 50vw;\n  }\n}\n.overflow-gallery .gallery .hidden-images {\n  display: none;\n}\n.overflow-gallery .gallery img {\n  width: 100%;\n  aspect-ratio: 2/1;\n  object-fit: cover;\n}\n.overflow-gallery .gallery > *:not(.main) {\n  position: absolute;\n}\n.overflow-gallery .gallery img.left {\n  right: 100%;\n  translate: -3rem;\n}\n.overflow-gallery .gallery img.right {\n  left: 100%;\n  translate: 3rem;\n}\n.overflow-gallery .main {\n  display: grid;\n  position: relative;\n  align-items: center;\n  width: 100%;\n}\n.overflow-gallery .main :is(.previous, .next) {\n  position: absolute;\n  display: grid;\n  --shadow-offset: -2px;\n  place-items: center;\n  width: 2ch;\n  aspect-ratio: 1;\n  translate: calc(var(--direction, 1) * var(--translation, 50%));\n}\n.overflow-gallery :is(.previous, .next)::after {\n  position: absolute;\n  content: \"\";\n  inset: 0;\n  cursor: pointer;\n  background-color: white;\n  border-radius: 50%;\n  filter: drop-shadow(var(--shadow-offset, -2px) 0 2px hsl(156, 6%, 33%));\n  scale: 2;\n  z-index: -1;\n}\n.overflow-gallery :is(.previous, .next) * {\n  cursor: pointer;\n}\n.overflow-gallery :is(.previous, .next) img {\n  width: 60%;\n  aspect-ratio: 1;\n}\n.overflow-gallery .main .previous {\n  --direction: -1;\n  --shadow-offset: 2px;\n  left: 0;\n  justify-self: start;\n  z-index: 1;\n}\n.overflow-gallery .main .next {\n  right: 0;\n  justify-self: end;\n  z-index: 1;\n}\n.overflow-gallery .previous img {\n  scale: -1;\n}\n.overflow-gallery .info-wrapper {\n  display: flex;\n  gap: 1rem;\n  color: hsl(228, 5%, 63%);\n}\n@media (max-width: 500px) {\n  .overflow-gallery .info-wrapper {\n    flex-direction: column;\n    gap: 0;\n  }\n}\n@media (min-width: 360px) {\n  .overflow-gallery .info-wrapper {\n    margin-block-start: -2rem;\n  }\n}\n\n.services-detailed {\n  overflow: hidden;\n}\n.services-detailed > * {\n  margin-block-end: 2rem;\n}\n.services-detailed > *:last-of-type {\n  margin-block: -2rem;\n}\n.services-detailed .service-block {\n  position: relative;\n  background-color: hsl(0, 0%, 77%);\n}\n.services-detailed .service-block::after {\n  position: absolute;\n  content: \"\";\n  inset: 0;\n  width: calc(100vw + 2rem);\n  background-color: inherit;\n  background-image: none;\n  translate: -2rem;\n  z-index: -1;\n}\n.services-detailed .service-grid {\n  display: grid;\n  margin-inline: auto;\n  max-width: 95vw;\n  gap: 2ch;\n  margin-block: 4rem;\n}\n@media (min-width: 1020px) {\n  .services-detailed .service-grid {\n    max-width: min(70vw, 1200px);\n  }\n}\n@media (min-width: 800px) {\n  .services-detailed .service-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1800px) {\n  .services-detailed .service-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.services-detailed .pagginizer {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  gap: 0;\n  padding: 0.5ch;\n}\n.services-detailed .service,\n.services-detailed .service > * {\n  background-color: white;\n}\n.services-detailed .service {\n  padding: min(1vw, 1ch) min(2vw, 2ch);\n}\n.services-detailed .service .title {\n  font-weight: 700;\n  font-size: 1.5rem;\n}\n.services-detailed .call-to-action {\n  display: flex;\n  margin-inline: auto;\n  max-width: 95vw;\n  align-items: center;\n  gap: 2ch;\n  justify-self: center;\n}\n@media (min-width: 1020px) {\n  .services-detailed .call-to-action {\n    max-width: min(70vw, 1200px);\n  }\n}\n@media (max-width: 1020px) {\n  .services-detailed .call-to-action {\n    text-align: center;\n    flex-direction: column;\n    margin-block-end: 2rem;\n  }\n}\n.services-detailed .view-all {\n  align-items: center;\n  font-weight: 700;\n  display: inherit;\n}\n.services-detailed .view-all::after {\n  margin-inline-start: 0.5ch;\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_10___});\n  filter: saturate(3);\n}\n.services-detailed .prices {\n  display: grid;\n  margin-block-start: 2rem;\n  align-items: start;\n  gap: 2ch;\n}\n@media (min-width: 800px) {\n  .services-detailed .prices {\n    gap: 0;\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr;\n  }\n}\n.services-detailed .price {\n  margin-inline: auto;\n  max-width: 95vw;\n}\n@media (min-width: 1020px) {\n  .services-detailed .price {\n    max-width: min(70vw, 1200px);\n  }\n}\n.services-detailed .price-card {\n  display: flex;\n  align-items: center;\n  --offset: 0px;\n  --multiplier: 1;\n  --direction: 1;\n  flex-direction: column;\n  padding: 0.5rem;\n  gap: 1ch;\n  scale: var(--multiplier, 1);\n  text-align: center;\n  box-shadow: var(--offset, 0) 0 20px -10px hsl(156, 6%, 33%), var(--shadow2, 0 0 black), var(--shadow3, 0 0 black);\n}\n@media (min-width: 1800px) {\n  .services-detailed .price-card {\n    padding: 1rem;\n    gap: 2ch;\n  }\n}\n@media (max-width: 600px) {\n  .services-detailed .price-card img {\n    width: 40%;\n  }\n}\n@media (min-width: 800px) {\n  .services-detailed .price-card:not(.main) {\n    --multiplier: 0.9;\n    translate: calc(var(--direction) * 100% * (0.95 - var(--multiplier)));\n  }\n}\n@media (min-width: 800px) {\n  .services-detailed .price-card.left {\n    --offset: -5px;\n  }\n}\n@media (min-width: 800px) {\n  .services-detailed .price-card.right {\n    --offset: 5px;\n    --direction: -1;\n  }\n}\n.services-detailed .price-card.main {\n  --shadow2: -2px 0 10px -2px gray;\n  --shadow3: 2px 0 10px -2px gray;\n}\n.services-detailed .price-card :is(.name, .button, .cost) {\n  font-weight: 700;\n}\n.services-detailed .price-card .cost {\n  margin-block-end: 0.25ch;\n  font-size: 5rem;\n  color: hsl(32, 39%, 76%);\n}\n.services-detailed .cost sup {\n  font-size: 0.5em;\n}\n.services-detailed .price-card .name {\n  font-size: 1.4rem;\n}\n@media (max-width: 1800px) {\n  .services-detailed .price-card .name {\n    margin-block-start: 1rem;\n  }\n}\n.services-detailed .price-card .info {\n  color: hsl(228, 5%, 63%);\n}\n.services-detailed .price-card :is(hr, .button) {\n  width: 100%;\n}\n.services-detailed .price-card .button {\n  background-color: hsl(32, 39%, 76%);\n  padding-block: 1rem;\n}\n.services-detailed .button:not(button):is(:hover, :focus-within) {\n  background-color: hsl(156, 6%, 33%);\n  color: hsl(32, 39%, 76%);\n}\n.services-detailed .partners {\n  margin-inline: auto;\n  max-width: 95vw;\n  gap: 1rem;\n  --multiplier: -0.5;\n  margin-block-end: calc(2rem * var(--multiplier));\n  background-color: inherit;\n}\n@media (min-width: 1020px) {\n  .services-detailed .partners {\n    max-width: min(70vw, 1200px);\n  }\n}\n@media (min-width: 600px) {\n  .services-detailed .partners {\n    --muliplier: -1;\n  }\n}\n\n.service.emphasize {\n  box-shadow: 0 4px 4px -2px hsl(156, 6%, 33%);\n  filter: drop-shadow(1px 1px 10px hsl(156, 6%, 33%));\n}\n.service.emphasize .title {\n  color: hsl(32, 39%, 76%);\n}\n\n.request-callback {\n  position: relative;\n}\n.request-callback::after {\n  position: absolute;\n  content: \"\";\n  inset: 0;\n  width: calc(100vw + 2rem);\n  background-color: inherit;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___});\n  translate: -2rem;\n  z-index: -2;\n  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 90%);\n}\n.request-callback .hero,\n.request-callback p {\n  max-width: 90%;\n  justify-self: center;\n}\n@media (min-width: 800px) {\n  .request-callback .hero,\n  .request-callback p {\n    max-width: 70%;\n  }\n}\n.request-callback .callback-wrapper {\n  display: grid;\n  position: relative;\n  margin-inline: auto;\n  max-width: 95vw;\n  box-shadow: 0 4px 4px -2px hsl(156, 6%, 33%);\n  gap: 2rem;\n  margin-block-start: 30vh;\n  padding-block: 2rem;\n  background-color: white;\n}\n@media (min-width: 1020px) {\n  .request-callback .callback-wrapper {\n    max-width: min(70vw, 1200px);\n  }\n}\n@media (min-width: 800px) {\n  .request-callback .callback-wrapper {\n    padding-inline: 2rem;\n  }\n}\n.request-callback .callback-wrapper p {\n  text-align: center;\n}\n.request-callback .callback-wrapper::after {\n  position: absolute;\n  content: \"\";\n  inset: 0;\n  width: calc(100vw + 2rem);\n  background-color: inherit;\n  background-image: none;\n  translate: -2rem;\n  z-index: -1;\n}\n@media (min-width: 800px) {\n  .request-callback .callback-wrapper::after {\n    display: none;\n  }\n}\n.request-callback form {\n  display: grid;\n  align-items: start;\n}\n@media (min-width: 800px) {\n  .request-callback form {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.request-callback button.button {\n  grid-column: 1/-1;\n  justify-self: center;\n}\n\n.home {\n  position: relative;\n  z-index: 0;\n}\n.home .blank-section {\n  margin-top: 30vh;\n}\n.home:not(.redirected) .overlap {\n  clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);\n  filter: invert(0.2);\n}\n.home .hero-section {\n  display: grid;\n  margin-inline: auto;\n  text-align: center;\n  gap: 2rem;\n  width: fit-content;\n  margin-block-start: 11.5rem;\n  color: hsl(0, 0%, 98%);\n  text-align: center;\n}\n.home .hero-section p {\n  max-width: 70%;\n  justify-self: center;\n}\n.home .hero-section .button {\n  justify-self: center;\n}\n.home .slogan {\n  color: hsl(0, 0%, 98%);\n  justify-self: center;\n}\n\nsection.testimonial {\n  position: relative;\n  background-color: hsl(0, 0%, 98%);\n}\nsection.testimonial .overlap {\n  gap: 1rem;\n  display: grid;\n  grid-auto-flow: column;\n}\n@media (max-width: 1020px) {\n  section.testimonial .overlap {\n    grid-auto-columns: 40vw;\n    overflow-x: scroll;\n  }\n}\n@media (min-width: 1020px) {\n  section.testimonial .overlap {\n    position: absolute;\n    display: grid;\n    gap: 0;\n    inset: 0;\n    grid-template-rows: repeat(12, 1fr);\n    grid-template-columns: repeat(12, 1fr);\n  }\n}\nsection.testimonial .section-heading,\nsection.testimonial .center-opinion {\n  justify-self: center;\n}\nsection.testimonial .section-heading,\nsection.testimonial blockquote {\n  text-align: center;\n}\nsection.testimonial .opinions {\n  display: grid;\n}\n@media (min-width: 1020px) {\n  section.testimonial .opinions {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\nsection.testimonial .left-opinion,\nsection.testimonial .center-opinion {\n  display: grid;\n  gap: min(2rem, 2vh);\n  justify-items: center;\n  text-align: center;\n}\nsection.testimonial :is(.left-opinion, .center-opinion) .author {\n  display: grid;\n}\nsection.testimonial :is(.center-opinion, .left-opinion) img {\n  width: min(160px, 30vw);\n  aspect-ratio: 1;\n  border-radius: 50%;\n}\nsection.testimonial :is(.center-opinion, .left-opinion) .author {\n  display: grid;\n}\nsection.testimonial .left-opinion .wrapper {\n  position: relative;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 2rem;\n  background-color: white;\n}\nsection.testimonial .left-opinion .wrapper::after {\n  position: absolute;\n  content: \"\";\n  top: 100%;\n  left: 50%;\n  translate: -50%;\n  width: 2vw;\n  aspect-ratio: 1;\n  background-color: white;\n  clip-path: polygon(100% 0, 0 0, 50% 48%);\n}\nsection.testimonial .left-opinion blockquote {\n  max-width: 30ch;\n}\nsection.testimonial .left-opinion blockquote::before {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_12___});\n}\nsection.testimonial .left-opinion .author {\n  margin-block-start: 2rem;\n}\nsection.testimonial .center-opinion {\n  position: relative;\n  order: -1;\n}\n@media (min-width: 1020px) {\n  section.testimonial .center-opinion {\n    order: 0;\n  }\n}\nsection.testimonial .center-opinion blockquote {\n  font-weight: 600;\n  max-width: 45ch;\n  font-style: oblique;\n}\nsection.testimonial .center-opinion blockquote::before {\n  position: absolute;\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_13___});\n  place-self: center;\n  translate: -50% -25%;\n  z-index: -1;\n}\nsection.testimonial .center-opinion .author::before {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_14___});\n}\nsection.testimonial .author .name {\n  font-weight: 700;\n}\nsection.testimonial .author .info {\n  color: hsl(228, 5%, 63%);\n}\n\n@media (max-width: 1020px) {\n  .overlap img {\n    width: 100%;\n    height: 100%;\n  }\n}\n@media (min-width: 1020px) {\n  .overlap img {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n  }\n  .overlap .image1 {\n    grid-column: 4;\n    grid-row: 1/3;\n    scale: 0.7;\n  }\n  .overlap .image2 {\n    grid-column: 10;\n    grid-row: 4/6;\n  }\n  .overlap .image3 {\n    grid-column: 12;\n    grid-row: 7/9;\n    scale: 0.85;\n  }\n  .overlap .image4 {\n    grid-column: 9;\n    grid-row: 8/10;\n    scale: 0.75;\n  }\n  .overlap .image5 {\n    grid-column: 5;\n    grid-row: 10/12;\n    scale: 0.8;\n  }\n}\nsection.opinions .opinion-wrapper {\n  display: grid;\n  margin-inline: auto;\n  max-width: 95vw;\n}\n@media (min-width: 1020px) {\n  section.opinions .opinion-wrapper {\n    max-width: min(70vw, 1200px);\n  }\n}\nsection.opinions .view-all {\n  justify-self: center;\n  background-color: hsl(32, 39%, 76%);\n  cursor: pointer;\n}\nsection.opinions .view-all:is(:hover, :focus-within) {\n  color: hsl(32, 39%, 76%);\n  background-color: hsl(156, 6%, 33%);\n}\nsection.opinions .comments {\n  display: grid;\n  gap: 2rem;\n  order: -1;\n}\n@media (min-width: 600px) {\n  section.opinions .comments {\n    gap: 0;\n  }\n}\n@media (max-width: 500px) {\n  section.opinions .comments.collapsed hr:first-of-type {\n    margin-block-end: 1ch;\n  }\n}\nsection.opinions .comments.collapsed .comment:not(:first-of-type) {\n  display: none;\n}\n@media (min-width: 600px) {\n  section.opinions .comment:not(:first-of-type) {\n    margin-block-start: -0.5rem;\n  }\n}\n@media (max-width: 500px) {\n  section.opinions .comment .name {\n    margin-block: 1ch;\n  }\n}\nsection.opinions .comment .location {\n  font-weight: 700;\n  color: hsl(32, 39%, 76%);\n}\nsection.opinions .comment p {\n  --pseudo-size: 2rem;\n  margin-block-start: calc(var(--pseudo-size, 2rem) / 2);\n}\nsection.opinions .comment p::before,\nsection.opinions .comment p::after {\n  font-size: var(--pseudo-size, 2rem);\n}\nsection.opinions .comment p::before {\n  content: open-quote;\n  color: hsl(228, 5%, 63%);\n}\nsection.opinions .comment p::after {\n  content: close-quote;\n  color: hsl(32, 39%, 76%);\n}\n\n.faq {\n  --transition: 0.35s;\n  margin-inline: auto;\n  max-width: 95vw;\n  margin-inline: auto;\n  gap: 2ch;\n  width: 100%;\n}\n@media (min-width: 1020px) {\n  .faq {\n    max-width: min(70vw, 1200px);\n  }\n}\n.faq .hero {\n  text-align: center;\n  margin-inline: auto;\n}\n.faq .question {\n  border-radius: 0.25vmax;\n  padding: 0.5rem 2rem;\n  background-color: hsl(32, 39%, 76%);\n  color: hsl(156, 6%, 33%);\n  transition: var(--transition) ease;\n  overflow: hidden;\n}\n.faq .question summary {\n  position: relative;\n  font-weight: 400;\n  pointer-events: all;\n  cursor: pointer;\n  transition: var(--transition);\n}\n.faq .question summary:is(:hover, :focus-within) {\n  filter: invert(0.2);\n  outline: none;\n  border: none;\n}\n.faq .question summary img {\n  position: absolute;\n  width: 1ch;\n  aspect-ratio: 1;\n  top: 50%;\n  right: -2ch;\n  translate: 0 -50%;\n  transition: var(--transition);\n}\n@media (min-width: 1020px) {\n  .faq .question summary img {\n    right: 0;\n    top: 0;\n    translate: 0 50%;\n  }\n}\n.faq .question[open] summary img {\n  rotate: 90deg;\n}\n.faq .question p {\n  font-weight: 700;\n  margin-block-start: 1ch;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  transition: calc(var(--transition) * 0.7);\n}\n.faq .question p.hidden {\n  opacity: 0;\n}\n\nsection.why-us {\n  display: grid;\n  position: relative;\n}\n@media (max-width: 500px) {\n  section.why-us {\n    padding: 0;\n  }\n}\n@media (max-width: 500px) {\n  section.why-us > * {\n    padding: 1rem;\n  }\n}\nsection.why-us::before {\n  position: absolute;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  place-self: center;\n  z-index: -1;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___});\n  clip-path: polygon(0 0, 100% 0, 100% 84.5%, 0 84.5%);\n}\nsection.why-us::after {\n  position: absolute;\n  justify-self: center;\n  content: \"\";\n  width: 44%;\n  height: 50%;\n  place-self: center;\n}\n@media (min-width: 1020px) {\n  section.why-us::after {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___});\n    background-size: contain;\n    background-repeat: no-repeat;\n    translate: 0 -15%;\n  }\n}\nsection.why-us .section-heading,\nsection.why-us .hero,\nsection.why-us .description {\n  color: hsl(0, 0%, 98%);\n}\nsection.why-us .section-heading {\n  display: grid;\n  gap: min(2rem, 2vh);\n  margin-inline: auto;\n  max-width: 95vw;\n  margin-block: min(5rem, 5vh) calc(min(5rem, 5vh) * -1);\n  text-align: center;\n  justify-items: center;\n}\n@media (min-width: 1020px) {\n  section.why-us .section-heading {\n    max-width: min(70vw, 1200px);\n  }\n}\nsection.why-us .section-heading p {\n  margin-block: min(2rem, 2vh);\n}\nsection.why-us .reasons,\nsection.why-us .reviews {\n  gap: 2rem;\n  z-index: 1;\n}\nsection.why-us .reasons,\nsection.why-us .reason {\n  justify-items: center;\n}\nsection.why-us .reasons {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  margin-inline: auto;\n  text-align: center;\n}\n@media (max-width: 1020px) {\n  section.why-us .reasons {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\nsection.why-us .reason {\n  display: grid;\n  gap: min(2rem, 2vh);\n}\nsection.why-us .reason .counter {\n  font-weight: 900;\n  color: hsl(32, 39%, 76%);\n  font-size: 1.9rem;\n}\nsection.why-us .reason .description {\n  font-weight: 600;\n  max-width: 20ch;\n}\nsection.why-us .reviews {\n  margin-inline: auto;\n  max-width: 95vw;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-inline: auto;\n}\n@media (min-width: 1020px) {\n  section.why-us .reviews {\n    max-width: min(70vw, 1200px);\n  }\n}\n@media (min-width: 1020px) {\n  section.why-us .reviews {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr;\n  }\n}\nsection.why-us .review {\n  box-shadow: 0 4px 4px -2px hsl(156, 6%, 33%);\n  display: grid;\n  background-color: hsl(0, 0%, 98%);\n}\n@media (min-width: 500px) {\n  section.why-us .review {\n    max-width: 40%;\n  }\n}\n@media (min-width: 1020px) {\n  section.why-us .review {\n    max-width: fit-content;\n  }\n}\nsection.why-us .name,\nsection.why-us .opinion,\nsection.why-us .media {\n  padding: 1rem;\n}\nsection.why-us .review .name {\n  font-weight: 600;\n  color: hsl(156, 6%, 33%);\n  padding-block-end: 0;\n}\nsection.why-us .review .opinion {\n  color: hsl(180, 2%, 33%);\n}\nsection.why-us .review .media {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  align-items: center;\n  gap: min(1vw, 1rem);\n  grid-auto-columns: 1.7rem;\n}\nsection.why-us .media a {\n  width: 100%;\n  aspect-ratio: 1;\n}\nsection.why-us .media .facebook {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\nsection.why-us .media .tweeter {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\nsection.why-us .media .instagram {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n\n.callout {\n  position: relative;\n}\n.callout::before {\n  position: absolute;\n  content: \"\";\n  inset: 0;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_17___});\n  z-index: -1;\n}\n.callout .wrapper {\n  display: flex;\n  align-items: center;\n  width: 80vw;\n  margin-inline: auto;\n  gap: 2ch;\n}\n@media (max-width: 600px) {\n  .callout .wrapper {\n    flex-direction: column;\n  }\n}\n@media (min-width: 1020px) {\n  .callout .wrapper {\n    width: 70vw;\n  }\n}\n@media (min-width: 1800px) {\n  .callout .wrapper {\n    width: min(70vw, 1200px);\n  }\n}\n.callout .wrapper .button {\n  font-weight: 700;\n  text-align: center;\n}\n@media (min-width: 600px) {\n  .callout .wrapper .button {\n    margin-inline-start: auto;\n  }\n}\n.callout .button:not(:hover, :focus-within) {\n  color: hsl(156, 6%, 33%);\n  background-color: hsl(32, 39%, 76%);\n}\n.callout .wrapper .question {\n  font-weight: 700;\n  color: hsl(226, 13%, 20%);\n}\n@media (max-width: 600px) {\n  .callout .wrapper .question {\n    text-align: center;\n  }\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  font-size: 16px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  line-height: 3ch;\n  color: hsl(180, 2%, 33%);\n  scroll-behavior: smooth;\n  scroll-padding-top: var(--nav-bar-space, 10vh);\n}\n\na {\n  text-decoration: none;\n  color: currentColor;\n  transition: color 0.5s;\n}\n\na:is(:hover, :focus-within, :active) {\n  color: hsl(32, 39%, 76%);\n}\n\n:is(a, textarea, button, summary):focus-within {\n  outline: 2px solid hsl(32, 39%, 76%);\n}\n\n.read-more:is(:hover, :focus-within)::after {\n  display: inline-block;\n  animation: shake 1s infinite;\n  color: inherit;\n}\n\n.read-more {\n  display: flex;\n  font-weight: 600;\n  width: fit-content;\n  gap: 0.5ch;\n}\n\n.read-more::after {\n  content: \" \" url(${___CSS_LOADER_URL_REPLACEMENT_10___});\n}\n\n.read-more:not(:hover, :focus-within)::after {\n  filter: invert(100%);\n}\n\nul {\n  list-style: none;\n}\n\nhr {\n  height: 100%;\n  border: 1px solid hsl(0, 0%, 90%);\n}\n\nimg {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: cover;\n}\n\nimg.overlap {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  z-index: -1;\n}\n\nhtml,\nbody {\n  width: 100%;\n  min-height: 100vh;\n}\n\nbody {\n  font-size: 1.1rem;\n}\n\narticle,\nsection {\n  display: grid;\n  gap: 5vh;\n}\n\narticle {\n  position: relative;\n}\n\nsection {\n  padding: 2rem;\n  z-index: 1;\n}\n@media (max-width: 600px) {\n  section {\n    padding: 0.8rem;\n  }\n}\n\ndetails {\n  color: hsl(156, 6%, 33%);\n}\n\ndetails summary {\n  font-weight: 700;\n  font-size: 1.4rem;\n  pointer-events: none;\n}\n\ndetails > * {\n  display: block;\n}\n\ndetails summary::marker {\n  content: \"\";\n}\n\n.button {\n  width: fit-content;\n  padding: 0.5rem 2rem;\n  border-radius: 0.25vmax;\n  background-color: hsl(0, 0%, 98%);\n  color: hsl(156, 6%, 33%);\n  transition: 0.5s;\n}\n\n.button:is(:hover, :focus-within) {\n  background-color: hsl(156, 6%, 33%);\n  color: hsl(32, 39%, 76%);\n}\n\nbutton[type=submit] {\n  border: none;\n  cursor: pointer;\n}\n\n.shy {\n  font-weight: 600;\n  text-transform: uppercase;\n  color: hsl(32, 39%, 76%);\n}\n\n.hero {\n  font-size: 1.9rem;\n  max-width: 25ch;\n  line-height: 2.5rem;\n  font-weight: 900;\n  text-transform: capitalize;\n  color: hsl(156, 6%, 33%);\n}\n\n.hero.small {\n  font-size: 1.52rem;\n  line-height: 2ch;\n}\n\ntime {\n  color: hsl(0, 0%, 77%);\n}\n\ntime::before {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_18___}) \" \";\n}\n\ntextarea {\n  font: initial;\n}\n\n.navigation-indicator {\n  margin-block-start: 1rem;\n}\n\n.contents {\n  display: contents;\n}\n\n.custom-checkbox {\n  position: relative;\n  width: 2.5ch;\n  aspect-ratio: 1;\n  border: 1px solid hsl(156, 6%, 33%);\n  border-radius: 0.25vmax;\n  cursor: pointer;\n  z-index: 0;\n  overflow: hidden;\n}\n@media (max-width: 800px) {\n  .custom-checkbox {\n    width: max(4ch, 60px);\n  }\n}\n.custom-checkbox > * {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.custom-checkbox input {\n  visibility: hidden;\n}\n.custom-checkbox .pseudo-checkbox {\n  z-index: 1;\n  transition: background-color 0.25s;\n}\n.custom-checkbox:is(:hover, :focus-within) .pseudo-checkbox,\n.custom-checkbox input:checked ~ .pseudo-checkbox {\n  background-color: hsl(32, 39%, 76%);\n}\n\n@keyframes shake {\n  0% {\n    translate: 25%;\n  }\n  50% {\n    translate: 50%;\n  }\n  100% {\n    translate: 10%;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./home/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

/***/ "./home/markup/blog.html":
/*!*******************************!*\
  !*** ./home/markup/blog.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/news-image.jpg */ \"./home/images/news-image.jpg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<section id=\\\"blog\\\" class=\\\"blog\\\">\\n  <div class=\\\"wrapper\\\">\\n    <div class=\\\"section-heading\\\">\\n      <span class=\\\"shy\\\"> News </span>\\n      <h2 class=\\\"hero\\\">From our blog</h2>\\n    </div>\\n    <div class=\\\"news\\\">\\n      <div class=\\\"article\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\n        <div class=\\\"text\\\">\\n          <span class=\\\"heading\\\">\\n            Mazars lead dealmaker behind Westfield Health's...\\n          </span>\\n          <time datetime=\\\"2020-04-04\\\">April 4, 2020</time>\\n          <p>\\n            Banks sell them to loan mutual funds, or they slice-and-dice them\\n            into structured Collateralized …\\n          </p>\\n          <a href=\\\"#\\\" class=\\\"read-more\\\">Read more</a>\\n        </div>\\n      </div>\\n      <div class=\\\"article\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\n        <div class=\\\"text\\\">\\n          <span class=\\\"heading\\\">\\n            Mazars lead dealmaker behind Westfield Health's...\\n          </span>\\n          <time datetime=\\\"2020-04-04\\\">April 4, 2020</time>\\n          <p>\\n            Banks sell them to loan mutual funds, or they slice-and-dice them\\n            into structured Collateralized …\\n          </p>\\n          <a href=\\\"#\\\" class=\\\"read-more\\\">Read more</a>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./home/markup/blog.html?");

/***/ }),

/***/ "./home/markup/call-to-action.html":
/*!*****************************************!*\
  !*** ./home/markup/call-to-action.html ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/satisfied.avif */ \"./home/images/satisfied.avif\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<section id=\\\"call-to-action\\\" class=\\\"call-to-action\\\">\\n  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" class=\\\"overlap\\\" />\\n  <div class=\\\"wrapper\\\">\\n    <div class=\\\"video-section\\\">\\n      <h2 class=\\\"hero\\\">\\n        Jakie kroki należy podjąć, aby sprzedać mieszkanie, unikając\\n        skomplikowanych procedur?\\n      </h2>\\n      <p>\\n        Sprzedaż mieszkania w Polsce, gdy przebywa się za granicą może być\\n        naprawdę bardzo prosta, o ile skorzysta się z pomocy profesjonalistów.\\n        Sama sprzedaż nie jest niczym skomplikowanym, zaś w dopełnieniu\\n        formalności i przygotowaniu odpowiednich dokumentów jesteśmy w stanie\\n        pomóc, a w wielu wypadkach również i wyręczyć.\\n      </p>\\n      <div class=\\\"video-button\\\">\\n        <a href=\\\"#\\\" class=\\\"play-button\\\">Watch video</a>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./home/markup/call-to-action.html?");

/***/ }),

/***/ "./home/markup/consultancy-cases.html":
/*!********************************************!*\
  !*** ./home/markup/consultancy-cases.html ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/property1.jpeg */ \"./home/images/property1.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/property2.jpeg */ \"./home/images/property2.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/property3.jpeg */ \"./home/images/property3.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/strategies2.jpeg */ \"./home/images/strategies2.jpeg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar code = \"<section id=\\\"consultancy-cases\\\" class=\\\"consultancy-cases\\\">\\n  <div class=\\\"wrapper\\\">\\n    <div class=\\\"section-heading\\\">\\n      <span class=\\\"shy\\\">See what we do</span>\\n      <h2 class=\\\"hero\\\">Concultancy cases</h2>\\n    </div>\\n    <nav id=\\\"concultancy\\\">\\n      <ul>\\n        <li><a class=\\\"button\\\" href=\\\"#\\\">All works</a></li>\\n        <li><a class=\\\"button\\\" href=\\\"#\\\">Consulting</a></li>\\n        <li><a class=\\\"button\\\" href=\\\"#\\\">Financial</a></li>\\n        <li><a class=\\\"button\\\" href=\\\"#\\\">Design</a></li>\\n        <li><a class=\\\"button\\\" href=\\\"#\\\">Construction</a></li>\\n        <li>\\n          <a href=\\\"#\\\" class=\\\"button view-all\\\">View all project</a>\\n        </li>\\n      </ul>\\n    </nav>\\n  </div>\\n  <div class=\\\"works\\\">\\n    <div class=\\\"work-section\\\">\\n      <div class=\\\"image-wrapper\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\n      </div>\\n      <div class=\\\"work\\\">\\n        <h3>Kontakt i podstawowe informacje</h3>\\n        <p class=\\\"description\\\">\\n          Dynamically target high payoff intellectual capital for customized\\n          technologies. Obiectively integrate emerging core competencies\\n          before...\\n        </p>\\n        <div class=\\\"details\\\">\\n          <details open>\\n            <summary>Clients</summary>\\n            <span class=\\\"info\\\">ThemeMu Studio</span>\\n          </details>\\n          <details open>\\n            <summary>Date</summary>\\n            <span class=\\\"info\\\">December 11, 2016</span>\\n          </details>\\n          <details open>\\n            <summary>Services</summary>\\n            <span class=\\\"info\\\">Consulting, financial</span>\\n          </details>\\n          <a href=\\\"#\\\" class=\\\"open-work\\\"></a>\\n        </div>\\n      </div>\\n    </div>\\n    <div class=\\\"work-section\\\">\\n      <div class=\\\"image-wrapper\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"\\\" />\\n      </div>\\n      <div class=\\\"work\\\">\\n        <h3>Wycena</h3>\\n        <p class=\\\"description\\\">\\n          Bezpłatna i niezobowiązujące wycena, po dokonaniu której pojawia się\\n          możliwość wypłacenia właścicielowi nieruchomości zaliczki\\n        </p>\\n        <div class=\\\"details\\\">\\n          <details open>\\n            <summary>Clients</summary>\\n            <span class=\\\"info\\\">ThemeMu Studio</span>\\n          </details>\\n          <details open>\\n            <summary>Date</summary>\\n            <span class=\\\"info\\\">December 11, 2016</span>\\n          </details>\\n          <details open>\\n            <summary>Services</summary>\\n            <span class=\\\"info\\\">Consulting, financial</span>\\n          </details>\\n          <a href=\\\"#\\\" class=\\\"open-work\\\"></a>\\n        </div>\\n      </div>\\n    </div>\\n    <div class=\\\"work-section reversed\\\">\\n      <div class=\\\"image-wrapper\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\" />\\n      </div>\\n      <div class=\\\"work\\\">\\n        <h3>Dokumentacja</h3>\\n        <p class=\\\"description\\\">\\n          Kompletowanie niezbędnej dokumentacji oraz rzeczowa pomoc w\\n          załatwieniu wszelkich formalności – załatwienie większości procedur\\n          bierzemy po prostu na siebie\\n        </p>\\n        <div class=\\\"details\\\">\\n          <details open>\\n            <summary>Clients</summary>\\n            <span class=\\\"info\\\">ThemeMu Studio</span>\\n          </details>\\n          <details open>\\n            <summary>Date</summary>\\n            <span class=\\\"info\\\">December 11, 2016</span>\\n          </details>\\n          <details open>\\n            <summary>Services</summary>\\n            <span class=\\\"info\\\">Consulting, financial</span>\\n          </details>\\n          <a href=\\\"#\\\" class=\\\"open-work\\\"></a>\\n        </div>\\n      </div>\\n    </div>\\n    <div class=\\\"work-section reversed\\\">\\n      <div class=\\\"image-wrapper\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"\\\" />\\n      </div>\\n      <div class=\\\"work\\\">\\n        <h3>Zawarcie umowy</h3>\\n        <p class=\\\"description\\\">\\n          Umowa sprzedaży i natychmiastowa wypłata umówionej należności –\\n          gwarancja bezpieczeństwa prawnego i finansowego\\n        </p>\\n        <div class=\\\"details\\\">\\n          <details open>\\n            <summary>Clients</summary>\\n            <span class=\\\"info\\\">ThemeMu Studio</span>\\n          </details>\\n          <details open>\\n            <summary>Date</summary>\\n            <span class=\\\"info\\\">December 11, 2016</span>\\n          </details>\\n          <details open>\\n            <summary>Services</summary>\\n            <span class=\\\"info\\\">Consulting, financial</span>\\n          </details>\\n          <a href=\\\"#\\\" class=\\\"open-work\\\"></a>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./home/markup/consultancy-cases.html?");

/***/ }),

/***/ "./home/markup/faq.html":
/*!******************************!*\
  !*** ./home/markup/faq.html ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/anchor-pointer.svg */ \"./home/images/anchor-pointer.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<section id=\\\"frequently-asked-questions\\\" class=\\\"faq\\\">\\n  <div class=\\\"section-heading\\\">\\n    <h3 class=\\\"hero\\\">Najczęściej Zadawane Pytania</h3>\\n  </div>\\n  <details class=\\\"question\\\">\\n    <summary>\\n      Czy mogę udzielić pełnomocnictwa komuś w Polsce do sprzedaży mojej\\n      nieruchomości?\\n      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\n    </summary>\\n    <p>\\n      Tak, możesz udzielić pełnomocnictwa notarialnego osobie zaufanej, która\\n      będzie reprezentować Twoje interesy w Polsce. Pamiętaj, aby pełnomocnictwo\\n      było szczegółowo sporządzone i obejmowało wszystkie niezbędne uprawnienia\\n      do przeprowadzenia sprzedaży.\\n    </p>\\n  </details>\\n  <details class=\\\"question\\\">\\n    <summary>\\n      Jakie dokumenty są potrzebne do sprzedaży nieruchomości w Polsce?\\n      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\n    </summary>\\n    <p>\\n      Do sprzedaży nieruchomości potrzebne są: akt własności, zaświadczenie o\\n      braku zaległości w płatnościach, aktualny wyciąg z księgi wieczystej, a w\\n      niektórych przypadkach także świadectwo energetyczne oraz zgoda\\n      współmałżonka.\\n    </p>\\n  </details>\\n  <details class=\\\"question\\\">\\n    <summary>\\n      Czy sprzedaż nieruchomości w Polsce przez osobę mieszkającą za granicą\\n      wiąże się z dodatkowymi podatkami?\\n      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\n    </summary>\\n    <p>\\n      Nie, sprzedaż nieruchomości nie wiąże się z dodatkowymi podatkami ze\\n      względu na miejsce zamieszkania sprzedającego. Jednak warto pamiętać o\\n      obowiązku zapłaty podatku od czynności cywilnoprawnych oraz ewentualnego\\n      podatku dochodowego od zysków kapitałowych, jeśli nieruchomość została\\n      sprzedana przed upływem 5 lat od zakupu.\\n    </p>\\n  </details>\\n  <details class=\\\"question\\\">\\n    <summary>\\n      Czy mogę negocjować cenę nieruchomości zdalnie?<img\\n        src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"\\n        alt=\\\"\\\"\\n      />\\n    </summary>\\n    <p>\\n      Tak, negocjacje cenowe mogą odbywać się zdalnie, np. za pośrednictwem\\n      telefonu, e-maila lub wideokonferencji. Ważne jest, abyś miał dobrego\\n      pośrednika, który będzie skutecznie reprezentował Twoje interesy.\\n    </p>\\n  </details>\\n  <details class=\\\"question\\\">\\n    <summary>\\n      Jak długo trwa proces sprzedaży nieruchomości w Polsce?<img\\n        src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"\\n        alt=\\\"\\\"\\n      />\\n    </summary>\\n    <p>\\n      Proces sprzedaży nieruchomości może trwać od kilku tygodni do kilku\\n      miesięcy, w zależności od wielu czynników, takich jak stan prawny\\n      nieruchomości, jej lokalizacja, cena oraz aktualna sytuacja na rynku\\n      nieruchomości.\\n    </p>\\n  </details>\\n</section>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./home/markup/faq.html?");

/***/ }),

/***/ "./home/markup/footer.html":
/*!*********************************!*\
  !*** ./home/markup/footer.html ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/brand.svg */ \"./home/images/brand.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<footer>\\n  <div class=\\\"links\\\">\\n    <img class=\\\"logo\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" />\\n    <div class=\\\"column\\\">\\n      <span class=\\\"heading\\\">About us</span>\\n      <ul>\\n        <li><a href=\\\"#\\\">About us</a></li>\\n        <li><a href=\\\"#\\\">Testimonials</a></li>\\n        <li><a href=\\\"#\\\">Services</a></li>\\n        <li><a href=\\\"#\\\">Our experts</a></li>\\n        <li><a href=\\\"#\\\">Latest</a></li>\\n        <li><a href=\\\"#\\\">News</a></li>\\n        <li><a href=\\\"#\\\">Contact</a></li>\\n      </ul>\\n    </div>\\n    <div class=\\\"column\\\">\\n      <span class=\\\"heading\\\"> Our services </span>\\n      <ul>\\n        <li><a href=\\\"#\\\">Competition</a></li>\\n        <li><a href=\\\"#\\\">Dispute support</a></li>\\n        <li><a href=\\\"#\\\">Energy and climate</a></li>\\n        <li><a href=\\\"#\\\">IP valuation</a></li>\\n        <li><a href=\\\"#\\\">Life sciences</a></li>\\n        <li><a href=\\\"#\\\">Trade and markets</a></li>\\n      </ul>\\n    </div>\\n    <div class=\\\"column contact\\\">\\n      <span class=\\\"heading\\\"> Contact us </span>\\n      <ul>\\n        <li class=\\\"location\\\"><span>Klara Södra 1, 111 52 Stockholm</span></li>\\n        <li class=\\\"phone\\\">\\n          <span>+4 509 120 6705 </span>\\n          <span>(454) 954 4803</span>\\n        </li>\\n        <li class=\\\"mail\\\">\\n          <a href=\\\"mailto:onatrix@support.com\\\">onatrix@support.com</a>\\n        </li>\\n      </ul>\\n    </div>\\n  </div>\\n  <div class=\\\"copyright\\\">\\n    <div class=\\\"wrapper\\\">\\n      <span class=\\\"text\\\"\\n        >© 2020 Onatrix. All Rights Reserved. Designed by ThemeMu</span\\n      >\\n      <ul class=\\\"media\\\">\\n        <li><a class=\\\"facebook\\\" href=\\\"#\\\"></a></li>\\n        <li><a class=\\\"tweeter\\\" href=\\\"#\\\"></a></li>\\n        <li><a class=\\\"instagram\\\" href=\\\"#\\\"></a></li>\\n        <li><a class=\\\"linkedin\\\" href=\\\"#\\\"></a></li>\\n      </ul>\\n    </div>\\n  </div>\\n</footer>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./home/markup/footer.html?");

/***/ }),

/***/ "./home/markup/home-case-study.html":
/*!******************************************!*\
  !*** ./home/markup/home-case-study.html ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/property1.jpeg */ \"./home/images/property1.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/key1.jpeg */ \"./home/images/key1.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/property2.jpeg */ \"./home/images/property2.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/paperwork.jpeg */ \"./home/images/paperwork.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/property3.jpeg */ \"./home/images/property3.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/property-design1.jpeg */ \"./home/images/property-design1.jpeg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar code = \"<section id=\\\"case-study\\\" class=\\\"blog-grid\\\">\\n  <div class=\\\"section-heading\\\">\\n    <h3 class=\\\"hero\\\">Poradnik</h3>\\n    <ul class=\\\"navigation-indicator\\\">\\n      <li><a href=\\\"#home\\\">Home</a></li>\\n      <li class=\\\"last\\\"><a href=\\\"#case-study\\\">Case study</a></li>\\n    </ul>\\n  </div>\\n  <div class=\\\"wrapper\\\">\\n    <nav>\\n      <ul class=\\\"options\\\">\\n        <li><a class=\\\"option selected\\\" href=\\\"#\\\">All works</a></li>\\n        <li><a class=\\\"option\\\" href=\\\"#\\\">Consulting</a></li>\\n        <li><a class=\\\"option\\\" href=\\\"#\\\">Finantial</a></li>\\n        <li><a class=\\\"option\\\" href=\\\"#\\\">Design</a></li>\\n        <li><a class=\\\"option\\\" href=\\\"#\\\">Construction</a></li>\\n      </ul>\\n    </nav>\\n    <div class=\\\"cases\\\">\\n      <div class=\\\"case\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\n        <div class=\\\"description\\\">\\n          <span class=\\\"title\\\">\\n            Professional Consulting Cases for your Interview Prep\\n          </span>\\n          <span class=\\\"category\\\">Business Services</span>\\n        </div>\\n      </div>\\n      <div class=\\\"case\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"\\\" />\\n        <div class=\\\"description\\\">\\n          <span class=\\\"title\\\">\\n            Professional Consulting Cases for your Interview Prep\\n          </span>\\n          <span class=\\\"category\\\">Business Services</span>\\n        </div>\\n      </div>\\n      <div class=\\\"case\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\" />\\n        <div class=\\\"description\\\">\\n          <span class=\\\"title\\\">\\n            Professional Consulting Cases for your Interview Prep\\n          </span>\\n          <span class=\\\"category\\\">Business Services</span>\\n        </div>\\n      </div>\\n      <div class=\\\"case\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"\\\" />\\n        <div class=\\\"description\\\">\\n          <span class=\\\"title\\\">\\n            Professional Consulting Cases for your Interview Prep\\n          </span>\\n          <span class=\\\"category\\\">Business Services</span>\\n        </div>\\n      </div>\\n      <div class=\\\"case\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"\\\" />\\n        <div class=\\\"description\\\">\\n          <span class=\\\"title\\\">\\n            Professional Consulting Cases for your Interview Prep\\n          </span>\\n          <span class=\\\"category\\\">Business Services</span>\\n        </div>\\n      </div>\\n      <div class=\\\"case\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"\\\" />\\n        <div class=\\\"description\\\">\\n          <span class=\\\"title\\\">\\n            Professional Consulting Cases for your Interview Prep\\n          </span>\\n          <span class=\\\"category\\\">Business Services</span>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./home/markup/home-case-study.html?");

/***/ }),

/***/ "./home/markup/home-consultancy-cases.html":
/*!*************************************************!*\
  !*** ./home/markup/home-consultancy-cases.html ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/property1.jpeg */ \"./home/images/property1.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/strategies5.jpeg */ \"./home/images/strategies5.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/strategies8.jpeg */ \"./home/images/strategies8.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/key1.jpeg */ \"./home/images/key1.jpeg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar code = \"<section id=\\\"home-consultancy-cases\\\" class=\\\"offers\\\">\\n  <div class=\\\"section-heading\\\">\\n    <h3 class=\\\"hero\\\">Case options</h3>\\n    <ul class=\\\"navigation-indicator\\\">\\n      <li><a href=\\\"#home\\\">Home</a></li>\\n      <li class=\\\"last\\\"><a href=\\\"#home-consultancy-cases\\\">Case options</a></li>\\n    </ul>\\n  </div>\\n  <div class=\\\"case-option\\\">\\n    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\n\\n    <div class=\\\"work\\\">\\n      <span class=\\\"shy\\\">Financial advisor</span>\\n      <h4 class=\\\"hero\\\">\\n        Financial Advisor Ericsson's Proactive Supply Chain Risk Management\\n      </h4>\\n      <p class=\\\"description\\\">\\n        Dynamically target high payoff intellectual capital for customized\\n        technologies. Obiectively integrate emerging core competencies before...\\n      </p>\\n      <figure class=\\\"details\\\" role=\\\"group\\\">\\n        <details open>\\n          <summary>Clients</summary>\\n          <span class=\\\"info\\\">ThemeMu Studio</span>\\n        </details>\\n        <details open>\\n          <summary>Date</summary>\\n          <span class=\\\"info\\\">December 11, 2016</span>\\n        </details>\\n        <details open>\\n          <summary>Services</summary>\\n          <span class=\\\"info\\\">Consulting, financial</span>\\n        </details>\\n        <a href=\\\"#\\\" class=\\\"open-work\\\"></a>\\n      </figure>\\n    </div>\\n  </div>\\n  <div class=\\\"case-option\\\">\\n    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"\\\" />\\n\\n    <div class=\\\"work\\\">\\n      <span class=\\\"shy\\\">Financial advisor</span>\\n      <h4 class=\\\"hero\\\">\\n        Financial Advisor Ericsson's Proactive Supply Chain Risk Management\\n      </h4>\\n      <p class=\\\"description\\\">\\n        Dynamically target high payoff intellectual capital for customized\\n        technologies. Obiectively integrate emerging core competencies before...\\n      </p>\\n      <figure class=\\\"details\\\" role=\\\"group\\\">\\n        <details open>\\n          <summary>Clients</summary>\\n          <span class=\\\"info\\\">ThemeMu Studio</span>\\n        </details>\\n        <details open>\\n          <summary>Date</summary>\\n          <span class=\\\"info\\\">December 11, 2016</span>\\n        </details>\\n        <details open>\\n          <summary>Services</summary>\\n          <span class=\\\"info\\\">Consulting, financial</span>\\n        </details>\\n        <a href=\\\"#\\\" class=\\\"open-work\\\"></a>\\n      </figure>\\n    </div>\\n  </div>\\n  <div class=\\\"case-option\\\">\\n    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\" />\\n\\n    <div class=\\\"work\\\">\\n      <span class=\\\"shy\\\">Financial advisor</span>\\n      <h4 class=\\\"hero\\\">\\n        Financial Advisor Ericsson's Proactive Supply Chain Risk Management\\n      </h4>\\n      <p class=\\\"description\\\">\\n        Dynamically target high payoff intellectual capital for customized\\n        technologies. Obiectively integrate emerging core competencies before...\\n      </p>\\n      <figure class=\\\"details\\\" role=\\\"group\\\">\\n        <details open>\\n          <summary>Clients</summary>\\n          <span class=\\\"info\\\">ThemeMu Studio</span>\\n        </details>\\n        <details open>\\n          <summary>Date</summary>\\n          <span class=\\\"info\\\">December 11, 2016</span>\\n        </details>\\n        <details open>\\n          <summary>Services</summary>\\n          <span class=\\\"info\\\">Consulting, financial</span>\\n        </details>\\n        <a href=\\\"#\\\" class=\\\"open-work\\\"></a>\\n      </figure>\\n    </div>\\n  </div>\\n  <div class=\\\"case-option\\\">\\n    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"\\\" />\\n\\n    <div class=\\\"work\\\">\\n      <span class=\\\"shy\\\">Financial advisor</span>\\n      <h4 class=\\\"hero\\\">\\n        Financial Advisor Ericsson's Proactive Supply Chain Risk Management\\n      </h4>\\n      <p class=\\\"description\\\">\\n        Dynamically target high payoff intellectual capital for customized\\n        technologies. Obiectively integrate emerging core competencies before...\\n      </p>\\n      <figure class=\\\"details\\\" role=\\\"group\\\">\\n        <details open>\\n          <summary>Clients</summary>\\n          <span class=\\\"info\\\">ThemeMu Studio</span>\\n        </details>\\n        <details open>\\n          <summary>Date</summary>\\n          <span class=\\\"info\\\">December 11, 2016</span>\\n        </details>\\n        <details open>\\n          <summary>Services</summary>\\n          <span class=\\\"info\\\">Consulting, financial</span>\\n        </details>\\n        <a href=\\\"#\\\" class=\\\"open-work\\\"></a>\\n      </figure>\\n    </div>\\n  </div>\\n</section>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./home/markup/home-consultancy-cases.html?");

/***/ }),

/***/ "./home/markup/home-gallery.html":
/*!***************************************!*\
  !*** ./home/markup/home-gallery.html ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/strategies5.jpeg */ \"./home/images/strategies5.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/key1.jpeg */ \"./home/images/key1.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/paperwork.jpeg */ \"./home/images/paperwork.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/property2.jpeg */ \"./home/images/property2.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/property3.jpeg */ \"./home/images/property3.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/overlap-image-3.svg */ \"./home/images/overlap-image-3.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/overlap-image-2.svg */ \"./home/images/overlap-image-2.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/order-arrow.svg */ \"./home/images/order-arrow.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../images/black.png */ \"./home/images/black.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar code = \"<section id=\\\"home-gallery\\\" class=\\\"overflow-gallery\\\">\\n  <div class=\\\"section-heading\\\">\\n    <h3 class=\\\"hero\\\">Case study</h3>\\n    <ul class=\\\"navigation-indicator\\\">\\n      <li><a href=\\\"#home\\\">Home</a></li>\\n      <li class=\\\"last\\\"><a href=\\\"#home-gallery\\\">Gallery</a></li>\\n    </ul>\\n  </div>\\n  <div class=\\\"gallery\\\">\\n    <div class=\\\"hidden-images\\\">\\n      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" /><img\\n        src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"\\n        alt=\\\"\\\"\\n      /><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\" /><img\\n        src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"\\n        alt=\\\"\\\"\\n      /><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"\\\" />\\n    </div>\\n\\n    <img class=\\\"left\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"\\\" />\\n    <div class=\\\"main\\\">\\n      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"\\\" />\\n      <div class=\\\"previous\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"\\\" />\\n        <a href=\\\"#!\\\"></a>\\n      </div>\\n\\n      <div class=\\\"next\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"\\\" />\\n        <a href=\\\"#!\\\"></a>\\n      </div>\\n    </div>\\n    <img class=\\\"right\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"\\\" />\\n  </div>\\n  <h4 class=\\\"hero small\\\">Let us know about your next project</h4>\\n  <div class=\\\"info-wrapper\\\">\\n    <time datetime=\\\"2020-10-17\\\">October 17, 2020</time>\\n    <span>Buisness Services</span>\\n  </div>\\n</section>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./home/markup/home-gallery.html?");

/***/ }),

/***/ "./home/markup/home-services.html":
/*!****************************************!*\
  !*** ./home/markup/home-services.html ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icon-projector.svg */ \"./home/images/icon-projector.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icon-emphasize.svg */ \"./home/images/icon-emphasize.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icon-mug.svg */ \"./home/images/icon-mug.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/partner01.svg */ \"./home/images/partner01.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/partner02.svg */ \"./home/images/partner02.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/partner03.svg */ \"./home/images/partner03.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/partner04.svg */ \"./home/images/partner04.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/partner05.svg */ \"./home/images/partner05.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../images/partner06.svg */ \"./home/images/partner06.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar code = \"<section id=\\\"home-services\\\" class=\\\"services-detailed\\\">\\n  <div class=\\\"section-heading\\\">\\n    <h3 class=\\\"hero\\\">Our services</h3>\\n    <ul class=\\\"navigation-indicator\\\">\\n      <li><a href=\\\"#home\\\">Home</a></li>\\n      <li class=\\\"last\\\"><a href=\\\"#home-services\\\">Services</a></li>\\n    </ul>\\n  </div>\\n  <div class=\\\"service-block\\\">\\n    <div class=\\\"service-grid\\\">\\n      <div class=\\\"service\\\">\\n        <div class=\\\"pagginizer\\\">\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\n          <div class=\\\"service-wrapper\\\">\\n            <span class=\\\"title\\\">Technology Advising</span>\\n            <p>\\n              Integer non lacus ex. Phasellus gravida tincidunt purus eget\\n              tempus nunc libero leo\\n            </p>\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\\"service emphasize\\\">\\n        <div class=\\\"pagginizer\\\">\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"\\\" />\\n          <div class=\\\"service-wrapper\\\">\\n            <span class=\\\"title\\\">Technology Advising</span>\\n            <p>\\n              Integer non lacus ex. Phasellus gravida tincidunt purus eget\\n              tempus nunc libero leo\\n            </p>\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\\"service\\\">\\n        <div class=\\\"pagginizer\\\">\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\n          <div class=\\\"service-wrapper\\\">\\n            <span class=\\\"title\\\">Technology Advising</span>\\n            <p>\\n              Integer non lacus ex. Phasellus gravida tincidunt purus eget\\n              tempus nunc libero leo\\n            </p>\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\\"service\\\">\\n        <div class=\\\"pagginizer\\\">\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\n          <div class=\\\"service-wrapper\\\">\\n            <span class=\\\"title\\\">Technology Advising</span>\\n            <p>\\n              Integer non lacus ex. Phasellus gravida tincidunt purus eget\\n              tempus nunc libero leo\\n            </p>\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\\"service\\\">\\n        <div class=\\\"pagginizer\\\">\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\n          <div class=\\\"service-wrapper\\\">\\n            <span class=\\\"title\\\">Technology Advising</span>\\n            <p>\\n              Integer non lacus ex. Phasellus gravida tincidunt purus eget\\n              tempus nunc libero leo\\n            </p>\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\\"service\\\">\\n        <div class=\\\"pagginizer\\\">\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\n          <div class=\\\"service-wrapper\\\">\\n            <span class=\\\"title\\\">Technology Advising</span>\\n            <p>\\n              Integer non lacus ex. Phasellus gravida tincidunt purus eget\\n              tempus nunc libero leo\\n            </p>\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n\\n  <span class=\\\"call-to-action\\\">\\n    Phasellus gravida tincidunt purus eget tempus nunc libero leo\\n    <a class=\\\"view-all\\\" href=\\\"#!\\\">View all project</a>\\n  </span>\\n  <div class=\\\"price\\\">\\n    <div class=\\\"section-heading\\\">\\n      <span class=\\\"shy\\\">Our services</span>\\n      <h4 class=\\\"hero\\\">\\n        Providing Our Customers With A Great Investing Experience\\n      </h4>\\n    </div>\\n    <div class=\\\"prices\\\">\\n      <div class=\\\"price-card left\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\" />\\n        <span class=\\\"cost\\\"><sup>$</sup> 99</span>\\n        <span class=\\\"name\\\">Financial Advisor</span>\\n        <span class=\\\"info\\\"> Get your 30 day free trial </span>\\n        <p class=\\\"details\\\">\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\\n          mollis ullamcorper est et finibus. Donec vel porttitor lectus\\n        </p>\\n        <a href=\\\"#!\\\" class=\\\"button\\\">join now</a>\\n        <hr />\\n      </div>\\n      <div class=\\\"price-card main\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\" />\\n        <span class=\\\"cost\\\"><sup>$</sup> 99</span>\\n        <span class=\\\"name\\\">Financial Advisor</span>\\n        <span class=\\\"info\\\"> Get your 30 day free trial </span>\\n        <p class=\\\"details\\\">\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\\n          mollis ullamcorper est et finibus. Donec vel porttitor lectus\\n        </p>\\n        <a href=\\\"#!\\\" class=\\\"button\\\">join now</a>\\n        <hr />\\n      </div>\\n      <div class=\\\"price-card right\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\" />\\n        <span class=\\\"cost\\\"><sup>$</sup> 99</span>\\n\\n        <span class=\\\"name\\\">Financial Advisor</span>\\n        <span class=\\\"info\\\"> Get your 30 day free trial </span>\\n        <p class=\\\"details\\\">\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam\\n          mollis ullamcorper est et finibus. Donec vel porttitor lectus\\n        </p>\\n        <a href=\\\"#!\\\" class=\\\"button\\\">join now</a>\\n        <hr />\\n      </div>\\n    </div>\\n  </div>\\n  <div class=\\\"request-callback\\\">\\n    <div class=\\\"callback-wrapper\\\">\\n      <div class=\\\"section-heading\\\">\\n        <span class=\\\"shy\\\">Request a callback</span>\\n        <h4 class=\\\"hero small\\\">Let us know about your next project</h4>\\n      </div>\\n      <p>\\n        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti rerum\\n        earum porro excepturi quis ea pariatur possimus veritatis hic tempora?\\n      </p>\\n      <form>\\n        <label for=\\\"callback-name\\\">\\n          <input type=\\\"text\\\" name=\\\"callback\\\" id=\\\"callback-name\\\" required />\\n          <span class=\\\"description\\\">Name</span>\\n        </label>\\n\\n        <label for=\\\"callback-phone\\\">\\n          <input type=\\\"tel\\\" name=\\\"callback\\\" id=\\\"callback-phone\\\" required />\\n          <span class=\\\"description\\\"> Phone</span>\\n        </label>\\n\\n        <label for=\\\"callback-email\\\">\\n          <input type=\\\"email\\\" name=\\\"callback\\\" id=\\\"callback-email\\\" required />\\n          <span class=\\\"description\\\">Email adress</span>\\n        </label>\\n\\n        <label for=\\\"callback-service\\\" class=\\\"custom\\\">\\n          <select name=\\\"client\\\" id=\\\"callback-service\\\">\\n            <option value=\\\"finantial-consulting\\\">Finantial consulting</option>\\n            <option value=\\\"other\\\">other</option>\\n          </select>\\n          <div class=\\\"custom-select\\\">\\n            <div class=\\\"custom-option checked\\\">\\n              <span class=\\\"name\\\">Finantial consulting</span>\\n              <input\\n                type=\\\"radio\\\"\\n                name=\\\"callback\\\"\\n                value=\\\"finantial-consulting\\\"\\n              />\\n            </div>\\n            <div class=\\\"custom-option\\\">\\n              <span class=\\\"name\\\">Other</span>\\n              <input type=\\\"radio\\\" name=\\\"callback\\\" value=\\\"other\\\" />\\n            </div>\\n          </div>\\n        </label>\\n        <button class=\\\"button\\\" type=\\\"submit\\\">Submit</button>\\n      </form>\\n    </div>\\n  </div>\\n  <div class=\\\"partners\\\">\\n    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"\\\" /><img\\n      src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\"\\n      alt=\\\"\\\"\\n    /><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"\\\" /><img\\n      src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\"\\n      alt=\\\"\\\"\\n    /><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"\\\" /><img\\n      src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\"\\n      alt=\\\"\\\"\\n    />\\n  </div>\\n</section>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./home/markup/home-services.html?");

/***/ }),

/***/ "./home/markup/home.html":
/*!*******************************!*\
  !*** ./home/markup/home.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/meeting.jpg */ \"./home/images/meeting.jpg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<section\\n  id=\\\"home\\\"\\n  class=\\\"home\\\"\\n  style=\\\"position: absolute; visibility: hidden; height: 5rem\\\"\\n>\\n  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" class=\\\"overlap\\\" />\\n  <div class=\\\"hero-section\\\">\\n    <h2 class=\\\"slogan hero\\\">\\n      Skup nieruchomości dedykowany osobom mieszkającym za granicą\\n    </h2>\\n    <p>\\n      Pomożemy tobie podjąć kroki niezbędne do sprzedaży mieszkania w polsce,\\n      przebywając za granicą\\n    </p>\\n    <a href=\\\"#!\\\" class=\\\"button\\\">Skontaktuj się</a>\\n  </div>\\n  <div class=\\\"blank-section\\\"></div>\\n</section>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./home/markup/home.html?");

/***/ }),

/***/ "./home/markup/mobile-navigation.html":
/*!********************************************!*\
  !*** ./home/markup/mobile-navigation.html ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/brand.svg */ \"./home/images/brand.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<div class=\\\"mobile-navigation\\\">\\n  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" class=\\\"logo\\\" />\\n  <a class=\\\"navigation-toggler\\\"></a>\\n</div>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./home/markup/mobile-navigation.html?");

/***/ }),

/***/ "./home/markup/nav-bar.html":
/*!**********************************!*\
  !*** ./home/markup/nav-bar.html ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/brand.svg */ \"./home/images/brand.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<div class=\\\"nav-bar translated\\\">\\n  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"logo\\\" class=\\\"logo\\\" />\\n\\n  <nav class=\\\"links\\\">\\n    <ul>\\n      <li><a href=\\\"./index.html\\\">Główna</a></li>\\n      <li><a href=\\\"./services.html\\\">Usługi</a></li>\\n      <li><a href=\\\"./about-us.html\\\">O nas</a></li>\\n      <li><a href=\\\"./guides.html\\\">Poradnik</a></li>\\n      <li><a href=\\\"./opinions.html\\\">Opinie</a></li>\\n      <li><a href=\\\"./contact.html\\\">Kontakt</a></li>\\n    </ul>\\n  </nav>\\n  <span class=\\\"contact\\\">\\n    <span>Call us for any question</span>\\n    <span class=\\\"phone\\\">+4 509 120 6705</span>\\n  </span>\\n</div>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./home/markup/nav-bar.html?");

/***/ }),

/***/ "./home/markup/partners.html":
/*!***********************************!*\
  !*** ./home/markup/partners.html ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/partner01.svg */ \"./home/images/partner01.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/partner02.svg */ \"./home/images/partner02.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/partner03.svg */ \"./home/images/partner03.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/partner04.svg */ \"./home/images/partner04.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/partner05.svg */ \"./home/images/partner05.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/partner06.svg */ \"./home/images/partner06.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar code = \"<section id=\\\"partners\\\" class=\\\"partners\\\">\\n  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" /><img\\n    src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"\\n    alt=\\\"\\\"\\n  /><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\" /><img\\n    src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"\\n    alt=\\\"\\\"\\n  /><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"\\\" /><img\\n    src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\"\\n    alt=\\\"\\\"\\n  />\\n</section>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./home/markup/partners.html?");

/***/ }),

/***/ "./home/markup/testimonial-opinions.html":
/*!***********************************************!*\
  !*** ./home/markup/testimonial-opinions.html ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/overlap-image-2.svg */ \"./home/images/overlap-image-2.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<section id=\\\"testimonial-opinions\\\" class=\\\"opinions\\\">\\n  <div class=\\\"section-heading\\\">\\n    <span class=\\\"shy\\\">Opinie</span>\\n    <h3 class=\\\"hero small\\\">\\n      klientów z całej Polski, którzy sprzedali pomyślnie nieruchomości dzięki\\n      współpracy z naszą firmą\\n    </h3>\\n  </div>\\n  <div class=\\\"opinion-wrapper\\\">\\n    <a class=\\\"view-all button\\\">Rozwiń wszystko</a>\\n\\n    <div class=\\\"comments collapsed\\\">\\n      <div class=\\\"comment\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\n        <div class=\\\"comment-wrapper\\\">\\n          <span class=\\\"title name\\\"\\n            >Ryan Cooper <span class=\\\"location\\\">- Location</span>\\n          </span>\\n          <p>\\n            Ut porttitor tempus augue, quis luctus erat dapibus ac. Curabitur eu\\n            placerat purus. Vestibulum tempor velit diam, ac ultrices turpis\\n            posuere vitae.\\n          </p>\\n        </div>\\n        <hr />\\n      </div>\\n      <div class=\\\"comment\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\n        <div class=\\\"comment-wrapper\\\">\\n          <span class=\\\"title name\\\"\\n            >Ryan Cooper <span class=\\\"location\\\">- Location</span>\\n          </span>\\n          <p>\\n            Ut porttitor tempus augue, quis luctus erat dapibus ac. Curabitur eu\\n            placerat purus. Vestibulum tempor velit diam, ac ultrices turpis\\n            posuere vitae.\\n          </p>\\n        </div>\\n        <hr />\\n      </div>\\n      <div class=\\\"comment\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\n        <div class=\\\"comment-wrapper\\\">\\n          <span class=\\\"title name\\\"\\n            >Ryan Cooper <span class=\\\"location\\\">- Location</span>\\n          </span>\\n          <p>\\n            Ut porttitor tempus augue, quis luctus erat dapibus ac. Curabitur eu\\n            placerat purus. Vestibulum tempor velit diam, ac ultrices turpis\\n            posuere vitae.\\n          </p>\\n        </div>\\n        <hr />\\n      </div>\\n      <div class=\\\"comment\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\n        <div class=\\\"comment-wrapper\\\">\\n          <span class=\\\"title name\\\"\\n            >Ryan Cooper <span class=\\\"location\\\">- Location</span>\\n          </span>\\n          <p>\\n            Ut porttitor tempus augue, quis luctus erat dapibus ac. Curabitur eu\\n            placerat purus. Vestibulum tempor velit diam, ac ultrices turpis\\n            posuere vitae.\\n          </p>\\n        </div>\\n        <hr />\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./home/markup/testimonial-opinions.html?");

/***/ }),

/***/ "./home/markup/testimonial.html":
/*!**************************************!*\
  !*** ./home/markup/testimonial.html ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/stock-person.jpg */ \"./home/images/stock-person.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/stock-person1.jpeg */ \"./home/images/stock-person1.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/stock-person2.jpeg */ \"./home/images/stock-person2.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/stock-person3.jpeg */ \"./home/images/stock-person3.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/stock-person4.jpeg */ \"./home/images/stock-person4.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/stock-person5.jpeg */ \"./home/images/stock-person5.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/stock-person6.jpeg */ \"./home/images/stock-person6.jpeg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar code = \"<section id=\\\"testimonial\\\" class=\\\"testimonial\\\">\\n  <div class=\\\"section-heading\\\">\\n    <span class=\\\"shy\\\">Testimonials</span>\\n    <h2 class=\\\"hero\\\">We love our clients</h2>\\n  </div>\\n  <div class=\\\"overlap\\\">\\n    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" class=\\\"image1\\\" /><img\\n      src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"\\n      alt=\\\"\\\"\\n      class=\\\"image2\\\"\\n    /><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\" class=\\\"image3\\\" /><img\\n      src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"\\n      alt=\\\"\\\"\\n      class=\\\"image4\\\"\\n    /><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"\\\" class=\\\"image5\\\" />\\n  </div>\\n  <div class=\\\"opinions\\\">\\n    <div class=\\\"left-opinion\\\">\\n      <div class=\\\"wrapper\\\">\\n        <blockquote>\\n          <p>\\n            Phasellus ultrices ut tortor at porta. Praesent maximus, lacus sed\\n            rutrum aliquet, lacus tellus tincidunt nisl, vitae molestie nisi\\n            sapien et dolor suspendisse mi est\\n          </p>\\n        </blockquote>\\n        <footer class=\\\"author\\\">\\n          <span class=\\\"name\\\">Alice Guzman</span>\\n          <span class=\\\"info\\\">Designer manager</span>\\n        </footer>\\n      </div>\\n      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"customer\\\" />\\n    </div>\\n    <div class=\\\"center-opinion\\\">\\n      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"customer\\\" />\\n      <blockquote>\\n        <p>\\n          Phasellus ultrices ut tortor at porta. Praesent maximus, lacus sed\\n          rutrum aliquet, lacus tellus tincidunt nisl, vitae molestie nisi\\n          sapien et dolor suspendisse mi est\\n        </p>\\n      </blockquote>\\n      <footer class=\\\"author\\\">\\n        <span class=\\\"name\\\">Alice Guzman</span>\\n        <span class=\\\"info\\\">Designer manager</span>\\n      </footer>\\n    </div>\\n  </div>\\n</section>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./home/markup/testimonial.html?");

/***/ }),

/***/ "./home/markup/why-us.html":
/*!*********************************!*\
  !*** ./home/markup/why-us.html ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/sheet-alt.svg */ \"./home/images/sheet-alt.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/chart.svg */ \"./home/images/chart.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/houses.svg */ \"./home/images/houses.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/stock-person7.jpeg */ \"./home/images/stock-person7.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/stock-person8.jpeg */ \"./home/images/stock-person8.jpeg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/stock-person1.jpeg */ \"./home/images/stock-person1.jpeg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar code = \"<section id=\\\"why-us\\\" class=\\\"why-us\\\">\\n  <div class=\\\"section-heading\\\">\\n    <span class=\\\"shy\\\">Great reviews for our services</span>\\n    <h2 class=\\\"hero\\\">Business development consultancy Is Our Passion</h2>\\n    <p>\\n      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, ex?\\n      Exercitationem, perferendis quam ducimus maiores earum enim quod quis\\n      quae.\\n    </p>\\n  </div>\\n\\n  <figure class=\\\"reasons\\\" role=\\\"group\\\">\\n    <div class=\\\"reason\\\">\\n      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\n      <span class=\\\"counter\\\">3.689</span>\\n      <span class=\\\"description\\\"> Buisness advices given over 30 years </span>\\n    </div>\\n    <div class=\\\"reason\\\">\\n      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"\\\" />\\n      <span class=\\\"counter\\\">3.689</span>\\n      <span class=\\\"description\\\"> Buisness advices given over 30 years </span>\\n    </div>\\n    <div class=\\\"reason\\\">\\n      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\" />\\n      <span class=\\\"counter\\\">3.689</span>\\n      <span class=\\\"description\\\"> Buisness advices given over 30 years </span>\\n    </div>\\n  </figure>\\n  <div class=\\\"reviews\\\">\\n    <div class=\\\"review\\\">\\n      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"\\\" />\\n      <span class=\\\"name\\\"> Karen Ramos </span>\\n      <p class=\\\"opinion\\\">\\n        Sed ut perspiciatis unde omnis iste natus error sit voluptatem\\n        accusantium doloremque\\n      </p>\\n      <div class=\\\"media\\\">\\n        <a href=\\\"#\\\" class=\\\"facebook\\\"></a>\\n        <a href=\\\"#\\\" class=\\\"tweeter\\\"></a>\\n        <a href=\\\"#\\\" class=\\\"instagram\\\"></a>\\n      </div>\\n    </div>\\n    <div class=\\\"review\\\">\\n      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"\\\" />\\n      <span class=\\\"name\\\"> Karen Ramos </span>\\n      <p class=\\\"opinion\\\">\\n        Sed ut perspiciatis unde omnis iste natus error sit voluptatem\\n        accusantium doloremque\\n      </p>\\n      <div class=\\\"media\\\">\\n        <a href=\\\"#\\\" class=\\\"facebook\\\"></a>\\n        <a href=\\\"#\\\" class=\\\"tweeter\\\"></a>\\n        <a href=\\\"#\\\" class=\\\"instagram\\\"></a>\\n      </div>\\n    </div>\\n    <div class=\\\"review\\\">\\n      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"\\\" />\\n      <span class=\\\"name\\\"> Karen Ramos </span>\\n      <p class=\\\"opinion\\\">\\n        Sed ut perspiciatis unde omnis iste natus error sit voluptatem\\n        accusantium doloremque\\n      </p>\\n      <div class=\\\"media\\\">\\n        <a href=\\\"#\\\" class=\\\"facebook\\\"></a>\\n        <a href=\\\"#\\\" class=\\\"tweeter\\\"></a>\\n        <a href=\\\"#\\\" class=\\\"instagram\\\"></a>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./home/markup/why-us.html?");

/***/ }),

/***/ "./home/markup/work-with-us.html":
/*!***************************************!*\
  !*** ./home/markup/work-with-us.html ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<section id=\\\"work-with-us\\\" class=\\\"callout\\\">\\n  <div class=\\\"wrapper\\\">\\n    <span class=\\\"question\\\">Looking for buisness opportunity?</span>\\n    <a href=\\\"#\\\" class=\\\"button\\\">Work with us today</a>\\n  </div>\\n</section>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./home/markup/work-with-us.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./home/styles/main.scss":
/*!*******************************!*\
  !*** ./home/styles/main.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./home/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./home/styles/main.scss?");

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

/***/ "./home/images/anchor-arrow.svg":
/*!**************************************!*\
  !*** ./home/images/anchor-arrow.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0d7167cde0b06c4d8220.svg\";\n\n//# sourceURL=webpack:///./home/images/anchor-arrow.svg?");

/***/ }),

/***/ "./home/images/anchor-pointer.svg":
/*!****************************************!*\
  !*** ./home/images/anchor-pointer.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a544d8a3928c8e485633.svg\";\n\n//# sourceURL=webpack:///./home/images/anchor-pointer.svg?");

/***/ }),

/***/ "./home/images/arrow.svg":
/*!*******************************!*\
  !*** ./home/images/arrow.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b0d4b842dc170f6fd9e5.svg\";\n\n//# sourceURL=webpack:///./home/images/arrow.svg?");

/***/ }),

/***/ "./home/images/black.png":
/*!*******************************!*\
  !*** ./home/images/black.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a214a053155cae0b7af5.png\";\n\n//# sourceURL=webpack:///./home/images/black.png?");

/***/ }),

/***/ "./home/images/brand.svg":
/*!*******************************!*\
  !*** ./home/images/brand.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c597cb5955a71b8454e8.svg\";\n\n//# sourceURL=webpack:///./home/images/brand.svg?");

/***/ }),

/***/ "./home/images/calendar.svg":
/*!**********************************!*\
  !*** ./home/images/calendar.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"50a7f5af88cbf285dad9.svg\";\n\n//# sourceURL=webpack:///./home/images/calendar.svg?");

/***/ }),

/***/ "./home/images/chart.svg":
/*!*******************************!*\
  !*** ./home/images/chart.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6d702237603a3b8c02e7.svg\";\n\n//# sourceURL=webpack:///./home/images/chart.svg?");

/***/ }),

/***/ "./home/images/expand-arrow.svg":
/*!**************************************!*\
  !*** ./home/images/expand-arrow.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bc90e6359218fd8735b1.svg\";\n\n//# sourceURL=webpack:///./home/images/expand-arrow.svg?");

/***/ }),

/***/ "./home/images/facebook.svg":
/*!**********************************!*\
  !*** ./home/images/facebook.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"45b46026fc7ab9a2be43.svg\";\n\n//# sourceURL=webpack:///./home/images/facebook.svg?");

/***/ }),

/***/ "./home/images/folder.svg":
/*!********************************!*\
  !*** ./home/images/folder.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"626086c51368adbfee56.svg\";\n\n//# sourceURL=webpack:///./home/images/folder.svg?");

/***/ }),

/***/ "./home/images/hamburger.svg":
/*!***********************************!*\
  !*** ./home/images/hamburger.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f2c2bd3141c34b4f50a1.svg\";\n\n//# sourceURL=webpack:///./home/images/hamburger.svg?");

/***/ }),

/***/ "./home/images/houses.svg":
/*!********************************!*\
  !*** ./home/images/houses.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"364c7b43c9401588afba.svg\";\n\n//# sourceURL=webpack:///./home/images/houses.svg?");

/***/ }),

/***/ "./home/images/icon-emphasize.svg":
/*!****************************************!*\
  !*** ./home/images/icon-emphasize.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dc00afaad2956f6dc214.svg\";\n\n//# sourceURL=webpack:///./home/images/icon-emphasize.svg?");

/***/ }),

/***/ "./home/images/icon-mug.svg":
/*!**********************************!*\
  !*** ./home/images/icon-mug.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eab430131253a018bf58.svg\";\n\n//# sourceURL=webpack:///./home/images/icon-mug.svg?");

/***/ }),

/***/ "./home/images/icon-projector.svg":
/*!****************************************!*\
  !*** ./home/images/icon-projector.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3477dcfdd58a45d20180.svg\";\n\n//# sourceURL=webpack:///./home/images/icon-projector.svg?");

/***/ }),

/***/ "./home/images/instagram.svg":
/*!***********************************!*\
  !*** ./home/images/instagram.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0fb3e2e01d3f12aa00a3.svg\";\n\n//# sourceURL=webpack:///./home/images/instagram.svg?");

/***/ }),

/***/ "./home/images/key1.jpeg":
/*!*******************************!*\
  !*** ./home/images/key1.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f5ae5082c9d9398db129.jpeg\";\n\n//# sourceURL=webpack:///./home/images/key1.jpeg?");

/***/ }),

/***/ "./home/images/linkedin.svg":
/*!**********************************!*\
  !*** ./home/images/linkedin.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ca31d5985241e43bc33.svg\";\n\n//# sourceURL=webpack:///./home/images/linkedin.svg?");

/***/ }),

/***/ "./home/images/meeting.jpg":
/*!*********************************!*\
  !*** ./home/images/meeting.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e7e3917face4795d1625.jpg\";\n\n//# sourceURL=webpack:///./home/images/meeting.jpg?");

/***/ }),

/***/ "./home/images/news-image.jpg":
/*!************************************!*\
  !*** ./home/images/news-image.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"92d778e597f5e8f450d0.jpg\";\n\n//# sourceURL=webpack:///./home/images/news-image.jpg?");

/***/ }),

/***/ "./home/images/order-arrow.svg":
/*!*************************************!*\
  !*** ./home/images/order-arrow.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4c23d011e45cd592fca0.svg\";\n\n//# sourceURL=webpack:///./home/images/order-arrow.svg?");

/***/ }),

/***/ "./home/images/overlap-background-image.svg":
/*!**************************************************!*\
  !*** ./home/images/overlap-background-image.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"24786d8d88169e0650d0.svg\";\n\n//# sourceURL=webpack:///./home/images/overlap-background-image.svg?");

/***/ }),

/***/ "./home/images/overlap-image-2.svg":
/*!*****************************************!*\
  !*** ./home/images/overlap-image-2.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"616d46e31b79cbcc31f5.svg\";\n\n//# sourceURL=webpack:///./home/images/overlap-image-2.svg?");

/***/ }),

/***/ "./home/images/overlap-image-3.svg":
/*!*****************************************!*\
  !*** ./home/images/overlap-image-3.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d402096574ca051331ae.svg\";\n\n//# sourceURL=webpack:///./home/images/overlap-image-3.svg?");

/***/ }),

/***/ "./home/images/paperwork.jpeg":
/*!************************************!*\
  !*** ./home/images/paperwork.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9c3e090e5010ea4e0541.jpeg\";\n\n//# sourceURL=webpack:///./home/images/paperwork.jpeg?");

/***/ }),

/***/ "./home/images/partner01.svg":
/*!***********************************!*\
  !*** ./home/images/partner01.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"11f4edbab203e98df6fc.svg\";\n\n//# sourceURL=webpack:///./home/images/partner01.svg?");

/***/ }),

/***/ "./home/images/partner02.svg":
/*!***********************************!*\
  !*** ./home/images/partner02.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"99c7fbbbfa0e09f9d096.svg\";\n\n//# sourceURL=webpack:///./home/images/partner02.svg?");

/***/ }),

/***/ "./home/images/partner03.svg":
/*!***********************************!*\
  !*** ./home/images/partner03.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d3653c02e8efa90b4b01.svg\";\n\n//# sourceURL=webpack:///./home/images/partner03.svg?");

/***/ }),

/***/ "./home/images/partner04.svg":
/*!***********************************!*\
  !*** ./home/images/partner04.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c01f46d0e923bec95f8.svg\";\n\n//# sourceURL=webpack:///./home/images/partner04.svg?");

/***/ }),

/***/ "./home/images/partner05.svg":
/*!***********************************!*\
  !*** ./home/images/partner05.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8181a62db8a49312fd4c.svg\";\n\n//# sourceURL=webpack:///./home/images/partner05.svg?");

/***/ }),

/***/ "./home/images/partner06.svg":
/*!***********************************!*\
  !*** ./home/images/partner06.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"26f98d9c4b60235b1958.svg\";\n\n//# sourceURL=webpack:///./home/images/partner06.svg?");

/***/ }),

/***/ "./home/images/play-button.svg":
/*!*************************************!*\
  !*** ./home/images/play-button.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2703b2f3b05af9a23621.svg\";\n\n//# sourceURL=webpack:///./home/images/play-button.svg?");

/***/ }),

/***/ "./home/images/property-design1.jpeg":
/*!*******************************************!*\
  !*** ./home/images/property-design1.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"61242a892f8dc989f428.jpeg\";\n\n//# sourceURL=webpack:///./home/images/property-design1.jpeg?");

/***/ }),

/***/ "./home/images/property1.jpeg":
/*!************************************!*\
  !*** ./home/images/property1.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bf1a286ce0bfe497277e.jpeg\";\n\n//# sourceURL=webpack:///./home/images/property1.jpeg?");

/***/ }),

/***/ "./home/images/property2.jpeg":
/*!************************************!*\
  !*** ./home/images/property2.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1067e798c7838dc947f4.jpeg\";\n\n//# sourceURL=webpack:///./home/images/property2.jpeg?");

/***/ }),

/***/ "./home/images/property3.jpeg":
/*!************************************!*\
  !*** ./home/images/property3.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"991aa35cfdd3abdc37bd.jpeg\";\n\n//# sourceURL=webpack:///./home/images/property3.jpeg?");

/***/ }),

/***/ "./home/images/quote-small.svg":
/*!*************************************!*\
  !*** ./home/images/quote-small.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aaa9e52fe5f07e3f1686.svg\";\n\n//# sourceURL=webpack:///./home/images/quote-small.svg?");

/***/ }),

/***/ "./home/images/quote.svg":
/*!*******************************!*\
  !*** ./home/images/quote.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"13e844ebb8da09dbb539.svg\";\n\n//# sourceURL=webpack:///./home/images/quote.svg?");

/***/ }),

/***/ "./home/images/rating.svg":
/*!********************************!*\
  !*** ./home/images/rating.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7a254a68de111dd6bf83.svg\";\n\n//# sourceURL=webpack:///./home/images/rating.svg?");

/***/ }),

/***/ "./home/images/satisfied.avif":
/*!************************************!*\
  !*** ./home/images/satisfied.avif ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4a91b3ad4b096e4c48db.avif\";\n\n//# sourceURL=webpack:///./home/images/satisfied.avif?");

/***/ }),

/***/ "./home/images/sheet-alt.svg":
/*!***********************************!*\
  !*** ./home/images/sheet-alt.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c78e8ef2248b25ded4f4.svg\";\n\n//# sourceURL=webpack:///./home/images/sheet-alt.svg?");

/***/ }),

/***/ "./home/images/stock-person.jpg":
/*!**************************************!*\
  !*** ./home/images/stock-person.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d2ff2ee65586442cb6e9.jpg\";\n\n//# sourceURL=webpack:///./home/images/stock-person.jpg?");

/***/ }),

/***/ "./home/images/stock-person1.jpeg":
/*!****************************************!*\
  !*** ./home/images/stock-person1.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bce0c305ec1c120a173c.jpeg\";\n\n//# sourceURL=webpack:///./home/images/stock-person1.jpeg?");

/***/ }),

/***/ "./home/images/stock-person2.jpeg":
/*!****************************************!*\
  !*** ./home/images/stock-person2.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"683583cac50a9210a1ae.jpeg\";\n\n//# sourceURL=webpack:///./home/images/stock-person2.jpeg?");

/***/ }),

/***/ "./home/images/stock-person3.jpeg":
/*!****************************************!*\
  !*** ./home/images/stock-person3.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7cb7c7344894871dc066.jpeg\";\n\n//# sourceURL=webpack:///./home/images/stock-person3.jpeg?");

/***/ }),

/***/ "./home/images/stock-person4.jpeg":
/*!****************************************!*\
  !*** ./home/images/stock-person4.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1aaa92f186af197e4aaa.jpeg\";\n\n//# sourceURL=webpack:///./home/images/stock-person4.jpeg?");

/***/ }),

/***/ "./home/images/stock-person5.jpeg":
/*!****************************************!*\
  !*** ./home/images/stock-person5.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"804809c3b96889b58e1c.jpeg\";\n\n//# sourceURL=webpack:///./home/images/stock-person5.jpeg?");

/***/ }),

/***/ "./home/images/stock-person6.jpeg":
/*!****************************************!*\
  !*** ./home/images/stock-person6.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0d02069e47e2f0c848f1.jpeg\";\n\n//# sourceURL=webpack:///./home/images/stock-person6.jpeg?");

/***/ }),

/***/ "./home/images/stock-person7.jpeg":
/*!****************************************!*\
  !*** ./home/images/stock-person7.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"df73a7a5f00f5a48d4f2.jpeg\";\n\n//# sourceURL=webpack:///./home/images/stock-person7.jpeg?");

/***/ }),

/***/ "./home/images/stock-person8.jpeg":
/*!****************************************!*\
  !*** ./home/images/stock-person8.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"048ca11a6eb270e55ef0.jpeg\";\n\n//# sourceURL=webpack:///./home/images/stock-person8.jpeg?");

/***/ }),

/***/ "./home/images/strategies2.jpeg":
/*!**************************************!*\
  !*** ./home/images/strategies2.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"67238a62bb247cb75e5c.jpeg\";\n\n//# sourceURL=webpack:///./home/images/strategies2.jpeg?");

/***/ }),

/***/ "./home/images/strategies5.jpeg":
/*!**************************************!*\
  !*** ./home/images/strategies5.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f2c7bab7b0571c64446f.jpeg\";\n\n//# sourceURL=webpack:///./home/images/strategies5.jpeg?");

/***/ }),

/***/ "./home/images/strategies8.jpeg":
/*!**************************************!*\
  !*** ./home/images/strategies8.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cdcfac113ec8eb431b21.jpeg\";\n\n//# sourceURL=webpack:///./home/images/strategies8.jpeg?");

/***/ }),

/***/ "./home/images/tweeter.svg":
/*!*********************************!*\
  !*** ./home/images/tweeter.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6a03f300f23e8d2ed631.svg\";\n\n//# sourceURL=webpack:///./home/images/tweeter.svg?");

/***/ }),

/***/ "./home/images/work-with-su-background.svg":
/*!*************************************************!*\
  !*** ./home/images/work-with-su-background.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ba3ea4247c825b57876c.svg\";\n\n//# sourceURL=webpack:///./home/images/work-with-su-background.svg?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./home/scripts/main.js");
/******/ 	
/******/ })()
;