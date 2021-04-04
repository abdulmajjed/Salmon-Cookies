'use strict';


let hours = ['06am', '07am', '08am', '09am', '10am', '11am', '12pm', '01pm', '02pm', '03pm', '04pm', '05pm', '06pm', '07pm'];
console.log(hours);
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let parent= document.getElementById('parent');
console.log(parent);

let child = document.createElement('p');
console.log(child);
parent.appendChild(child);

child.textContent = 'Welcome ';
child.className = 'test';

let articleElement = document.createElement('article');
parent.appendChild(articleElement);

let h2Element = document.createElement('h2');
articleElement.appendChild(h2Element);
h2Element.textContent = ('Pat\'s Salmo Cookies: Sales Data');
let paraElement = document.createElement('p');
articleElement.appendChild(paraElement);
paraElement.textContent = 'Seattle';
let ulElement = document.createElement('ul');
articleElement.appendChild(ulElement);


let Seattle = {

  CompName: 'cookies',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookieSale: 6.3,
  cookiesPerHours: [],
  jobDescription: {
    title: 'cookies Factory'

  },
  getAvg: function () {

    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHours.push(Math.floor(randomNumber(this.minCustomers, this.maxCustomers) * this.avgCookieSale));
      console.log(this.cookiesPerHours);
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = [hours[i], Seattle.cookiesPerHours[i] +this.CompName];
    }
  }
};
Seattle.getAvg();

// let h3Element=document.createElement('h3');
// articleElement.appendChild(h3Element);
// paraElement.textContent='Tokyo'
let Tokyo = {

  CompName: 'cookies',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookieSale: 1.2,
  cookiesPerHours: [],
  jobDescription: {
    title: 'cookies Factory'

  },
  getAvg: function () {

    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHours.push(Math.floor(randomNumber(this.minCustomers, this.maxCustomers) * this.avgCookieSale));
      console.log(this.cookiesPerHours);
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = [hours[i], Tokyo.cookiesPerHours[i] +this.CompName];
    }
  }
};


Tokyo.getAvg();

let Dubai = {

  CompName: 'cookies',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookieSale: 3.7,

  cookiesPerHours: [],
  jobDescription: {
    title: 'cookies Factory'

  },
  getAvg: function () {

    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHours.push(Math.floor(randomNumber(this.minCustomers, this.maxCustomers) * this.avgCookieSale));
      console.log(this.cookiesPerHours);
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = [hours[i], Dubai.cookiesPerHours[i] +this.CompName];
    }
  }
};
Dubai.getAvg();






let Paris	 = {

  CompName: 'cookies',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookieSale: 2.3,

  cookiesPerHours: [],
  jobDescription: {
    title: 'cookies Factory'

  },
  getAvg: function () {

    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHours.push(Math.floor(randomNumber(this.minCustomers, this.maxCustomers) * this.avgCookieSale));
      console.log(this.cookiesPerHours);
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = [hours[i], Paris	.cookiesPerHours[i] +this.CompName];
    }
  }
};
Paris	.getAvg();



let Lima	 = {

  CompName: 'cookies',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookieSale: 4.6 ,


  cookiesPerHours: [],
  jobDescription: {
    title: 'cookies Factory'

  },
  getAvg: function () {

    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHours.push(Math.floor(randomNumber(this.minCustomers, this.maxCustomers) * this.avgCookieSale));
      console.log(this.cookiesPerHours);
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = [hours[i], Lima	.cookiesPerHours[i] +this.CompName];
    }
  }
};
Lima	.getAvg();











































