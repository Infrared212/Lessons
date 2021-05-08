'use strict';

//все формы в документе
let form = document.forms.lesson;//lesson - значение атрибута name нужной формы
console.log(form);

//доступ к элементам формы по значению атрибута name
//form.elements - все элементы формы
//login - значение атрибута name нужного элемента формы
let loginInput = form.elements.login;
console.log(loginInput);
console.log(loginInput.value);
loginInput.value = "qwerty";

let passwordInput = form.elements.pwd;
console.log(passwordInput)

let colorRadios = form.elements.color;
for (let radio of colorRadios){
  radio.addEventListener("focus", changeColor); // focus  работает на чекбоксах и радиокнопках
}
function changeColor(){
  form.elements.checkbox_fieldset.style.background = this.value;
}

let langCheckBoxes = form.elements["lang[]""];
for (let checkBos of langCheckBoxes){
  if (checkBox.checked)
  console.log(checkBox.value)
}
let select = form.elements.countries;
for (let option of select){
  if (option.selected) console.log(option.value)
}


// событие - отправка формы

form.addEventListener("submit", submitForm);//
 function submitForm(event){//чтобы отменить событие по умолчанию мы обращаемся к объекту события - вызываем метод
   event.preventDefault()
   console.log(loginInput.value);
   concole.log(passwordInput);
 }
