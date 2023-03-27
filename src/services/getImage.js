const BASE_URL = 'https://pixabay.com/api';
const KEY = '33445990-2dd1c7e9397bdf317f172af9d';
const PAGE = '1';
const PER_PAGE = '12';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';

export  const getImages = query => {
  return fetch(
    `${BASE_URL}/?q=${query}&page=${PAGE}&key=${KEY}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&per_page=${PER_PAGE}`)
};

