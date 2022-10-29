

function getCode(){
    const CountryCodes = require('country-code-info');
    country_name = document.getElementById('store').innerHTML
    let country = CountryCodes.findCountry({name:country_name});
    document.getElementById('flag').src = `https://flagcdn.com/${country.a2}.svg`
}
