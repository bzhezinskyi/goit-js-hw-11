import crieateNewGallery from './js/crieateNewGallery';
import crieateNextGallery from './js/crieateNextGallery';

const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input'),
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('.load-more'),
};

refs.form.addEventListener('submit', handleSubmit);
refs.loadMore.addEventListener('click', newHandleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  crieateNewGallery(refs.input.value, 2);
}

function newHandleSubmit(event) {
  event.preventDefault();
  crieateNextGallery(refs.input.value);
}
