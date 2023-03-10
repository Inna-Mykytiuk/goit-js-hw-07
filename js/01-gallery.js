import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

//Створюємо нову змінну для зберігання всіх об'єктів
// const items = [];

// /*Створюємо розмітку за допомогою ф-ї forEach, додаємо класи елементам за допомогою className*/

////-----v-1---------

// galleryItems.forEach((element) => {
//   const galleryItem = document.createElement("div");
//   galleryItem.className = "gallery__item";

//   const galleryLink = document.createElement("a");
//   galleryLink.className = "gallery__link";
//   galleryLink.href = element.original;

//   const galleryImage = document.createElement("img");
//   galleryImage.className = "gallery__image";
//   galleryImage.src = element.preview;
//   galleryImage.alt = element.description;
//   galleryImage.setAttribute("data-source", element.original);

//   //Додаємо елементи на сторінку через append
//   galleryItem.append(galleryLink);
//   galleryLink.append(galleryImage);

//   items.push(galleryItem);
// });
// gallery.append(...items);

////-----v-2---------

const createMarkup = galleryItems.reduce(
  (acc, item) =>
    acc +
    `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`,
  ""
);

gallery.insertAdjacentHTML("beforeend", createMarkup);

// Додаємо подію по кліку на document

gallery.addEventListener("click", (el) => {
  el.preventDefault();

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
});
