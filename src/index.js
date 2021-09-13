// import './sass/main.scss';
import API from './js/api';

function searchInputCountries(e) {
  const searchQuery = e.target.value;
  console.log(searchQuery);
}

const serchCountries = document.querySelector('#country');

// serchCountries.addEventListener('input', debounce(searchInputCountries, 1000));
