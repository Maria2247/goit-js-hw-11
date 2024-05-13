import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const createGalleryMarkup = images => {
  return images
    .map(
      image => `
    <li class="image-card">
        <a href="${image.largeImageURL}"
          ><img src="${image.webformatURL}" alt="${image.tags}"/>
        </a>
        <ul class="img-descr">
          <li class="descr-el">Likes ${image.likes}</li>
          <li class="descr-el">Views ${image.views}</li>
          <li class="descr-el">Comments ${image.comments}</li>
          <li class="descr-el"> Downloads ${image.downloads}</li>
        </ul>
      </li>`
    )
    .join('');
};

const galleryStyles = new SimpleLightbox('.gallery-page a', {
  captionsData: 'alt',
  captionDelay: 250,
});
// galleryStyles.refresh();
