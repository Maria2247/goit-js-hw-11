import { createGalleryMarkup } from './js/render-functions.js';
import { fetchData } from './js/pixabay-api.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryStyles = new SimpleLightbox('.gallery-page a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const galleryElements = document.querySelector('.gallery-page');
const form = document.querySelector('.search-form');
const loaderEl = document.querySelector('.loader');

function onSubmitForm(event) {
  event.preventDefault();
  const searchValue = event.currentTarget.elements.userInput.value.trim();

  if (searchValue === '') {
    galleryElements.innerHTML = '';
    event.currentTarget.reset();
    iziToast.warning({
      message: 'Type your query, please!',
      position: 'center',
      timeout: 3000,
    });
    return;
  }
  galleryElements.innerHTML = '';
  loaderEl.classList.remove('is-hidden');
  fetchData(searchValue)
    .then(imagesData => {
      const imgArray = imagesData.hits;
      if (imgArray.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          timeout: 3000,
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: '#fafafb',
          messageSize: '16px',
          messageLineHeight: '1.5',
          iconColor: '#fafafb',
        });
      } else {
        galleryElements.innerHTML = createGalleryMarkup(imgArray);

        galleryStyles.refresh();
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      event.target.reset();
      loaderEl.classList.add('is-hidden');
    });
}

form.addEventListener('submit', onSubmitForm);
