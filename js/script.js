const items  = document.querySelector('.items');
const images = ["./img/01.jpg","./img/02.jpg","./img/03.jpg","./img/04.jpg","./img/05.jpg"];

let imageActive = 0;

for (i = 0; i < images.length; i++) {
    if (i == 0) {
        items.innerHTML += `<div class="item active"><img src= "${images[i]}"></div>`;
    } else {
        items.innerHTML += `<div class="item"><img src= "${images[i]}"></div>`;
    }
}

const totalImages = document.querySelectorAll('.item').length;

document.querySelector('.next').addEventListener('click', function() {
    document.querySelector('.active').classList.remove('active');
    imageActive = (imageActive + 1) % totalImages; 
    document.querySelectorAll('.item')[imageActive].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', function() {
    document.querySelector('.active').classList.remove('active');
    imageActive = (imageActive - 1 + totalImages) % totalImages; 
    document.querySelectorAll('.item')[imageActive].classList.add('active');
});
