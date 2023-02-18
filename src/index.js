import debounce from 'lodash.debounce';
import fetchCountries from './fetch-countries';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;


const inputRef = document.querySelector('#search-box')

inputRef.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY))

function searchCountries(e) {
    let getCountry = e.target.value.trim();
    fetchCountries(getCountry)
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log("error")
        })
}