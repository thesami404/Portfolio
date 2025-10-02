// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.padding = '10px 0';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.padding = '20px 0';
    }
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent successfully. I will contact you soon.');
    this.reset();
});

// View Project buttons - Updated for new portfolio structure
document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', function(e) {
        const projectUrl = this.getAttribute('href');
        window.location.href = projectUrl;
    });


});
// Photography Section Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Lightbox elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCategory = document.getElementById('lightboxCategory');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    // Photo items
    const photoItems = document.querySelectorAll('.photo-item');
    let currentIndex = 0;
    
    // Photo data
    const photos = [
        {
            src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1275&q=80",
            title: "প্রকৃতির অম্লান সৌন্দর্য",
            category: "Nature Photography"
        },
        {
            src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            title: "শহুরে জীবনের ছন্দ",
            category: "Urban Photography"
        },
        {
            src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1290&q=80",
            title: "মানুষের গল্প",
            category: "Portrait Photography"
        }
    ];
    
    // Open lightbox
    function openLightbox(index) {
        currentIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Update lightbox content
    function updateLightbox() {
        const photo = photos[currentIndex];
        lightboxImg.src = photo.src;
        lightboxTitle.textContent = photo.title;
        lightboxCategory.textContent = photo.category;
    }
    
    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Navigate to next photo
    function nextPhoto() {
        currentIndex = (currentIndex + 1) % photos.length;
        updateLightbox();
    }
    
    // Navigate to previous photo
    function prevPhoto() {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        updateLightbox();
    }
    
    // Event listeners for photo items
    photoItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });
    
    // Event listeners for lightbox controls
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', nextPhoto);
    lightboxPrev.addEventListener('click', prevPhoto);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                prevPhoto();
                break;
            case 'ArrowRight':
                nextPhoto();
                break;
        }
    });
    
    // Close lightbox when clicking on backdrop
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // See More button functionality
    const seeMoreBtn = document.querySelector('.see-more .btn');
    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // You can redirect to a full photography page here
            window.location.href = './photography.html';
        });
    }
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe photo items for animation
    photoItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});



// Skills Progress Bar Animation
function animateSkillBars() {
    const skillProgresses = document.querySelectorAll('.skill-main-progress');
    
    skillProgresses.forEach(progress => {
        const width = progress.getAttribute('data-width');
        progress.style.width = width;
    });
}

// Initialize skill bars when section comes into view
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

// Observe skills section
const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease forwards';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe elements for animation - Updated to include all elements
document.querySelectorAll('.portfolio-item, .timeline-item, .photo-item, .skill-main-category, .skills-tags-container, .about-image, .about-text, .stat-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

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

// Add loading animation for better user experience
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});


// Stats Counter Animation with suffix included
function animateStats() {
    const statItems = document.querySelectorAll('.stat-item');
    
    statItems.forEach(statItem => {
        const statNumber = statItem.querySelector('.stat-number');
        const targetCount = parseInt(statItem.getAttribute('data-count'));
        const suffix = statItem.getAttribute('data-suffix');
        const duration = 2000; // 2 seconds
        const step = targetCount / (duration / 16); // 60fps
        let currentCount = 0;
        
        const counter = setInterval(() => {
            currentCount += step;
            if (currentCount >= targetCount) {
                currentCount = targetCount;
                clearInterval(counter);
                // Final value with suffix
                statNumber.textContent = Math.floor(currentCount) + suffix;
            } else {
                // Intermediate value with suffix
                statNumber.textContent = Math.floor(currentCount) + suffix;
            }
        }, 16);
        
        // Add animation class
        statNumber.classList.add('animated');
    });
}

// Stats Counter Animation with suffix included
function animateStats() {
    const statItems = document.querySelectorAll('.stat-item');
    
    statItems.forEach(statItem => {
        const statNumber = statItem.querySelector('.stat-number');
        const targetCount = parseInt(statItem.getAttribute('data-count'));
        const suffix = statItem.getAttribute('data-suffix');
        const duration = 2000; // 2 seconds
        const step = targetCount / (duration / 16); // 60fps
        let currentCount = 0;
        
        const counter = setInterval(() => {
            currentCount += step;
            if (currentCount >= targetCount) {
                currentCount = targetCount;
                clearInterval(counter);
                // Final value with suffix
                statNumber.textContent = Math.floor(currentCount) + suffix;
            } else {
                // Intermediate value with suffix
                statNumber.textContent = Math.floor(currentCount) + suffix;
            }
        }, 16);
        
        // Add animation class
        statNumber.classList.add('animated');
    });
}

// Initialize stats animation when section comes into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe stats section
const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}


// Initialize on load and scroll
window.addEventListener('load', setActiveNavLink);
window.addEventListener('scroll', setActiveNavLink);

// Logo click animation
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add click animation
        const logoIcon = this.querySelector('.logo-icon');
        logoIcon.style.animation = 'none';
        
        setTimeout(() => {
            logoIcon.style.animation = 'logoJump 3s ease-in-out infinite, logoPulse 3s ease-in-out infinite';
        }, 10);
        
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}