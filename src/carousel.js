document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const cards = Array.from(track.children);
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    const cardWidth = cards[0].offsetWidth + 25; //gap
    let index = 0;

    //clona o primeiro e último para o efeito infinito
    const firstClone = cards[0].cloneNode(true);
    const lastClone = cards[cards.length - 1].cloneNode(true);

    track.appendChild(firstClone);
    track.insertBefore(lastClone, cards[0]);

    let position = -cardWidth;  
    track.style.transform = `translateX(${position}px)`;

    function moveNext() {
        if (index >= cards.length - 1) {
            index = 0;
            position = -cardWidth;
            track.style.transition = "none";
            track.style.transform = `translateX(${position}px)`;
            setTimeout(() => {
                index++;
                position -= cardWidth;
                track.style.transition = "0.4s ease";
                track.style.transform = `translateX(${position}px)`;
            }, 20);
        } else {
            index++;
            position -= cardWidth;
            track.style.transition = "0.4s ease";
            track.style.transform = `translateX(${position}px)`;
        }
    }

    function movePrev() {
        if (index <= 0) {
            index = cards.length - 1;
            position = -(cardWidth * cards.length);
            track.style.transition = "none";
            track.style.transform = `translateX(${position}px)`;
            setTimeout(() => {
                index--;
                position += cardWidth;
                track.style.transition = "0.4s ease";
                track.style.transform = `translateX(${position}px)`;
            }, 20);
        } else {
            index--;
            position += cardWidth;
            track.style.transition = "0.4s ease";
            track.style.transform = `translateX(${position}px)`;
        }
    }

    nextBtn.addEventListener("click", moveNext);
    prevBtn.addEventListener("click", movePrev);
});