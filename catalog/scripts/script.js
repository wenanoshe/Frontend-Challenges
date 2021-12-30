/* ==== Add Products ==== */
let counter = 0;

const addNewProduct = () => {
    let html = `
    <div class="card">
        <div class="card__input-box">
            <img id="uploadedImage-${counter}" class="card__image">
            <label class="card__label" for="uploadImage-${counter}">
                <span>Upload image</span>
                <i class="fas fa-upload"></i>
            </label>
            <input class="card__input" id="uploadImage-${counter}" type="file" accept="image/png, image/gif, image/jpeg">
        </div>
        <div class="card__info">
            <h3 class="card__productTitle" contenteditable="true">Set a product title</h3>
            <p class="card__productDescription" contenteditable="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nemo?</p>
        </div>
    </div>
    `;
    document.querySelector('.catalog').innerHTML += html;
    counter++;

    // Reading added File
    readFile();
}

const btn = document.getElementById('addProduct');
btn.addEventListener('click', addNewProduct);

/* ==== end. ==== */


// Function that reads and show the file in the card
const readFile = () => {
    const inputs = document.querySelectorAll('[type=file]');

    inputs.forEach(input => {
        input.addEventListener('change', e => {
            let uploadedFile = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(uploadedFile);

            reader.addEventListener('load', e => {
                let imageURL = e.currentTarget.result;
                showImage(imageURL);
            });
        });
    });

}

//showing the file

const showImage = (imageLink) => {
    let img = document.getElementById(`uploadedImage-${counter - 1}`);
    let inputBoxes = document.querySelectorAll('.card__input-box');
    let label = img.nextElementSibling;

    console.log(inputBoxes);
    console.log(label);
    
    img.setAttribute('src', imageLink);
    label.style.display = 'none';
    
    inputBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            label.style.display = 'block';
    
        });
        box.addEventListener('mouseleave', () => {
            label.style.display = 'none';
        });
        
    });
}





