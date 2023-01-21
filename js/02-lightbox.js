import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

//Створюємо нову змінну для зберігання всіх об'єктів
const items = [];

galleryItems.forEach((element) => {
  const galleryLink = document.createElement("a");
  galleryLink.className = "gallery__link";
  galleryLink.href = element.original;


  const galleryImage = document.createElement("img");
  galleryImage.className = "gallery__image";
  galleryImage.src = element.preview;
  galleryImage.alt = element.description;
  galleryImage.setAttribute("title", element.description);
  

  galleryLink.append(galleryImage);
  items.push(galleryLink);
});
gallery.append(...items);

new SimpleLightbox(".gallery a", {
  animationSpeed:	250,
});
