import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// PRZYPISANIE KONTENERA GALERII DO ZMIENNEJ
const galleryContainer = document.querySelector(".gallery");

// STWORZENIE KODU HTML GALERII
const markup = galleryItems
  .map(
    (image) =>
      `
       <a class="gallery__item" href="${image.original}">
        <img
          class="gallery__image"
          src="${image.preview}"
          alt="${image.description}"
        />
      </a>
    `
  )
  .join("");

// WSTAWIENIE GALERII DO KONTENERA
galleryContainer.insertAdjacentHTML("afterbegin", markup);

// DODANIE DO GALERII BIBLIOTEKI SimpleLightbox
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
