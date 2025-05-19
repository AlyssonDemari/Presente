const images = [
    { 'id': '1', 'url': '../img/LOVE.jpg' },
    { 'id': '2', 'url': '../img/LOVE2.jpg' },
    { 'id': '3', 'url': '../img/LOVE3.jpg' },
    { 'id': '4', 'url': '../img/LOVE4.jpg' },
    { 'id': '5', 'url': '../img/loveee.jpg' },
];

const containerItens = document.querySelector('#container-item');
let currentIndex = 0;

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class='item'>
                <img src='JS/${image.url}'/>
            </div>
        `;
    });
};

loadImages(images, containerItens);

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
};

const updateCarousel = () => {
    containerItens.style.transform = `translateX(-${currentIndex * 100}%)`;
};

setInterval(nextSlide, 2000);

