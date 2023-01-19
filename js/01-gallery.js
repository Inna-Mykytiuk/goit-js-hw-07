import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//Обираємо наш об'єкт через клас та додаємо в змінну

const gallery = document.querySelector('.gallery');

//Створюємо нову змінну для зберігання всіх об'єктів
const items = [];

/*Створюємо розмітку за допомогою ф-ї forEach, додаємо класи елементам за допомогою className*/

galleryItems.forEach(element => {
  
  const galleryItem = document.createElement('div');
  galleryItem.className = ('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.className = ('gallery__link');
  galleryLink.href = element.original;

  const galleryImage = document.createElement('img');
  galleryImage.className = ('gallery__image');
  galleryImage.src = element.preview;
  galleryImage.alt = element.description;
  galleryImage.setAttribute("data-source", element.original);

//Додаємо елементи на сторінку через append
  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);

  items.push(galleryItem);
})

gallery.append(...items);

// Додаємо подію по кліку 

gallery.addEventListener('click', el => {
  el.preventDefault();

  // if (el.target.tagName.toLowerCase() !== "img") {
  //   return;
  // }
  if (el.target.nodeName !== "IMG") {
    return;
  }

  //додаємо змінну для вибраної картинки
  const imgSelected = el.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
    <img src="${imgSelected}" width="800" height="600">
`);

  instance.show();

  gallery.addEventListener("keydown", (el) => {
    if (el.key === "Escape") {
      instance.close();
    }
  });  
})







