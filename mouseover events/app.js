var hover = document.querySelectorAll('.second li');
console.log(hover);
for (let j = 0; j < hover.length; j++) {

    hover[j].addEventListener('mouseover', function() {
        this.classList.add('red');
    });

    hover[j].addEventListener('mouseout', function() {
        this.classList.remove('red');
    });
}

var h1Hover = document.querySelector('h1');
h1Hover.addEventListener('mouseover', function() {

    this.classList.add('red');
});

h1Hover.addEventListener('mouseout', function() {
    this.classList.remove('red');
});