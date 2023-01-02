import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountry } from './fetchCountries';
import { markupCountryList, markupCountryName } from './markup';

const DEBOUNCE_DELAY = 300;

const ref = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  wrap: document.querySelector('.country-info'),
};

ref.input.addEventListener(
  'input',
  debounce(handleInputCounty, DEBOUNCE_DELAY)
);

function handleInputCounty(el) {
  const nameCounrty = el.target.value.trim();

if (nameCounrty ==='')return cleareField()
  fetchCountry(nameCounrty)
    .then(countries => {
      if (countries.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
      if (countries.length >= 2 && countries.length <= 10) {
        ref.list.innerHTML = markupCountryName(countries);
        ref.wrap.innerHTML='';
      }

      if (countries.length === 1) {
       
        ref.wrap.innerHTML = markupCountryList(countries);
        ref.list.innerHTML='';
      }


    })
    .catch(error => {
        Notify.failure('Ops, there is no country with that name');
        cleareField();
      
});
}

function cleareField(){
    ref.list.innerHTML='';
    ref.wrap.innerHTML='';
}