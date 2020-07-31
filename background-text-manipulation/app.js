var myId = document.querySelector('#myID');
var divFirst = document.querySelector('div.first');
var pFirst = document.querySelector('p.first');
var listItems = document.querySelectorAll('li');
var spanItems = document.querySelectorAll('span');
console.log(spanItems);

for (let i = 0; i < spanItems.length; i++) {
    let spanEl = spanItems[i];
    let listEl = listItems[i];
    spanEl.textContent = i + 1 + ' Updated ';
    listEl.textContent = 'link ' + (i + 1) + ' updated!';


}

console.log(listItems);
divFirst.style.backgroundColor = "red";
myId.style.backgroundColor = "green";
pFirst.style.backgroundColor = "gray";



listItems.forEach(function(el, index) {
    el.style.backgroundColor = 'rgb(' + (5 * index) + ',' + (25 * index) + ',' + (30 * index) + ')';

});