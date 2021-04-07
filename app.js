/* eslint-disable no-redeclare */
'use strict';
//Global Variables//
let parentDiv = document.getElementById('parent');
let tableElement = document.createElement('table');
let shopesArr = [];
const hours = ['06am', '07am', '08am', '09am', '10am', '11am', '12pm', '01pm', '02pm', '03pm', '04pm', '05pm', '06pm', '07pm'];
let totalCulomn = [];



//Constructer Functions//
function Store(compName, minCustomers, maxCustomers, avgCookieSale) {
  this.compName = compName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookieSale = avgCookieSale;
  this.cookiesPerHours = cookiesPerHours(minCustomers, maxCustomers, avgCookieSale);
  this.total = total(this.cookiesPerHours);
  shopesArr.push(this);
  totalCulomn.push(this.cookiesPerHours);

}
//Stores Object//
let Seattle = new Store('Seattle', 23, 65, 6.3);
let Tokyo = new Store('Tokyo', 3, 24, 1.2);
let Dubai = new Store('Dubai', 11, 38, 3.7);
let Paris = new Store('Paris', 20, 38, 2.3);
let Lima = new Store('Lima', 2, 16, 4.6);
//prototype //
Store.prototype.render = function () {
  let tableRow = document.createElement('tr');
  let tableData = document.createElement('td');
  tableData.textContent = this.compName;
  tableRow.appendChild(tableData);
  for (let i = 0; i < this.cookiesPerHours.length; i++) {
    let tableData = document.createElement('td');
    tableData.textContent = this.cookiesPerHours[i];
    tableRow.appendChild(tableData);
  }
  let tableTot = document.createElement('td');
  tableTot.textContent = this.total;
  tableRow.appendChild(tableTot);
  tableElement.appendChild(tableRow);
};
//Functions//
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function cookiesPerHours(minCustomers, maxCustomers, avgCookieSale) {
  let cookiesArr = [];
  for (let i = 0; i < hours.length; i++) {
    cookiesArr.push(Math.floor(randomNumber(minCustomers, maxCustomers) * avgCookieSale));
  }
  return cookiesArr;
}
function renderHeader() {
  let tableRow = document.createElement('tr');
  let tableCity = document.createElement('td');
  tableCity.textContent = 'City-Name';
  tableRow.appendChild(tableCity);
  for (let i = 0; i < hours.length; i++) {
    let tableData = document.createElement('td');
    tableData.textContent = hours[i];
    tableRow.appendChild(tableData);
  }
  let tableData = document.createElement('td');
  tableData.textContent = 'Daily Location Total';
  tableRow.appendChild(tableData);
  tableElement.appendChild(tableRow);
}
function totalPerHour(arr) {
  let sum = 0;
  let totalArray = [];
  for (let col = 0; col < arr[0].length; col++) {
    for (let row = 0; row < arr.length; row++) {
      sum +=arr[row][col];
    }
    totalArray.push(sum);
    sum = 0;
  }
  sum=0;
  for (let i = 0; i < totalArray.length; i++) {
    sum+=totalArray[i];
  }
  totalArray.push(sum);
  return totalArray;
}
function renderFooter(arr) {
  let tableRow = document.createElement('tr');
  let tableData = document.createElement('td');
  tableData.textContent = 'Total';
  tableRow.appendChild(tableData);
  let totals = totalPerHour(arr);
  for (let i = 0; i < totals.length; i++) {
    let tableTotalData = document.createElement('td');
    tableTotalData.textContent = totals[i];
    tableRow.appendChild(tableTotalData);
  }
  tableElement.appendChild(tableRow);
}
function total(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}




//Calling Fun//
renderHeader();
for (let i = 0; i < shopesArr.length; i++) {
  shopesArr[i].render();
}
renderFooter(totalCulomn);
parentDiv.appendChild(tableElement);
