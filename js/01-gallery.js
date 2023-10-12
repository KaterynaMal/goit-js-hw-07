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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}
galleryList.insertAdjacentHTML("beforeend", createImagesList());

galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.tagName === "IMG") {
    const originalImageUrl = event.target.dataset.source;
    const instance = basicLightbox.create(
      `<img src="${originalImageUrl}" width="800" height="600">`
    );

    instance.element().innerHTML = `<img src="${originalImageUrl}" width="800" height="600">`;
    console.log(instance);

    instance.show();
  }
});
