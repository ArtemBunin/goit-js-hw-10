function markupCountryName(countries) {
return countries.map( ({flags,name})=>
    ` <li class="county-item"> 
    <img class="country-img" src="${flags.svg}" alt="${name.official}" width = 40px>
    <h2 class="">${name.official}</h2>
  </li> `).join('')

};


function markupCountryList(countries){
    return countries.map( ({name,capital,population,languages,flags})=>
    `<li class="county-item"> 
    <img class="country-img" src="${flags.svg}" alt="${name.official}" width = 40px>
    <h2 class="">${name.official}</h2>
  </li> 
  <p class="country-name">Capital : ${capital}</p>
  <p class="country-name">Population : ${population}</p>
  <p class="country-name">Languages : ${Object.values(languages).join(', ')}</p>
  `
  ).join('')
    };





export {markupCountryList,markupCountryName};