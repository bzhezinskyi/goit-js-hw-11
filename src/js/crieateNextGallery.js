import fetchPhoto from './fetchPhoto';
import Notiflix from 'notiflix';

const refs = {
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('.load-more'),
};
let page = 2;

export default function crieateNextGallery(query) {
  fetchPhoto(query, page)
    .then(arrey => {
      if (arrey.data.totalHits === refs.gallery.children.length) {
        endGallery();
      } else {
      }
      crieateGallery(arrey.data.hits);
      Notiflix.Notify.info(
        `Hooray! We found ${
          arrey.data.totalHits - refs.gallery.children.length
        } images.`
      );
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
  page += 1;
}

function endGallery() {
  refs.loadMore.classList.add('visually-hidden');
  Notiflix.Notify.info(
    "We're sorry, but you've reached the end of search results."
  );
}
