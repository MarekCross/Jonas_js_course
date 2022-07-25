// 'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// /////////////////////////////////////
// //oldschool
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `<article class="country">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData('poland');
//
//AJAX callback hell

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
/////////////////////////////////////

// const getCountryAndNeighbour = function (country) {
//   //ajax call country one
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     //get neighbour country
//     const neighbour = data.borders?.[0];
//     console.log(neighbour);

//     if (!neighbour) return;

//     //ajax call country neighbour
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryAndNeighbour('usa');
//
//251
//old way
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//new way
//conpilated version
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };
//new better version

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     //country 1
//     .then(response => {
//       console.log(response);
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data[0]);
//       renderCountry(data[0]);
//       //country 2
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong! ${err} `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// const getJson = function (url, errorMsg = 'Something went wrong!') {
//   return fetch(url).then(response => {
//     console.log(response);
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   getJson(`https://restcountries.com/v2/name/${country}`, 'lol')
//     .then(data => {
//       renderCountry(data[0]);
//       //country 2
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) throw new Error('No neighbours!');

//       return getJson(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong! ${err} `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(info => {
//       console.log(info);
//       if (!info.ok) throw new Error(`On 3 request in minute, y a too fast`);
//       return info.json();
//     })
//     .then(data => {
//       getCountryData(data.country);
//       console.log(`You are in ${data.country}`);
//     })
//     .catch(error => console.log(`${error} : This is an error.`));
// };

// btn.addEventListener('click', function () {
//   whereAmI('52.508', '13.381');
// });
console.log('Test start');
setTimeout(() => console.log('0 sec'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
console.log('Test end');
