const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];


// 1. Collego il contenitore delle card 
const cards = document.querySelector(".cards");

// 2. Creo un ciclo for che si ripeta per tutti gli elementi dell'array
for (let i = 0; i < teamMembers.length; i++) {

    // 3. Creo il contenitore della singola card
    let card = document.createElement('div');
    card.classList.add('col-12', 'col-md-6', 'col-lg-4', 'py-2', 'm-0')

    let cardContent = document.createElement('div');
    cardContent.classList.add('row', 'mx-1', 'align-items-center', 'card-display')

    // 4. Collego l'immagine alla card
    const memberImage = document.createElement('img');
    memberImage.src = teamMembers[i].img;
    memberImage.classList.add('col-4', 'p-0', 'img-dim');
    cardContent.appendChild(memberImage);

    // 5. Collego nome, ruolo e email alla card
    let memberInfo = document.createElement('div');
    memberInfo.classList.add('col-8', 'px-3')

    const memberName = document.createElement('h3');
    memberName.append(teamMembers[i].name.toUpperCase());
    memberName.classList.add('mb-1');
    memberInfo.appendChild(memberName);

    const memberRole = document.createElement('p');
    memberRole.append(teamMembers[i].role);
    memberRole.classList.add('mb-2');
    memberInfo.appendChild(memberRole);

    const memberEmail = document.createElement('p');
    memberEmail.append(teamMembers[i].email);
    memberEmail.classList.add('text-info');
    memberInfo.appendChild(memberEmail);

    cardContent.appendChild(memberInfo);
    card.appendChild(cardContent);

    // 6. Appendo la card creata al contenitore di tutte le card
    cards.appendChild(card);
}

// 7. Collego i campi di input al form

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // 8. Creo i contenitori per ciò che inserisce l'utente 
    newMemberImg = document.getElementById('inputImage').value;
    newMemberName = document.getElementById('inputName').value;
    newMemberRole = document.getElementById('inputRole').value;
    newMemberEmail = document.getElementById('inputEmail').value;

    let card = document.createElement('div');
    card.classList.add('col-12', 'col-md-6', 'col-lg-4', 'py-2', 'm-0')

    let cardContent = document.createElement('div');
    cardContent.classList.add('row', 'mx-1', 'align-items-center', 'card-display')

    // 4. Collego l'immagine alla card
    const memberImage = document.createElement('img');
    memberImage.src = newMemberImg;
    memberImage.classList.add('col-4', 'p-0', 'img-dim');
    cardContent.appendChild(memberImage);

    // 5. Collego nome, ruolo e email alla card
    let memberInfo = document.createElement('div');
    memberInfo.classList.add('col-8', 'px-3')

    const memberName = document.createElement('h3');
    memberName.append(newMemberName.toUpperCase());
    memberName.classList.add('mb-1');
    memberInfo.appendChild(memberName);

    const memberRole = document.createElement('p');
    memberRole.append(newMemberRole);
    memberRole.classList.add('mb-2');
    memberInfo.appendChild(memberRole);

    const memberEmail = document.createElement('p');
    memberEmail.append(newMemberEmail);
    memberEmail.classList.add('text-info');
    memberInfo.appendChild(memberEmail);

    cardContent.appendChild(memberInfo);
    card.appendChild(cardContent);

    // 6. Appendo la card creata al contenitore di tutte le card
    cards.appendChild(card);

    form.reset();
})