document.querySelectorAll('article h3').forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const reponse = question.nextElementSibling;
        if (reponse.style.display === 'block') {
            reponse.style.display = 'none';
        } else {
            reponse.style.display = 'block';
        }
    });
});
