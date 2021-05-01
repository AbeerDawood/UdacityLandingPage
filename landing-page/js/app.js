/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

//Define Global Variables

const sections = Array.from(document.querySelectorAll('section'));
let navLi = document.querySelectorAll("a");
const ulNavBar = document.querySelector('#navbar__list');
let numberOfListItems = sections.length;

//End Global Variables


// Build the menu 

function createListItems() {
  for (section of sections) {
    sectionName = section.getAttribute('data-nav');
    sectionLink = section.getAttribute('id');
    //creat li
    const navList = document.createElement('li');
    navList.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${sectionName}</a>`;
    ulNavBar.appendChild(navList);

    // Scroll to section on link click with smooth scroll
    let current_section = section;
    navList.addEventListener("click",(event)=> {
      event.preventDefault();
      current_section.scrollIntoView({behavior:"smooth"});
   });


  }
}

//Define view port sections
function sectionIntoViewPort(element) {
  let sectionPosition = element.getBoundingClientRect();
  return (sectionPosition.top >= 0 && sectionPosition.top < 250);
}


// Set sections as active
function toggleActiveClass() {

  for (section of sections) {

    //if the section is in the viewport
    if (sectionIntoViewPort(section)) {
      //add .your-active-class
      section.classList.add('your-active-class');

    } else if (!sectionIntoViewPort(section)) { //remove .your-active-class
      section.classList.remove('your-active-class');
    }
  }
}


createListItems();

document.addEventListener('scroll', toggleActiveClass);