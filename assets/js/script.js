// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }));
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    document.querySelectorAll('section, .feature-card, .demo-card, .team-member').forEach(el => {
        observer.observe(el);
    });
});

// Add interactivity to team member avatars
document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');
    const memberNames = ['MS', 'AG', 'DC', 'AV']; // Initials for each team member
    
    teamMembers.forEach((member, index) => {
        const avatar = member.querySelector('.member-avatar');
        if (avatar && memberNames[index]) {
            avatar.textContent = memberNames[index];
        }
    });
});

// Add dynamic color changes to the biosensor demo
document.addEventListener('DOMContentLoaded', function() {
    const sensorChip = document.querySelector('.sensor-chip');
    if (sensorChip) {
        const colors = [
            'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)', // Orange
            'linear-gradient(135deg, #ec4899 0%, #be185d 100%)', // Magenta
            'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'  // Blue
        ];
        
        let currentColor = 0;
        setInterval(() => {
            currentColor = (currentColor + 1) % colors.length;
            sensorChip.style.background = colors[currentColor];
        }, 3000);
    }
});

// Add copy to clipboard functionality for citation
function addCitationCopyFunctionality() {
    const citationText = `Soudi, M., Torres-Palencia, Á.D., Beech, C., Cencillo-Abad, P., Mehta, F., Ahsaei, A.G., Chanda, I., Mastranzo-Ortega, P., Sanchez-Mondragón, J., Vázquez-Guardado, A. and Chanda, D. Smartphone-based Immune Response Measurement using Colorimetric Self-Assembled Plasmonic Biosensor.`;
    
    // You can add a citation button if needed
    if (navigator.clipboard) {
        console.log('Citation ready for copying:', citationText);
    }
}

addCitationCopyFunctionality();
