function generateBackgroundPins() {
            const container = document.getElementById('backgroundPins');
            const pinCount = 50;
            for (let i = 0; i < pinCount; i++) {
                const pin = document.createElement('div');
                pin.className = 'pin';
                pin.style.left = Math.random() * 100 + '%';
                pin.style.top = Math.random() * 100 + '%';
                pin.style.animationDelay = Math.random() * 2 + 's';
                container.appendChild(pin);
            }
        }
        function startCountdown() {
            let hours = 0;
            let minutes = 8;
            let seconds = 37;
            const countdownElement = document.getElementById('countdown');
            function updateCountdown() {
                const formattedHours = hours.toString().padStart(2, '0');
                const formattedMinutes = minutes.toString().padStart(2, '0');
                const formattedSeconds = seconds.toString().padStart(2, '0');
                countdownElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else {
                    countdownElement.textContent = "00:00:00";
                    clearInterval(countdownInterval);
                    alert("Class is starting now!");
                    return;
                }
            }
            updateCountdown();
            const countdownInterval = setInterval(updateCountdown, 1000);
        }
        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            if (name && email) {
                alert(`Thank you ${name}! We've registered you for the free training. Check your email at ${email} for details.`);
            }
        });
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
        document.addEventListener('DOMContentLoaded', function() {
            generateBackgroundPins();
            startCountdown();
        });
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: rotate(-45deg) translateY(0px); }
                50% { transform: rotate(-45deg) translateY(-10px); }
            }
            .pin {
                animation: float 3s ease-in-out infinite;
            }
        `;
        document.head.appendChild(style);
        const burgerMenu = document.getElementById('burgerMenu');
        const mobileNav = document.getElementById('mobileNav');
        const overlay = document.getElementById('overlay');
        function toggleMenu() {
            burgerMenu.classList.toggle('active');
            mobileNav.classList.toggle('active');
            overlay.classList.toggle('active');
            const bars = burgerMenu.querySelectorAll('.burger-bar');
            if (mobileNav.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        }
        burgerMenu.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
        document.querySelectorAll('.mobile-nav-links a').forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
         document.addEventListener('DOMContentLoaded', function() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            document.querySelectorAll('.benefit-card').forEach(card => {
                observer.observe(card);
            });
            document.querySelectorAll('.benefit-card').forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px) scale(1.02)';
                });
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
            document.querySelectorAll('.benefit-card').forEach((card, index) => {
                card.addEventListener('click', function() {
                    console.log(`Benefit card ${index + 1} clicked`);
                });
            });
        });
        function handleCTAClick() {
            const button = document.querySelector('.cta-button');
            const originalText = button.textContent;
            button.textContent = 'LOADING...';
            button.disabled = true;
            button.style.opacity = '0.7';
            setTimeout(() => {
                alert('Thank you for your interest! You will be redirected to the training registration.');
                button.textContent = originalText;
                button.disabled = false;
                button.style.opacity = '1';
            }, 1500);
            console.log('CTA button clicked - Training access requested');
        }
        function updateUrgencyText() {
            const urgencyElement = document.querySelector('.urgency-text');
            const now = new Date();
            const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
            const timeLeft = endOfDay - now;
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            if (timeLeft > 0) {
                urgencyElement.textContent = `Hurry up, only ${hours}h ${minutes}m left for today's free training!`;
            }
        }
        updateUrgencyText();
        setInterval(updateUrgencyText, 60000);
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && e.target.classList.contains('cta-button')) {
                handleCTAClick();
            }
        });
         function handleTrainingSignup() {
            const button = document.querySelector('.action-btn');
            const originalText = button.textContent;
            button.textContent = 'Joining...';
            button.disabled = true;
            button.style.opacity = '0.7';
            setTimeout(() => {
                alert('Welcome to the training! You will receive an email with further instructions.');
                button.textContent = originalText;
                button.disabled = false;
                button.style.opacity = '1';
                console.log('User joined training - Loan payback program');
            }, 1500);
        }
        document.addEventListener('DOMContentLoaded', function() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            document.querySelectorAll('.slide-up').forEach(element => {
                observer.observe(element);
            });
            document.querySelectorAll('.feature-row').forEach((item, index) => {
                item.addEventListener('click', function() {
                    console.log(`Feature item ${index + 1} clicked`);
                });
            });
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' && e.target.classList.contains('action-btn')) {
                    handleTrainingSignup();
                }
            });
            const character = document.querySelector('.person-figure');
            let isAnimating = false;
            character.addEventListener('mouseenter', function() {
                if (!isAnimating) {
                    isAnimating = true;
                    this.style.transform = 'scale(1.05) rotate(2deg)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1) rotate(0deg)';
                        isAnimating = false;
                    }, 300);
                }
            });
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const parallax = document.querySelectorAll('.design-elements > *');
                parallax.forEach((element, index) => {
                    const speed = 0.5 + (index * 0.1);
                    element.style.transform = `translateY(${scrolled * speed}px)`;
                });
            });
        });
        function animateDecorations() {
            const elements = document.querySelectorAll('.shape-element');
            elements.forEach(element => {
                const randomX = Math.random() * 10 - 5;
                const randomY = Math.random() * 10 - 5;
                element.style.transform += ` translate(${randomX}px, ${randomY}px)`;
            });
        }
        setInterval(animateDecorations, 3000);
         document.addEventListener('DOMContentLoaded', function() {
            const footerLinks = document.querySelectorAll('.footer-link a');
            footerLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    this.style.transition = 'color 0.2s ease';
                    this.style.color = '#000';
                });
                link.addEventListener('mouseleave', function() {
                    this.style.transition = 'color 0.2s ease';
                    this.style.color = '#666';
                });
            });
            const copyrightElement = document.querySelector('.copyright');
            const currentYear = new Date().getFullYear();
            copyrightElement.textContent = `©${currentYear} Pennovate`;
            const socialLinks = document.querySelectorAll('.social-link');
            socialLinks.forEach(link => {
                link.setAttribute('role', 'button');
                link.setAttribute('tabindex', '0');
                link.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.click();
                    }
                });
            });
        });