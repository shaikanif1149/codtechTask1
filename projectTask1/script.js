// Random projects for each skill
const projectsData = {
    "JavaScript": [
        { title: "Task Manager", description: "A dynamic to-do list application to manage tasks with different priorities." },
        { title: "Weather App", description: "A weather forecast app fetching data from an API to display current conditions." }
    ],
    "HTML & CSS": [
        { title: "Personal Portfolio", description: "A personal website showcasing projects, skills, and contact info." },
        { title: "Responsive Landing Page", description: "A responsive landing page with a smooth scrolling effect." }
    ],
    "React": [
        { title: "Blog Application", description: "A full-stack blog application built using React, Node.js, and MongoDB." },
        { title: "E-commerce Platform", description: "An e-commerce platform built with React, Redux, and Firebase." }
    ],
    "Node.js": [
        { title: "Chat App", description: "A real-time chat application with WebSocket integration using Node.js." },
        { title: "REST API", description: "A RESTful API for managing a library of books with Node.js and Express." }
    ],
    "SQL": [
        { title: "Database Management System", description: "A CRUD-based system to manage users, including storing and retrieving data using SQL." },
        { title: "Inventory System", description: "An inventory management system for tracking stock, using SQL for storage." }
    ]
};

// Function to render random projects for each skill
function displayProjects() {
    const projectCardsContainer = document.getElementById('project-cards');
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(skillItem => {
        const skillName = skillItem.textContent;
        const projects = projectsData[skillName] || [];

        if (projects.length > 0) {
            projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
                projectCard.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                `;
                projectCardsContainer.appendChild(projectCard);
            });
        }
    });
}

// Wait for the DOM to load before calling the function
document.addEventListener('DOMContentLoaded', displayProjects);
