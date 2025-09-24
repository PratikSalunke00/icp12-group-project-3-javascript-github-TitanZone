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




document.getElementById('site-year').textContent = new Date().getFullYear();


const pages = document.getElementById("pages");
let isOpen = false;

function showPages() {
  pages.style.display = "flex";
  isOpen = true;
}

function hidepages() {
  pages.style.display = "none";
  isOpen = false;
}

function toggleHamburger() {
  if (isOpen) {
    hidepages();
  } else {
    showPages();
  }
}