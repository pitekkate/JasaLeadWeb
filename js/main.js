// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('show');
});

// Form Submission Handling
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    // Show success message
    alert(`Terima kasih ${name}! Tim kami akan segera menghubungi Anda via WhatsApp dalam 5 menit.`);
    
    // Reset form
    this.reset();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update active nav link
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
            
            // Close mobile menu if open
            document.getElementById('navMenu').classList.remove('show');
        }
    });
});