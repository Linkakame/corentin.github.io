document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            const navLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Animation des lignes de code uniquement pour la section "Accueil"
    const codeLines = [
        "const welcomeMessage = 'Bienvenue sur mon portfolio de';",
        "console.log(welcomeMessage);",
        "function animateCode() {",
        "  // Animation du code",
        "}"
    ];
    let index = 0;
    const codeElement = document.createElement('p');
    codeElement.style.whiteSpace = 'pre-wrap';
    document.querySelector('#section1 #centeranime').appendChild(codeElement);

    function displayCode() {
        if (index < codeLines.length) {
            codeElement.innerHTML += codeLines[index] + '\n';
            index++;
            setTimeout(displayCode, 1000);
        }
    }

    displayCode();
});
    const projects = {
        'html-css-js': [
            { title: "Projet HTML/CSS/JS 1", link: "projet/html-css-js/compte_rendu1.pdf" },
            { title: "Projet HTML/CSS/JS 2", link: "projet/html-css-js/compte_rendu2.pdf" },
        ],
        'python':[
            { title: "Projet python ", link: "projet/python/compte_rendu1.pdf" },
        ]
    };
    function filterProjects(lang) {
        const projectsContainer = document.getElementById('projects');
        projectsContainer.innerHTML = ''; // Clear previous projects
    
        projects[lang].forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project', 'active');
            projectElement.innerHTML = `
                <h4>${project.title}</h4>
                <a href="${project.link}" target="_blank">Voir le compte rendu</a>
            `;
            projectsContainer.appendChild(projectElement);
        });
    }
    function scrollCarousel(direction) {
        const projectsContainer = document.querySelector('.carousel');
        const projects = document.querySelectorAll('.carousel .project');
        const projectWidth = projects[0].offsetWidth + 20; // 20px margin
    
        currentIndex += direction;
    
        if (currentIndex < 0) {
            currentIndex = 0;
        } else if (currentIndex >= projects.length) {
            currentIndex = projects.length - 1;
        }
    
        projectsContainer.style.transform = `translateX(-${currentIndex * projectWidth}px)`;
    }
    
window.filterProjects = filterProjects;
window.scrollCarousel = scrollCarousel;
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.modal .close');

    // Détails des compétences
    const competenceDetails = {
        "HTML5.png": { title: "HTML5", description: " creation d' un site vitrine, creation d un menu" },
        "css.png": { title: "CSS", description: "CSS permet de styliser les pages web en définissant leur apparence visuelle." },
        "JavaScript.png": { title: "JavaScript", description: "JavaScript est un langage de programmation qui ajoute de l'interactivité et de la dynamique aux pages web." },
        "java.png": { title: "Java", description: "Java est un langage de programmation orienté objet utilisé pour développer des applications multiplateformes." },
        "python.png": { title: "Python", description: "Python est un langage de programmation polyvalent connu pour sa simplicité et sa lisibilité." },
        "flutter.png": { title: "Flutter", description: "Flutter est un framework pour créer des applications multiplateformes avec une interface utilisateur moderne." },
        "kotlin.png": { title: "Kotlin", description: "Kotlin est un langage moderne et concis principalement utilisé pour le développement Android." },
        "nosql.png": { title: "NoSQL", description: "NoSQL désigne une famille de bases de données non relationnelles adaptées aux grandes quantités de données." },
        "sql.png": { title: "SQL", description: "SQL est un langage standard utilisé pour gérer et interroger des bases de données relationnelles." },
        "trello.png": { title: "Trello", description: "Trello est un outil de gestion de projet basé sur une interface Kanban intuitive." },
        "github.png": { title: "GitHub", description: "GitHub est une plateforme pour héberger, gérer et collaborer sur du code source." }
    };

    // Ajouter des événements de clic sur les images
    document.querySelectorAll('#competence img').forEach(img => {
        img.addEventListener('click', () => {
            const imgName = img.src.split('/').pop(); // Récupère le nom du fichier image
            const details = competenceDetails[imgName];
            if (details) {
                modalTitle.textContent = details.title;
                modalDescription.textContent = details.description;
                modal.style.display = 'block';
            }
        });
    });

    // Fermer la modale
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fermer la modale en cliquant en dehors
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
