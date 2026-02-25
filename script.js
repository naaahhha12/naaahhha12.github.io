// Dark / Light Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggleBtn.textContent = document.body.classList.contains('light') ? '🌙' : '🌞';
});

// Animate Sections & Skills
const sections = document.querySelectorAll('section');
const skills = document.querySelectorAll('.skill-progress');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 1.2;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom){
            section.classList.add('active');
        }
    });
    skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        if(skillTop < triggerBottom){
            skill.style.width = skill.getAttribute('data-progress');
        }
    });
});

// Projects Filtering
const filterBtns = document.querySelectorAll('.filter-btns button');
const projects = document.querySelectorAll('.projects-grid .card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        projects.forEach(project => {
            if(filter === 'all' || project.getAttribute('data-type') === filter){
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});