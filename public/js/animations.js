// Konfeti animasyonu
function launchConfetti() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        }));
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        }));
    }, 250);
}

// Sayfa yüklendiğinde konfeti başlat
window.addEventListener('load', () => {
    setTimeout(launchConfetti, 1000);
});

// Kalp animasyonları
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    
    const container = document.createElement('div');
    container.className = 'floating-hearts';
    container.appendChild(heart);
    document.body.appendChild(container);
    
    setTimeout(() => {
        container.remove();
    }, 6000);
}

// Her 2 saniyede bir kalp oluştur
setInterval(createFloatingHeart, 2000);

// Parıldama efektleri
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.animationDelay = Math.random() * 3 + 's';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 3000);
}

// Parıldamaları oluştur
setInterval(createSparkle, 500);

// Yaş numarası animasyonu
document.addEventListener('DOMContentLoaded', () => {
    const ageNumber = document.querySelector('.age-number');
    if (ageNumber) {
        ageNumber.addEventListener('click', () => {
            ageNumber.style.transform = 'rotate(-5deg) scale(1.2)';
            setTimeout(() => {
                ageNumber.style.transform = 'rotate(-5deg) scale(1)';
            }, 300);
            launchConfetti();
        });
    }
});

// Smooth scrolling
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

// Navbar scroll efekti
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 107, 107, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)';
        navbar.style.backdropFilter = 'none';
    }
});

// Feature card animasyonları
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

// Feature kartlarını gözlemle
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});

// Doğum günü mesajı animasyonu
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Interaktif elementler
document.addEventListener('DOMContentLoaded', () => {
    // Buton hover efektleri
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Feature kart hover efektleri
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(10deg)';
                icon.style.transition = 'all 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
});

// Klavye etkileşimleri
document.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
        launchConfetti();
    }
});

// Mouse hareketi parıldama efekti
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.98) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.width = '4px';
        sparkle.style.height = '4px';
        sparkle.style.background = 'white';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';
        sparkle.style.animation = 'sparkle 1s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
});
