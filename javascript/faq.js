const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(i => {
            if (i !== item) i.classList.remove('active');
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});