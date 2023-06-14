const printResult = (techName, imageURL, description) => {
    /* This functions recives for parameters the values inside each element in the html file */
    // Getting the elements by class and ids
    const e_techName = document.getElementById('techTitle');
    const e_img = document.querySelector('.technology__img');
    const e_description = document.querySelector('.technology__description');
    
    // Asign their values
    e_techName.textContent = techName;
    e_img.setAttribute('src', imageURL);
    e_description.textContent = description;
}

const getTech = async(clickedElement) => {
    /* This function make the request and  extract the technology object*/
    const request = await fetch('data.json');
    const result = await request.json();
    const technology = result.technology;
    console.log(technology);
    
    /* With the filter method, I filter the crew Array if the find
    coincidence with the name of the clicked element
    */
    technology.filter(tech => {
        console.log(tech.name);
        if(tech.name == clickedElement.name) {
            printResult(tech.name, tech.images.portrait, tech.description);
        }
    });
    
    decorateActivePage(clickedElement);
}

const decorateActivePage = (targetElement) => {
    const techTitle = document.getElementById('techTitle').textContent;
    
    for (const btn of btns) {
        // With this forof I remove the active state of the current dot
        btn.classList.remove('active-btn');
    }
    /* This switch evaluates the value of the current printend info and 
        according to that give the active state of their corresponding dot.
    */
    switch (techTitle) {
        case 'Launch vehicle':
        targetElement.classList.add('active-btn');
        break;
        case 'Spaceport':
        targetElement.classList.add('active-btn');
        break;
        
        case 'Space capsule': 
        targetElement.classList.add('active-btn');
        break;
        
        default:
        console.error('error: loco, no coincide');
        break;
    }
}


const btns = document.querySelectorAll('.technology__btn');


for (const btn of btns) {
    btn.addEventListener('click', (e) => {
        getTech(e.target);
    });    
}


