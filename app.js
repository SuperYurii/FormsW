const form = document.querySelector("form"); //Обращаемся к ДОМ что б выбрать форм

form.addEventListener("submit", (event) => {
  // Эта строка добавляет обработчик события на форму, который будет срабатывать, когда пользователь отправит форму (нажмет кнопку "submit")
  event.preventDefault(); //event.preventDefault() — этот метод отменяет стандартное поведение браузера, которое связано с событием.
  const formData = new FormData(form); // создает новый объект FormData на основе формы.
  console.log(formData); //  выводит объект formData в консоль. Ничего не выведет если до этого мы ничего не ввели в поля ввода в нашей форме
  const jsObjectPlease = Object.fromEntries(formData); // мы создаём новую константу,присваиваем ей любое имя и с помощью Метода Object.fromEntries(formData); создаем новый объект который удобен для JS
  console.log(jsObjectPlease); // Выводим информацию в консоль в новом формает
});
