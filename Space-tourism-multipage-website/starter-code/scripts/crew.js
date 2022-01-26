const printResult = (name, role, imageURL, description,) => {
    const e_name = document.getElementById('name');
    const e_role = document.getElementById('role');
    const e_img = document.querySelector('.crew__img');
    const e_description = document.querySelector('.crew__characterDescription');

    e_name.textContent = name;
    e_role.textContent = role;
    e_img.setAttribute('src', imageURL);
    e_description.textContent = description;
}

const getDestination = async(clickedElement) => {
    const request = await fetch('data.json');
    const result = await request.json();
    const crew = result.crew;

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
        dot.classList.remove('active-dot');
    }
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
        getDestination(e.target);
    });    
}


