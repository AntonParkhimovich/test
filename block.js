// стягиваем все элементы
let card = document.querySelector('.card')
let title = document.querySelector('.card-title')
let subtitle = document.querySelector('.card-subtitle')
let cardText = document.querySelector('.card-text')
let body = document.querySelector('body')
let buttonPrimary = document.querySelector('button')
let modal = document.querySelector('.modal')
let buttonSecondary = document.querySelector('.btn-secondary')
let buttonSubmit = document.querySelector('.btn-submit')
let titleInput = document.querySelector('.input-title')
let inputCardText = document.querySelector('.input-text')
// пишем функции
let cardData = {} 
function GetNewCard (someCard, titleText, cardTextInput){// функия конструктор которая в качестве параметров принимает в себя карточку которую нужно создать и инпуты для ввода текста
     this.card = document.importNode( someCard, true) //клонируем заданную карточку при помощи importNode в качестве параметров указанна карточка и булин true означающий что клонироваться она будет вместе со всеми дочерними элементами
    this.title = this.card.querySelector('.card-title') // стягиваем тайтл склонированного обьекта
     this.cardText = this.card.querySelector('.card-text') //стягиваеи основной текст склонированного обьекта
     this.cardText.textContent = cardTextInput.value // меняем текст тайтла склонированного обьекта 
     this.title.textContent = titleText.value  // меняем текст основной карточки
     body.append(this.card) //импортируем созданную карточку в body
}


openModal=(modalName)=>{  //октрытие модального окна
    modalName.style.display = 'block'
    modalName.style.overflow = 'visible'
}
closeModal = (modalName) =>{ //закрытие модального окна
    modalName.style.display = 'none'
    modalName.style.overflow = 'hidden'
}

body.addEventListener('click', (element) =>{ //слушатель событий для body
    if(element.target === buttonPrimary){
        openModal(modal)
    }
})  
modal.addEventListener('click', (element)=>{ //слушатель событий для модального окна
    if(element.target === buttonSecondary){
        closeModal(modal)
    }
    if(element.target === buttonSubmit){
        cardData = new GetNewCard(card, titleInput , inputCardText) //запускаем функцию конструктор где в качестве параметров передаем карточку и инпуты
        closeModal(modal)
    }
})