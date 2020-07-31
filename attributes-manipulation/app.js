var listItems = document.querySelectorAll('li');
var divFirst = document.querySelector('div.first');

//create new html element
var h1 = document.querySelector('h1');
var newH2 = document.createElement("h2");
var newH2Content = document.createTextNode("Hi, i'm the new h2");
newH2.appendChild(newH2Content);
document.body.insertBefore(newH2, h1);

//set style properties of the new elenment
newH2.style.backgroundColor = "lightblue";
newH2.style.color = "darkblue";
newH2.style.border = "5px dotted purple";
newH2.style.fontSize = "30px";
newH2.style.display = "none";
newH2.style.display = "block";


document.querySelector('li:nth-child(3)').style.color = "gray";
document.querySelector('li:nth-child(2)').style.color = "white";
document.querySelector('li:nth-child(2)').style.backgroundColor = "black";
document.querySelector('li:nth-child(2)').style.border = " 7px dotted white";
document.querySelector('li:nth-child(2)').style.display = "block";
document.querySelector('li:nth-child(2)').style.fontSize = "20px";

document.querySelector('li:nth-child(4)').style.color = "lightblue";
document.querySelector('li:nth-child(4)').style.backgroundColor = "darkblue";
document.querySelector('li:nth-child(4)').style.border = " 3px dotted lightblue";
document.querySelector('li:nth-child(4)').style.fontSize = "25px";
document.querySelector('li:nth-child(4)').style.display = "block";

document.querySelector('li:nth-child(5)').style.color = "darkblue";
document.querySelector('li:nth-child(5)').style.fontWeight = "bold";

document.querySelector('li:nth-child(6)').style.color = "green";
document.querySelector('li:nth-child(6)').style.fontSize = "30px";
document.querySelector('li:nth-child(6)').style.fontWeight = "bold";
document.querySelector('li:last-child').style.color = "pink";




divFirst.classList.add('pickMe');

for (let i = 0; i < listItems.length; i++) {
    listEl = listItems[i];
    listEl.setAttribute('id', 'link-' + (i + 1));
    listEl.setAttribute('innerText', 'list item-' + (i + 1));
    listEl.setAttribute("textContent", 'list item-' + (i + 1));
    listEl.textContent = 'list item' + (i + 1);
    console.log(listEl.getAttribute('class') ? listEl.getAttribute('class') : "no Class");

}
divFirst.remove();