import { createGalleryMarkup } from './js/render-functions.js';
import { fetchData } from './js/pixabay-api.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const galleryElements = document.querySelector('.gallery-page');
const form = document.querySelector('.search-form');

function onSearchForm(event) {
  event.preventDefault();
  const searchValue = event.currentTarget.elements.userInput.value.trim();
  console.log('searchValue: ', searchValue);

  if (searchValue === '') {
    galleryElements.innerHTML = '';
    event.currentTarget.reset();
    iziToast.warning({
      message: 'Type your query, please!',
      position: 'center',
      timeout: 2000,
    });
    return;
  }
  galleryElements.innerHTML = '';

  fetchData(searchValue)
    .then(imagesData => {
      const imgArray = imagesData.hits;
      if (imgArray.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          timeout: 1000,
          position: 'center',
        });
      } else {
        galleryElements.innerHTML = createGalleryMarkup(imgArray);
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      event.currentTarget.reset();
    });
}

form.addEventListener('submit', onSearchForm);
