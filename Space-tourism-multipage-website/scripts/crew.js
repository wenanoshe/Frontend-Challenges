const printResult = (name, role, imageURL, description) => {
    /* This functions recives for parameters the values inside each element in the html file */
    // Getting the elements by class and ids
    const e_name = document.getElementById('name');
    const e_role = document.getElementById('role');
    const e_img = document.querySelector('.crew__img');
    const e_description = document.querySelector('.crew__characterDescription');
    
    // Asign their values
    e_name.textContent = name;
    e_role.textContent = role;
    e_img.setAttribute('src', imageURL);
    e_description.textContent = description;
}

const getCrew = async(clickedElement) => {
    /* This function make the request and  extract the Crew object*/
    const request = await fetch('data.json');
    const result = await request.json();
    const crew = result.crew;
    
    /* With the filter method, I filter the crew Array if the find
    coincidence with the name of the clicked element
    */
    crew.filter(crewMember => {
        if(crewMember.name == clickedElement.name) {
            printResult(crewMember.name, crewMember.role, crewMember.images.webp, crewMember.bio);
        }
    });
    
    decorateActivePage(clickedElement);
}

const decorateActivePage = (targetElement) => {
    const crewMemberName = document.getElementById('name').textContent;
    
    for (const dot of nav.children) {
        // With this forof I remove the active state of the current dot
        dot.classList.remove('active-dot');
    }
    /* This switch evaluates the value of the current printend info and 
        according to that give the active state of their corresponding dot.
    */
    switch (crewMemberName) {
        case 'Douglas Hurley':
        targetElement.classList.add('active-dot');
        break;
        case 'Mark Shuttleworth':
        targetElement.classList.add('active-dot');
        break;
        
        case 'Victor Glover': 
        targetElement.classList.add('active-dot');
        break;
        
        case 'Anousheh Ansari': 
        targetElement.classList.add('active-dot');
        break;
        
        default:
        console.error('error: loco, no coincide');
        break;
    }
}


const nav = document.querySelector('.crew__changer');

for (const dot of nav.children) {
    dot.addEventListener('click', (e) => {
        getCrew(e.target);
    });    
}


