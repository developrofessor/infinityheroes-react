const initializeGallery = gallery => {
    const images = gallery.querySelectorAll('.image');
    let selectedImage = Math.floor((images.length - 1) / 2);
    images[selectedImage].classList.add('active');
    
    function scaleImages() {
        for (let i = selectedImage; i < images.length; i++) {
            const scale = 1 - (i - selectedImage) / (images.length) / 2;
            images[i].style.transform = 'scale(' + scale + ')';
            images[i].style.zIndex = 1 - (i - selectedImage - images.length);
        }
        for (let i = 0; i < selectedImage; i++) {
            const scale = 1 + (i - selectedImage) / (images.length) / 2;
            images[i].style.transform = 'scale(' + scale + ')';
            images[i].style.zIndex = images.length + 1 + (i - selectedImage);
        }
    }

    images.forEach((image, i) => {
        image.addEventListener('mouseover', () => {
            gallery.querySelector('.image.active').classList.remove('active');
            image.classList.add('active');
            selectedImage = i;
            scaleImages();
        });
    });

    scaleImages();
}