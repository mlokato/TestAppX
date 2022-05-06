// DOM SELECTORS

// GET ELEMENT BY
let tagOne = document.getElementsByTagName('nav')
let classTwo = document.getElementsByClassName('grid-wraper')[0]
let getId = document.getElementById('container')
getId.innerText = 'CONTainer'


// QUERY SELECTOR

let QSelect = document.querySelector('div')
let QSelectAll = document.querySelectorAll('nav li')


// GET SET ATTRBUTE

getId.setAttribute('mono', '123')
// console.log(getId.getAttribute('class'))
// console.log(QSelectAll);


// CHANGING STYLE
getId.style.backgroundColor = 'purple'