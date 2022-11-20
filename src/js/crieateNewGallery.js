import fetchPhoto from './fetchPhoto';

const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input'),
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('.load-more'),
};

export default function crieateNewGallery(query, page) {
  fetchPhoto(query, page).then(arrey => {
    crieateGallery(arrey.hits);
  });
}

function crieateGallery(photos) {
  refs.gallery.innerHTML = '';

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
