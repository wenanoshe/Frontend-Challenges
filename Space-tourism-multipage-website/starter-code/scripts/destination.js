const printResult = (name, imageURL, description, distance, travelDuration) => {
    const e_destinyName = document.querySelector('.destination__destination');
    const e_img = document.querySelector('.destination__img');
    const e_description = document.querySelector('.destination__description');
    const e_distance = document.getElementById('distance');
    const e_travel = document.getElementById('travel');

    e_destinyName.textContent = name;
    e_img.setAttribute('src', imageURL);
    e_description.textContent = description;
    e_distance.textContent = distance;
    e_travel.textContent = travelDuration;
}

const getDestination = async(clickedElement) => {
    const request = await fetch('data.json');
    const result = await request.json();
    const destinations = result.destinations;

    destinations.filter(destiny => {
        if(destiny.name == clickedElement) {
            printResult(destiny.name, destiny.images.webp, destiny.description, destiny.distance, destiny.travel);
        }
    });

    decorateActivePage();
}

const decorateActivePage = () => {
    let destinyTitle = document.querySelector('.destination__destination');
    
    for (const child of ul.children) {
        if(child.children[0].classList.contains('active-link')) {
            child.children[0].classList.remove('active-link');
        } else {
            switch (destinyTitle.textContent) {
                case 'Moon':
                    ul.children[0].children[0].classList.add('active-link');
                    break;
                case 'Mars':
                    ul.children[1].children[0].classList.add('active-link');
                    break;
            
                case 'Europa': 
                    ul.children[2].children[0].classList.add('active-link');
                    break;
            
                case 'Titan': 
                    ul.children[3].children[0].classList.add('active-link');
                    break;
            
                default:
                    console.log('error');
                    break;
            }
        }
    }
    
    
}


const ul = document.querySelector('.destination__ul');

let previousTargetedElement;
ul.addEventListener('click', (e) => {
    previousTargetedElement = e.target;
    getDestination(e.target.name);
});

decorateActivePage();




