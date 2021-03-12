// стягиваем все элементы
let card = document.querySelector(".card");
let title = document.querySelector(".card-title");
let subtitle = document.querySelector(".card-subtitle");
let cardText = document.querySelector(".card-text");
let body = document.querySelector("body");
let buttonPrimary = document.querySelector(".btn-primary");
let modal = document.querySelector(".modal");
let buttonSecondary = document.querySelector(".btn-secondary");
let buttonSubmit = document.querySelector(".btn-submit");
let titleInput = document.querySelector(".input-title");
let inputCardText = document.querySelector(".input-text");
let someDiv = document.querySelector(".somediv")
// let buttonDelete = document.querySelectorAll(".btn-delete")

// let divinity = document.querySelector(".divinity ")
// пишем функции
let cardData = [];
function GetNewCard(titleText, cardTextInput) {
  // функия конструктор которая в качестве параметров принимает в себя карточку которую нужно создать и инпуты для ввода текста
  this.cardText = cardTextInput.value; // меняем текст тайтла склонированного обьекта
  this.cardTitle = titleText.value; // меняем текст основной карточки
}



function paintCardData(cardData){
  
  cardData.forEach(element => {
    let cloneCard = card.cloneNode(true) 
    cloneCardTitle = cloneCard.querySelector(".card-title")
    cloneCardCardText = cloneCard.querySelector(".card-text")
    cloneCardCardText.textContent = element.cardText
    cloneCardTitle.textContent = element.cardTitle;
    someDiv.append(cloneCard)
  });

}
function getElement(){
  JSON.parse(localStorage.getItem('card'))
}
function saveElement(){
  localStorage.setItem('card', JSON.stringify(cardData));
}
openModal = (modalName) => {
  //октрытие модального окна
  modalName.style.display = "block";
  modalName.style.overflow = "visible";
};
closeModal = (modalName) => {
  //закрытие модального окна
  modalName.style.display = "none";
  modalName.style.overflow = "hidden";
};

body.addEventListener("click", (element) => {
  //слушатель событий для body
  console.log(element);
  if (element.target === buttonPrimary) {
    openModal(modal);
  }if(buttonDelete.forEach(buttons =>{
    
  })){
    // let cardThis = element.toElement.parentElement
    console.log('ok');
  }

});


modal.addEventListener("click", (element) => {
  //слушатель событий для модального окна
  if (element.target === buttonSecondary) {
    closeModal(modal);
  }
  if (element.target === buttonSubmit) {
    cardNew = new GetNewCard(titleInput, inputCardText); //запускаем функцию конструктор где в качестве параметров передаем карточку и инпуты
    closeModal(modal);
    cardData.push(cardNew)
    saveElement()
    let cloneCard = card.cloneNode(true) 
    cloneCardTitle = cloneCard.querySelector(".card-title")
    cloneCardCardText = cloneCard.querySelector(".card-text")
    cloneCardCardText.textContent = inputCardText.value
    cloneCardTitle.textContent = titleInput.value;
    someDiv.append(cloneCard)
  }
});

if(localStorage.length){
cardData = JSON.parse(localStorage.getItem('card'))
 paintCardData(cardData)
}
let buttonDelete = document.querySelectorAll(".btn-delete")
console.log(buttonDelete);
// }

// localStorageCardData = JSON.parse(localStorage.getItem('card'))

// function paintCardData(cardDatalocalStorage){
  
//   cardDatalocalStorage.forEach(element => {
//     let cloneCard = card.cloneNode(true) 
//     cloneCardTitle = cloneCard.querySelector(".card-title")
//     cloneCardCardText = cloneCard.querySelector(".card-text")
//     cloneCardCardText.textContent = element.cardText
//     cloneCardTitle.textContent = element.cardTitle;
//     someDiv.append(cloneCard)
//   });
// function deleteCardInLocalStorage{

// }
// 
// localStorage.clear()
// paintCardData(localStorageCardData)