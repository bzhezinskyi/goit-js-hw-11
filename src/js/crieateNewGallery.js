import fetchPhoto from './fetchPhoto';
import crieateGallery from './crieateGallery';
import crieatePage from './crieatePage';
import Notiflix from 'notiflix';

const refs = {
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('.load-more'),
};

export default function crieateNewGallery(query) {
  fetchPhoto(query, crieatePage(1))
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
        refs.loadMore.classList.remove('visually-hidden');
      }
    })
    .catch(error => console.log(Notiflix.Notify.failure(`${error.message}`)));
}
