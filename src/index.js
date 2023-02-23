import debounce from 'lodash.debounce';
import fetchCountries from './fetch-countries';
import './css/styles.css';
import { Notify } from 'notiflix';
import renderCountries from './render-country';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('#search-box');
const countryListRef = document.querySelector('.country-list')
const countryInfoRef = document.querySelector('.country-info')
inputRef.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY));

function searchCountries(e) {
  let getCountry = e.target.value.trim();
  if (getCountry) {
    fetchCountries(getCountry)
      .then(data => {
        renderCountries(data) 
        // ssad
      })
      .catch(error => {
        Notify.failure('there is no such country');
      });
    
  }
  else{
    countryListRef.innerHTML = "";
    countryInfoRef.innerHTML = "";
  }
}
