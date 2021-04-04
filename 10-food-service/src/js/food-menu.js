import menuTemplate from '../templates/menu.hbs'
import menuData from '../menu.json'


const fodMenu = menuTemplate(menuData)

const menuRef = document.querySelector('.js-menu')
menuRef.insertAdjacentHTML('beforeend',fodMenu)