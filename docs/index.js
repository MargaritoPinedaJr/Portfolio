const clickables = document.querySelector("#clickables");

const abilitiesButton = document.querySelector("#abilities-button");
const projectsButton = document.querySelector("#projects-button");
const reachMeButton = document.querySelector("#reach-me-button");

const abilitiesDropDown = document.querySelector("#abilities-drop-down");
const projectsDropDown = document.querySelector("#projects-drop-down");
const reachMeDropDown = document.querySelector("#reach-me-drop-down");

const abilitiesContainer = document.querySelector("#abilities-container");
const projectsContainer = document.querySelector("#projects-container");
const reachMeContainer = document.querySelector("#reach-me-container");

const btnsArray = [abilitiesButton, projectsButton, reachMeButton];
const containerArray = [
 abilitiesContainer,
 projectsContainer,
 reachMeContainer,
];
const dropDownArray = [abilitiesDropDown, projectsDropDown, reachMeDropDown];

const clearAllActives = () => {
 abilitiesContainer.classList.remove("active-container");
 projectsContainer.classList.remove("active-container");
 reachMeContainer.classList.remove("active-container");
 abilitiesDropDown.classList.remove("active-list");
 projectsDropDown.classList.remove("active-list");
 reachMeDropDown.classList.remove("active-list");
 abilitiesButton.classList.remove("active-button");
 projectsButton.classList.remove("active-button");
 reachMeButton.classList.remove("active-button");
 //  btnsArray.classList.remove("active-button");
 //  containerArray.classList.remove("active-container");
 //  dropDownArray.classList.remove("active-list");
};

abilitiesButton.addEventListener("click", () => {
 if (
  abilitiesContainer.classList.contains("active-container") ||
  abilitiesDropDown.classList.contains("active-list") ||
  abilitiesButton.classList.contains("active-button")
 ) {
  clearAllActives();
 } else {
  clearAllActives();
  abilitiesContainer.classList.toggle("active-container");
  abilitiesDropDown.classList.toggle("active-list");
  abilitiesButton.classList.toggle("active-button");
 }
});

projectsButton.addEventListener("click", () => {
 if (
  projectsContainer.classList.contains("active-container") ||
  projectsDropDown.classList.contains("active-list") ||
  projectsButton.classList.contains("active-button")
 ) {
  clearAllActives();
 } else {
  clearAllActives();
  projectsContainer.classList.toggle("active-container");
  projectsDropDown.classList.toggle("active-list");
  projectsButton.classList.toggle("active-button");
 }
});

reachMeButton.addEventListener("click", () => {
 if (
  reachMeContainer.classList.contains("active-container") ||
  reachMeDropDown.classList.contains("active-list") ||
  reachMeButton.classList.contains("active-button")
 ) {
  clearAllActives();
 } else {
  clearAllActives();
  reachMeContainer.classList.toggle("active-container");
  reachMeDropDown.classList.toggle("active-list");
  reachMeButton.classList.toggle("active-button");
 }
});

// What is add event listener for each?
// Could the map function retreive the index to help me do this?
// Justify content vs justify items vs align blah blah
// Query selector vs select by id
// USing forEach method with classList.toggle()
