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
// console.log('Test start');
// setTimeout(() => console.log('0 sec'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// console.log('Test end');
///
//259 promises
//
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('you lottery is running:');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('you win congrats');
//     } else {
//       reject(new Error('you lost your money'));
//     }
//   }, 2000);
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(2)
//   .then(() => {
//     console.log('I waited 2 sec');
//     return wait(1);
//   })
//   .then(() => console.log('i waited 1 sec'));
///260

// const getPosition = function () {
//   return new Promise(function (resolve, rejected) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => rejected(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, rejected);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const WhereAmI2 = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })

//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(`you are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`country not found`);
//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} lols`));
// };
// btn.addEventListener('click', WhereAmI2);
//coding chellenge 2
// const imgContainer = document.querySelector('.images');

// const wait = function (time) {
//   return new Promise(resolve => {
//     setTimeout(resolve, time * 1000);
//   });
// };

// const createImage = function (imgPath) {
//   return new Promise((resolve, reject) => {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('img not found'));
//     });
//   });
// };
// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log(currentImg);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(`New error: ${err}`));
//
//262
//

const getPosition = function () {
  return new Promise(function (resolve, rejected) {
    navigator.geolocation.getCurrentPosition(resolve, rejected);
  });
};

const WhereAmI3 = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('problem getting location data resgo');
    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('problem getting location data res');
    const data = await res.json();
    renderCountry(data[0]);
    return `You are in ${dataGeo.country}`;
  } catch (err) {
    console.log(err);
    renderError(`sometinh went wrong'${err}`);
    throw err;
  }
};
console.log(`1: Will get location`);
// const city = WhereAmI3();
// console.log(city);
// WhereAmI3()
//   .then(city => console.log(city))
//   .catch(err => console.error(err))
//   .finally(() => console.log(`2. finish getting location`));
//TO NIŻEJ TO JEST TO SAMO CO TO WYŻEJ!!!
(async function () {
  try {
    const city = await WhereAmI3();
    console.log(`2. ${city}`);
  } catch (Err) {
    console.error(`2. ${Err.message}`);
  }
  console.log(`3. finish`);
})();
