import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = createGalleryMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery .gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryMarkup(galleryItems) {
  return galleryItems.reduce((markup, { original, preview, description }) => {
    return markup.concat(`
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`);
  }, '');
}
