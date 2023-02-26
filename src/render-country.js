import { Notify } from 'notiflix';

export default function renderCountries(dataCountries) {
  const countryListRef = document.querySelector('.country-list');
  const countryInfoRef = document.querySelector('.country-info');

  let countries = [];

  let quantityOfCountries = dataCountries.length;
  if (quantityOfCountries > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (quantityOfCountries > 2 && quantityOfCountries <= 10) {
    dataCountries.map(country => {
      countries += `
            <li>
                <img src = "${country.flags.svg}" class = "flag" width = "30"/>
                <span class = "country-name">${country.name}</span>
            </li>
        `;
      countryListRef.innerHTML = countries;
    });
  } else {
    let country = dataCountries[0];
    let languages = [];

    country.languages.map(language => {
      languages.push(language.name);
    });

    countryInfoRef.innerHTML = `
        
        <div>
       
         <img src = "${country.flags.svg}" class = "flag" width = "30"/>
         <h2 class = "title">${country.name}</h2>
        
        </div>

        <ul class = "country-parameters"
            <li class = "country-parameters__parameter"> 
                <h2 class = "title">Capital:</h2>
                <span>${country.capital}</span>
            </li>
            <li class = "country-parameters__parameter"> 
                <h2 class = "title">Population:</h2>
                <span>${country.population}</span>
            </li>
            
            <li class = "country-parameters__parameter"> 
                <h2 class = "title">Languages:</h2>
                <span>${languages}</span>
            </li>
            
        </ul>
    `;
    countryListRef.innerHTML = '';
  }
}
