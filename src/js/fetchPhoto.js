import axios from 'axios';

export default function fetchPhoto(query, page) {
  const URL = 'https://pixabay.com/api/';
  const key = '31260524-b97567eeef5bd60bea7834f85';
  const option =
    'image_type=photo&orientation=horizontal&safesearch=true&per_page=40';

  return axios.get(`${URL}?key=${key}&q=${query}&${option}&page=${page}`);
}
