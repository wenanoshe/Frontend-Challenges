/* == Function to insert an image */
const createImage = () => {
    const img = document.createElement('IMG');
    img.classList.add('image');
    
    fetch('https://picsum.photos/300/400').then(response => {
        img.setAttribute('src', response.url);
    });
    return img;
}

const loadImages = (times, imagesContainer) => {
    let fragment = document.createDocumentFragment();
    for(let i = 0; i < times; i++) {
        let img = createImage();
        fragment.appendChild(img);
        if(i == times-1) observer.observe(img); /* with this conditional 
            we observe when the last element is inserted in the fragment
        */
    }
    imagesContainer.appendChild(fragment);
}

const checkVisivility = (entries) => {
    if (entries[0].isIntersecting) loadImages(6, gallery);
    /* If the last img is been intersected, loads 5 more images*/
}


/* === Function's end === */

const gallery = document.querySelector('.gallery');

const observer = new IntersectionObserver(checkVisivility);

loadImages(9, gallery);