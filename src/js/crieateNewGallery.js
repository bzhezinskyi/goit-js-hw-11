import fetchPhoto from './fetchPhoto';
import Notiflix from 'notiflix';

const refs = {
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('.load-more'),
};

export default function crieateNewGallery(query) {
  fetchPhoto(query, 1)
    .then(arrey => {
      const element = document.getElementById('content');
      element.scrollIntoView();

      if (arrey.data.hits.length === 0) {
        return Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        refs.gallery.innerHTML = '';

        crieateGallery(arrey.data.hits);
        Notiflix.Notify.info(
          `Hooray! We found ${
            arrey.data.totalHits - refs.gallery.children.length
          } images.`
        );
      }
    })
    .catch(error => console.log(Notiflix.Notify.failure(`${error.message}`)));
}

function crieateGallery(photos) {
  for (const photo of photos) {
    refs.gallery.innerHTML += `<div class="photo-card">
  <img src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      <b>${photo.likes}</b>
    </p>
    <p class="info-item">
      <b>Views</b>
      <b>${photo.views}</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
      <b>${photo.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
      <b>${photo.downloads}</b>
    </p>
  </div>
</div>`;
  }
  refs.loadMore.classList.remove('visually-hidden');
}
