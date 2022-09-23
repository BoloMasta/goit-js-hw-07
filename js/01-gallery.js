import { galleryItems } from "./gallery-items.js";
// Change code below this line

// PRZYPISANIE KONTENERA GALERII DO ZMIENNEJ
const galleryContainer = document.querySelector(".gallery");

// GENEROWANIE KODU HTML GALERII
const markup = galleryItems
  .map(
    (image) =>
      `<div class="gallery__item">
       <a class="gallery__link" href="${image.original}">
        <img
          class="gallery__image"
          src="${image.preview}"
          data-source="${image.original}"
          alt="${image.description}"
        />
      </a>
    </div>`
  )
  .join("");

// WSTAWIENIE GALERII DO KONTENERA
galleryContainer.insertAdjacentHTML("afterbegin", markup);

// TWORZENIE OKNA MODALNEGO ZA POMOCĄ basicLightbox
for (let i = 0; i < galleryItems.length; i++) {
  const picture = document.querySelector(
    ".gallery :nth-child(" + (i + 1) + ")"
  );

  const pictureSource = document.querySelector(
    ".gallery :nth-child(" + (i + 1) + ") a img"
  ).dataset.source;

  picture.onclick = () => {
    event.preventDefault();

    const instance = basicLightbox.create(
      `
       <img width="1400" height="900" 
       src="${pictureSource}">
     `,

      // ZAMYKANIE ZA POMOCĄ KLAWISZA ESCAPE
      {
        onShow: (instance) =>
          document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
              instance.close(instance);
            }
          }),
      }
    );
    instance.show(instance);
  };
}
