import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = createGalleryMarkup(galleryItems);
galleryEl.addEventListener('click', onGalleryLinkClick);

function onGalleryLinkClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) return;

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
  `);

  instance.show();

  // Так норм, или нет?
  window.addEventListener(
    'keydown',
    (evt) => {
      if (evt.code !== 'Escape') return;
      instance.close();
    },
    { once: true }
  );
}

function createGalleryMarkup(galleryItems) {
  return galleryItems.reduce((markup, { original, preview, description }) => {
    return markup.concat(`
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`);
  }, '');
}
