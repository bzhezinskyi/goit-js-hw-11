const refs = {
  gallery: document.querySelector('.gallery'),
};

export default function crieateGallery(photos) {
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
}
