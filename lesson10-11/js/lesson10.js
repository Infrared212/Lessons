'use strict';

let tittles = document.querySelectorAll (".article p:first-child"); // на коллекцию элементов событие добавить нельзя, только на кажды элемент


//перебор html коллекции
for (let tittle of tittles){
  console.log (tittle);

  //добавление обработчика события
  tittle.addEventListener("click",openDescription)
}

function openDescription(){
  console.log(this);// this - p
  this.nextElementSibling.classList.toggle ("open");
}

//чтобы прикреплять свои данные к элементу
//data-price = "dog"
//получение значения data атрибута: элемент.dataset.price//dog

let getPresent = () => {
  return
  dog: 'Собака',
  book: "Книга",
  car: "Машина"
}

let presentContainer = document.getElementById("present_container);
presentContainer.addEventListener("click", showPresent);


//showPresent(объект-события)
function showPresent(event){
  console.log(event);
  let clickElem = event.target;
  console.log(clickElem);
  let presentValue = clickElem.dataSet.price;
  console.log(presentValue);
  let prices = getPresent();
  clickElem.innerText = prices[presentValue];
  clickElem.classList.add("present");
  //удаление обработчика события
  this.removeEventListener("click", showPresent);
}
