import fetchPhoto from './fetchPhoto';
import crieateGallery from './crieateGallery';
import crieatePage from './crieatePage';
import Notiflix from 'notiflix';

const refs = {
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('.load-more'),
};
export default function crieateNextGallery(query) {
  fetchPhoto(query, crieatePage(2)).then(arrey => {
    if (arrey.data.totalHits === refs.gallery.children.length) {
      endGallery();
    } else {
      crieateGallery(arrey.data.hits);
      Notiflix.Notify.info(
        `Hooray! We found ${
          arrey.data.totalHits - refs.gallery.children.length
        } images.`
      );
      page += 1;
    }
  });
}

function endGallery() {
  refs.loadMore.classList.add('visually-hidden');
  Notiflix.Notify.info(
    "We're sorry, but you've reached the end of search results."
  );
}
