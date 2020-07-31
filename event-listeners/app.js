var divMyID = document.querySelector('#myID');
var h1 = document.querySelector('h1');
h1.addEventListener('click', style);



function style() {
    h1.style.fontSize = "35px";
    h1.style.border = "4px dotted green";
    h1.style.padding = "2%";
    h1.style.backgroundColor = "yellow";
    h1.style.color = "darkblue";
}

var listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++) {
    listEl = listItems[i];
    listEl.addEventListener('click', backgroundColor);
}


function backgroundColor() {
    this.style.backgroundColor = "green";

}

var newImage1 = document.createElement('img');
newImage1.src = "http://brackets.io/img/hero.png";
newImage1.width = '100';
//var newImage1SRC = document.setAttribute('src', 'https://brackets.io/img/hero.png');
//var newImage1width = document.setAttribute('width', '100px');
//newImage1.appendChild(newImage1SRC);
//newImage1.appendChild(newImage1width);
document.body.insertBefore(newImage1, divMyID);

var newImage2 = document.createElement('img');
newImage2.src = "http://www.discoveryvip.com/img/pic.JPG";
newImage2.width = '100';
document.body.insertBefore(newImage2, divMyID);

var newImage3 = document.createElement('img');
newImage3.src = "http://upload.wikimedia.org/wikipedia/commons/5/5a/DOM-model.svg";
newImage3.width = '100';
document.body.insertBefore(newImage3, divMyID);

const imgList = document.querySelectorAll('img');
for (let j = 0; j < imgList.length; j++) {
    imgList[j].addEventListener('click', image)
}


function image() {
    window.open(this.src, 'My Image', 'resizable=yes, scrollbars=yes,width=600,height=600');
}



var mainList = document.querySelector('ul.mainList');
var inputEl = document.querySelector('input');
var add = document.querySelector('button');
clicker.addEventListener('click', function() {
    if (inputEl.value.length >= 4) {

        let li = document.createElement('li');
        li.textContent = inputEl.value;
        li.style.color = "green";
        mainList.appendChild(li)
        inputEl.value = "";
        inputEl.style.backgroundColor = "white"

    } else {
        inputEl.style.backgroundColor = "red"
    }
})

var changeColor = document.querySelector('button.color');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}


changeColor.addEventListener('click', function() {
    let bgColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = bgColor;
})


var changeDiv = document.querySelectorAll('div.change');

function ranColor() {
    return 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')'
}

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

for (let i = 0; i < changeDiv.length; i++) {
    changeDiv[i].addEventListener('click', function() {
        this.style.backgroundColor = ranColor();
        this.style.color = ranColor();
    })
}