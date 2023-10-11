import { galleryItems } from "./gallery-items.js";
import basicLightbox from 'basiclightbox';

console.log(galleryItems);



const galleryList = document.querySelector(".gallery");

function createImagesList() {
  return galleryItems
    .map(({description, original, preview}) => {
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

console.log(createImagesList);

galleryList.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName === "IMG") {
        const originalImageUrl = e.target.dataset.source;
        const instance = basicLightbox.create(`<img src="${original}" width="800" height="600">`);
        instance.show();
    }
    });

instance.show()