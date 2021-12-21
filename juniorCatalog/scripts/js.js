/* inserting new card */
const cardsContainer = document.getElementById('cardsContainer');
const newCardBtn = document.getElementById('newCardBtn');

function createCard() {
    const cardTemplate = `
        <div class="main__card">
            <div class="main__imgBox">
                    <label class="main__label main__edit" for="input"><i class="far fa-edit"></i></label>
                    <input class="main__input" id="input" type="file" name="upload an image" accept="image/png, image/webp, image/jpeg">
                    <img class="main__img">
            </div>
            <div class="main__info">
                <button class="main__txt main__title" >Set a name</button>
                <button class="main__txt main__price" >$00.00</button>
                <button class="main__txt main__productDescription">Here goes a product description, only click here.</button>
            </div>
        </div>
    `;

    cardsContainer.innerHTML += cardTemplate;


    const information = document.querySelectorAll('.main__info');

    information.forEach(c => {
        /* content editable */
        for (let itemInfo of c.children) {
            itemInfo.addEventListener('focus', (e) => {
                e.target.setAttribute('contenteditable', true);
            });
            itemInfo.addEventListener('blur', (e) => {
                e.target.setAttribute('contenteditable', false);
            });
        }
    });



    //this is for show the edit button
    // const editBtns = document.querySelectorAll('.main__edit');
    // const imageBox = document.querySelectorAll('.main__imgBox');

    // for (let ibox of imageBox) {
    //     ibox.addEventListener('mouseover', (e) => {
    //         let icon = e.target.children[0];
    //         icon.classList.add('main__edit-show');
    //         console.count();
    //         e.stopPropagation();
    //     });

    //     ibox.addEventListener('mouseout', (e) => {
    //         let icon = e.target.children[0];
    //         icon.classList.remove('main__edit-show');
    //         console.countReset();
    //         e.stopPropagation();
    //     });
    // }

    /* INSERTING THE IMAGE */
    const inputs = document.querySelectorAll('.main__input');
    const img = document.querySelectorAll('.main__img');

    // for (let input of inputs) {
    //     input.addEventListener('change', (e) => {
    //         let file = input.files[0];
    //         let fileReader = new FileReader();
    //         fileReader.readAsDataURL(file);
    //         fileReader.onload = () => {
    //             for (let i of img) {
    //                 i.setAttribute('src', fileReader.result);
    //                 i.classList.add('main__img-size');
    //                 console.log(i);
    //             }
    //         };
    //     });
    // }

    cardsContainer.addEventListener('change', (e) => console.log(e.target.parentElement));


}

newCardBtn.addEventListener('click', createCard);
