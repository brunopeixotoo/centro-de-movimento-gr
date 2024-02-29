document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const container = carousel.querySelector(".carousel-container");
    const prevButton = carousel.querySelector(".prev-button");
    const nextButton = carousel.querySelector(".next-button");
    const images = container.querySelectorAll("img");

    let currentIndex = 0;
    const totalImages = images.length;
    console.log(totalImages);
    let imageWidth = images[0].clientWidth; // Largura inicial da imagem

    function moveToIndex(index) {
        if (index < 0) {
            currentIndex = totalImages - 1;
        } else if (index >= totalImages) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
    
        // Ajuste o deslocamento quando estiver na última imagem para evitar passar por uma área em branco
        let offset = currentIndex * imageWidth;
        if (currentIndex === totalImages - 1) {
            offset = (totalImages - 1) * imageWidth;
        }
        container.style.transform = `translateX(-${offset}px)`;
    
        // Desativa o botão "Next" quando estiver na última imagem
        if (currentIndex === totalImages - 1) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    }
    
    function moveToPrev() {
        moveToIndex(currentIndex - 1);
    }
    
    function moveToNext() {
        moveToIndex(currentIndex + 1);
    }
    

    prevButton.addEventListener("click", moveToPrev);
    nextButton.addEventListener("click", moveToNext);

    // Desativa o botão "Next" ao inicializar se estiver na última imagem
    if (currentIndex === totalImages - 1) {
        nextButton.disabled = true;
    }

    // Ajusta o tamanho do contêiner inicialmente
    adjustContainerSize();

    // Ajusta o tamanho do contêiner dinamicamente quando a janela é redimensionada
    window.addEventListener("resize", adjustContainerSize);

    function adjustContainerSize() {
        imageWidth = container.clientWidth; // Atualiza a largura da imagem com a largura do contêiner
        images.forEach(img => {
            img.style.width = `${imageWidth}px`;
        });
        moveToIndex(currentIndex); // Re-posiciona o carrossel para a imagem atual após o redimensionamento
    }
});
