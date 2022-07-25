var button = document.querySelector("button");
/*console.log(document);   выводить в консоль */
button.addEventListener('click', function (event) {
  console.log("клик по кнопке!");  /*  отслеживаем клики по кнопке */
  event.target.classList.add("active"); /* вешаем кнопке класс active */
  event.target.classList.remove("active");  /* удаляем класс */
  event.target.classList.toggle("active");  /*  проверка,если класса нет-добавляеться, если класс
   есть -то удаляеться! */
});  

