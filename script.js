// Dark / Light Mode Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
});

// Skills Animation
const skills = document.querySelectorAll('.skill-progress');
window.addEventListener('scroll', () => {
    skills.forEach(skill => {
        const rect = skill.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50){
            skill.style.width = skill.getAttribute('data-progress');
        }
    });
});

// Section Scroll Animation
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50){
            section.classList.add('active');
        }
    });
});

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btns button');
const cards = document.querySelectorAll('.projects-grid .card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-filter');
        cards.forEach(card => {
            if(type === 'all' || card.getAttribute('data-type') === type){
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
