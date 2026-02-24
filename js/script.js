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

// 2. Creo una funzione che crei le card e le aggiunga al card container
function createCards (name, role, email, image) {

    // 2.1. Creo il contenitore della singola card
    let card = document.createElement('div');
    card.classList.add('col-12', 'col-md-6', 'col-xl-4', 'py-2', 'm-0')

    // 2.2 Creo il contenitore del contenuto della card
    let cardContent = document.createElement('div');
    cardContent.classList.add('row', 'mx-1', 'align-items-center', 'card-display')

    // 2.3 Metto l'immagine nel contenuto della card
    const memberImage = document.createElement('img');
    memberImage.src = image;
    memberImage.classList.add('col-4', 'p-0', 'img-dim');
    cardContent.appendChild(memberImage);

    // 2.4 Creo il contenitore delle informazioni della card
    let memberInfo = document.createElement('div');
    memberInfo.classList.add('col-8', 'px-3')

    // 2.5 Metto nome, ruolo e email nel contenuto delle informazioni
    const memberName = document.createElement('h3');
    memberName.append(name.toUpperCase());
    memberName.classList.add('mb-1');
    memberInfo.appendChild(memberName);

    const memberRole = document.createElement('p');
    memberRole.append(role);
    memberRole.classList.add('mb-2');
    memberInfo.appendChild(memberRole);

    const memberEmail = document.createElement('p');
    memberEmail.append(email);
    memberEmail.classList.add('text-info');
    memberInfo.appendChild(memberEmail);

    // 2.6 Metto le informazioni della card nel contenitore della card e il tutto nella card stessa
    cardContent.appendChild(memberInfo);
    card.appendChild(cardContent);

    // 2.7 Appendo la card creata al contenitore di tutte le card
    cards.appendChild(card);
}



// 3. Creo un ciclo for che scorra tutti gli elementi dell'array e richiami la funzione di creazione card per ogni elemento
for (let i = 0; i < teamMembers.length; i++) {
    const {name, role, email, img} = teamMembers[i];
    createCards(name, role, email, img);
}


// 4. Collego il form
const form = document.querySelector('form');

// 5. Creo un evento sul form che richiama la funzione di generazione card
form.addEventListener('submit', (event) => {
    event.preventDefault();

    newMemberImg = document.getElementById('inputImage').value;
    newMemberName = document.getElementById('inputName').value;
    newMemberRole = document.getElementById('inputRole').value;
    newMemberEmail = document.getElementById('inputEmail').value;

    createCards(newMemberName, newMemberRole, newMemberEmail, newMemberImg);

    form.reset();
})