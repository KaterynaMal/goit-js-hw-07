import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

function createImagesList() {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

galleryList.insertAdjacentHTML("beforeend", createImagesList());

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.tagName === "IMG") {
    lightbox.open();
  }
});
