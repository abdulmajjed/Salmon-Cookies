'use strict';


const hours = ['06am', '07am', '08am', '09am', '10am', '11am', '12pm', '01pm', '02pm', '03pm', '04pm', '05pm', '06pm', '07pm'];
console.log(hours);
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let parent= document.getElementById('parent');
console.log(parent);

let child = document.createElement('p');
console.log(child);
parent.appendChild(child);

child.textContent = '';
child.className = 'test';

let articleElement = document.createElement('article');
parent.appendChild(articleElement);
let h2Element = document.createElement('h2');
articleElement.appendChild(h2Element);
h2Element.textContent = ('Pat\'s Salmo Cookies: Sales Data');
let paraElement = document.createElement('p');
articleElement.appendChild(paraElement);
// paraElement.textContent = '';



const Seattle = {
  CompName: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookieSale: 6.3,
  cookiesPerHours:[],
  total:0,
  getAvg: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHours.push(Math.floor(randomNumber(this.minCustomers, this.maxCustomers) * this.avgCookieSale));
      this.total+=this.cookiesPerHours[i];
    }
    console.log(this.cookiesPerHours);
  },
  render:function(){
    let parent=document.getElementById('parent');
    console.log(parent);
    let nameElement=document.createElement('h3');
    parent.appendChild(nameElement);
    nameElement.textContent=this.CompName;
    let ulElement=document.createElement('ul');
    parent.appendChild(ulElement);
    for (let i = 0; i <hours.length; i++) {
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${hours[i]}: ${this.cookiesPerHours[i]} cookies`;

    }
    let total=document.createElement('li');
    ulElement.appendChild(total);
    total.textContent=`Total: ${this.total} cookies`;
  }
};
Seattle.getAvg();
Seattle.render();



const Tokyo = {
  CompName: 'Tokyo',
  minCustomers:3,
  maxCustomers:24,
  avgCookieSale:1.2,
  cookiesPerHours:[],
  total:0,
  getAvg: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHours.push(Math.floor(randomNumber(this.minCustomers, this.maxCustomers) * this.avgCookieSale));
      this.total+=this.cookiesPerHours[i];
    }
    console.log(this.cookiesPerHours);
  },
  render:function(){
    let parent=document.getElementById('parent');
    console.log(parent);
    let nameElement=document.createElement('h3');
    parent.appendChild(nameElement);
    nameElement.textContent=this.CompName;
    let ulElement=document.createElement('ul');
    parent.appendChild(ulElement);
    for (let i = 0; i <hours.length; i++) {
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${hours[i]}: ${this.cookiesPerHours[i]} cookies`;

    }
    let total=document.createElement('li');
    ulElement.appendChild(total);
    total.textContent=`Total: ${this.total} cookies`;
  }
};
Tokyo.getAvg();
Tokyo.render();

const Dubai = {
  CompName: 'Dubai',
  minCustomers:11,
  maxCustomers:38,
  avgCookieSale:3.7,
  cookiesPerHours:[],
  total:0,
  getAvg: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHours.push(Math.floor(randomNumber(this.minCustomers, this.maxCustomers) * this.avgCookieSale));
      this.total+=this.cookiesPerHours[i];
    }
    console.log(this.cookiesPerHours);
  },
  render:function(){
    let parent=document.getElementById('parent');
    console.log(parent);
    let nameElement=document.createElement('h3');
    parent.appendChild(nameElement);
    nameElement.textContent=this.CompName;
    let ulElement=document.createElement('ul');
    parent.appendChild(ulElement);
    for (let i = 0; i <hours.length; i++) {
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${hours[i]}: ${this.cookiesPerHours[i]} cookies`;

    }
    let total=document.createElement('li');
    ulElement.appendChild(total);
    total.textContent=`Total: ${this.total} cookies`;
  }
};
Dubai.getAvg();
Dubai.render();

const Paris = {
  CompName: 'Paris',
  minCustomers:11,
  maxCustomers:38,
  avgCookieSale:3.7,
  cookiesPerHours:[],
  total:0,
  getAvg: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHours.push(Math.floor(randomNumber(this.minCustomers, this.maxCustomers) * this.avgCookieSale));
      this.total+=this.cookiesPerHours[i];
    }
    console.log(this.cookiesPerHours);
  },
  render:function(){
    let parent=document.getElementById('parent');
    console.log(parent);
    let nameElement=document.createElement('h3');
    parent.appendChild(nameElement);
    nameElement.textContent=this.CompName;
    let ulElement=document.createElement('ul');
    parent.appendChild(ulElement);
    for (let i = 0; i <hours.length; i++) {
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${hours[i]}: ${this.cookiesPerHours[i]} cookies`;

    }
    let total=document.createElement('li');
    ulElement.appendChild(total);
    total.textContent=`Total: ${this.total} cookies`;
  }
};
Paris.getAvg();
Paris.render();


const Lima = {
  CompName: 'Lima',
  minCustomers:2,
  maxCustomers:16,
  avgCookieSale:4.6,
  cookiesPerHours:[],
  total:0,
  getAvg: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHours.push(Math.floor(randomNumber(this.minCustomers, this.maxCustomers) * this.avgCookieSale));
      this.total+=this.cookiesPerHours[i];
    }
    console.log(this.cookiesPerHours);
  },
  render:function(){
    let parent=document.getElementById('parent');
    console.log(parent);
    let nameElement=document.createElement('h3');
    parent.appendChild(nameElement);
    nameElement.textContent=this.CompName;
    let ulElement=document.createElement('ul');
    parent.appendChild(ulElement);
    for (let i = 0; i <hours.length; i++) {
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${hours[i]}: ${this.cookiesPerHours[i]} cookies`;

    }
    let total=document.createElement('li');
    ulElement.appendChild(total);
    total.textContent=`Total: ${this.total} cookies`;
  }
};
Lima.getAvg();
Lima.render();

































