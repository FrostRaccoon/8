// Задание 1:

// ```html
// <button class="btn">Кнопка</button>
// <img src="https://damion.club/uploads/posts/2022-11/1668774241_damion-club-p-kotik-programmist-instagram-2.jpg" alt="котик-программист">
// ```

// 1. После того как все ресурсы на странице были загружены, необходимо вывести
// сообщение в консоль "Все ресурсы загружены".

window.addEventListener("load", () => {
  console.log(`Все ресурсы загружены`);
});

// 2. После того как все теги были созданы на странице, необходимо вывести
// сообщение: “Все теги созданы”.

document.addEventListener(`DOMContentLoaded`, () => {
  console.log(`Все теги созданы`);
});

// 3. Добавить событие onclick для тега button в html, которое выводит в консоль
// текст “событие onclick”.

const buttonEl = document.querySelector(`button`);

buttonEl.onclick = () => {
  console.log(`событие onclick`);
};

// 4. Добавить событие addEventListener для тега button в html, которое выводит
// в консоль текст “событие addEventListener”.

buttonEl.addEventListener(`click`, () => {
  console.log(`событие addEventListener`);
});

/*Задание 2:
 
```html
<div class="wrapper">
  <button class="btn" data-num="1">Кнопка 1</button>
  <button class="btn" data-num="2">Кнопка 2</button>
  <button class="btn" data-num="3">Кнопка 3</button>
</div>
```
 
Необходимо сделать так, чтобы при клике на какую-либо кнопку (их может быть 
и больше), выводилось в консоль сообщение, в котором было написано, сколько раз мы кликнули на каждую из кнопок. Пример сообщения:
 
Количество кликов по кнопке 1 равно 2;
Количество кликов по кнопке 3 равно 4;
 
Данный пример означает, что по кнопке 1 мы кликнули два раза, по кнопке 3 кликов было четыре, а по кнопке два мы ни разу не кликнули.
Сообщения должны выводиться в порядке увеличения числа у кнопки.
*/

const divWrapperEl = document.querySelector(".wrapper");

const obj = {};

divWrapperEl.addEventListener(`click`, (event) => {
  if (!event.target.classList.contains(`btn`)) {
    return;
  }

  if (obj[event.target.dataset.name] === undefined) {
    obj[event.target.dataset.name] = 1;
  } else {
    obj[event.target.dataset.name]++;
  }

  let massage = ``;
  for (const btnName in obj) {
    massage = `${massage}Количество кликов по кнопке ${btnName} = ${obj[btnName]}\n`;
  }
  console.log(massage);
});

/*
Задание 3:
 
```html
<button class="btn1">Кнопка 1</button>
<button class="btn1">Кнопка 2</button>
<button class="btn1">Кнопка 3</button>
```
 
1. При клике на кнопку 1, должен создаться тег h1 в начале тега body, с 
текстом "Новый заголовок".
2. При клике на кнопку 2, заголовок из первого пункта должен быть удален.
3. При наведении мыши на кнопку 3, в консоль должен выводиться текст “вы навели на данную кнопку” , 
как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”.
*/

const btnEls = document.querySelectorAll(`.btn1`);

const firstBtnEl = document.querySelector(`.btn1`);

const h1El = document.createElement("h1");
h1El.textContent = `Новый заголовок`;

firstBtnEl.addEventListener("click", () => {
  document.body.prepend(h1El);
});

btnEls[1].addEventListener("click", () => {
  h1El.remove();
});

btnEls[2].addEventListener(`mouseover`, () => {
  console.log(`вы навели на данную кнопку`);
});

btnEls[2].addEventListener(`mouseout`, () => {
  console.log(`Наведения на кнопку больше нет`);
});

/*
Задание 4:
 
```html
<ul>
  <li>Текст 1</li>
  <li>Текст 2</li>
  <li>Текст 3</li>
</ul>
<button class="add_btn">Добавить</button>
<button class="delete_btn">Удалить</button>
```
 
1. При клике на кнопку "Добавить", необходимо добавить новый элемент li, в конец списка с текстом “новый элемент списка”.
2. При клике на кнопку "Удалить", необходимо удалить первый элемент из списка.
*/

const addBtnEl = document.querySelector(`.add_btn`);
const deleteBtnEl = document.querySelector(`.delete_btn`);

const ulEl = document.querySelector(`ul`);

addBtnEl.addEventListener("click", () => {
  const liEl = document.createElement("li");
  liEl.textContent = `новый элемент списка`;
  ulEl.appendChild(liEl);
});

deleteBtnEl.addEventListener("click", () => {
  if (ulEl.firstElementChild) {
    ulEl.firstElementChild.remove();
  } else {
    console.log(`Нечего удалять`);
  }
});
